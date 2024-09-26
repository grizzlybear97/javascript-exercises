const removeFromArray = function(array,...numToRemove) {
/*  <my solution>
    for(let i = 0; i < numToRemove.length; i++){
        for(let j = 0; j < array.length; j++){
            if(numToRemove[i] === array[j]){
                let indexToRemove = array.indexOf(numToRemove[i]);
                array.splice(indexToRemove,1);
                j = 0;
            }
        }
    }
    return array;
*/
/*  <good solution>
    let newArray = []
    array.forEach(item => {
        if(!numToRemove.includes(item)){
            newArray.push(item)
        }
    });
    return newArray;
*/
/*  <advance solution> */
    return array.filter(item => !numToRemove.includes(item))

};
console.log(removeFromArray([1,2,2,3,4],2,4)); // [1,3]
// Do not edit below this line
module.exports = removeFromArray;
