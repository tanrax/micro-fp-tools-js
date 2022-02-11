"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.__esModule = true;
exports.getUniqFiles = exports.encodeFileToText = exports.arraySwapIndex = exports.arrayFilesToFileList = exports.deleteArrayElementByIndex = exports.getIndexOfFileList = exports.getRandom = exports.cloneJSON = exports.uniqValuesArray = exports.updateJSON = exports.range = exports.dec = exports.inc = void 0;
/**
 * Increase the value of a `number`.
 *
 * @param {number} number The number to increase.
 * @param {number} number Increase.
 * @return {number} Returns the decrease.
 * @example
 *
 * inc(4)
 * // => 5
 *
 * inc(5, 3)
 * // => 8
 *
 * inc(7.3)
 * // => 8.3
 *
 */
function inc(number, increase) {
    if (increase === void 0) { increase = 1; }
    return number + increase;
}
exports.inc = inc;
/**
 * Decrease the value of a `number`.
 *
 * @param {number} number - The number to decrease.
 * @param {number} number - Decrease.
 * @return {number} Returns the decrease.
 * @example
 *
 * dec(4)
 * // => 3
 *
 * dec(5, 3)
 * // => 2
 *
 * dec(7.3)
 * // => 6.3
 *
 * dec("foo")
 * // => false
 */
function dec(number, decrease) {
    if (decrease === void 0) { decrease = 1; }
    return number - decrease;
}
exports.dec = dec;
/**
 * Returns an array with a sequence.
 *
 * @param {number} start - Beginning of the range.
 * @param {number} stop - End of range.
 * @param {number} step - Interval between numbers. Default is 1.
 * @return {Array} Sequence.
 * @example
 *
 * range(4)
 * // => [0, 1, 2, 3, 4]
 *
 * range(2, 4)
 * // => [2, 3, 4]
 *
 * range(0, 9, 3)
 * // => [0, 3, 6, 9]
 */
function range(start, stop, step) {
    if (stop === void 0) { stop = null; }
    if (step === void 0) { step = 1; }
    var startArray = stop === null ? 0 : start;
    var stopArray = stop === null ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1 }, function (_, i) { return startArray + (i * step); });
}
exports.range = range;
/**
 * Returns a JSON with an updated value
 * @param {string} key
 * @param {string} newValue
 * @param {JSON} json
 * @return {JSON}
 * @example
 *
 * const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 * updateJSON('name', 'maria', person);
 * // {"age": 20, "name": "maria", "pets": ["dog", "cat"]}
 *
 * Others: "modify" in Ramda
 */
function updateJSON(key, newValue, json) {
    // JSON to Array
    return Object.entries(json).map(function (row) {
        // Replace value
        return row[0] == key ? row.slice(0, 1).concat(newValue) : row;
    }).reduce(function (jsonUpdate, valueUpdate) {
        // Array to JSON
        jsonUpdate[valueUpdate[0]] = valueUpdate[1];
        return jsonUpdate;
    }, {});
}
exports.updateJSON = updateJSON;
/**
 * Creates a duplicate-free version of an array.
 *
 * @param {Array} array - The array to inspect.
 * @return {Array} - Returns the new duplicate free array.
 * @example
 *
 * uniqValuesArray([2, 1, 2, 2])
 * // => [2, 1]
 */
function uniqValuesArray(array) {
    return Array.from(new Set(array));
}
exports.uniqValuesArray = uniqValuesArray;
/**
 * Clone JSON.
 *
 * @param {JSON} json - Object. Default {}.
 * @return {JSON} New object.
 * @example
 *
 * cloneObject({"edad": 23})
 * // => {"edad": 23}
 *
 * cloneObject()
 * // => {}
 *
 */
