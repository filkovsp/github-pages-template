---
layout: slide
title: Variables and values
subtitle: Giving data a name so you can use it
lesson_label: LESSON 1 · FOUNDATIONS
lesson_url: /Lesson-1/classwork/
homework_path: Lesson-1/homework/README.md
previous_page: /Lesson-1/classwork/01-introduction/
---

# What is a variable?

A variable is a named place to store a value. In JavaScript, you commonly declare variables with `const` or `let`.

---

## `const` and `let`

- Use `const` when you do not plan to reassign the variable.
- Use `let` when you need to assign a new value later.
- Avoid `var` in modern introductory code unless you are learning legacy JavaScript.

---

## Example

```javascript
const courseName = "JavaScript";
let lessonNumber = 1;

lessonNumber = 2;

console.log(courseName);
console.log(lessonNumber);
```

---

## Values have types

Common primitive types include:

- `string` — text, e.g. `"hello"`
- `number` — numeric values, e.g. `42`
- `boolean` — `true` or `false`
- `undefined` — a declared variable without an assigned value
- `null` — an intentional absence of a value

---

## Check your understanding

What is the difference between declaring a variable with `const` and declaring one with `let`?

Explain it in your own words before moving on to the homework.
