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

  var NewArray = cats.slice();
  NewArray.push(name)
  return NewArray;

  

 
}
function prependCat(name) {
  var NewArray = cats.slice();
  NewArray.unshift(name)
  return NewArray;

}
function removeLastCat(name) {
  var NewArray = cats.slice();
  NewArray.pop(name)
  return NewArray;
}
function removeFirstCat(name) {
  var NewArray = cats.slice();
  NewArray.shift(name)
  return NewArray;

}
