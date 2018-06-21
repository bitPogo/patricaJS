/* eslint-disable operator-linebreak */

export class PatricaTrie extends PatricaTrieNode
{
	__PositionPointer;

	constructor()
	{
		super( undefined, undefined );
	}

	getKeys( Filter = undefined )
	{
		let Child;
		const Output = [];

		if ( 'function' === typeof Filter )
		{
			for ( Child in this._Children )
			{
				this._Children[ Child ]._getKeysFilter( '', Output, Filter );
			}
		}
		else
		{
			for ( Child in this._Children )
			{
				this._Children[ Child ]._getKeys( '', Output );
			}
		}

		return Output;
	}

	__searchForKey( Key )
	{
		let Start, End, MiddleBinary, MiddleInterpolation, WhereStart, WhereEnd, Swap;
		let Interpolation, Binary, InterpolationIsDefined, BinaryIsDefined;

		if ( 0 === this._Children.length )
		{
			return -1;
		}
		else
		{
			Start = 0;
			End = this._Children.length - 1;
		}

		if ( 0 === this._Children.length || this._Children[ 0 ]._getKey().charCodeAt( 0 ) > Key )
		{
			return -1;
		}

		if ( this._Children[ End ]._getKey().charCodeAt( 0 ) < Key )
		{
			return -1;
		}

		while ( Start <= End && this._Children.length > End )
		{
			WhereStart = this._Children[ Start ]._getKey().charCodeAt( 0 );
			WhereEnd = this._Children[ End ]._getKey().charCodeAt( 0 );

			MiddleBinary = ( ( Start + End ) >> 1 );
			MiddleInterpolation = WhereEnd - WhereStart;
			if ( 0 !== MiddleInterpolation )
			{
				MiddleInterpolation = Math.round( Start + ( ( Key - WhereStart ) * ( End - Start ) / ( WhereEnd - WhereStart ) ) );
			}

			if ( MiddleBinary > MiddleInterpolation )
			{
				Swap = MiddleBinary;
				MiddleBinary = MiddleInterpolation;
				MiddleInterpolation = Swap;
			}

			Binary = this._Children[ MiddleBinary ];
			BinaryIsDefined = 'undefined' !== typeof Binary;
			Interpolation = this._Children[ MiddleInterpolation ];
			InterpolationIsDefined = 'undefined' !== typeof Interpolation;

			if ( false === BinaryIsDefined && false === InterpolationIsDefined )
			{
				return -1;
			}

			if ( true === BinaryIsDefined && Key === Binary._getKey().charCodeAt( 0 ) )
			{
				return MiddleBinary;
			}
			else if ( true === InterpolationIsDefined && Key === Interpolation._getKey().charCodeAt( 0 ) )
			{
				return MiddleInterpolation;
			}
			else if ( true === BinaryIsDefined && Key < Binary._getKey().charCodeAt( 0 ) )
			{
				End = MiddleBinary - 1;
			}
			else if ( true === InterpolationIsDefined && Key < Interpolation._getKey().charCodeAt( 0 ) )
			{
				Start = MiddleBinary + 1;
				End = MiddleInterpolation + 1;
			}
			else
			{
				Start = MiddleInterpolation + 1;
			}
		}

		return -1;
	}

	// @override
	findByKey( Key, Exact = false )
	{
		let Found;

		if (
			'string' !== typeof Key
		||
			0 === Key.length
		)
		{
			return null;
		}
		// eslint-disable-next-line
		Found = this.__searchForKey( Key.charCodeAt( 0 ) );

		if ( -1 === Found )
		{
			return null;
		}
		else
		{
			return this._Children[ Found ].findByKey( Key, false, Exact );
		}
	}

	findByKeyIgnoreCase( Key, Exact = false )
	{
		let Found, LowerKey;
		const Nodes = [];

		if (
			'string' !== typeof Key
		||
			0 === Key.length
		)
		{
			return null;
		}
		// eslint-disable-next-line
		LowerKey = Key.toLowerCase();
		// eslint-disable-next-line
		Found = this.__searchForKey( LowerKey.charCodeAt( 0 ) );
		if ( -1 !== Found )
		{
			this._Children[ Found ]._findByKeyIgnoreCase( LowerKey, Exact, Nodes );
		}

		Found = this.__searchForKey( LowerKey.charAt( 0 ).toUpperCase().charCodeAt( 0 ) );
		if ( -1 !== Found )
		{
			this._Children[ Found ]._findByKeyIgnoreCase( LowerKey, Exact, Nodes );
		}

		return new PatricaTrieCollection( Nodes );
	}

	// @override
	containsKey( Key, Exact = false )
	{
		const Found = this.findByKey( Key, Exact );
		if ( null === Found )
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	_containsKeyIgnoreCase( LowerKey, Exact = false )
	{
		let Return, Found;

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

	containsKeyIgnoreCase( Key, Exact = false )
	{
		if (
			'string' !== typeof Key
		||
			0 === Key.length
		)
		{
			return false;
		}

		return this._containsKeyIgnoreCase( Key.toLowerCase(), Exact );
	}

	insert( Key )
	{
		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return false;
		}

		return this._insertIntoChild( Key );
	}

	insertPreventOverwrite( Key )
	{
		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return false;
		}

		return this._insertIntoChildPreventOverwrite( Key );
	}

	remove( Key )
	{
		const ToDelete = this.findByKey( Key, true );

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

	serialize()
	{
		let Child;
		const Output = [ '[r' ];

		for ( Child in this._Children )
		{
			this._Children[ Child ]._serialize( Output );
		}
		Output.push( ']' );

		return Output.join( '' );
	}

	static loadFromString( Trie )
    {
        let Length, NewTrie, Position;
        if ( 'string' !== typeof Trie )
        {
            throw new TypeErrorException( 'Expected string to parse.' );
        }

        // eslint-disable-next-line
        Length = Trie.length;

        if ( 3 > Length )
        {
            throw new ValueErrorException( 'The given string cannot be valid.' );
        }

        if ( '[' !== Trie.charAt( 0 ) )
        {
            throw new ValueErrorException( `The given string is not valid. - Exspecetd [ got ${ Trie.charAt( 0 ) } at position 0.` );
        }

        if ( 'r' !== Trie.charAt( 1 ) )
        {
            throw new ValueErrorException( `The given string is not valid. - Exspecetd r got ${ Trie.charAt( 1 ) } at position 1.` );
        }

        NewTrie = new PatricaTrie();

        if( ']' === Trie.charAt( 2 ) )
        {
            return NewTrie;
        }

        // eslint-disable-next-line
        Position = NewTrie._fromString( Trie, 2 );

        if( Position !== Length )
        {
            throw new ValueErrorException( `The given string is not valid. - Exspecetd end of string @position ${Position}.` );
        }

        return NewTrie;
    }
}
