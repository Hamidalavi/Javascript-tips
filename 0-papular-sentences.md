# Wellcome to Papular Programming Language Sentences (Motivation)

## Note: Our variable declaration names: Hamid, Hamed, Ali, Reza, Majid, Mehrdad, Morteza

### Read priority: 1. papular-sentences.md 2. this-example.md 4. object-example.md 4. type.md 5. compelte-guide-true-false.md 6. grammer.md 7. async.md 8. performance.md

## **Difference**

The two languages are different in many important ways. "**JavaScript**" is as related to "**Java**" as "Butter" is to "Butterfly".

## Blame

- When developers encounter confusion, they usually blame the language instead of their lack of understanding.
- Those who do not understand anything. There are three kind of behaviors:
  - They **leave** it
  - They **destroy** it
  - They **make fun** of it

## Syntax

The rules for valid format and combinations of instructions is called a **computer language**, sometimes referred to as its **syntax**, much the same as English tells you how to **spell** wordsand how to create valid sentences using words and punctuation.

## Understanding to Computer

- A special utility on the computer(either an `interpreter` or a `compiler`) is used to translate the code you write into commands a computer can understand.
  - For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called `interpreting` the code (like **JavaScript**).
  - For other languages, the translation is done ahead of time, called `compiling` the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go (like **C++**).

## thread

**JavaScript** is sigle thread.

## How Does a Compilation(Compiling) Work (from YDKJS)

1. **Tokenizing/Lexing**: breaking up a string of characters into meaningful (to the language) chunks, called tokens. For instance, consider the program: `var a = 2;`. This program would likely be broken up into the following tokens: var , a , = , 2 , and ; . **Whitespace** may or may not be persisted as a token, depending on whether it's meaningful or not. **`Note`**: The difference between **tokenizing** and **lexing** is subtle and academic, but it centers on whether or not these tokens are identified in a stateless or stateful way. Put simply, if the tokenizer were to invoke stateful parsing rules to figure out whether a should be considered a distinct token or just part of another token, that would be **lexing**.
2. **Parsing**: taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This tree is called an "**AST**" (**Abstract Syntax Tree**).
   - The tree for `var a = 2;` might start with a top-level node called `VariableDeclaration`, with a child node called `Identifier` (whose value is a ), and another child called `AssignmentExpression` which itself has a child called NumericLiteral (whose value is 2).
3. **Code-Generation**: the process of taking an **AST** and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, etc.

- Two distinct actions are taken for a variable assignment: First, **Compiler** declares a **variable** (if not previously declared in the current scope), and second, when executing, Engine looks up the **variable** in `Scope` and assigns to it, if found.

## Usage

- We recommend to use node instead of browser console to see output(example: node [`file`])
  - Maybe some codes not work correctly. you are free to choose both browser and node.
- Its better and cleaner to use `console.log()` instead of `alert()` function (fast and not annoying) to see output.
- If you want input something to browser (like text box), you can use `prompt` function.
- If you want to be good programmer, always use **comment** between your codes.

## Know About JavaScript (just pointing to base with simple informations)

- Values that are included directly in the source code are called **literals**. they are surrounded by double quotes or single quotes ("string" or 'string').
- The `//` single-line **comment** is appropriate if you're going to put a comment right above a single statement, or even at the end of a line.
- The `/* .. */` multiline **comment** is appropriate if you have several lines worth of explanation to make in your comment.
- JavaScript uses dynamic typing, meaning variables can hold values of any type without any type enforcement.
- Unlike most other statements like `console.log`(amount);, a block statement does not
need a semicolon ( ; ) to conclude it.
- Some values are called **falsy**, like **0** and **" "**.
- A loop includes the test condition as well as a block (typically as { .. } ). Each time the loop block executes, that's called an **iteration**.
  - if you don't want using value increment manually, you can use **loop** or **conditions**.
