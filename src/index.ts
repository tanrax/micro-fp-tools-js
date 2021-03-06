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
export function inc(number: number, increase: number=1): number {
  return number + increase;
}


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
export function dec(number: number, decrease: number=1): number {
  return number - decrease;
}


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
export function range(start: number, stop: number | null=null, step: number=1): number[] {
    const startArray = stop  === null ? 0 : start;
    const stopArray = stop  === null ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}


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
export function updateJSON(key: string, newValue: any, json: JSON): JSON {
    // JSON to Array
    return Object.entries(json).map(
        function (row: any[]): any[] {
            // Replace value
            return row[0] == key ? row.slice(0, 1).concat(newValue) : row
        }
    ).reduce(
        function (jsonUpdate: any, valueUpdate: any): JSON {
            // Array to JSON
            jsonUpdate[valueUpdate[0]] = valueUpdate[1];
            return jsonUpdate;
        }, {});
}


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
export function uniqValuesArray(array: any[]): any[] {
    return Array.from(new Set(array));
}


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
export function cloneJSON(json: JSON): JSON {
  return JSON.parse(JSON.stringify(json));
}


/**
 * Return random number.
 *
 * @param {number} min - Minimum number. It is inclusive.
 * @param {number} max - Maximum number. It is inclusive.
 * @param {number} decimals - Number of decimals. Default 0.
 * @return {number}
 * @example
 *
 * random(0, 4)
 * // => 3 (Maybe)
 *
 * random(0, 10, 2)
 * // => 8.31 (Maybe)
 *
 */
export function random(min: number, max: number, decimals: number=0): number {
  const minRandom = Math.ceil(min);
  const maxRandom = Math.floor(max);
  return (Math.random() * (maxRandom - minRandom + 1) + minRandom).toFixed(decimals);
}


/**
 * Returns a list of non-repeating random numbers.
 *
 * @param {number} long - Length.
 * @param {number} list - Initial list.
 * @return {Array<any>}
 * @example
 *
 * getRandom(6)
 * // [ 1, 3, 0, 5, 4, 2 ]
 *
 *
 */
export function randomUniqList(long: number, list=[]: Array<any>): Array<any> {
    return list.length >= long ? list : randomUniqList(long, Array.from(
        new Set(
            list
            .concat(Math.floor(Math.random() * long)))))
}

/**
 * Returns the index of an list of Files from its name. If there are multiple files with the same name, the last one will be returned.
 * @param {string} name - Name file.
 * @param {Array<File>} list - List of files.
 * @return number
 */
export function getIndexOfFileList(name: string, list: Array<File>): number {
    return list.reduce(
        (position, file, index) => (file.name === name ? index : position),
        -1
    );
}

/**
 * Returns a copy of the list by removing one position by index.
 * @param {number} index
 * @param {Array} list
 * @return {Array} list
 * @example
 *
 * deleteArrayElementByIndex(2, ['a', 'b', 'c', 'd'])
 * // => ['a', 'b', 'd']
 */
export function deleteArrayElementByIndex(index: number, list: Array<any>): Array<any> {
    return list.filter((item, itemIndex) => itemIndex !== index);
}

/**
 * Returns a FileLists from an list containing Files.
 * @param {Array<File>} filesList
 * @return {FileList}
 */
export function arrayFilesToFileList(filesList): Filelist {
    return filesList.reduce(function (dataTransfer, file) {
        dataTransfer.items.add(file);
        return dataTransfer;
    }, new DataTransfer()).files;
}

/**
 * Returns a copy of the list by swapping 2 indices.
 * @param {number} firstIndex
 * @param {number} secondIndex
 * @param {Array<any>} list
 * @example
 *
 * arraySwapIndex(0, 2, ['a', 'b', 'c', 'd'])
 * // => ['c', 'b', 'a', 'd']
 */
export function arraySwapIndex(firstIndex: number, secondIndex: number, list: Array<any>): Array<any> {
    const tempList = list.slice();
    const tmpFirstPos = tempList[firstIndex];
    tempList[firstIndex] = tempList[secondIndex];
    tempList[secondIndex] = tmpFirstPos;
    return tempList;
}

/**
 * Returns a copy of the list where an index has been moved to another position.
 * @param {number} indexFrom
 * @param {number} indexTo
 * @param {Array<any>} list
 * @example
 *
 * arrayMoveIndex(2, 0, ['a', 'b', 'c', 'd'])
 * // => ['c', 'a', 'b', 'd']
 */
export function arrayMoveIndex(indexFrom: number, indexTo: number, list: Array<any>): Array<any> {
    // Save value to move
    const moveValue = list[indexFrom];
    // Deletes value to be moved
    const listNotValue = list.filter(
        (currentValue, currentIndex) => currentIndex != indexFrom
    );
    // Concat all fragments: start to position + moveValue + rest array
    return listNotValue
        .slice(0, indexTo)
        .concat(moveValue, listNotValue.slice(indexTo));
}


/**
 * Returns a File in text.
 * @param {File} file
 * @return {Promise<string>}
 */
export async function encodeFileToText(file: File): Promise<string> {
    return file.text().then((text) => {
        return text;
    });
}

/**
 * Returns an Array from the union of 2 Arrays of Files avoiding repetitions.
 * @param {Array<File>} newFiles
 * @param {Array<File>} currentListFiles
 * @return Promise<File[]>
 */
export async function getUniqFiles(newFiles: Array<File>, currentListFiles: Array<File>): Promise<File[]> {
    return new Promise((resolve) => {
        Promise.all(newFiles.map((inputFile) => encodeFileToText(inputFile))).then(
            (inputFilesText) => {
                // Check all the files to save
                Promise.all(
                    currentListFiles.map((savedFile) => encodeFileToText(savedFile))
                ).then((savedFilesText) => {
                    let newFileList = currentListFiles;
                    inputFilesText.forEach((inputFileText, index) => {
                        if (!savedFilesText.includes(inputFileText)) {
                            newFileList = newFileList.concat(newFiles[index]);
                        }
                    });
                    resolve(newFileList);
                });
            }
        );
    });
}
