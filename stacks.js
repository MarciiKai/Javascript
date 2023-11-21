/* STACKS */

// functions: push, pop, peek, length

var letters = []; // this is the stack
var word = "kai"
var rword = "";

// put letters of the word into the stacl

for(var i=0; i<word.length; i++){
    letters.push(word[i]);
}

//pop letters of the word out of the stack in reverse order

for(var i=0; i<word.length; i++){
    rword +=letters.pop();
}

if(rword === word){
    console.log(word +  " is a palindrome.");
}
else{
    console.log(word +  " is not a palindrome.");
}


