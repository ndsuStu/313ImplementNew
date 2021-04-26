//Created by Evan Dramko
export interface Order{
    orderNum: number; //Is unique within each customer, acts as a primary key for the orders array
    date: number;
    descr: string; //Description of the sale
    amount: number; //Stores the amount of the sale

}