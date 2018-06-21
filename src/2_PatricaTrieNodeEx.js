/* eslint-disable operator-linebreak */
export class PatricaTrieNodeEx extends PatricaTrieNode
{
	__Value;

	constructor( Key, Value, Parent )
	{
		let IsRoot = false;
		super( Key, Parent );
		if (
			true === this._IsRoot
			&&
			'undefined' === typeof Value
		)
		{
			IsRoot = true;
		}

		this._IsRoot = IsRoot;

		if ( false === IsRoot )
		{
			this._IsEnding = true;
		}
		else
		{
			this._IsEnding = false;
		}

		if ( false === IsRoot )
		{
			this.__Value = Value;
		}
	}

	setValue( Value )
	{
		this.__Value = Value;
	}

	getValue()
	{
		return this.__Value;
	}

	_getValues( Return )
	{
		let Child;

		if ( true === this._IsEnding )
		{
			Return.push( this.__Value );
		}

		for ( Child in this._Children )
		{
			this._Children[ Child ]._getValues( Return );
		}
	}

	_getValuesFilter( Return, Filter )
	{
		let Child;

		if ( true === this._IsEnding )
		{
			if ( true === Filter( this.__Value ) )
			{
				Return.push( this.__Value );
			}
		}

		for ( Child in this._Children )
		{
			this._Children[ Child ]._getValuesFilter( Return, Filter );
		}
	}

	getValues( Filter = undefined )
	{
		const Output = [];

		if ( 'function' === typeof Filter )
		{
			this._getValuesFilter( Output, Filter );
		}
		else
		{
			this._getValues( Output );
		}

		return Output;
	}

	getKeyAndValue()
	{
		let Key;
		const Return = {};

		if ( false === this._getParent()._IsRoot )
		{
			Key = this._getParent().getKey();
		}
		else
		{
			Key = '';
		}

		Key += this._getKey();

		Return[ Key ] = this.__Value;
		return Return;
	}

	_getKeysAndValues( Key, Return )
	{
		let Index;
		Key += this._getKey();

		if ( true === this._IsEnding )
		{
			Return[ Key ] = this.__Value;
		}

		for ( Index = 0; Index < this._Children.length; Index++ )
		{
			this._Children[ Index ]._getKeysAndValues( Key, Return );
		}
	}

	_getKeysAndValuesFilter( Key, Return, Filter )
	{
		let Index;
		Key += this._getKey();

		if ( true === this._IsEnding )
		{
			if ( true === Filter( Key, this.__Value ) )
			{
				Return[ Key ] = this.__Value;
			}
		}

		for ( Index = 0; Index < this._Children.length; Index++ )
		{
			this._Children[ Index ]._getKeysAndValuesFilter( Key, Return, Filter );
		}
	}

	getKeysAndValues( Filter = undefined )
	{
		let Key;
		const Return = {};

		if ( false === this._getParent()._IsRoot )
		{
			Key = this._getParent().getKey();
		}
		else
		{
			Key = '';
		}

		if ( 'function' === typeof Filter )
		{
			this._getKeysAndValuesFilter( Key, Return, Filter );
		}
		else
		{
			this._getKeysAndValues( Key, Return );
		}

		return Return;
	}

	findByKeyIgnoreCase( Key, Prefixed = false, Exact = false )
	{
		let RootKeyLength;
		const Nodes = [];

		if (
			'string' !== typeof Key
		||
			0 === Key.length
		)
		{
			return null;
		}

		if ( true === Prefixed )
		{
			if ( false === this.__Parent._IsRoot )
			{
				RootKeyLength = this.__Parent.getKey().length;
				Key = Key.substring( RootKeyLength );
			}
		}

		this._findByKeyIgnoreCase( Key.toLowerCase(), Exact, Nodes );
		return new PatricaTrieCollectionEx( Nodes );
	}

