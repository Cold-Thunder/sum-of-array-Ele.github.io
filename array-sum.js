function sum(arr, target){

  let ind = [];

  for(let i = 1; i < arr.length; i++){
    if(arr[0]+arr[i] == target){
      ind.push(arr.indexOf(arr[0]), arr.indexOf(arr[i]));
    }
    else{
      for(let j = arr.length; j >= 0; j--){
        if(arr[arr.length-1] + arr[j] == target){
          ind.push(arr.indexOf(arr[arr.length]), arr.indexOf(arr[j]));
        }
        else if(arr[i] + arr[j] == target){
          ind.push(arr.indexOf(arr[i]), arr.indexOf(arr[j]));  
        }
      } 
    }
     
}

console.log(ind);
}

let arr = [2,7,11,15];
sum(arr,9);
