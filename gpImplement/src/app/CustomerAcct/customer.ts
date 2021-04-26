import { Order } from './order';

//Created by Evan Dramko
export interface Customer{
    custId: number;
    firstName: string;
    lastName: string;
    orders: Order[]; //Each index in this array will store a short description of a customer's transaction
    cardNumber: string; //Stores the customer's current credit card on file. We use a string not a number since it can have a leading 0
    unpaidBalance: number; //Stores the amount the customer owes for services recieved.

}