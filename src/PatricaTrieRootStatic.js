/* eslint-disable operator-linebreak */
export class PatricaTrieStatic extends PatricaStaticTrieNode
{
	__PositionPointer;
	constructor( Size, Normalizer )
	{
		super( undefined, undefined, Size, Normalizer );
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
		Found = this.__Normalizer( Key.charAt( 0 ) );

		if ( 0 > Found || this.__Size <= Found )
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
		Found = this.__Normalizer( LowerKey.charAt( 0 ) );

		if ( -1 < Found && this.__Size > Found )
		{
			this._Children[ Found ]._findByKeyIgnoreCase( LowerKey, Exact, Nodes );
		}

		Found = this.__Normalizer( LowerKey.charAt( 0 ).toUpperCase() );

		if ( -1 < Found && this.__Size > Found )
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

		Found = this.__Normalizer( LowerKey.charAt( 0 ) );

		if ( -1 < Found && this.__Size > Found )
		{
			Return = this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
			if ( false === Return )
			{
				Found = this.__Normalizer( LowerKey.charAt( 0 ).toUpperCase() );
				if ( -1 < Found && this.__Size > Found )
				{
					return this._Children[ Found ]._containsKeyIgnoreCase( LowerKey, Exact );
				}
			}
			return Return;
		}
		else
		{
			Found = this.__Normalizer( LowerKey.charAt( 0 ).toUpperCase() );
			if ( -1 < Found && this.__Size > Found )
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

	insert( Key, Value )
	{
		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return false;
		}

		return this._insertIntoChild( Key, Value );
	}

	insertPreventOverwrite( Key, Value )
	{
		if ( 'string' !== typeof Key || 0 === Key.length )
		{
			return false;
		}

		return this._insertIntoChildPreventOverwrite( Key, Value );
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
		const Output = [ '[r', `:${this.__Size}` ];

		for ( Child in this._Children )
		{
			this._Children[ Child ]._serialize( Output );
		}
		Output.push( ']' );

		return Output.join( '' );
	}

	loadFromString( Trie )
	{
		let Length;
		this.__PositionPointer = 0;
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
	}
}
