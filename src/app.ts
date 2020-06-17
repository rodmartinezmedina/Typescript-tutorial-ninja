interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "rod",
  age: 36,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
};

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

console.log(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
// console.log(invOne, invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);

invoices.forEach((inv) => {
  console.log(
    inv.client,
    // "inv.details:",
    // inv.details,
    inv.amount,
    inv.format()
  );
});

// const form
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
