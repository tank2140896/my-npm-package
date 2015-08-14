var array = [];
function show() {
  for(var i in array){
	console.log(array[i]);
  }
};
function addWord(word){
  array.push(word);
};
function getWords(){
  return array;
};
exports.show = show;
exports.addWord = addWord;
exports.getWords = getWords;
