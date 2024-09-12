
function Mission1(arr) {
    return arr.filter(isEven);
}
function isEven(arrItem) {
  return arrItem % 2 === 0;
}

function Mission2(str){
    arr = str.split(' ');
    arr = arr.filter(contains4Letters);
    return arr.length;    
}

function contains4Letters(word){
    return word.length == 4;
}

function Mission3(matrix) {
    const arr = [];
    matrix.forEach(
        subArr => {
            subArr.forEach(
                subArrItem => arr.push(subArrItem)
            );
        }
    );
    return arr;
}

function Mission4 (arr){
    let increasing = true;
    let decreasing = true;
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            increasing = false;
        }
        if (arr[i] > arr[i-1]) {
            decreasing = false;
        }
    }
    if (increasing) {
        return 1;
    }
    if (decreasing) {
        return 2;
    }
    return 0;

}

           
 



module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}