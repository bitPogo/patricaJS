/*require('../src/main.js');

describe( 'index.js', () =>
{
    it( 'Grammar tests ', () =>
    {
        expect ("{{{}}} {} {{}}"._plFormatGrammarDebug()).toBe('');
    });

    it( 'Simple unformatted string', () =>
    {
        expect( "test".plFormat() ).toBe('test');
        expect( "test".plFormat('why', 42, 2.3, "ever") ).toBe('test');
        expect( "{{}}test".plFormat(['why', 42, 2.3, "ever"]) ).toBe('{}test');
        expect( "test".plFormat({a:'why', b:42, c:2.3, d:"ever"}) ).toBe('test');
    } );

    it( 'Simple formatted string without format specification', () =>
    {
        expect( "{} tests {} are {} {}".plFormat() ).toBe('Why tests 42 are 2.3 ever');
        expect( "{} tests {} are {}".plFormat() ).toBe('Why tests 42 are 2.3 ever');
        expect( "{} tests {}".plFormat() ).toBe('Why tests 42 2.3 ever');
        expect( "{} tests {} are {} {}".plFormat(['why', 42, 2.3, "ever"]) ).toBe('Why tests 42 are 2.3 ever');
        expect( "test".plFormat({a:'why', b:42, c:2.3, d:"ever"}) ).toThrow('^\'Cannot switch from automatic field numbering to manual field specification.\'$');
    } );
} );*/
