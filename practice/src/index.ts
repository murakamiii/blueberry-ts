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

type SignType = "plus" | "minus";
function signNumber(type: SignType): number {
    return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none"): number {
    if (type === "none") {
        return 0;
    } else {
        return num * signNumber(type);
    }
}

console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));
