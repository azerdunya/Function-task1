//Slice String Method

function slice(sliceWord,sliceindex) {
    let i = 0;
    let newArr = []
    while( i < sliceWord.length ) {
        newArr.push(sliceWord[i])
        i++
    }
    let j = sliceindex
    let newWord = ""
    while( j < newArr.length) {
        newWord += newArr[j]
        j++
    }

    return String(newWord)
}

console.log(slice('Salam',3));

