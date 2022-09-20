function extractValue(arr, key) {
    return arr.reduce(function(acc, val) {
        acc.push(val[key]);
        return acc;
    }, [])
}

console.log(extractValue([{name: "Harold"}, {name: "Geno"}, {name: "Fredo"}], "name"))

function vowelCount(str) {
    let vowels = "aeiou"
    let newArr = str.toLowerCase().split("");
    return newArr.filter(character => {
        return vowels.indexOf(character) !== -1;
    })
    .reduce((acc, val) => {
       acc[val] = (acc[val] || 0) + 1;
       return acc
        
    }, {})

    
    
    
}

vowelCount('I Am awesome and so are you')

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, val) {
        acc.push({...val, [key]: value});
        console.log(acc);
        return acc
    }, [])
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
console.log(addKeyAndValue(arr, 'title', 'Instructor'))

function partition(arr, callback) {
    let arr1 = [];
    let arr2 = [];
    return arr.reduce((acc, val) => {
        if (callback(val) === true) {
            arr1.push(val);
            acc[0] = [...arr1];
            return acc;
        } else {
            arr2.push(val)
            acc[1] = [...arr2]
            return acc
        }
    

    }, [])
}

const numbers = [2,3,4,5];
const newNums = [...numbers];
console.log(newNums);
console.log(newNums === numbers)