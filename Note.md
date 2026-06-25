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
