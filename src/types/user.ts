import type { Product } from "./product";

export interface User {
    id?: number;
    Name: string;
    Number: number;
    Email: string;
    PasswordHash: string;
    Admin?: boolean;
    Likes?: number[];
    Card?: number[]; //TODO and here will be id from card
    History?: number[]; //TODO make card into other file
    // after that we just linkup History to card
}