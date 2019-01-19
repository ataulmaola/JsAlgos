// Using fincton Statement
function bubbleSort1(arr){
  var len=arr.length;
  for(var i=len-1;i>=0;i--){
    for(var j=1;j<=i;j++){
      if(arr[j-1]>arr[j]){
        var temp=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}

//Using function Expression
var bubbleSort2=function(arr){
  var len=arr.length;
  for(var i=len-1;i>=0;i--){
    for(var j=1;j<=i;j++){
      if(arr[j-1]>arr[j]){
        var temp=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}

//Using Arrow Function
const bubbleSort3=(arr)=>{
  var len=arr.length;
  for(var i=len-1;i>=0;i--){
    for(var j=1;j<=i;j++){
      if(arr[j-1]>arr[j]){
        var temp=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}

console.log('Using fincton Statement');
console.log(bubbleSort1([45,55,66,22]));

console.log('Using function Expression');
console.log(bubbleSort2([4,6,1,7,9,10]));

console.log('Using Arrow Function');
console.log(bubbleSort3([4,6,1,7,100,10]));
