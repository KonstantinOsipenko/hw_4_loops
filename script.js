/// exercise 1
for (let i =1; i < 10; i++) {
        if (i% 2) continue
        console.log(i)
    }
 i = 1;
while( i<10 ) { i++
if (i% 2) continue
        console.log(i)
}
i =1;
do { i++
    if (i% 2) continue
    console.log(i)
} while( i < 10)

/// exercise 2
 let userNumber = + prompt ('enter you number to 10');
 let myNumber = Math.floor(Math.random()* 11);
 while(true){
 if (userNumber == myNumber) {
     confirm ('You win'); break;
 } else if ( userNumber == null || userNumber == '')  {
    confirm ('You wanna go?'); break;
        } else if (userNumber != myNumber){ 
            userNumber = + prompt ('try again'); continue; 
        }
 } 

 userNumber = + prompt ('enter you number to 10');
do {
    if (userNumber == myNumber) {
             confirm ('You win'); break;
         } else if ( userNumber == null || userNumber == '')  {
            confirm ('You wanna go?'); break;
                } else if (userNumber != myNumber){ 
                    userNumber = + prompt ('try again'); continue; 
                }
} while (true);

userNumber = + prompt ('enter you number to 10');
 for (let game = true; game == myNumber; game ) {
    if (userNumber == myNumber) {
             confirm ('You win'); break;
         } else if ( userNumber == null || userNumber == '')  { 
            confirm ('You wanna go?'); break;
                } else if (userNumber != myNumber){ 
                    userNumber = + prompt ('try again'); continue; 
                }
 }

/// exercise 3
 userNumber = +prompt('Enter number');
  for(let i = userNumber; userNumber < 100;  userNumber = userNumber + i) {
   console.log(userNumber);
   }

userNumber = +prompt('Enter number');
i=  userNumber;
while( userNumber < 100 ){
    userNumber = userNumber + i;
    console.log(userNumber)
}

userNumber = +prompt('Enter number');
i = userNumber;
do { 
    userNumber= userNumber+i
    console.log(userNumber)
}while(userNumber <100)

userNumber = + prompt('Enter number');
let n = +prompt ('Enter how much reselt you want')
let newArray = [];
for(let i = userNumber; userNumber < 500;  userNumber = userNumber + i) {
        newArray.push(userNumber)
       }
let userNumbers = newArray.splice(0, n)
console.log(userNumbers)