- **Scope** meaning: If you ask the phone store employee for a phone model that her store doesn't carry, she will not be able to sell you the phone you want. She only has access to the phones in her store's inventory. You'll have to try another store to see if you can find the phone you're looking for.
  - Only code inside that function can access that function's scoped variables.
- **JavaScript** has typed values, not typed variables.
  - Only values have types in **JavaScript**; variables are just simple containers for those values.
- Type of `null` is an interesting case, because it errantly returns **"object"**.
- An **array** is an **object** that holds values of any type.
- The difference between **==** (loose-equals) and **===** (strict-equals) is usually characterized that == checks for **value** equality and === checks for both **value** and **type** equality.
- **Array**s are by default coerced to string s by simply joining all the values with commas (,) in between. You might think that two array s with the same contents would be **==** equal, but they're not:
  - var a = [1,2,3];
  - var b = [1,2,3];
  - var c = "1,2,3";
    - a == c; // true
    - b == c; // true
    - a == b; // false
- In **inequality** (< , > and etc.), if one or both is not a **string**, then both values are coerced to be **number**, and a typical numeric comparison occurs.
- You use the **var** keyword to declare a **variable** that will belong to the current function **scope**, or the **global scope** if at the top level outside of any **function**.
- **Ternary operator** is most useful. its abbreviated from if and else.
  - for example: var a = 23;
  - `var b = (a > 20) ? "i'm older" : "i'm younger";`
  - its mean: if 23 > 20, print "i'm older", else print "i'm younger".
    - Before ternary operator, we must wrote:

      ```js
      if (a > 20) {
          b = "i'm older";
      }
      else {
          b = "i'm younger";
      }
      ```

- We recommend to use "**use strict**". because its fury and have strict behavior. for example: if you write `a = 10`, compiler will use strict behavior a saying to us: `ReferenceError: a is not defined`. with "strict mode" is disallowing the implicit auto-global variable declaration from omitting the `var`.
  - Adhering to "strict mode" makes your code generally more optimizable by the engine.
- There's another way to execute a **function** expression, which is typically referred to as an immediately invoked function expression (IIFE).

  ```js
  (function example() {
    console.log("Hello!!");
  })(); // output: Hello!! function with execution
  ```

