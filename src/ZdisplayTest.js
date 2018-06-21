class StringCompare
{
    static Tests = [ 'a', 'b', 'e', 'f', 'g', 'm' ]
    static compare( Comp )
    {
    	return -1 !== StringCompare.Tests.indexOf( Comp );
    }
}

const Trie = new PatricaTrieEx();
const Trie3 = new PatricaTrie();
const Trie2 = new PatricaTrieEx();
Trie.insert( '121', 'a' );
Trie.insert( '11', 'b' );
Trie.insert( '12', 'c' );
Trie.insert( '13', 'd' );
Trie.insert( '14', 'e' );
Trie.insert( '15', 'f' );
Trie.insert( '123123', 'g' );
Trie.insert( '23', 'h' );
Trie.insert( '42', 'i' );
Trie.insert( '1112341', 'j' );
Trie.insert( '124532', 'k' );
Trie.insert( '2333', 'l' );
Trie.insert( '422222', 'm' );
Trie.insert( '1', 'n' );
console.log( Trie.containsKey( '5432' ) );
console.log( Trie.containsKey( '12' ) );
console.log( Trie.containsKey( '4', true ) );
Utils.debugObjectPrint( Trie.getKeys() );
Utils.debugObjectPrint( Trie.getValues() );
console.log( Trie.findByKey( '4', true ) );
Trie.remove( '12' );
Trie.remove( '11' );
Trie.remove( '13' );
Trie.remove( '14' );
Trie.remove( '15' );
Trie.remove( '23' );
Trie.remove( '2333' );
Trie.insert( '2', 'q' );
Utils.debugObjectPrint( Trie.getKeys() );
Utils.debugObjectPrint( Trie.getValues() );
Utils.debugObjectPrint( Trie.findByKey( '1' ).getValues() );
Utils.debugObjectPrint( Trie.findByKey( '124532' ).getKey() );
console.log( '\n\n' );
console.log( Trie.insertPreventOverwrite( '123', 'o' ) );
console.log( Trie.insertPreventOverwrite( '123', 'p' ) );
Utils.debugObjectPrint( Trie.findByValue( StringCompare ).getKey() );
console.log( Trie.findAllByValue( StringCompare ) );
Utils.debugObjectPrint( Trie.getKeysAndValues() );
console.log( Trie );
Utils.debugObjectPrint( Trie.toString( JSON.stringify ) );
Utils.debugObjectPrint( Trie2.toString( JSON.stringify ) );


Trie3.insert( '121', 'a' );
Trie3.insert( '11', 'b' );
Trie3.insert( '12', 'c' );
Trie3.insert( '13', 'd' );
Trie3.insert( '14', 'e' );
Trie3.insert( '15', 'f' );
Trie3.insert( '123123', 'g' );
Trie3.insert( '23', 'h' );
Trie3.insert( '42', 'i' );
Trie3.insert( '1112341', 'j' );
Trie3.insert( '124532', 'k' );
Trie3.insert( '2333', 'l' );
Trie3.insert( '422222', 'm' );
Trie3.insert( '1', 'n' );
console.log( Trie3.containsKey( '5432' ) );
console.log( Trie3.containsKey( '12' ) );
console.log( Trie3.containsKey( '4', true ) );
Utils.debugObjectPrint( Trie3.getKeys() );
console.log( Trie.findByKey( '4', true ) );
Trie3.remove( '12' );
Trie3.remove( '11' );
Trie3.remove( '13' );
Trie3.remove( '14' );
Trie3.remove( '15' );
Trie3.remove( '23' );
Trie3.remove( '2333' );
Trie.insert( '2', 'q' );
Utils.debugObjectPrint( Trie3.getKeys() );
Utils.debugObjectPrint( Trie3.findByKey( '124532' ).getKey() );
console.log( Trie3 );
Utils.debugObjectPrint( Trie3.toString( JSON.stringify ) );
