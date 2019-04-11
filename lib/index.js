//let words = ['sky', 'hot', 'Yeti', 'green'];




function removeLetter(array, letter) {
    let newArray = array.filter(word => !word.includes(letter));
    newArray = newArray.map(word => 'Is it ' + word + '?');
    return newArray;
}

module.exports = { removeLetter };
