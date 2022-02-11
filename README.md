# Micro Functional Programming tools by JavaScript

Simple functional functions common to any development in Typescript or JavaScript.

## Example

```javascript
import {getRandom, range} from 'fnTools.js';

getRandom(0, 6);
// 2

range(4);
// [0, 1, 2, 3, 4]
```

## Install

```shell
npm install micro-fp-tools
```

## Documentation

### Number


- **inc**: Increase the value of a `number`.
- **dec**: Decrease the value of a `number`.
- **getRandom**: Returns a random number from a range, with an optional number of decimal places.

### Array

- **range**: Returns an array with a sequence.
- **uniqValuesArray**: Creates a duplicate-free version of an array.
- **deleteArrayElementByIndex**: Returns a copy of the array by removing one position by index.
- **arraySwapIndex**: Returns a copy of the Array by swapping 2 indices.

### JSON

- **cloneJSON**: Clone JSON.
- **updateJSON**: Returns a JSON with an updated value.

### File

- **getIndexOfFileList**: Returns the index of an Array of Files from its name. If there are multiple files with the same name, the last one will be returned.
- **arrayFilesToFileList**: Returns a FileLists from an array containing Files.
- **encodeFileToText**: Returns a File in text.
- **getUniqFiles**: Returns an Array from the union of 2 Arrays of Files avoiding repetitions.

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
