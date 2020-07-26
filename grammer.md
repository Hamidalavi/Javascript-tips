# Some **`grammer`** sentences to give you more information

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

**I recommend first read `papular-sentences.md` and `this-example.md` and `object-example.md` and `types.md` and `complete-guide-true-false.md` files**.

We have ugly type function that can use instead of code, that called `eval()`. We don't recommend to use this function. Let's see simple snippet:

```js
let hamed, hamid;
hamed = eval("if (true) {hamid = 20 + 3;}");
console.log(hamed); // 23
```

But its good for print out a value like `console.log()`. For example:

```js
let ali, reza;
console.log(ali = eval("if (true) {reza = 20 + 3;}")); // 23
```

This method is work great. But thanksfully **JavaScript** bring a new proposal for **ES7** called `do expression`. Here's how it might work:

```js
let majid, mehrdad;
majid = do {
    if (true) {
        mehrdad = 20 + 7;
    }
};
console.log(majid); // 27
```

Huh. You got error, it's for **ES7**. But work better than `eval()` ugly function.

Do you know about side effect expression? Here some examples that learn you about that:

```js
function hamed() {
    hamid = hamid + 1;
}

var hamid = 1;
console.log(hamed()); // undefined
```

Let's see below snippet:

```js
let ali = 22;
let reza = ali++;
console.log(reza); // 22
console.log(ali); // 23
```

The expression `ali++` has two separate behaviors. First, it returns the current value of `ali` which is `22` (which then gets assigned to `reza`). But next, it changes the value of `ali` itself, incrementing it by one. See again above snippet (write again):

```js
let ali = 22;
let reza = ali++;
```

Many developers would mistakenly believe that `reza` has value `23` just like `ali` does. But the confusion comes from not fully considering the when of the side effects of the `++` operator. The `++` increment operator and the `--` decrement operator are both unary operators which can be used in either a **postfix** (`after`) position or **prefix** (`before`) position.

```js
let hamed = 23;
console.log(hamed++); // 23
console.log(hamed); // 24
console.log(++hamed); // 25
console.log(hamed); // 25
```

When `++` is used in the prefix position as `++hamed`, its side effect (incrementing `hamed`) happens before the value is returned from the expression, rather than after as with `hamed++`).

Let's see below. Do you think `++hamid++` work?

```js
let hamid = 23;
console.log(++hamid++); // ??
```

If you try, you see `SyntaxError` (or `ReferenceError`). **Q**: But why?

**Answer**: Because side-effecting operators **require a variable reference** to target their side effects to. For `++hamid++`, the `hamid++` part is evaluated first (because of operator precedence), which gives back the value of `hamid` before the increment. But then it tries to evaluate `++23`, which (if you try it) gives the same `SyntaxError` (or `ReferenceError`) error, since `++` can't have a side effect directly on a value like `42`.

There's an option, though: the "`,`" statement-series comma operator. This operator allows you to string together multiple standalone expression statements into a single statement:

```js
let hamed = 23, hamid;
hamid = (hamed++, hamed);
console.log(hamed); // 24
console.log(hamid); // 24
```

**Note**: the `(..)` around `hamed`, `hamed` is required here. The reason is operator precedence.

The expression `hamed++`, `hamed` means that the second `hamed` statement expression gets evaluated after the after side effects of the first `hamed++` statement expression, which means it returns the statement expression, which means it returns the `23` value for assignment to `hamid`.

Let's this example:

```js
let hamed, hamid, ali;
hamed = hamid = ali = 23;
console.log(hamed); // 23
console.log(hamid); // 23
console.log(ali); // 23
```
