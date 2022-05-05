type FooBar = {
    readonly foo: number;
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

const restObj = {
    foo: 213,
    bar: "str",
    baz: true,
}

const { foo, ...rest } = restObj;

console.log(foo);
console.log(rest);
