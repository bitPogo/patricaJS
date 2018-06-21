/* eslint-disable operator-linebreak */
export class PatricaStaticTrieNode extends PatricaTrieNodeBase
{
	__Size;
	__Normalizer;

	constructor( Key, Parent, Size, Normalizer )
	{
		let IsRoot = false;
		super();
		if (
			'undefined' === typeof Key
		&&
			'undefined' === typeof Parent
		)
		{
			IsRoot = true;
		}

		this._IsRoot = IsRoot;

		if ( false === IsRoot )
		{
			if ( true === Utils.isEmpty( Parent ) || false === ( Parent instanceof PatricaStaticTrieNode ) )
			{
				throw new TypeErrorException( 'Expected a PatricaTrieNode as Parent.' );
			}

			if ( 'string' !== typeof Key || true === Utils.isEmpty( Key ) )
			{
				throw new TypeErrorException( 'Expected non empty key.' );
			}

			this._IsEnding = true;
		}
		else
		{
			this._IsEnding = false;
		}

		if ( 'function' !== typeof Normalizer )
		{
			throw new TypeErrorException( 'Expected function for normalizing.' );
		}

		if ( 0 >= Size )
		{
			throw new ValueErrorException( 'Expected size greater then zero.' );
		}

		this._setKey( Key );
		this._setParent( Parent );
		this._Children = new Array( Size );
		this._Children.fill( null );
		this.__Size = Size;
	}

	getSize()
	{
		return this.__Size;
	}

	_findByKey( Key, Exact )
	{
		let Found;
		if ( 0 === Key.length )
		{
			return null;
		}

		if ( true === this._getKey().startsWith( Key ) )
		{
			if ( true === Exact && Key !== this._getKey() )
			{
				return null;
			}
			else
			{
				return this;
			}
		}
		else if ( Key.startsWith( this._getKey() ) )
		{
			Key = Key.substring( this._getKey().length );
			Found = this.__Normalizer( Key.charAt( 0 ) );
			if ( 0 > Found || this.__Size <= Found )
			{
				return null;
			}

			return this._Children[ Found ]._findByKey( Key, Exact );
		}
		else
		{
			return null;
		}
	}

	_findByKeyIgnoreCase( LowerKey, Exact, Return )
	{
		let Found, CurrentKey;
		if ( 0 === LowerKey.length )
		{
			return null;
		}
		// eslint-disable-next-line
		CurrentKey = this._getKey().toLowerCase();

		if ( true === CurrentKey.startsWith( LowerKey ) )
		{
			if ( true === Exact && CurrentKey !== LowerKey )
			{
				return;
			}
			else
			{
				Return.push( this );
				return;
			}
		}
		else if ( LowerKey.startsWith( CurrentKey ) )
		{
			LowerKey = LowerKey.substring( this._getKey().length );
			Found = this.__Normalizer( LowerKey.charAt( 0 ) );

			if ( -1 < Found && this.__Size > Found )
			{
				this._Children[ Found ]._findByKeyIgnoreCase( LowerKey, Exact, Return );
			}

			Found = this.__Normalizer( LowerKey.charAt( 0 ).toUpperCase() );

			if ( -1 < Found && this.__Size > Found )
			{
				this._Children[ Found ]._findByKeyIgnoreCase( LowerKey, Exact, Return );
			}
		}
	}