function cloneJSON(json) {
    return JSON.parse(JSON.stringify(json));
}
exports.cloneJSON = cloneJSON;
/**
 * Return random number.
 *
 * @param {number} min - Minimum number. It is inclusive.
 * @param {number} max - Maximum number. It is inclusive.
 * @param {number} decimals - Number of decimals. Default 0.
 * @return {number}
 * @example
 *
 * getRandom(0, 4)
 * // => 3 (Maybe)
 *
 * getRandom(0, 10, 2)
 * // => 8.31 (Maybe)
 *
 */
function getRandom(min, max, decimals) {
    if (decimals === void 0) { decimals = 0; }
    var minRandom = Math.ceil(min);
    var maxRandom = Math.floor(max);
    return (Math.random() * (maxRandom - minRandom + 1) + minRandom).toFixed(decimals);
}
exports.getRandom = getRandom;
/**
 * Returns the index of an Array of Files from its name. If there are multiple files with the same name, the last one will be returned.
 * @param {string} name - Name file.
 * @param {Array<File>} list - List of files.
 * @return number
 */
function getIndexOfFileList(name, list) {
    return list.reduce(function (position, file, index) { return (file.name === name ? index : position); }, -1);
}
exports.getIndexOfFileList = getIndexOfFileList;
/**
 * Returns a copy of the array by removing one position by index.
 * @param {number} index
 * @param {Array} list
 * @return {Array} list
 * @example
 *
 * deleteArrayElementByIndex(2, ['a', 'b', 'c', 'd'])
 * // => ['a', 'b', 'd']
 */
function deleteArrayElementByIndex(index, list) {
    return list.filter(function (item, itemIndex) { return itemIndex !== index; });
}
exports.deleteArrayElementByIndex = deleteArrayElementByIndex;
/**
 * Returns a FileLists from an array containing Files.
 * @param {Array<File>} filesList
 * @return {FileList}
 */
function arrayFilesToFileList(filesList) {
    return filesList.reduce(function (dataTransfer, file) {
        dataTransfer.items.add(file);
        return dataTransfer;
    }, new DataTransfer()).files;
}
exports.arrayFilesToFileList = arrayFilesToFileList;
/**
 * Returns a copy of the Array by swapping 2 indices.
 * @param {number} firstIndex
 * @param {number} secondIndex
 * @param {Array<any>} list
 * @example
 *
 * arraySwapIndex(0, 2, ['a', 'b', 'c', 'd'])
 * // => ['c', 'b', 'a', 'd']
 */
function arraySwapIndex(firstIndex, secondIndex, list) {
    var tempList = list.slice();
    var tmpFirstPos = tempList[firstIndex];
    tempList[firstIndex] = tempList[secondIndex];
    tempList[secondIndex] = tmpFirstPos;
    return tempList;
}
exports.arraySwapIndex = arraySwapIndex;
/**
 * Returns a File in text.
 * @param {File} file
 * @return {Promise<string>}
 */
function encodeFileToText(file) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, file.text().then(function (text) {
                    return text;
                })];
        });
    });
}
exports.encodeFileToText = encodeFileToText;
/**
 * Returns an Array from the union of 2 Arrays of Files avoiding repetitions.
 * @param {Array<File>} newFiles
 * @param {Array<File>} currentListFiles
 * @return Promise<File[]>
 */
function getUniqFiles(newFiles, currentListFiles) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    Promise.all(newFiles.map(function (inputFile) { return encodeFileToText(inputFile); })).then(function (inputFilesText) {
                        // Check all the files to save
                        Promise.all(currentListFiles.map(function (savedFile) { return encodeFileToText(savedFile); })).then(function (savedFilesText) {
                            var newFileList = currentListFiles;
                            inputFilesText.forEach(function (inputFileText, index) {
                                if (!savedFilesText.includes(inputFileText)) {
                                    newFileList = newFileList.concat(newFiles[index]);
                                }
                            });
                            resolve(newFileList);
                        });
                    });
                })];
        });
    });
}
exports.getUniqFiles = getUniqFiles;