	findByValue( Comparer, DepthFirst = false, StartKey = undefined, EndKey = undefined )
	{
		let Index, Found;
		let NewStart = '';
		let NewEnd = '';
		let Start = 0;
		let End = this._Children.length;

		if ( 'function' !== typeof Comparer.compare )
		{
			throw new TypeErrorException( 'Expected compare function of Compare object.' );
		}

		if ( 'string' === typeof StartKey )
		{
			Start = this.__searchForKey( StartKey.charCodeAt( 0 ) );
			NewStart = StartKey.substring( 1 );
		}

		if ( 'string' === typeof EndKey )
		{
			End = this.__searchForKey( EndKey.charCodeAt( 0 ) );
			NewEnd = EndKey.substring( 1 );
		}

		if ( -1 === Start && -1 === End )
		{
			return null;
		}

		if ( Start > End )
		{
			return null;
		}

		if ( true === this._IsEnding && false === DepthFirst )
		{
			if ( true === Comparer.compare( this.__Value ) )
			{
				return this;
			}
		}

		if ( 0 < NewStart.length )
		{
			if ( Start === End )
			{
				Found = this._Children[ Start ].findByValue( Comparer, DepthFirst, NewStart, NewEnd );
			}
			else
			{
				Found = this._Children[ Start ].findByValue( Comparer, DepthFirst, NewStart );
			}

			if ( null !== Found )
			{
				return Found;
			}
		}

		for ( Index = Start; Index < End; Index++ )
		{
			Found = this._Children[ Index ].findByValue( Comparer, DepthFirst );
			if ( null !== Found )
			{
				return Found;
			}
		}

		if ( 0 < NewEnd.length )
		{
			Found = this._Children[ End ].findByValue( Comparer, DepthFirst, undefined, NewEnd );

			if ( null !== Found )
			{
				return Found;
			}
		}

		if ( true === this._IsEnding && true === DepthFirst )
		{
			if ( true === Comparer.compare( this.__Value ) )
			{
				return this;
			}
		}

		return null;
	}

	_findAllByValue( Return, Comparer, DepthFirst = false, StartKey = undefined, EndKey = undefined )
	{
		let Index;
		let NewStart = '';
		let NewEnd = '';
		let Start = 0;
		let End = this._Children.length;

		if ( 'string' === typeof StartKey )
		{
			Start = this.__searchForKey( StartKey.charCodeAt( 0 ) );
			NewStart = StartKey.substring( 1 );
		}

		if ( 'string' === typeof EndKey )
		{
			End = this.__searchForKey( EndKey.charCodeAt( 0 ) );
			NewEnd = EndKey.substring( 1 );
		}

		if ( -1 === Start && -1 === End )
		{
			return;
		}

		if ( Start > End )
		{
			return;
		}

		if ( true === this._IsEnding && false === DepthFirst )
		{
			if ( true === Comparer.compare( this.__Value ) )
			{
				Return.push( this );
			}
		}

		if ( 0 < NewStart.length )
		{
			if ( Start === End )
			{
				this._Children[ Start ]._findAllByValue( Return, Comparer, DepthFirst, NewStart, NewEnd );
			}
			else
			{
				this._Children[ Start ]._findAllByValue( Return, Comparer, DepthFirst, NewStart );
			}
		}

		for ( Index = Start; Index < End; Index++ )
		{
			this._Children[ Index ]._findAllByValue( Return, Comparer, DepthFirst );
		}

		if ( 0 < NewEnd.length )
		{
			this._Children[ End ].findAllByValue( Return, Comparer, DepthFirst, undefined, NewEnd );
		}

		if ( true === this._IsEnding && true === DepthFirst )
		{
			if ( true === Comparer.compare( this.__Value ) )
			{
				Return.push( this );
			}
		}
	}

	findAllByValue( Comparer, DepthFirst = false, StartKey = undefined, EndKey = undefined )
	{
		const Return = [];

		if ( 'function' !== typeof Comparer.compare )
		{
			throw new TypeErrorException( 'Expected compare function of Compare object.' );
		}

		this._findAllByValue( Return, Comparer, DepthFirst, StartKey, EndKey );

		return new PatricaTrieCollectionEx( Return );
	}

