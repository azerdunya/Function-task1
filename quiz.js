function slice(sliceWord,sliceIndex,sliceLastIndex) {
    let i = 0;
    let newArr = [];
    while( i < sliceWord.length) {
        newArr.push(sliceWord[i])
        i++
    }
    let j = sliceIndex;
    let newWord = ""
    while ( j < newArr.length) {
        sliceLastIndex --
        if(sliceLastIndex > 0) {
            newWord += newArr[j]
        }
        j++
        
    }

    return String(newWord)
}
console.log(slice('Salam Vusal necesen?',6,6));
