function removeY(array) {
    let newArray = [];
    if(array.includes('y' | 'Y'))
        array.filter((item) => {
            if(item.includes('y' | 'Y')) {
                newArray.push(item);
            }
        });
}


module.exports = { removeY };
