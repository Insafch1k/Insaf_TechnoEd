/**
* @param {number[]} nums
* @return {number}
*/
const majorityElement = function(nums) {
    let count = 0;
    let element = null;
    
    // 1. Выбрать элемент
    for (let num of nums) {
        if (count === 0) {
            element = num;
        }
        count += (num === element) ? 1 : -1;
    }

    // 2. Проверить, встречается ли ещё элемент в массиве
    count = 0;
    for (let num of nums) {
        if (num === element) {
            count++;
        }
    }

    // 3. Проверка, что элемент появляется более чем n/2 раз
    if (count > Math.floor(nums.length / 2)) {
        return element;
    } else {
        throw new Error("Множественный элемент не подходит");
    }
};

// Пример использования:
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2



