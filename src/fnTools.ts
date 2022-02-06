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
 * getRandom(0, 4)
 * // => 3 (Maybe)
 *
 * getRandom(0, 10, 2)
 * // => 8.31 (Maybe)
 *
 */
export function getRandom(min, max, decimals=0) {
  const minRandom = Math.ceil(min);
  const maxRandom = Math.floor(max);
  return (Math.random() * (maxRandom - minRandom + 1) + minRandom).toFixed(decimals);
}