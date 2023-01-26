function findIntegers(arr, target) {
    const diffMap = new Map();
    for(let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if(diffMap.has(diff)) {
            return [arr[diffMap.get(diff)], arr[i]];
        }
         diffMap.set(arr[i], i);
    }

    return null;
}

console.log(findIntegers([1,5,6,2,9], 3));