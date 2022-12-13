import { Sweets } from "../cathegories/Sweets"

export class Candies extends Sweets {
    constructor(title, price){
        super(title, price);
        this.title = 'Конфеты ' + title;
        super.takeInfo()
    }
}