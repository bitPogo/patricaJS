/* eslint-disable operator-linebreak */
export class PatricaTrieCollection extends PatricaTrieNodeBase
{
	constructor( Items )
	{
		super();
		if ( false === Array.isArray( Items ) )
		{
			throw new TypeErrorException( 'Expected array of patrica nodes.' );
		}

		this._Children = Items;
	}

	size()
	{
		return this._Children.length;
	}

	item( Index )
	{
		if ( 0 > Index || this._Children.length <= Index )
		{
			return null;
		}
		else
		{
			return this._Children[ Index ];
		}
	}

	getKeys( Filter = undefined )
	{
		let Index, Key;
		const Keys = [];

		if ( 'function' === typeof Filter )
		{
			for ( Index = 0; Index < this._Children.length; Index++ )
			{
				Key = this._Children[ Index ].getKey();
				if ( true === Filter( Key ) )
				{
					Keys.push( Key );
				}
			}
		}
		else
		{
			for ( Index = 0; Index < this._Children.length; Index++ )
			{
				Keys.push( this._Children[ Index ].getKey() );
			}
		}

		return Keys;
	}

	getAllKeys( Filter = undefined )
	{
		let Index, Prefix;
		const Keys = [];

		if ( 'function' === typeof Filter )
		{
			for ( Index = 0; Index < this._Children.length; Index++ )
			{
				Prefix = this._Children[ Index ]._getPrefix();
				this._Children[ Index ]._getKeysFilter( Prefix, Keys, Filter );
			}
		}
		else
		{
			for ( Index = 0; Index < this._Children.length; Index++ )
			{
				Prefix = this._Children[ Index ]._getPrefix();
				this._Children[ Index ]._getKeys( Prefix, Keys );
			}
		}

		return Keys;
	}

	remove( Item )
	{
		if ( 0 > Item || this._Children.length <= Item )
		{
			return;
		}

		this._Children.splice( Item, 1 );
	}

	toArray()
	{
		return this._Children;
	}

	isAEnd()
	{
		throw new InvalidMethodException( 'isAEnd' );
	}

	unsetEnd()
	{
		throw new InvalidMethodException( 'unsetEnd' );
	}

	hasChildren()
	{
		return 0 < this._Children.length;
	}

	findByKey()
	{
		throw new InvalidMethodException( 'findByKey' );
	}

	findByKeyIgnoreCase()
	{
		throw new InvalidMethodException( 'findByKeyIgnoreCase' );
	}

	containsKey()
	{
		throw new InvalidMethodException( 'containsKey' );
	}

	containsKeyIgnoreCase()
	{
		throw new InvalidMethodException( 'containsKeyIgnoreCase' );
	}

	// eslint-disable-next-line
	insert( Key )
	{
		throw new InvalidMethodException( 'insert' );
	}

    erase()
	{
        throw new InvalidMethodException( 'erase' );
	}

	serialize()
	{
		throw new InvalidMethodException( 'serialize' );
	}
}
