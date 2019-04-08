function removeY(array) {
    let newArray = [];
    array.filter((item) => {
        if(item.includes('y')) {
            newArray.push(item);
        }
    });
}


module.exports = { removeY };
