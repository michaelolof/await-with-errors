# Await with Errors

A node module implementation that can be used to cath ES6 promise errors when using the async/await functionality.

## Installation
```
npm install --save https://github.com/michaelolof/await-with-errors/
```


## How to use

```
const [file, err] = await asyncFileRead("file.txt").withErrors();
if( file instanceof Error ) {
  throw new Error("Error occured while reading files").stack
}
console.log( file );
```

## CAUTION

This Library mutates the Promise prototype object. IT SHOULD NOT BE USED IN A LIBRARY OR ANY OTHER THIRD PARTY MODULES. Only use in your own code.
For Third party modules check out: https://github.com/michaelolof/to-await/