	_containsKeyIgnoreCase( LowerKey, Exact = false )
	{
		let Return, Found, CurrentKey;

		if ( 0 === LowerKey.length )
		{
			return;
		}
		// eslint-disable-next-line
		CurrentKey = this._getKey().toLowerCase();

		if ( true === CurrentKey.startsWith( LowerKey ) )
		{
			if ( true === Exact && CurrentKey !== LowerKey )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		else if ( LowerKey.startsWith( CurrentKey ) )
		{
			LowerKey = LowerKey.substring( this._getKey().length );
			Found = this.__Normalizer( LowerKey.charAt( 0 ) );

			if ( -1 < Found && this.__Size > Found )
			{
				Return = this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
				if ( false === Return )
				{
					Found = this.__Normalizer( LowerKey.charAt( 0 ) );

					if ( -1 < Found && this.__Size > Found )
					{
						return this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
					}
				}

				return Return;
			}
			else
			{
				Found = this.__Normalizer( LowerKey.charAt( 0 ) );

				if ( -1 < Found && this.__Size > Found )
				{
					return this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
				}
			}
		}

		return false;
	}

	_insertIntoChild( Key )
	{
		const Index = this.__Normalizer( Key.charAt( 0 ) );

		if ( -1 < Index && this.__Size > Index )
		{
			this._Children[ Index ].insert( Key );
			return;
		}

		this._Children.splice( -( Index + 1 ), 0, new PatricaStaticTrieNode( Key, this ) );
	}

	insert( Key )
	{
		let Common, NewKey, NewChild, NewChild2, Index;

		const NewKeyLength = Key.length;
		const CurrentKeyLength = this._getKey().length;
		let PrefixLength;

		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return;
		}
		// eslint-disable-next-line
		PrefixLength = this._longestPrefix( Key );

		if (
			NewKeyLength === CurrentKeyLength
		&&
			PrefixLength === CurrentKeyLength
		)
		{
			this._IsEnding = true;
		}
		else
		{
			if ( PrefixLength === CurrentKeyLength )
			{
				NewKey = Key.substring( PrefixLength );
				return this._insertIntoChild( NewKey );
			}
			else if ( PrefixLength === NewKeyLength )
			{
				NewChild = new PatricaStaticTrieNode(
					this._getKey().substring( PrefixLength ),
					this,
					this.__Size,
					this.__Normalizer
				);

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					this._IsEnding = true;
					NewChild.unsetEnd();
				}
				this._setKey( this._getKey().substring( 0, PrefixLength ) );
				this._Children = new Array( this.__Size );

				Index = this.__Normalizer( NewChild._getKey().charAt( 0 ) );
				this._Children[ Index ] = NewChild;
			}
			else
			{
				Common = this._getKey().substring( 0, PrefixLength );
				NewChild = new PatricaStaticTrieNode(
					this._getKey().substring( PrefixLength ),
					this,
					this.__Size,
					this.__Normalizer
				);

				NewChild2 = new PatricaStaticTrieNode(
					Key.substring( PrefixLength ),
					this,
					this.__Size,
					this.__Normalizer
				);

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					NewChild.unsetEnd();
				}

				this._IsEnding = false;
				this._setKey( Common );
				this._Children = new Array( this.__Size );

				Index = this.__Normalizer( NewChild._getKey().charAt( 0 ) );
				this._Children[ Index ] = NewChild;

				Index = this.__Normalizer( NewChild2._getKey().charAt( 0 ) );
				this._Children[ Index ] = NewChild2;
			}
		}
	}

	_removeFromTrie()
	{
		this._getParent()._clean( this._getKey().charCodeAt( 0 ) );
	}

	_clean( Key )
	{
		const Index = this.__Normalizer( Key );
		if ( 0 > Index && this.__Size <= Index )
		{
			return;
		}

		this._Children[ Index ] = null;

		if ( true === this._IsRoot )
		{
			return;
		}

		if (
			0 === this._Children.length
		&&
			false === this._IsEnding
		&&
			0 < this._getKey().length
		)
		{
			this._removeFromTrie();
		}
		else if (
			1 === this._Children.length
		&&
			false === this._Children[ 0 ].hasChildren()
		&&
			false === this._IsEnding
		)
		{
			this._setKey( this._getKey() + this._Children[ 0 ]._getKey() );
			this._IsEnding = this._Children[ 0 ].isAEnd();
			this._Children[ 0 ] = null;
		}
	}

	remove( Key, Prefixed = false )
	{
		const ToDelete = this.findByKey( Key, Prefixed, true );

		if ( null === ToDelete )
		{
			return;
		}

		if ( true === ToDelete.hasChildren() )
		{
			if ( true === ToDelete.isAEnd() )
			{
				ToDelete.unsetEnd();
			}
		}
		else
		{
			ToDelete._removeFromTrie();
		}
	}

	erase()
	{
		this._Children = new Array( this.__Size );
		this._Children.fill( null );
	}

	_serialize( Output )
	{
		let Child;

		Output.push( `[${this._getKey().length}:${this._getKey()}` );
		if ( true === this._IsEnding )
		{
			Output.push( '1' );
		}
		else
		{
			Output.push( '0' );
		}

		for ( Child in this._Children )
		{
			if ( null !== this._Children[ Child ] )
			{
				this._Children[ Child ]._serialize( Output );
			}
		}

		Output.push( ']' );
	}

	_fromString( Nodes, Position, Size, Normalizer )
	{
		let ImportNode;
		const Imports = new Array( Size );

		while ( Nodes.length > Position )
		{
			ImportNode = PatricaStaticTrieNode._loadFromString( Nodes, Position, this, Size, Normalizer );
			Position = ImportNode[ 0 ];
			Imports[ Normalizer( ImportNode[ 1 ]._getKey().charAt( 0 ) ) ] = ImportNode;
			if ( ']' === Nodes.charAt( Position ) )
			{
				this._importChildren( Imports );
				return ( ++Position );
			}
		}

		throw new ValueErrorException( `Unexpected end of string @position ${ Position }.` );
	}

	static _loadFromString( NodeString, Position, Parent, Size, Normalizer )
	{
		let LastPosition, KeyLength, Key, Node;

		if ( '[' !== NodeString.charAt( Position ) )
		{
			throw new ValueErrorException( `The given string is not valid. - Exspecetd [ got ${ NodeString.charAt( Position ) } at position ${ Position }.` );
		}

		Position++;
		// eslint-disable-next-line
		LastPosition = Position;
		while ( 47 < NodeString.charCodeAt( Position ) && 58 > NodeString.charCodeAt( Position ) )
		{
			Position++;
		}

		// eslint-disable-next-line
		KeyLength = parseInt( NodeString.substring( LastPosition, ( Position ) ) );

		if ( true === isNaN( KeyLength ) || 0 === KeyLength )
		{
			throw new ValueErrorException( `Illegal key length @position ${ LastPosition }.` );
		}

		Position++;
		// eslint-disable-next-line
		Key = NodeString.substring( Position, ( Position + KeyLength ) );
		Position += KeyLength;

		// eslint-disable-next-line
		Node = new PatricaStaticTrieNode( Key, Parent, Size, Normalizer );
		if ( '0' === NodeString.charAt( Position ) )
		{
			Node.unsetEnd();
		}

		Position++;

		if ( ']' !== NodeString.charAt( Position ) )
		{
			return [ Node._fromString( NodeString, Position ), Node ];
		}
		else
		{
			return [ ( ++Position ), Node ];
		}
	}
}
