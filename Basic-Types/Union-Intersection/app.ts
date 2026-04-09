// Union and Intersection

// Union
let un: string | null;

// Intersection

type User = {
    name: string,
    email: string
}

type Admin = User & {
    getUser(user: string): void;
}

function yoo(obj: Admin){
    obj.getUser
}