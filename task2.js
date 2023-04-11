//Replace String Method

function replace(replaceWord, oldChar, newChar) {
    let i = 0;
    let newArr = [];
    while (i < replaceWord.length) {
        newArr.push(replaceWord[i]);
        i++;
    }
    let j = 0;
    let newWord = "";
    while (j < newArr.length) {
        if (newArr[j] === oldChar) {
            newWord += newChar;
        } else {
            newWord += newArr[j];
        }
        j++;
    }
    return newWord;
}

console.log(replace('alma', 'a', 'e')); 
