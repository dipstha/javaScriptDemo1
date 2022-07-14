let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = true;
let age = 18;

if (age > 18 && earlyRegister){
  raceNumber += 1000;
}
if(age > 18 && earlyRegister){
  console.log(`your race starts at 9:30 and this is your ${raceNumber}`);
}
else if (age > 18 && !earlyRegister){
  console.log(` Your race starts at 11:00 am and ${raceNumber} is your race number.`);
}
else if (age < 18 ){
  console.log(`Your race starts at 12:30 pm and ${raceNumber} is your race number`);
}
else{
  console.log('please proceed to the registration desk');
}