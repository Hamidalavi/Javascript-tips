# Complete Guide to True and False

![true](https://images.squarespace-cdn.com/content/v1/5bca2930b10f255d8de05742/1545963864439-K3RWS3CB89DU8WJEF73J/ke17ZwdGBToddI8pDm48kP06O0_IHyRXSOOiqwgWaApZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFHIqmxI_0pcTUDogXAWwqKp4jRXQsGcy-QRtPj7UsSJGbSd6kfRtgWHgNMDgGnmDY/true_false.gif)

```js
"0" == null; // false
"0" == undefined; // false
"0" == false; // true
"0" == NaN; // false
"0" == 0; // true
"0" == ""; // false
```

```js
false == null; // false
false == undefined; // false
false == NaN; // false
false == 0; // true
false == ""; // true
false == []; // true
false == {}; // false
```

```js
"" == null; // false
"" == undefined; // false
"" == NaN; // false
"" == 0; // true
"" == []; // true
"" == {}; // false
```

```js
0 == null; // false
0 == undefined; // false
0 == NaN; // false
0 == []; // true
0 == {}; // false
```

```js
22 == "23"; // false
22 < "23"; // true
"hamed" == 23; // false
"true" == true; // false
22 == "22"; // true
"hamid" == ["hamid"]; // true
```

```js
[] == ![]; // true
2 == [2]; // true
"" == [null]; // true

let hamed = [ 22 ];
let hamid = [ "23" ];
hamed < hamid; // true
hamid < hamed; // false
```

```js
let hamed = ["22"];
let hamid = ["023"];
hamed < hamid; // false

let ali = [2, 2];
let reza = [0, 2, 3];
ali < reza; // false
```

```js
0 == "\n"; // true
```

```js
let hamed = { a: 22 };
let hamid = { a: 23 };
console.log(hamed < hamid); // false
```

See above snippet! `hamed < hamid` is also `false` because `hamed` becomes `[object Object]` and `hamid` becomes `[object Object]`, and so clearly `hamed` is not lexicographically less than `hamid`. See another:

```js
let ali = { a: 22 };
let reza = { a: 23 };
ali < reza; // false
ali == reza; // false
ali > reza; // false
ali <= reza; // true
ali >= reza; // true
```

**Note**: `a >= b` is not means **a greater than b**. It means `!(a > b)`. So `ali <= reza` or `ali >= reza` are `true`.

```js
let hamed = [22];
let hamid = "023";
hamed < hamid; // false -- string comparison!
Number(hamed) < Number(hamid); // true -- number comparison!
```

```js
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]" (0 in old)
```

Not `true` and `false`. but useful.
