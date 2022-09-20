/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
function extractValue(arr, key) {
    // This took longer than it should have due to trying to return acc.push(val[key]) instead of pushing and then returning on the next line. You can return on same line if you use concat([val[key]]) but seemed more contrived than using push
    return arr.reduce((acc, val) => {
        acc.push(val[key])
        return acc; 
    }, [])
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    // filter out non vowels and then it's frequency counter
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

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    // all we need to is add the key and value to each existing object and accumulate into an array From Bob Ziroll's React class, it seemed that using spread operator is best way almost like capturing prevState in React. Then you just tack on the key and value
    return arr.reduce(function(acc, val) {
        acc.push({...val, [key]: value});
        console.log(acc);
        return acc
    }, [])
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    // need to declare these empty arrs outside of reduce otherwise, we would start with an empty array on each iteration
    let arr1 = [];
    let arr2 = [];
    return arr.reduce((acc, val) => {
        // We use arr1 to push vals that return true from the callback otherwise arr2, then we copy the vals of relevant array into the proper idx of the accumulator. this was a little trial and error for sure. I did not look at Springboard solution
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
