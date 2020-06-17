const me = {
    name: "rod",
    age: 36,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
let someone;
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, 
    // "inv.details:",
    // inv.details,
    inv.amount, inv.format());
});
// const form
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
