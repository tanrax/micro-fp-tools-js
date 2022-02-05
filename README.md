# fnTools

Simple functional functions common to any development in Typescript or JavaScript.

- **inc**: Increase the value of a `number`.
- **dec**: Decrease the value of a `number`.
- **range**: Returns an array with a sequence.
- **uniqValuesArray**: Creates a duplicate-free version of an array.
- **cloneJSON**: Clone JSON.
- **updateJSON**: Returns a JSON with an updated value.

## Example

```typescript
import * as fn from 'fnTools'

fn.range(4);
// [0, 1, 2, 3, 4]
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