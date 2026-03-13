import type { Product } from "./product";

export interface User {
    id?: number;
    Name: string;
    Number: number;
    Email: string;
    PasswordHash: string;
    Likes?: number[];
    Card?: number[];
}