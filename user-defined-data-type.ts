var firstArray: number[] = [1, 2, 3, 4, 5];
// console.log(firstArray);

var secondArray: number[] = [1, 2, 3, 4, 5];
// console.log(secondArray);

var skills: string[] = [];
// console.log(skills);

skills[0] = "Angular";
skills[1] = "React";
// console.log(skills);

skills.push("Typescript");

// console.log(skills);

var scores: (string | number)[];
scores = ["Math", 40, "English", 50];

// console.log(scores);

let house: [string, number];

house = ["White", 123];
house = ["White", 32];

// console.log(house);

let httpStatus: [code: number, message: string];
httpStatus = [404, "Not Found"];
// console.log(httpStatus);

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

//  console.log(StatusCode);

enum Direction {
  North = "North",
  East = "East",
  West = "West",
  South = "South",
}

//  console.log(Direction);

//

interface Person {
  name: string;
  age: number;
}

var obj: Person = { name: "Kritbovorn", age: 53 };
console.log(obj);

type charName = string | number;
var studentName: charName;
var studentAddress: charName;
var studentAge: charName;

studentName = "Vishal";
studentAddress = "Mumbai";
studentAge = 21;

var keyword: "enter" | "backspace" | "shift";
keyword = "enter";
keyword = "backspace";
keyword = "shift";

var code: any = 123;
var empCode = <number>code;
var employeeCode = code as number;
console.log(typeof employeeCode);
console.log(typeof empCode);

let channelName;
channelName = "FEDLearning";
console.log((<string>channelName).length);

console.log((channelName as string).length);
