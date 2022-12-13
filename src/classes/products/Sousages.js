import { Meat } from "../cathegories/Meat"

export class Sousage extends Meat {
    constructor(title, price){
        super(title, price);
        this.title = 'Сосиски ' + title;
        super.takeInfo()
    }
}