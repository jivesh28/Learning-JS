const name ="jivesh";
const repoCount=50;

/*
console.log(name + repoCount);  recommended to not use like this
*/
console.log(`hello my name is ${name} and my repositry count is ${repoCount}`);

// declareing a string as key value pair 

const game= new String("Firefighters");
/*
console.log(game[2]);
console.log(game.length);
console.log(game.toUpperCase()); // call by value
console.log(game.charAt(5));
console.log(game.includes("patr"));
console.log(game.substring(2,6));
const str=game.slice(-10,12);
console.log(str);
*/
const str="Jivesh-Batra-se-92";
console.log(str);
console.log(str.trim());
console.log(str.split("-"));
console.log(str.includes("Batra"));
console.log(str.includes("billu"));
console.log(str.replace('-','/'));
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