	_insertIntoChild( Key, Value )
	{
		const Index = this._insertPosition( Key.charCodeAt( 0 ) );

		if ( -1 < Index )
		{
			this._Children[ Index ].insert( Key, Value );
			return;
		}

		this._Children.splice( -( Index + 1 ), 0, new PatricaTrieNodeEx( Key, Value, this ) );
	}

	insert( Key, Value )
	{
		let Common, NewKey, NewChild, NewChild2;

		const NewKeyLength = Key.length;
		const CurrentKeyLength = this._getKey().length;
		let PrefixLength;

		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return false;
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
			this.__Value = Value;
		}
		else
		{
			if ( PrefixLength === CurrentKeyLength )
			{
				NewKey = Key.substring( PrefixLength );
				this._insertIntoChild( NewKey, Value );
			}
			else if ( PrefixLength === NewKeyLength )
			{
				NewChild = new PatricaTrieNodeEx(
					this._getKey().substring( PrefixLength ),
					this.__Value,
					this,
				);

				this.__Value = Value;

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
				NewChild = new PatricaTrieNodeEx(
					this._getKey().substring( PrefixLength ),
					this.__Value,
					this
				);

				NewChild2 = new PatricaTrieNodeEx(
					Key.substring( PrefixLength ),
					Value,
					this
				);

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					NewChild.unsetEnd();
				}

				this._IsEnding = false;
				this._setKey( Common );
				this.__Value = undefined;

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

	_insertIntoChildPreventOverwrite( Key, Value )
	{
		const Index = this._insertPosition( Key.charCodeAt( 0 ) );

		if ( -1 < Index )
		{
			return this._Children[ Index ].insertPreventOverwrite( Key, Value );
		}

		this._Children.splice( -( Index + 1 ), 0, new PatricaTrieNodeEx( Key, Value, this ) );
		return null;
	}

	insertPreventOverwrite( Key, Value )
	{
		let Common, NewKey, NewChild, NewChild2, PrefixLength;
		const NewKeyLength = Key.length;
		const CurrentKeyLength = this.__Key.length;

		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return false;
		}
		// eslint-disable-next-line
		PrefixLength = this._longestPrefix(Key);

		if (
			NewKeyLength === CurrentKeyLength
		&&
			PrefixLength === CurrentKeyLength
		)
		{
			if ( undefined === this.__Value )
			{
				this._IsEnding = true;
				this.__Value = Value;
				return null;
			}
			else
			{
				return this;
			}
		}
		else
		{
			if ( PrefixLength === CurrentKeyLength )
			{
				NewKey = Key.substring( PrefixLength );
				return this._insertIntoChildPreventOverwrite( NewKey, Value );
			}
			else if ( PrefixLength === NewKeyLength )
			{
				NewChild = new PatricaTrieNodeEx(
					this._getKey().substring( PrefixLength ),
					this.__Value,
					this,
				);

				this.__Value = Value;

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					this._IsEnding = true;
					NewChild.unsetEnd();
				}
				this._setKey( this._getKey().substring( 0, PrefixLength ) );
				this._Children = [ NewChild ];
				return null;
			}
			else
			{
				Common = this._getKey().substring( 0, PrefixLength );
				NewChild = new PatricaTrieNodeEx(
					this._getKey().substring( PrefixLength ),
					this.__Value,
					this
				);

				NewChild2 = new PatricaTrieNodeEx(
					Key.substring( PrefixLength ),
					Value,
					this
				);

				NewChild._importChildren( this._Children );

				if ( false === this._IsEnding )
				{
					NewChild.unsetEnd();
				}

				this._IsEnding = false;
				this._setKey( Common );
				this.__Value = undefined;

				if ( NewChild._getKey().charCodeAt( 0 ) < NewChild2._getKey().charCodeAt( 0 ) )
				{
					this._Children = [ NewChild, NewChild2 ];
				}
				else
				{
					this._Children = [ NewChild2, NewChild ];
				}

				return null;
			}
		}
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
			this.__Value = this._Children[ 0 ].getValue();
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
				ToDelete.setValue( null );
				ToDelete.unsetEnd();
			}
		}
		else
		{
			ToDelete._removeFromTrie();
		}
	}

	removeByValue( Comparer, DepthFirst = false, StartKey = undefined, EndKey = undefined )
	{
		const ToDelete = this.findByValue( Comparer, DepthFirst, StartKey, EndKey );

		if ( null === ToDelete )
		{
			return;
		}

		if ( true === ToDelete.hasChildren() )
		{
			if ( true === ToDelete.isAEnd() )
			{
				ToDelete.setValue( null );
				ToDelete.unsetEnd();
			}
		}
		else
		{
			ToDelete._removeFromTrie();
		}
	}

	_serialize( ValueSerializer, Output )
	{
		let Value, Child;

		Output.push( `[${this._getKey().length}:${this._getKey()}` );
		if ( true === this._IsEnding )
		{
			Value = ValueSerializer( this.__Value );
			Output.push( `${Value.length}:${Value}` );
		}
		else
		{
			Output.push( '0' );
		}

		for ( Child in this._Children )
		{
			this._Children[ Child ]._serialize( ValueSerializer, Output );
		}

		Output.push( ']' );
	}

    _fromString( Nodes, Position, ValueDeserializer )
    {
        let ImportNode;
        let Imports = [];

        while( Nodes.length > Position )
        {
            ImportNode = PatricaTrieNodeEx._loadFromString( Nodes, Position, this, ValueDeserializer );
            Position = ImportNode[ 0 ];
            Imports.push( ImportNode[ 1 ] );
            if( ']' === Nodes.charAt( Position ) )
            {
                this._importChildren( Imports );
                this._Children = this._Children.sort( PatricaTrieNodeBase.sortChildes );
                return ( ++Position )
            }
        }

        throw new ValueErrorException( `Unexpected end of string @position ${ Position }.` );
    }

	static _loadFromString( NodeString, Position, Parent, ValueDeserializer )
    {
        let LastPosition, KeyLength, Key, ValueLength, Value, Node;

        if ( '[' !== NodeString.charAt( Position ) )
        {
            throw new ValueErrorException( `The given string is not valid. - Exspecetd [ got ${ NodeString.charAt( Position ) } at position ${ Position }.` );
        }

        Position++;
        LastPosition = Position;
        while( 47 < NodeString.charCodeAt( Position ) && 58 > NodeString.charCodeAt( Position ) )
        {
            Position++;
        }

        KeyLength = parseInt( NodeString.substring( LastPosition, ( Position ) ) );

        if( true === isNaN( KeyLength ) || 0 === KeyLength )
        {
            throw new ValueErrorException( `Illegal key length @position ${ LastPosition }.` );
        }

        Position++;
        Key = NodeString.substring( Position, ( Position + KeyLength ) );
        Position += KeyLength;
        LastPosition = Position;

        while( 47 < NodeString.charCodeAt( Position ) && 58 > NodeString.charCodeAt( Position ) )
        {
            Position++;
        }
        ValueLength = parseInt( NodeString.substring( LastPosition, ( Position ) ) );

        if( true === isNaN( ValueLength ) )
        {
            throw new ValueErrorException( `Illegal value length @position ${ LastPosition }.` );
        }

        if( 0 === ValueLength )
        {
            Node = new PatricaTrieNodeEx( Key, null, Parent );
            Node.unsetEnd();
        }
        else
        {
            Position++;
            Value = ValueDeserializer( NodeString.substring( Position, ( Position + ValueLength ) ) );
            Node = new PatricaTrieNodeEx( Key, Value, Parent );
            Position += ValueLength;
        }

        if( ']' !== NodeString.charAt( Position ) )
        {
            return [ Node._fromString( NodeString, Position, ValueDeserializer ), Node ];
        }
        else
        {
            return [ ( ++Position ), Node ];
        }
    }
}
