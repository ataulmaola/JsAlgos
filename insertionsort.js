// Using fincton Statement
function insertionSort1(arr){
  var i, len = arr.length, el, j;
    for(i = 1; i<len; i++){
      el = arr[i];
      j = i;

      while(j>0 && arr[j-1]>el){
        arr[j] = arr[j-1];
        j--;
    }

    arr[j] = el;
    }

    return arr;
}

//Using function Expression
var insertionSort2=function(arr){
  var i, len = arr.length, el, j;

    for(i = 1; i<len; i++){
      el = arr[i];
      j = i;

      while(j>0 && arr[j-1]>el){
        arr[j] = arr[j-1];
        j--;
    }

    arr[j] = el;
    }

    return arr;
}

//Using Arrow Function
const insertionSort3=(arr)=>{
  var i, len = arr.length, el, j;

    for(i = 1; i<len; i++){
      el = arr[i];
      j = i;

      while(j>0 && arr[j-1]>el){
        arr[j] = arr[j-1];
        j--;
    }

    arr[j] = el;
    }

    return arr;
}

console.log('Using fincton Statement');
console.log(insertionSort1([45,55,66,22]));



console.log('Using fincton Statement');
console.log(insertionSort2([45,55,66,22]));

console.log('Using fincton Statement');
console.log(insertionSort3([45,55,66,22]));
