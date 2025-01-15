const addNum = (a, b) => {
    return a + b
}

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
    return str === reverseString(str)
}

const isPrime = (num) => {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

const defaultConfig = {
    name: "CHEN",
    date: "2025-01-15",
    age: 20,
    gender: "male"
}

export {
    addNum,
    reverseString,
    isPalindrome,
    isPrime,
    defaultConfig
}