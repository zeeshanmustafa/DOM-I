const secondTens = document.getElementById("secondTens")
const secondOnes = document.getElementById("secondOnes")
const msHundreds = document.getElementById("msHundreds")
const msTens = document.getElementById("msTens")


let i = 0;

   const callback = () => {
       i++
   
       if (i <= 10) {
        msTens.innerHTML = i - 1;
        console.log(i);

           if (i > 9) {
               msHundreds.innerHTML = i - 9;
               msTens.innerHTML = 0;
           }
       }
   }
   const interval = setInterval(callback, 1000)

/*
let i = 0
const cb = () => {
 i++
 
 if(i<=9) {
    msTens.innerHTML=i-1;
    console.log(i);
 
 if(i>9) {
     msHundreds.innerHTML=i-9;
     msTens.innerHTML=0;
}
}
}
const interval = setInterval(cb, 1000)*/
