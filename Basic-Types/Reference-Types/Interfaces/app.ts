// Interfaces 


interface User{
    name: string,
    email: string,
    password: string,
    gender?: string         // optional field
}

function abcd(obj: User) {
    console.log(obj);
}

abcd({name: "balaram", email: "balaram@ex.com", password: "abcd"});

// Extending Interfaces

interface Admin extends User {
    admin: boolean;
}

const user1: Admin = {
    name: "Balaram",
    email: "balaram@ex.com",
    password: "abcd",
    admin: true
}

const user2: User = {
    name: "Sumit",
    email: "sumit@ex.com",
    password: "efgh"
}

console.log(user1, user2);