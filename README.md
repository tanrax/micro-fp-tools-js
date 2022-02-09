# fnTools

Simple functional functions common to any development in Typescript or JavaScript.

- **inc**: Increase the value of a `number`.
- **dec**: Decrease the value of a `number`.
- **range**: Returns an array with a sequence.
- **uniqValuesArray**: Creates a duplicate-free version of an array.
- **cloneJSON**: Clone JSON.
- **updateJSON**: Returns a JSON with an updated value.
- **getRandom**: Returns a random number from a range, with an optional number of decimal places.
- **getIndexOfFileList**: Returns the index of an Array of Files from its name. If there are multiple files with the same name, the last one will be returned.

## Example

```javascript
import * as fn from 'fnTools.js';

fn.getRandom(0, 6);
// 2

fn.range(4);
// [0, 1, 2, 3, 4]
```

## CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/tanrax/fn-js/dist/fnTools.min.js"></script>
```

## Compile

Install Typescript

```shell
npm install -g typescript
```

And build.

```shell
make build
````

Check 'dist' folder.
