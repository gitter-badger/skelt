## Skelt Graph

```js
// define a graph which write hello.txt
const sg = new SkeltGraph();
const helloNode = sg.constant("Hello, world");
const pathNode = sg.constant("./hello.txt");
const writer = sg.writeFile(pathNode, helloNode);

// execute a node and then, hello.txt will be written.
writer.execute(); // or sg.execute(writer);

// if you want to access to the value in a node, use this.
console.log(helloNode.getValue()); // or sg.getValue(helloNode);

```

SkeltGraph's method returns SkeltNode instance.
And All arguments excluding option of SkeltGraph's method must be SkeltNode instance. But you dont have to care about it because you can use this method very easily.

```js

```

### Basic

- Constant
```js
sg.constant(any);
// Returns: any = string, int, func or object.....
```

- Variable
```js
sg.variable(any);
// Returns: any = string, int, func or object.....
```

- Add
```js
sg.add(a, b);
// a, b: any type which can handle + operation
// Returns: a + b
```

- Subtract
```js
sg.sub(a, b);
// a, b: any type which can handle - operation
// Returns: a - b
```

### File IO

- Is Exist File or Directory
```js
sg.isExist(path);
// path: file/dir path
// Returns: boolean
```

- Make Directory
```js
sg.makeDir(path, dirname);
// path: path
// dirname: dir name which you want to make
// Returns: false / dirPath

// This method makes dir in path.
// like this: $ mkdir <path>/<dirname>
// If succeeded to make dir, then returns <path>/<dirname>.
// else returns false.
```

- Read File
```js
sg.readFile(path);
// path: file path
// Returns: string in file. not buffer.
```

- Write File
```js
sg.writeFile(path, data);
// path: file path
// data: data in file
// Returns: data

// This mathod writes/overwrites file.
```

### Logic

- If
```js
sg.if(a, b);
// a, b: any
// Returns: false / b's value

// if a == true, then b will be excuted and return b's value.
```

### String

### Unix
