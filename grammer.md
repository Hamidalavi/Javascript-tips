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
console.log(reza);
console.log(ali);
```

The expression `ali++` has two separate behaviors. First, it returns the current value of `ali` which is `22` (which then gets assigned to `reza`). But next, it changes the value of `ali` itself, incrementing it by one.
