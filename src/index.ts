// Define an interface for a User
interface User {
name: string;
age: number;
email?: string;  // Optional property
}

// Function with type annotations
function createUser(name: string, age: number): User {
return {
    name,
    age
};
}

// Create a user with type checking
const user: User = createUser("John Doe", 30);

// Array with type annotation
const numbers: number[] = [1, 2, 3, 4, 5];

// Console log with template literal
console.log(`Created user: ${user.name}`);

// Export for module usage
export type { User };
export { createUser };

