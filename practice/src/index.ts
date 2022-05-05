type FooBar = {
    foo: number;
    bar: string;
    opt?: string;
}

interface IFooBar {
    foo: number;
    bar: string;
}

const obj: FooBar = {
    foo: 1,
    bar: "str"
};

const obj1: FooBar = {
    foo: 1,
    bar: "str",
    opt: "opt"
};

const obj2 = {
    baz: true,
    ...obj,
    qux: "bye"
};

console.log(obj2);
