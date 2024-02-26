"use strict";

function changeCardColor() {
    let elems = document.querySelectorAll(".card");
    for (let elem of elems) {
        elem.style.backgroundColor = "red";
    }
    return;
}

class Calculator {
    constructor() {
        this.a = null;
        this.b = null;
    }
    read() {
        this.a = Number(prompt("number a", 1));
        this.b = Number(prompt("Number b", 2));
    }
    add() {
        return this.a + this.b
    }
}