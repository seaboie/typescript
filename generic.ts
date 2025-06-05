function getFirstElement<T>(array: T[]): T {
    return array[1];
}

let numbers: number[] = [1, 2, 3];
const firstNumber = getFirstElement(numbers);

console.log(firstNumber);

let strings: string[] = ["abc", "def", "ghi"];
const firstString = getFirstElement(strings);

console.log(firstString);

console.log(`--------------------------------------------`);

const nestMap = new Map<string, Map<string, number>>();

const innerMap = new Map<string, number>();
innerMap.set("def", 7);

nestMap.set("abc", innerMap);
console.log(nestMap.get("abc")?.get("def"));

console.log(`--------------------------------------------`);

