/* eslint-disable operator-linebreak */
export class PatricaStaticTrieEx extends PatricaStaticTrieNodeFx
{
	__PositionPointer;
	constructor( Size, Normalizer )
	{
		super( undefined, undefined, Size, Normalizer );
	}

	setValue()
	{
		throw new InvalidMethodException( 'setValue' );
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

	getValues( Filter = undefined )
	{
		let Child;
		const Output = [];

		if ( 'function' === typeof Filter )
		{
			for ( Child in this._Children )
			{
				this._Children[ Child ]._getValuesFilter( Output, Filter );
			}
		}
		else
		{
			for ( Child in this._Children )
			{
				this._Children[ Child ]._getValues( Output );
			}
		}

		return Output;
	}

	getKeyAndValue()
	{
		return null;
	}

	getKeysAndValues( Filter = undefined )
	{
		let Child;
		const Return = {};

		if ( 'function' === typeof Filter )
		{
			for ( Child in this._Children )
			{
				this._Children[ Child ]._getKeysAndValuesFilter( '', Return, Filter );
			}
		}
		else
		{
			for ( Child in this._Children )
			{
				this._Children[ Child ]._getKeysAndValues( '', Return );
			}
		}

		return Return;
	}

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
				ToDelete.setValue( null );
				ToDelete.unsetEnd();
			}
		}
		else
		{
			ToDelete._removeFromTrie();
		}
	}

	serialize( ValueSerializer )
	{
		let Child;
		const Output = [ '[r', `:${this.__Size}` ];

		for ( Child in this._Children )
		{
			this._Children[ Child ]._serialize( ValueSerializer, Output );
		}
		Output.push( ']' );

		return Output.join( '' );
	}

	__parser( ValueDeserializer )
	{

	}

	loadFromString( Trie, ValueDeserializer )
	{
		let Length;
		if ( 'string' !== typeof Trie )
		{
			throw new TypeErrorException( 'Expected string to parse.' );
		}

		if ( 'function' !== typeof ValueDeserializer )
		{
			throw new TypeErrorException( 'Expected function for deserialization.' );
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
