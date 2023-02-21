// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name) {
    const newerArray = [name, ...cats];
    return newerArray;
}

function removeLastCat() {
    const evenNewerArray = cats.slice(0,2); 
    return evenNewerArray;
}

function removeFirstCat() {
    const theNewNewArray = cats.slice(-2);
    return theNewNewArray;
}