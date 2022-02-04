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
/**
 * Returns an array with a sequence.
 *
 * @param {number} start - Beginning of the range.
 * @param {number} stop - End of range.
 * @param {number} step - Interval between numbers. Default is 1.
 * @return {Array} Sequence.
 * @example
 *
 * range(1, 4)
 * // => [1, 2, 3, 4]
 */
function range(start, stop = null, step = 1) {
    const startArray = stop === null ? 0 : start;
    const stopArray = stop === null ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1 }, (_, i) => startArray + (i * step));
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
function uniqValuesArray(array) {
    return (array != null && array.length)
        ? Array.from(new Set(array))
        : [];
}
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
 * dec(7.3)
 * // => 8.3
 *
 */
function inc(number, increase = 1) {
    return number - increase;
}
/**
 * Decrease the value of a `number`.
 *
 * @since 4.17.15
 * @category Math
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
function dec(number, decrease = 1) {
    return number - decrease;
}