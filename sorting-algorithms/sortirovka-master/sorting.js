let arr = [];
let count = 0;
for(let i=0; i < 10; i++) {
    arr[i] = Math.floor(Math.random()*100);
}

console.log("arr"+arr);
let a = 0;
let shetchik_zamen = 0;
for(let h=0; h < arr.length; h++) {
    let _count = 0;
    console.log("h="+h);
    for(let i=h+1; i < arr.length; i++) {
        console.log("h1="+h+"i="+i+"ij"+arr[i]);
        if(arr[i-1] > arr[i]) { //a=5[i] b=2[i-1]
            a = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = a;    
            _count++;
            shetchik_zamen++;
        } 
        console.log("h2="+h+"i="+i+"arr"+arr);
        count++;


    }

    if (_count == 0) {
        break;
    } 
    console.log(h+1+" Проход "+arr);
}
console.log(arr);
console.log("Количество сравнений: "+count);  
console.log("Количество замен: "+shetchik_zamen);  
