# Complete Guide to True and False

## Telegram = **<https://t.me/Hamidalavi6540>**

## Instagram = **<https://www.instagram.com/Hamidalavi6540>**

## Twitter = **<https://twitter.com/HamidAlavi6540>**

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
```

```js
0 == "\n"; // true
```
