# Know about operators

![operator](https://ds055uzetaobb.cloudfront.net/uploads/45ZRExYFsY-operatorsearch-2x300wwhite.gif)

For the assignment operator, we first calculate the value on the right-hand side (source value) of the `=` and then put it into the variable that we specify on the left-hand side (target variable).

Some might prefer to flip the order, so source value on the left and target variable on the right. Don't do that, it doesn't work. For example:

```js
357 = a // Error
```

|Operator|Description|Category|
|:-:|:-:|:-:|
|`=`|Assignment|Assignment|
|`+`|Addition|Math|
|`-`|Subtraction|Math|
|`*`|Multiplication|Math|
|`/`|Division|Math|
|`%`|Percent|Math|
|`**`|Exponentiation|Math|
|`+=`|Compound addition assignment|Compound Assignment|
|`-=`|Compound subtraction assignment|Compound Assignment|
|`*=`|Compound multiplication assignment|Compound Assignment|
|`/=`|Compound division assignment|Compound Assignment|
|`%=`|Compound percent assignment|Compound Assignment|
|`++`|Increment|Increment/Decrement|
|`--`|Decrement|Increment/Decrement|
|`.`|Object property access|Object Property Access|
|`delete`|Object property deletion|Object Property Access|
|`==`|Loose-equals|Equality|
|`===`|Strict-equals|Equality|
|`!=`|Loose not-equals|Equality|
|`!==`|Strict not-equals|Equality|
|`<`|Less than|Comparison|
|`<=`|Less than or loose-equals|Comparison|
|`>`|Greater than|Comparison|
|`>=`|Greater than or loose-equals|Comparison|
|`&&`|And|Logical|
|`||`|Or|Logical|
|`!`|Not-equals|Logical|
|`&`|AND|Bitwise|
|`|`|OR|Bitwise|
|`^`|XOR|Bitwise|
|`~`|NOT|Bitwise|
|`<<`|Left shift|Bitwise|
|`>>`|Right shift|Bitwise|
|`typeof`|Type of a value|Checking|
|`typeof "hamid"`|Returns string|Checking|
|`typeof 3.14`|Returns number|Checking|
|`typeof NaN`|Returns number|Checking|
|`typeof false`|Returns boolean|Checking|
|`typeof [1]`|Returns object|Checking|
|`typeof {}`|Returns object|Checking|
|`typeof new Date()`|Returns object|Checking|
|`typeof null`|Returns object (bug)|Checking|
|`typeof function() {}`|Returns function|Checking|
|`typeof myPet`|Returns undefined (if myPet is not declared)|Checking|
|`in`|Object value access (boolean)|Checking|
|`of`|Object key access |Checking|
|`instanceof`|Object instance cheeck (boolean)|Checking|
|`void`|Set undefined (for removing return)|Void|
