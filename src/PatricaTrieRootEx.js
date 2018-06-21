/* eslint-disable operator-linebreak */
export class PatricaTrieEx extends PatricaTrieNodeEx
{
    constructor()
    {
        super( undefined, undefined, undefined );
    }

    setValue()
    {
        throw new InvalidMethodException( 'setValue' );
    }

    getKeys( Filter = undefined )
    {
        let Child;
        const Output = [];

        if( 'function' === typeof Filter )
        {
            for (Child in this._Children)
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

        if( 'function' === typeof Filter )
        {
            for (Child in this._Children)
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

    getKeysAndValues( Filter = undefined)
    {
        let Child;
        const Return = {};

        if( 'function' === typeof Filter )
        {
            for( Child in this._Children )
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

        return new PatricaTrieCollectionEx( Nodes );
    }

    // @override
    containsKey( Key, Exact = false )
    {
        const Found = this.findByKey( Key, Exact );
        if( null === Found )
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
            if( false === Return )
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
            if (-1 !== Found)
            {
                return this._Children[ Found ]._containsKeyIgnoreCase(LowerKey, Exact );
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

        if( 'function' !== typeof Comparer.compare )
        {
            throw new TypeErrorException( 'Expected compare function of Compare object.' )
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
        if( 'function' !== typeof Comparer.compare )
        {
            throw new TypeErrorException( 'Expected compare function of Compare object.' )
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
        let ToDelete = this.findByKey( Key, true );
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

    toString( ValueSerializer )
    {
        let Child;
        let Output = [ '[r', this._Children.length ];

        for( Child in this._Children )
        {
            this._Children[ Child ]._toString( ValueSerializer, Output );
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
        if( 'string' !== typeof Trie )
        {
            throw new TypeErrorException( 'Expected string to parse.' );
        }

        if( 'function' !== typeof ValueDeserializer )
        {
            throw new TypeErrorException( 'Expected function for deserialization.' );
        }

        Length = Trie.length;

        if( 3 > Length )
        {
            throw new ValueErrorException( 'The given string cannot be valid.' );
        }

        if( '[' !== Trie.charAt( 0 ) )
        {
            throw new ValueErrorException(`The given string is not valid. - Exspecetd [ got ${ Trie.charAt(0) } at position 0.`);
        }

        if( 'r' !== Trie.charAt( 1 ) )
        {
            throw new ValueErrorException(`The given string is not valid. - Exspecetd r got ${ Trie.charAt(1) } at position 1.`);
        }
    }
}
