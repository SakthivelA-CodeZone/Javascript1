

if(false) {
    console.log("take an umbrella.");
}
else {
    console.log("no need to take an umbrella.");
}

if (true) {
    console.log("Great job!");
}
else {
    console.log("You need to work harder.");
}

console.log(false || true);



console.log(!true);

var color="green";

if (color == "red"){
    console.log("stop");
}
else if (color == "yellow"){
    console.log("get ready");
}
else{
    console.log("go");
}


var season="winter";

if (season == "spring"){
    console.log("The season is spring");
}
else if (season == "summer"){
    console.log("The season is summer");  
}  
else if (season == "autumn"){
    console.log("The season is fall");
}
else if (season == "winter"){
    console.log("The season is winter");
}
else{
    console.log("Unknown season");
}

score=76
if (score >= 90 && score <=100){
    console.log("Grade A");
}
else if (score >= 80){
    console.log("Grade B");
}
else if (score >= 70 && score < 80){
    console.log("Grade C");
}
else if (score >= 60 && score < 70){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

num=35

if (num%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

let str = "Hello123@World!";
let v = 0, c = 0, d = 0, s = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();

  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    v++;
  }
  else if (ch >= 'a' && ch <= 'z') {
    c++;
  }
  else if (ch >= '0' && ch <= '9') {
    d++;
  }
  else {
    s++;
  }
}

console.log("Vowels: " + v);
console.log("Consonants: " + c);
console.log("Digits: " + d);
console.log("Special characters: " + s);


for(count=0;count<5;count++){
    console.log("SAKTHIVEL");
}


//for( i=1;i<=100;i++){
 //   console.log("The Length is: " , i);
//}


for( i=100;i>=1;i--){
    console.log("The Length is: " , i);
}



for(i=12;i<=120;i+=12){
 
    console.log(" " , i);

}   

var ran = Math.random()

console.log(ran)