- Use **closure** techniques for better to understand coding. its like finding blocks that stacked. (for more information go to my brother page: **<https://github.com/Hamed2012-dr>**)

  ```js
  function addition(x) {
    function add(y) {
        return y + x;
    };
    return add;
  }
  ```

  ```js
  var addOne = addition( 1 );
  var addTen = addition( 10 );
  ```

   1. When we call `addition(1)` , we get back a reference to its inner `add(..)` that remembers x as 1 . We call this function reference `addONe(..)`.
   2. When we call `addition(10)` , we get back another reference to its inner `add(..)` that remembers x as 10 . We call this function reference `addTen(..)`.
   3. When we call addOne(3) , it adds 3 (its inner y ) to the 1 (remembered by x ), and we get 4 as the result.
   4. When we call addTen(13), it adds 13 (its inner y ) to the 10 (remembered by x ), and we get 23 as the result.
- Objects are interesting. you can add cutom property in object, even if there is no property in it.
  - For example:

    ```js
    let obj = { hamed: 23, ali: 22 };
    obj.reza = 26;
    console.log(obj);
    output: { hamed: 23, ali: 22, reza: 26 }
    ```

- Read more about **transpiling** from sites. Here's a quick example of **transpiling**:

  ```js
  // new ES6 (default parameter value)
  (function hamed(a = 23) {
    console.log(a);
  })();

  // pre-ES6
  function hamid() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 23;
    console.log(a);
  }
  hamid();
  // void 0 means undefined
  ```

- Debunking the common misconception that **JavaScript** is an "interpreted language" and therefore not compiled. `Nope`. The **JavaScript** engine compiles your code right before [and sometimes during] execution.
- You can use `console.table(array)` to see array visually. like below:

  ```js
  (function hamed(a = 23) {
      console.table([a, "Hamid"]);
  })();

  // output:
  ┌─────────┬─────────┐
  │ (index) │ Values  │
  ├─────────┼─────────┤
  │    0    │   23    │
  │    1    │ 'Hamid' │
  └─────────┴─────────┘
  ```

- Both `eval(..)` and `with` are affected (restricted) by **Strict Mode**.
  - they are not good for performance.
- **IFEI** (Invoking Function Expressions Immediately): The first enclosing () pair makes the function an expression, and the second () executes the function.
  - **IIFE**: Immediately Invoked Function Expression it used to be very common. you can use both expressions.
  - Firstly, the performance of `try/catch` is slower, but there's no reasonable assumption that it has to be that way, or even that it always will be that way. Since the official TC39-approved ES6 transpiler uses performance of `try/catch`, the Traceur team has asked Chrome to improve the `try/catch`, and they are obviously motivated to do so.
  - Secondly, **IIFE** is not a fair apples-to-apples comparison with `try/catch`, because a function wrapped around any arbitrary code changes the meaning, inside of that code, of `this`, `return`, `break`, and `continue`. **IIFE** is not a suitable general substitute. It could only be used manually in certain cases.
- Declarations made with **`let`** will not hoist to the entire scope of the block they appear in. Such declarations will not observably "exist" in the block until the declaration statement.
  - Function declarations are hoist. But function expressions are not.
  - Functions are hoisting first, and then variables.

    ```js
      foo(); // "b"
      var a = true;
      if (a) {
      function foo() { console.log( "a" ); }
      }
      else {
      function foo() { console.log( "b" ); }
      }
    ```

  - While multiple/duplicate `var` declarations are effectively ignored, subsequent function declarations do override previous ones. For example:

    ```js
      hamed(); // 3
      function hamed() {
        console.log(1);
      }
      var hamed = () => {
        console.log(2);
      };
      function hamed() {
        console.log(3);
      }
      ```

  - Be careful about duplicate declarations, especially mixed between normal `var` declarations and function declarations; **peril awaits if you do!**

- Two declaration keyword `let` (a cousin to the `var` keyword) and `const` both are **block scope**.

  ```js
  {
    console.log(hamed); // ReferenceError!
    let hamed = 23;
  }
  ```

- **JavaScript** does not, in fact, have **dynamic** scope. It has **lexical** scope.
  - The key contrast: **lexical** scope is **write-time**, whereas **dynamic** scope (and `this`) are **runtime**.

## LHS/RHS (Left Hand Side/Right Hand Side)

It means **Right/Left Hand Side**  Of an assignment operation (=). If you want understand this section, try meaning this like: "who's the target of the **assignment** (LHS)" and "who's the source of the assignment (RHS)" (a = 23);

We also can explain LHS/RHS is **functions**:

For example:

  ```js
  (function hamed(a = 23) {
    console.log(a)
})();
  ```

In this example, its like a = 23;

- You may have missed the implied `a = 2` in this code snippet. It happens when the value `2` is passed as an argument to the `foo(..)` **function**, in which case the 2 value is assigned to the parameter `a`. To (implicitly) assign to parameter `a`, an **LHS** look-up is performed.
- There's also an **RHS** reference for the value of `a`, and that resulting value is passed to `console.log(..)`. `console.log(..)` needs a reference to execute. It's an **RHS** look-up for the `console` object, then a property-resolution occurs to see if it has a method called `log`.

You might be tempted to conceptualize the function declaration `function foo(a) {`... as a normal variable **declaration** and **assignment**, such as `var foo` and `foo = function(a) {`... . In so doing, it would be tempting to think of this function declaration as involving an LHS look-up.

- Unfulfilled **RHS** references result in `ReferenceError`s being thrown (show). **LHS** too.

## Modules

```js
You can use import and export for importing and exporting files (modules)
```
