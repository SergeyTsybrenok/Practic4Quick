import type { ProductLink } from "./productLink";

export interface HistoryOrder {
    productLinks: ProductLink[];
    orderDate: Date
}