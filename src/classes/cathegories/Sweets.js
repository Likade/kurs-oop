import { Merchendise } from "../merchendise/merchendise";

export class Sweets extends Merchendise {
    constructor(title, price){
        super(title, price);
        this.cathegory = "Сладкое";
    }
    takeInfo() {
        if(localStorage.getItem(this.title) == undefined)
            localStorage.setItem(this.title, 0);
        this.count = localStorage.getItem(this.title) 
    }
}