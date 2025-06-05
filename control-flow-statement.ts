// console.log('test');

let marks: number = 95;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}

let day = 6;
let dayName: string;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Unknown";
    break;
}

console.log(`Today is : ${dayName}`);

for(let i = 0; i < 10; i++) {

    if(i === 3) continue;
    if(i === 6) break;
    console.log(i);
    
}
console.log(`--------------------------------------------`);
for (let i = 0; i < 5; i++) {
    console.log(i);
    
}

console.log(`--------------------------------------------`);

interface Resume {
    name: string;
    experience: number;
    technology: string;
    [key: string]: any;
}

const resume: Resume = {name: "John Doe", experience: 5, technology: "UI Development"};

for(let item in resume) {
    console.log(item);
    console.log(resume[item]);
    
}
 
console.log(`--------------------------------------------`);

const numbers: number[] = [1, 2, 3, 4, 5];
for (let element of numbers) {
    console.log(element);
}

console.log(`--------------------------------------------`);

// If you want to iterate over the resume object's entries:
for (const [key, value] of Object.entries(resume)) {
    console.log(`${key}: ${value}`);
}

console.log(`--------------------------------------------`);


let i = 0;
while (i <= 7) {
    console.log(i);
    i++;
}

console.log(`--------------------------------------------`);

let j = 0;
do {
    console.log(j);
    j++;
    
} while (j < 5);

console.log(`--------------------------------------------`);


