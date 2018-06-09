let arr = [];
let count = 0;
for(let i=0; i < 10; i++) {
    arr[i] = Math.floor(Math.random()*100);
}

console.log(arr);
let a = 0;
let shetchik_zamen = 0;
for(let h=0; h < arr.length; h++) {
    for(let i = h + 0; i < arr.length; i++) {
        if(arr[arr.length-i-1] > arr[arr.length-i]) {
            a = arr[arr.length-i-1];
            arr[arr.length-i-1] = arr[arr.length-i];
            arr[arr.length-i] = a;    
            shetchik_zamen++;
        } 
    } 
    for(let i= h + 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            a = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = a;    
            shetchik_zamen++;
        } 
        count++;
    }
    
    console.log(h+1+" Проход "+arr);
}
console.log(arr);
console.log("Количество сравнений: "+count);  
console.log("Количество замен: "+shetchik_zamen);  
