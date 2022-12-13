import { HouseholdChemicals } from "../cathegories/HouseholdChemicals ";

export class ToothPaste extends HouseholdChemicals {
    constructor(title, price){
        super(title, price);
        this.title = 'Зубная паста ' + title;
        super.takeInfo()
    }
}