import { Sweets } from "../cathegories/Sweets"

export class Cookie extends Sweets {
    constructor(title, price){
        super(title, price);
        this.title = 'Печенье ' + title;
        super.takeInfo()
    }
}