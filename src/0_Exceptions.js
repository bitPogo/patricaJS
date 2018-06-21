class BaseException extends Error
{
    constructor( Name, Message )
    {
        super( Message );
        this.Name = Name;
        console.trace();// eslint-disable-line
    }
}

class ValueErrorException extends BaseException
{
    constructor( Message )
    {
        super( 'ValueErrorException', Message );
    }
}

class TypeErrorException extends BaseException
{
    constructor( Message )
    {
        super( 'ValueErrorException', Message );
    }
}

class NotImplementedException extends BaseException
{
    constructor( What )
    {
        super( 'NotImplementedException', `${What} is not implemented (yet).` );
    }
}

class InvalidMethodException extends BaseException
{
    constructor( What )
    {
        super( 'InvalidMethodException', `${What} should do nothing.` );
    }
}
