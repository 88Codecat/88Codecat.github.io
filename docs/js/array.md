# 数组
很多时候我们发现需要 **有序集合**，里面的元素都是按顺序排列的。例如，我们可能需要存储一些列表，比如用户、商品以及 HTML 元素等。
使用对象就不是很方便了，因为对象不能提供管理元素顺序的方法。我们不能在已有的元素“之间”插入一个新的属性。这种场景下对象就不太适用了。

数组（Array）是 JavaScript 中的一种重要数据结构，它能存储有序的集合。

## 数组的概念

1.  **有序集合**：数组是一种可以按顺序存储多个元素的数据结构。在 JavaScript 中，数组的索引从0开始，元素可以通过数组的索引来访问。
1.  **动态大小**：JavaScript 的数组可以动态调整大小。可以随时向数组添加或删除元素，无需事先定义数组的大小。
1.  **支持不同数据类型**：JavaScript 的数组可以包含不同类型的数据，包括数字、字符串、对象、甚至其他数组。

## 数组的意义和作用

1.  **便捷的元素存取**：数组提供了有效的方式来存储和访问多个相关数据。通过索引，可以快速地获取任意一个元素，这在处理集合数据时非常高效。
1.  **序列化**：数组的有序特性使得它非常适合表示像列表、队列、栈等数据结构，特别是在需要保持元素顺序的情况下，例如用户的购物车列表、待办事项或者文件路径等。
1.  **内置方法的支持**：JavaScript 数组提供了多种内置方法，如 `push`、`pop`、`shift`、`unshift`、`map`、`filter`、`reduce` 等，能够方便地对数组进行操作，包括添加、删除、遍历和变换元素。
1.  **遍历和操作**：数组可以使用 `for` 循环、`forEach` ， `for...of` 循环来操作数组中的每一个元素。
1.  **灵活的数据管理**：数组在内存中是连续存储的，这使得它们具有更好的局部性原理，访问速度较快。对于需要频繁操作数据的场景，使用数组可以提高程序的性能。

## 声明

创建一个空数组有两种语法：

```js
let arr = new Array();
let arr = [];
```
数组元素从 0 开始编号

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

替换元素

```js
fruits[2] = 'Pear'; // 现在变成了 ["Apple", "Orange", "Pear"]
```

向数组新加一个元素（动态增加）

```js
fruits[3] = 'Lemon'; // 现在变成 ["Apple", "Orange", "Pear", "Lemon"]
```

`length` 属性的值是数组中元素的总个数（数组长度）

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3
```
数组可以存储任何类型的元素


```js
// 混合值
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// 获取索引为 1 的对象然后显示它的 name
alert( arr[1].name ); // John

// 获取索引为 3 的函数并执行
arr[3](); // hello
```
## 获取最后一个元素

假设我们想要数组的最后一个元素。 `fruits[-1]`。在 JavaScript 中这行不通。结果是 `undefined`，因为方括号中的索引是被按照其字面意思处理的。

### 显式地计算元素索引
我们可以显式地计算最后一个元素的索引，然后访问它：`fruits[fruits.length - 1]`。

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum
```
### 使用 “at” 获取最后一个元素

这是一个最近添加到 JavaScript 的特性。 旧式浏览器可能需要 polyfills
```js
let fruits = ["Apple", "Orange", "Plum"];

// 与 fruits[fruits.length-1] 相同
alert( fruits.at(-1) ); // Plum
```

`arr.at(i)`：

-   如果 `i >= 0`，则与 `arr[i]` 完全相同。
-   对于 `i` 为负数的情况，它则从数组的尾部向前数。