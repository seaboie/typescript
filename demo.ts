// let messageDemo = 'Hello World';
// console.log(messageDemo, "Hello World again, nice to meet you 👏");

// 1st rule
// let num: number = 10;
// console.log(num);

// // 2st rule
// let undefineNum: number | undefined;

// // 3st rule
// let findType = 12;
//     console.log(typeof(findType));

// let city;
// console.log(city);

let undefineVariable;
("su");
console.log(` 🎉 🎉 🎉 🎉 🎉 Successfully  ${undefineVariable}`);

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

function getString(str: string): string {
  console.log(str);
  return str;
}

function getNumber(num: number): number {
  console.log(num);
  return num;
}

function getBoolean(bool: boolean): boolean {
  console.log(bool);
  return bool;
}

getBoolean(true);

function getItemGeneric<T>(item: T): T {
  console.log(item);
  return item;
}

getItemGeneric("Hello World");
getItemGeneric(true);
getItemGeneric(120000000);

function getItemGenericConstraint<T extends { name: string }>(item: T): T {
  console.log(item);
  return item;
}

getItemGenericConstraint({ name: "Krit" });

interface User {
  id: string;
  name: string;
}
interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

async function getTodo(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

async function getUsersType(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

// const datas = getUsersType();

async function getItems<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function logDatas() {
  const users = await getItems<User>("https://jsonplaceholder.typicode.com/users");
  const todos = await getItems<Todo>("https://jsonplaceholder.typicode.com/todos");

  console.log(users);
  console.log(todos);
}
// logDatas();

function pair<K extends string, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const pair1 = pair("hello", 1000);

const convertToArray = <T>(input: T): T[] => {
  return [input];
}

const getIndexOfArrayItem = <T>(array: T[] , arrayItem: T): number => {
  return array.findIndex((item) => item === arrayItem);
}

const findItemOfArray = <T>(array: T[], arrayItem: T): T | undefined => {
  return array.find((item) => item === arrayItem);
}


const arr = [55, 44, 99, 22, 77];
const indexOfArray = getIndexOfArrayItem(arr, 55);
console.log(indexOfArray);

const itemOfArray = findItemOfArray(arr, 42);
console.log(itemOfArray);


const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
  return [input1, input2];
}

let unionValue: number | string | boolean;

unionValue = 4444;
console.log(unionValue);

unionValue = "Union Type";
console.log(unionValue);

unionValue = false;
console.log(unionValue);





