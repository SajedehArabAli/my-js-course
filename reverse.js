
function wordsReverser(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")  
    }
    
    console.log(wordsReverser('Hello world'));