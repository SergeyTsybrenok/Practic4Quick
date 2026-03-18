import type { ProductLink } from "./productLink";

export interface User {
    id?: number;
    Name: string;
    Login: string;
    Number: number;
    Email: string;
    PasswordHash: string;
    Admin?: boolean;
    Likes?: number[];
    Card?: ProductLink[]; //TODO and here will be id from card
    History?: number[]; //TODO make card into other file
    // after that we just linkup History to card
}