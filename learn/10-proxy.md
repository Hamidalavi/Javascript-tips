# Here's a list of handlers you can define on a proxy for a target object/function, and how/when they are triggered:

![proxy](https://res.cloudinary.com/practicaldev/image/fetch/s--kK6pxDCN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/an69durihrjheclh5wy2.png)

- **`get(..)`**: via `[[Get]]`, a property is accessed on the proxy (`Reflect.get(..)`, `.` property operator, or `[ .. ]` property operator). For example, `Reflect.get(o,"hamed")` retrieves `o.hamed`.

- **`set(..)`**: via `[[Set]]`, a property value is set on the proxy (`Reflect.set(..)`, the `=` assignment operator, or destructuring assignment if it targets an object property). For example, `Reflect.set(o,"hamed",23)` essentially performs `o.hamed = 23`.

- **`deleteProperty(..)`**: via `[[Delete]]`, a property is deleted from the proxy (`Reflect.deleteProperty(..)` or `delete`). For example, `Reflect.deleteProperty(o,"hamed")` essentially performs `delete o.hamed`.

- **`apply(..)` (if target is a function)**: via `[[Call]]`, the proxy is invoked as a normal function/method (`Reflect.apply(..)`, `call(..)`, `apply(..)`, or the `(..)` call operator). For example, `Reflect.apply(hamed,thisObj,[23,"hamid"])` calls the `hamed(..)` function with `thisObj` as its `this`, and passes in the `23` and `"hamid"`.

- **`construct(..)` (if target is a constructor function)**: via `[[Construct]]`, the proxy is invoked as a constructor function (`Reflect.construct(..)` or `new`). For example, `Reflect.construct(hamed,[23,"hamid"])` essentially calls `new hamed(23,"hamid")`.

- **`getOwnPropertyDescriptor(..)`**: via `[[GetOwnProperty]]`, a property descriptor is a property descriptor is(`Object.getOwnPropertyDescriptor(..)` or `Reflect.getOwnPropertyDescriptor(..)`).

- **`defineProperty(..)`**: via `[[DefineOwnProperty]]`, a property descriptor is set on the proxy (`Object.defineProperty(..)` or `Reflect.defineProperty(..)`).

- **`getPrototypeOf(..)`**: via `[[GetPrototypeOf]]`, the `[[Prototype]]` of the proxy is retrieved (`Object.getPrototypeOf(..)`, `Reflect.getPrototypeOf(..)`, `__proto__`, `Object#isPrototypeOf(..)`, or `instanceof`).

- **`setPrototypeOf(..)`**: via `[[SetPrototypeOf]]`, the `[[Prototype]]` of the proxy is set (`Object.setPrototypeOf(..)`, `Reflect.setPrototypeOf(..)`, or `__proto__`).

- **`preventExtensions(..)`**: via `[[PreventExtensions]]`, the proxy is made non-extensible (`Object.preventExtensions(..)` or `Reflect.preventExtensions(..)`).

- **`isExtensible(..)`**: via `[[IsExtensible]]`, the extensibility of the proxy is probed (`Object.isExtensible(..)` or `Reflect.isExtensible(..)`).

- **`ownKeys(..)`**: via `[[OwnPropertyKeys]]`, the set of owned properties and/or owned symbol properties of the proxy is retrieved (`Object.keys(..)`, `Object.getOwnPropertyNames(..)`, `Object.getOwnSymbolProperties(..)`, `Reflect.ownKeys(..)`, or `JSON.stringify(..)`).

- **`enumerate(..)`**: via `[[Enumerate]]` , an iterator is requested for the proxy's enumerable owned and **inherited** properties (`Reflect.enumerate(..)` or `for..in`).

- **`has(..)`**: via `[[HasProperty]]`, the proxy is probed to see if it has an owned or **inherited** property (`Reflect.has(..)`, `Object#hasOwnProperty(..)`, or `"prop" in obj`). For example, `Reflect.has(o,"foo")` essentially performs `"foo" in o`.

Read and fully understand with this link:
<https://2ality.com/2014/12/es6-proxies.html#invariants>
