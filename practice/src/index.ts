type Animal = {
    species: string;
}

type Human = {
    name: string;
}

type Member = Animal | Human;

const Tama: Member = {
    species: "dog",
};

const Hyo: Member = {
    name: "Hyo",
};