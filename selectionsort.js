// Using fincton Statement
function selectionSort1(arr){
  var minIdx,temp,len=arr.length;
  for(var i=0;i<len;i++){
    minIdx=i;
    for(var j=i+1;j<len;j++){
      if(arr[j]<arr[minIdx]){
        minIdx=j;
      }
    }
    temp=arr[i];
    arr[i]=arr[minIdx];
    arr[minIdx]=temp;
  }
  return arr;
}

//Using function Expression
var selectionSort2=function(arr){
  var minIdx,temp,len=arr.length;
  for(var i=0;i<len;i++){
    minIdx=i;
    for(var j=i+1;j<len;j++){
      if(arr[j]<arr[minIdx]){
        minIdx=j;
      }
    }
    temp=arr[i];
    arr[i]=arr[minIdx];
    arr[minIdx]=temp;
  }
  return arr;
}

//Using Arrow Function
const selectionSort3=(arr)=>{
  var minIdx,temp,len=arr.length;
  for(var i=0;i<len;i++){
    minIdx=i;
    for(var j=i+1;j<len;j++){
      if(arr[j]<arr[minIdx]){
        minIdx=j;
      }
    }
    temp=arr[i];
    arr[i]=arr[minIdx];
    arr[minIdx]=temp;
  }
  return arr;
}

console.log('Using fincton Statement');
console.log(selectionSort1([45,55,66,22]));

console.log('Using fincton Statement');
console.log(selectionSort2([45,55,66,22]));

console.log('Using fincton Statement');
console.log(selectionSort3([45,55,66,22]));

