let logDetails2: (obj: { name: string; age: number }) => void;

//TYPE ALIAS
type person = { name: string; age: number };

logDetails2 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
