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

type DemiHuman = Animal & Human;

const Taro: DemiHuman = {
    species: "dog",
    name: "Taro",
};

type Role = "seer" | "hunter";

type Seer = {
    divine(person: Human): boolean
}