import { createContext } from "react";

const questionArr = [
  {id: 1, question: "Which keywords can be used to declare variables?", a: "int, let, float", b: "const, let, var", c: "char, const, let", d: "var, int, boolean", answer: "const, let, var"},
  {id: 2, question: "How many data types are there in JavaScript?", a: "5", b: "6", c: "8", d: "7", answer: "8"},
  {id: 3, question: "Which data type is non-primitive?", a: "object", b: "null", c: "number", d: "boolean", answer: "object"},
  {id: 4, question: "Which syntax FOR loop is correct?", a: "for x in arr:", b: "for ($i = 1; $i <= 10; $i++) {}", c: "for (int i = 0; i < 5; i++) {}", d: "for (let x = 0; x < n; x++) {}", answer: "for (let x = 0; x < n; x++) {}"},
  {id: 5, question: "How to create If statement in JavaScript?", a: "if i == 7 then", b: "if (i == 7)", c: "if i = 7", d: "if i = 7 then", answer: "if (i == 7)"},
  {id: 6, question: "Inside which HTML tag do we put the JavaScript?", a: "<javascript>", b: "<js>", c: "<script>", d: "<scripting>", answer: "<script>"},
  {id: 7, question: "How do you create a function in JavaScript?", a: "function = f() {}", b: "function f() {}", c: "function:f() {}", d: "f:function {}", answer: "function f() {}"},
  {id: 8, question: "Which syntax WHILE loop is correct?", a: "while(i <= 10) {}", b: "while(i <= 10; i++) {}", c: "while i = 1 to 10 {}", d: "while(i = 0; i < 10; i++) {}", answer: "while(i <= 10) {}"},
  {id: 9, question: "What is the correct way to write a JavaScript array?", a: "const arr = 'a', 'b', 'c'", b: "const arr = {'a', 'b', 'c'}", c: "const arr = ['a', 'b', 'c']", d: "const arr = (1:'a', 2:'b', 3:'c')", answer: "const arr = ['a', 'b', 'c']"},
  {id: 10, question: "Which event occurs when the user clicks on an HTML element?", a: "onmouseclick", b: "onmouseover", c: "onchange", d: "onclick", answer: "onclick"}
];

export const QuestionContext = createContext(questionArr);