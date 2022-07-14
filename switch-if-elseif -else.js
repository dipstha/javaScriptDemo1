let userName = 'Rahul';
userName ? console.log(`Hello ${userName}!`) :
console.log ('Hello!');
let userQuestion = 'Is it going to rain today?';
console.log(`${userName} asked ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';

if(randomNumber===0){
  console.log('Magic eight ball says It is certain');
}else if(randomNumber===1) {
 console.log('Magic eight ball says It is decidedly so'); 
}else if(randomNumber===2){
 console.log('Magic eight ball says Reply hazy try again'); 
}else if(randomNumber===3){
 console.log('Magic eight ball says Cannot predict now'); 
}else if(randomNumber===4){
 console.log('Magic eight ball says Do not count on it '); 
}else if(randomNumber===5){
 console.log('Magic eight ball says My sources say no '); 
}else if(randomNumber===6){
 console.log('Magic eight ball says Outlook not so good'); 
}else if(randomNumber===7){
 console.log('Magic eight ball says Signs point to yes '); 
}else{
 console.log('Magic eight ball says invalid input'); 
}

/*switch (randomNumber){
case 1 :
eightBall = 'It is certain';
break;
case 2 :
eightBall = 'It is decidedly so' ;
break;
case 3:
eightBall = 'Reply hazy try again' ;
break;
case 4 :
eightBall = 'Cannot predict now';
break;
case 5 :
eightBall = 'Do not count on it';
break;
case 6 :
eightBall = 'My sources say no';
break;
case  7:
eightBall = 'Outlook not so good';
break;
case 0 :
eightBall = 'Signs point to yes';
break;
}
console.log (`Magic eight ball says ${eightBall}`);*/