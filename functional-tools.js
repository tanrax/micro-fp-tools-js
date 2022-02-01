
/**
 * Returns a JSON with an updated value
 * @param {string} key
 * @param {string} newValue
 * @param {JSON} json
 * @returns {JSON}
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
