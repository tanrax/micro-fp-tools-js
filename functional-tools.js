
/**
 * Returns a JSON with an updated value
 * @param {string} key
 * @param {string} newValue
 * @param {JSON} json
 * @return {JSON}
 *
 * Example
 * const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 * updateJSON('name', 'maria', person);
 * // {"age": 20, "name": "maria", "pets": ["dog", "cat"]}
 *
 * Others: "modify" in Ramda
 */
function updateJSON(key, newValue, json) {
    // JSON to Array
    return Object.entries(json).map(
        function (row) {
            // Replace value
            return row[0] == key ? row.slice(0, 1).concat(newValue) : row
        }
    ).reduce(
        function (jsonUpdate, valueUpdate) {
            // Array to JSON
            jsonUpdate[valueUpdate[0]] = valueUpdate[1];
            return jsonUpdate;
        }, {});
}

/**
 * Returns an array with a sequence.
 *
 * @param {number} start Beginning of the range.
 * @param {number} stop End of range.
 * @param {number} step Interval between numbers. Default is 1.
 * @return {Array} Sequence.
 */
function range(start, stop=undefined, step=1) {
    const startArray = stop  === undefined ? 0 : start;
    const stopArray = stop  === undefined ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}
