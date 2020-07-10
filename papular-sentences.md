# Wellcome to Papular Programming Language Sentences (Motivation)

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

## **Difference**

- The two languages are different in many important ways."**JavaScript**" is as related to "**Java**" as "Butter" is to "Butterfly".

## Blame

- When developers encounter confusion, they usually blame the language instead of their lack of understanding.
- Those who do not understand anything. There are three kind of behaviors:
  - They **leave** it
  - They **destroy** it
  - They **make fun** of it

## Syntax

- The rules for valid format and combinations of instructions is called a `computer language`, sometimes referred to as its `syntax`, much the same as English tells you how to `spell` wordsand how to create valid sentences using words and punctuation.

## Understanding to Computer

- A special utility on the computer(either an `interpreter` or a `compiler`) is used to translate the code you write into commands a computer can understand,
  - For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called `interpreting` the code (like **JavaScript**).
  - For other languages, the translation is done ahead of time, called `compiling` the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go (like **C++**).

## Usage

- I recommend to use node instead of browser console to see output(example: node [`file`])
  - Maybe some codes not work correctly. you are free to choose both browser and node.
- Its better and cleaner to use `console.log()` instead of `alert()` function (fast and not annoying) to see output.
- If you want input something to browser (like text box), you can use `prompt` function.
- If you want to be good programmer, always use **comment** between your codes.

## Know About JavaScript

- Values that are included directly in the source code are called **literals**. they are surrounded by double quotes or single quotes ("string" or 'string').
- The `//` single-line **comment** is appropriate if you're going to put a comment right above a single statement, or even at the end of a line.
- The `/* .. */` multiline **comment** is appropriate if you have several lines worth of explanation to make in your comment.
- JavaScript uses dynamic typing, meaning variables can hold values of any type without any type enforcement.
- Unlike most other statements like `console.log`(amount);, a block statement does not
need a semicolon ( ; ) to conclude it.
- Some values are called **falsy**, like **0** and **""**.
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
  - for example: let a = 23;
  - `let b = (a > 20) ? "i'm older" : "i'm younger";`
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

- I recommend to use "**use strict**". because its fury and have strict behavior. for example: if you write `a = 10`, compiler will use strict behavior a saying to us: `ReferenceError: a is not defined`. with strict mode is disallowing the implicit auto-global variable declaration from omitting the `var`.
  - Adhering to strict mode makes your code generally more optimizable by the engine.
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
