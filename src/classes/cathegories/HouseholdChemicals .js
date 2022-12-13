import { Merchendise } from "../merchendise/merchendise";

export class HouseholdChemicals extends Merchendise {
    constructor(title, price){
        super(title, price);
        this.cathegory = "Домашняя химия";
    }
    takeInfo() {
        if(localStorage.getItem(this.title) == undefined)
            localStorage.setItem(this.title, 0);
        this.count = localStorage.getItem(this.title) 
    }
}