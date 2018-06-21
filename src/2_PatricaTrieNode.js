/* eslint-disable operator-linebreak */

export class PatricaTrieNode extends PatricaTrieNodeBase
{
	constructor( Key, Parent )
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
			if ( true === Utils.isEmpty( Parent ) || false === ( Parent instanceof PatricaTrieNode ) )
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

		this._setKey( Key );
		this._setParent( Parent );
		this._Children = [];
	}

	__searchForKey( Key )
	{
		let Start, End, Middle;

		Start = 0;
		End = this._Children.length - 1;

		if ( 0 === this._Children.length || this._Children[ 0 ]._getKey().charCodeAt( 0 ) > Key )
		{
			return -1;
		}

		if ( this._Children[ End ]._getKey().charCodeAt( 0 ) < Key )
		{
			return -1;
		}

		while ( Start <= End )
		{
			Middle = ( ( Start + End ) >> 1 );

			if ( Key > this._Children[ Middle ]._getKey().charCodeAt( 0 ) )
			{
				Start = Middle + 1;
			}
			else if ( Key < this._Children[ Middle ]._getKey().charCodeAt( 0 ) )
			{
				End = Middle - 1;
			}
			else
			{
				return Middle;
			}
		}

		return -1;
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
			Found = this.__searchForKey( Key.charCodeAt( 0 ) );

			if ( -1 !== Found )
			{
				return this._Children[ Found ]._findByKey( Key, Exact );
			}
			else
			{
				return null;
			}
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
			return;
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
			Found = this.__searchForKey( LowerKey.charCodeAt( 0 ) );

			if ( -1 !== Found )
			{
				this._Children[ Found ]._findByKeyIgnoreCase( LowerKey, Exact, Return );
			}

			Found = this.__searchForKey( LowerKey.charAt( 0 ).toUpperCase().charCodeAt( 0 ) );
			if ( -1 !== Found )
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
			Found = this.__searchForKey( LowerKey.charCodeAt( 0 ) );

			if ( -1 !== Found )
			{
				Return = this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
				if ( false === Return )
				{
					Found = this.__searchForKey( LowerKey.charAt( 0 ).toUpperCase().charCodeAt( 0 ) );
					if ( -1 !== Found )
					{
						return this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
					}
				}

				return Return;
			}
			else
			{
				Found = this.__searchForKey( LowerKey.charAt( 0 ).toUpperCase().charCodeAt( 0 ) );
				if ( -1 !== Found )
				{
					return this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
				}
			}
		}

		return false;
	}

	_insertPosition( Key )
	{
		let Start, End, Middle;

		Start = 0;
		End = this._Children.length - 1;

		if ( 0 === this._Children.length || this._Children[ 0 ]._getKey().charCodeAt( 0 ) > Key )
		{
			return -1;
		}

		if ( this._Children[ End ]._getKey().charCodeAt( 0 ) < Key )
		{
			return -( this._Children.length + 1 );
		}

		while ( Start <= End )
		{
			Middle = ( ( Start + End ) >> 1 );
			if ( 'undefined' === typeof this._Children[ Middle ]._getKey() )
			{
				return -( Start + 1 );
			}

			if ( Key > this._Children[ Middle ]._getKey().charCodeAt( 0 ) )
			{
				Start = Middle + 1;
			}
			else if ( Key < this._Children[ Middle ]._getKey().charCodeAt( 0 ) )
			{
				End = Middle - 1;
			}
			else
			{
				return Middle;
			}
		}

		return -( Start + 1 );
	}

	_insertIntoChild( Key )
	{
		const Index = this._insertPosition( Key.charCodeAt( 0 ) );

		if ( -1 < Index )
		{
			this._Children[ Index ].insert( Key );
			return;
		}

		this._Children.splice( -( Index + 1 ), 0, new PatricaTrieNode( Key, this ) );
	}

	insert( Key )
	{
		let Common, NewKey, NewChild, NewChild2;

		const NewKeyLength = Key.length;
		const CurrentKeyLength = this._getKey().length;
		let PrefixLength;

		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return;
		}
		// eslint-disable-next-line
        PrefixLength = this._longestPrefix(Key);

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
				this._insertIntoChild( NewKey );
			}
			else if ( PrefixLength === NewKeyLength )
			{
				NewChild = new PatricaTrieNode(
					this._getKey().substring( PrefixLength ),
					this,
				);

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					this._IsEnding = true;
					NewChild.unsetEnd();
				}
				this._setKey( this._getKey().substring( 0, PrefixLength ) );
				this._Children = [ NewChild ];
			}
			else
			{
				Common = this._getKey().substring( 0, PrefixLength );
				NewChild = new PatricaTrieNode(
					this._getKey().substring( PrefixLength ),
					this
				);

				NewChild2 = new PatricaTrieNode(
					Key.substring( PrefixLength ),
					this
				);

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					NewChild.unsetEnd();
				}

				this._IsEnding = false;
				this._setKey( Common );

				if ( NewChild._getKey().charCodeAt( 0 ) < NewChild2._getKey().charCodeAt( 0 ) )
				{
					this._Children = [ NewChild, NewChild2 ];
				}
				else
				{
					this._Children = [ NewChild2, NewChild ];
				}
			}
		}
	}

	_removeFromTrie()
	{
		this._getParent()._clean( this._getKey().charCodeAt( 0 ) );
	}

	_clean( Key )
	{
		const Index = this.__searchForKey( Key );
		if ( -1 === Index )
		{
			return;
		}

		this._Children.splice( Index, 1 );

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
			this._Children.pop();
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
		this._Children = [];
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
			this._Children[ Child ]._serialize( Output );
		}

		Output.push( ']' );
	}

	_fromString( Nodes, Position )
	{
		let ImportNode, InsertPosition;

		while ( Nodes.length > Position )
		{
			ImportNode = PatricaTrieNode._loadFromString( Nodes, Position, this );
			Position = ImportNode[ 0 ];
			InsertPosition = this._insertPosition( ImportNode[ 1 ]._getKey().charCodeAt( 0 ) );
			if ( -1 >= InsertPosition )
			{
				this._Children.splice( -( InsertPosition + 1 ), 0, ImportNode[ 1 ] );
			}

			if ( ']' === Nodes.charAt( Position ) )
			{
				return ( ++Position );
			}
		}

		throw new ValueErrorException( `Unexpected end of string @position ${ Position }.` );
	}

	static _loadFromString( NodeString, Position, Parent )
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
		Node = new PatricaTrieNode( Key, Parent );
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
