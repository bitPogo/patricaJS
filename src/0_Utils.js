/* eslint-disable operator-linebreak */
class Utils
{
	static debugObjectPrint( Object )
	{
		const Body = document.getElementsByTagName( 'body' )[ 0 ];
		const Element = document.createElement( 'div' );
		Element.innerHTML = `<pre>${ JSON.stringify( Object, undefined, 4 ) }</pre>`;
		Body.appendChild( Element );
	}

	static objectSize( Obj )
	{
		let Key;
		let Size = 0;
		for ( Key in Obj )
		{
			if ( true === Obj.hasOwnProperty( Key ) )
			{
				Size++;
			}
		}
		return Size;
	}

	static isEmpty( Anything )
	{
		if ( 'undefined' === typeof Anything || null === Anything )
		{
			return true;
		}
		else
		{
			if ( 'string' === typeof Anything )
			{
				return 0 === Anything.length;
			}
			else if ( true === Array.isArray( Anything ) )
			{
				return 0 === Anything.length;
			}
			else if ( 'object' === typeof Anything )
			{
				return 0 === Utils.objectSize( Anything );
			}
			else
			{
				return false;
			}
		}
	}
}
