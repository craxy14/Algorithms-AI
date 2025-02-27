v = 5
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

for(let i = 0; i < arr.length; i++){
    if(v == arr[i]){
        console.log("Value has been found!", i)
        return 0
    }else{
        console.log("Can't find value", i)
        return 1
    }
}