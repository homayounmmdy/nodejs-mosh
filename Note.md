## Global Object

Object or function that available everywhere

we things like this in window

- log
- setTimeout()
- clearTimeout()
- setInterval()
- clearInterval()

in node we have globalThis

## Module

for stop rewriting do not put functions in global scope

every project has main file for all modules

> in node every file is a module

## Module Wrapper Function

In Node.js, the **Module Wrapper Function** is an automatic function that wraps every module's code before execution. It provides module-scoped variables like `exports`, `require`, `module`, `__filename`, and `__dirname`, ensuring that top-level variables remain private to that module. This wrapper also prevents polluting the global scope and allows Node to manage module loading and caching effectively.

## Path Module

```js
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);
```

## OS Module

```js
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory  = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
```

## File System Module

```js
const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("$", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
```

## EVENT

A signal that something has happened

```js
const EventEmitter = require("events");

const Logger = require("../logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log('message');
```

```js
const EventEmitter = require("events");

var url = "https://mylogger.io/log";

class Logger extends EventEmitter {

    log(message) {
      // Send an HTTP request
      console.log(message);
    
      // Raise an event
      this.emit("messageLogged", { id: 1, url: "http://" });
    }
}

module.exports = Logger;
```