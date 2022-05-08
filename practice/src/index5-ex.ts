const createUser = (name: string, age: number): (message: string) => string => {
    return (message: string) => {
        return `${name} (${age}) 「${message}」`;
    }
}

const getMessage = createUser("uhyo", 26);
// "uhyo (26) 「こんにちは」" と表示される 
console.log(getMessage("こんにちは"));