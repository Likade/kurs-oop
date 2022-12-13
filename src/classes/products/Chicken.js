import { Meat } from "../cathegories/Meat"

export class Chicken extends Meat {
    constructor(title, price){
        super(title, price);
        this.title = 'Курица ' + title;
        super.takeInfo()
    }
}