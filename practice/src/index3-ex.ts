type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  }

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = data
    .split("\n")
    .filter(line=>!!line)
    .map(line => {
        const [name, age, premiumUser] = line.split(",");
        return {
            name,
            age: Number(age),
            premiumUser: Number(premiumUser) === 1,
        };
    });

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです。`); 
    } else {
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`); 
    }
}