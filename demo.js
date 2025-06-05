// let messageDemo = 'Hello World';
// console.log(messageDemo, "Hello World again, nice to meet you 👏");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var undefineVariable;
("su");
console.log(" \uD83C\uDF89 \uD83C\uDF89 \uD83C\uDF89 \uD83C\uDF89 \uD83C\uDF89 Successfully  ".concat(undefineVariable));
function getFirst(arr) {
    return arr[0];
}
function getString(str) {
    console.log(str);
    return str;
}
function getNumber(num) {
    console.log(num);
    return num;
}
function getBoolean(bool) {
    console.log(bool);
    return bool;
}
getBoolean(true);
function getItemGeneric(item) {
    console.log(item);
    return item;
}
getItemGeneric("Hello World");
getItemGeneric(true);
getItemGeneric(120000000);
function getItemGenericConstraint(item) {
    console.log(item);
    return item;
}
getItemGenericConstraint({ name: "Krit" });
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function getTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/todos")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function getUsersType() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
// const datas = getUsersType();
function getItems(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function logDatas() {
    return __awaiter(this, void 0, void 0, function () {
        var users, todos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getItems("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    users = _a.sent();
                    return [4 /*yield*/, getItems("https://jsonplaceholder.typicode.com/todos")];
                case 2:
                    todos = _a.sent();
                    console.log(users);
                    console.log(todos);
                    return [2 /*return*/];
            }
        });
    });
}
// logDatas();
function pair(key, value) {
    return [key, value];
}
var pair1 = pair("hello", 1000);
var convertToArray = function (input) {
    return [input];
};
var getIndexOfArrayItem = function (array, arrayItem) {
    return array.findIndex(function (item) { return item === arrayItem; });
};
var findItemOfArray = function (array, arrayItem) {
    return array.find(function (item) { return item === arrayItem; });
};
var arr = [55, 44, 99, 22, 77];
var indexOfArray = getIndexOfArrayItem(arr, 55);
console.log(indexOfArray);
var itemOfArray = findItemOfArray(arr, 42);
console.log(itemOfArray);
var createArrayPair = function (input1, input2) {
    return [input1, input2];
};
var unionValue;
unionValue = 4444;
console.log(unionValue);
unionValue = "Union Type";
console.log(unionValue);
unionValue = false;
console.log(unionValue);
