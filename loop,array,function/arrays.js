// const words = ['Hello', 'Hi', 23, true]

// const words = new Array(4, 1, 6,'Hi', 3)

// const words = ['shiva','Harish','Ram','Shyam']
// words[0] = 'shiva'
// words.pop();
// console.log(words[1]);
// console.log(words);
// console.log(words.length);

// const words = ['shiva','Harish','Ram','Shyam']
// for(let i =0; i<words.length; i++){
//     console.log(words[i],'hello');
// }

// const words = ['shiva','Harish','Ram','Shyam']
// for (let i in words) {
//     console.log(words[i]);
// }

// const isPresent = words.includes('shiva');
// console.log(isPresent);

// const index = words.indexOf('shiva');
// console.log(index);

// console.log(words);
// words.sort();
// console.log(words);

// const words = ['shiva','Harish','Ram','Shyam']

// words.splice(1,2)
// words.splice(1,3,'golu','mahesh')
// words.splice(2,0,'golu')
// console.log(words);

// const a = [10, 4, 23]
// a.sort()
// console.log(a);

// foreach function

let a = [10, 4, 23, 'Hi']

const myFunction = (element,index) => {
    console.log('printing',element, 'index is ', index);
}
a.forEach(myFunction);