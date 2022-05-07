function hange(name: string): void {
    console.log(`${name}さんを吊りました。`);
}

hange("John");

const divine = (name: string): void => console.log(`${name}さんは人間です。`);

divine("John");

type Person = {
    name: string;
}

const people: Person[] = [ { name: "Gerd" }, { name: "Peter" } ];
const getName = (person: Person): string => person.name;

const names = people.map(getName);
console.log(names);
