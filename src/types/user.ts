import type { HistoryOrder } from "./history";
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
    Card?: ProductLink[];
    History?: HistoryOrder[];
}