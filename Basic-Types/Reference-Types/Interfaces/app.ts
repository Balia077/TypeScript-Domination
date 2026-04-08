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