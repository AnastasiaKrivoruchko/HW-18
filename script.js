const firstArr = [1,2,3, 'hello',4,5];
const secondArr = [1,2,3, true, 4, undefined, 6];

function getSumOfNumberInArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") sum += arr[i];
    }

    return sum;
}

function getBiggerArray(firstArr, secondArr) {
    const sumOfFirstArr = getSumOfNumberInArr(firstArr);
    const sumOfSecondArr = getSumOfNumberInArr(secondArr);

    return sumOfFirstArr > sumOfSecondArr ? firstArr : secondArr;
}

console.log(getBiggerArray(firstArr, secondArr));
