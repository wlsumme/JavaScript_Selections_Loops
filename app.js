console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i < 100; i++){
    if(i % 2 !== 0){
        console.log(i)
    }


        
    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} FIZZBUZZ`)
    }
    else if(i % 3 === 0){
        console.log(`${i} FIZZ`)
    }
    else if(i % 5 === 0){
        console.log(`${i} BUZZ`)
    }
    else{
        console.log(`${i} is not divisible by 3 or 5... it aint a fizz of a buzz..... or a flizzbuzzy yo`);
    }

        }


        // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1;

while(i <= 100){
    if(i % 2 !== 0){
        console.log(i)
    }
    i++
}
i = 1;
do{
    if(i % 2 !== 0){
        console.log(i)
    }
    i++
   } while(i <= 100);


   console.log(`do while ex 2 ----------`);

   i = 1;
   do{

    
        if(i % 3 === 0 && i % 5 === 0 ){
            console.log(`${i} FIZZBUZZ`)
        }
        else if(i % 3 === 0){
            console.log(`${i} FIZZ`)
        }
        else if(i % 5 === 0){
            console.log(`${i} BUZZ`)
        }
        else{
            console.log(`${i} is not divisible by 3 or 5... it aint a fizz of a buzz..... or a flizzbuzzy yo`);
        }
            i++
            
   }while(i <= 100);

