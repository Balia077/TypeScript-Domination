// Union and Intersection

// Union
let un: string | null;

// Intersection

type User1 = {
    name: string,
    email: string
}

type Admin1 = User & {
    getUser(user: string): void;
}

function yoo(obj: Admin){
    
}