/* eslint-disable operator-linebreak */
export class PatricaTrieCollectionEx extends PatricaTrieCollection
{
    constructor( Items )
    {
        super( Items );
    }

    getValues( Filter = undefined )
    {
        let Index, Value;
        const Values = []

        if( 'function' === typeof Filter )
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                Value = this._Children[ Index ].getValue();
                if( true === Filter( Value ) )
                {
                    Values.push( Value );
                }
            }
        }
        else
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                Values.push( this._Children[ Index ].getValue() );
            }
        }

        return Values;
    }

    getAllValues( Filter = undefined )
    {
        let Index;
        const Values = [];

        if( 'function' === typeof Filter )
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                this._Children[ Index ]._getValuesFilter( Values, Filter );
            }
        }
        else
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                this._Children[ Index ]._getValuesFilter( Values );
            }
        }

        return Values;
    }

    getKeysAndValues( Filter = undefined )
    {
        let Index, KeyAndValue, Key;
        const KeysAndValues = {};

        if( 'function' === typeof Filter )
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                KeyAndValue = this._Children[ Index ].getKeyAndValue();
                Key = Object.getOwnPropertyNames( KeyAndValue )[ 0 ];
                if( true === Filter( Key, KeyAndValue[ Key ] ) )
                {
                    KeysAndValues[ Key ] = KeyAndValue[ Key ];
                }
            }
        }
        else
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                KeyAndValue = this._Children[ Index ].getKeyAndValue();
                Key = Object.getOwnPropertyNames( KeyAndValue )[ 0 ];
                KeysAndValues[ Key ] = KeyAndValue[ Key ];
            }
        }

        return KeysAndValues;
    }

    getAllKeysAndValues( Filter = undefined )
    {
        let Index, Prefix;
        const KeysAndValues = {};

        if( 'function' === typeof Filter )
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                Prefix = this._Children[ Index ]._getPrefix();
                this._Children[ Index ]._getKeysAndValuesFilter( Prefix, KeysAndValues, Filter );
            }
        }
        else
        {
            for( Index = 0; Index < this._Children.length; Index++ )
            {
                Prefix = this._Children[ Index ]._getPrefix();
                this._Children[ Index ]._getKeysAndValues( Prefix, KeysAndValues );
            }
        }

        return KeysAndValues;
    }
}
