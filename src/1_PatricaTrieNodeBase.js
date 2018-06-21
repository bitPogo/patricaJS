/* eslint-disable operator-linebreak */
class PatricaTrieNodeBase
{
	_Children;
	_IsEnding;
	__Key;
	__Parent;
	_IsRoot;

	isAEnd()
	{
		return this._IsEnding;
	}

	unsetEnd()
	{
		this._IsEnding = false;
	}

	hasChildren()
	{
		return 0 < this._Children.length;
	}

	_setParent( Parent )
	{
		this.__Parent = Parent;
	}

	_getParent()
	{
		return this.__Parent;
	}

	_getPrefix()
	{
		let Prefix;

		if ( false === this.__Parent._IsRoot )
		{
			Prefix = this.__Parent.getKey();
		}
		else
		{
			Prefix = '';
		}

		return Prefix;
	}

	_setKey( Key )
	{
		this.__Key = Key;
	}

	_getKey()
	{
		return this.__Key;
	}

	getKey()
	{
		let Prefix;

		if ( false === this.__Parent._IsRoot )
		{
			Prefix = this.__Parent.getKey();
		}
		else
		{
			Prefix = '';
		}

		return Prefix + this.__Key;
	}

	_getKeys( Key, Return )
	{
		let Child;

		Key += this.__Key;

		if ( true === this._IsEnding )
		{
			Return.push( Key );
		}

		for ( Child in this._Children )
		{
			this._Children[ Child ]._getKeys( Key, Return );
		}
	}

	_getKeysFilter( Key, Return, Filter )
	{
		let Child;

		Key += this.__Key;

		if ( true === this._IsEnding )
		{
			if ( true === Filter( Key ) )
			{
				Return.push( Key );
			}
		}

		for ( Child in this._Children )
		{
			this._Children[ Child ]._getKeys( Key, Return );
		}
	}

	getKeys( Filter = undefined )
	{
		let Prefix;

		if ( false === this.__Parent._IsRoot )
		{
			Prefix = this.__Parent.getKey();
		}
		else
		{
			Prefix = '';
		}

		const Output = [];
		if ( 'function' === typeof Filter )
		{
			this._getKeysFilter( Prefix, Output, Filter );
		}
		else
		{
			this._getKeys( Prefix, Output );
		}
		return Output;
	}

	/* Interface */
	// eslint-disable-next-line
	_findByKey( Key, Exact )
	{
		throw new NotImplementedException( '_findByKey' );
	}

	findByKey( Key, Prefixed = false, Exact = false )
	{
		let RootKeyLength;

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

		return this._findByKey( Key, Exact );
	}

	/* Interface */
	// eslint-disable-next-line
	_findByKeyIgnoreCase( LowerKey, Exact, Return )
	{
		throw new NotImplementedException( '_findByKeyIgnoreCase' );
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
		return new PatricaTrieCollection( Nodes );
	}

	containsKey( Key, Prefixed = false, Exact = false )
	{
		const Node = this.findByKey( Key, Prefixed, Exact );

		if ( null === Node )
		{
			return false;
		}
		else
		{
			if ( true === Exact )
			{
				return Node.isAEnd();
			}
			else
			{
				return true;
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
	}

	/* Interface */
	// eslint-disable-next-line
	_containsKeyIgnoreCase( LowerKey, Exact = false )
	{
		throw new NotImplementedException( '_findByKeyIgnoreCase' );
	}

	containsKeyIgnoreCase( Key, Prefixed = false, Exact = false )
	{
		let RootKeyLength;

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
			if ( false === this._getParent()._IsRoot )
			{
				RootKeyLength = this._getParent().getKey().length;
				Key = Key.substring( RootKeyLength );
			}
		}

		return this._containsKeyIgnoreCase( Key.toLowerCase(), Exact );
	}

	_longestPrefix( Key )
	{
		let Index;
		const To = Math.min( Key.length, this.__Key.length );

		for ( Index = 1; To > Index; Index++ )
		{
			if ( Key.charCodeAt( Index ) !== this.__Key.charCodeAt( Index ) )
			{
				return Index;
			}
		}

		return To;
	}

	_importChildren( Children )
	{
		let Child;

		if ( false === Array.isArray( Children ) )
		{
			throw new TypeErrorException( 'Expected array for import.' );
		}

		for ( Child in Children )
		{
			if ( false === ( Children[ Child ] instanceof PatricaTrieNodeBase ) )
			{
				throw new ValueErrorException( 'Illegal import of non PatricaTrieNode.' );
			}

			Children[ Child ]._setParent( this );
		}

		this._Children = Children;
		return true;
	}

	/* Interface */
	// eslint-disable-next-line
	insert( Key )
	{
		throw new NotImplementedException( 'insert' );
	}

	/* Interface */
	// eslint-disable-next-line
	remove( Key, Prefixed = false )
	{
		throw new NotImplementedException( 'remove' );
	}

	erase()
	{
        throw new NotImplementedException( 'erase' );
	}

    serialize()
	{
        throw new NotImplementedException( 'serialize' );
	}
}
