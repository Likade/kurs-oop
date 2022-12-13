import { HouseholdChemicals } from "../cathegories/HouseholdChemicals ";

export class Soap extends HouseholdChemicals {
    constructor(title, price){
        super(title, price);
        this.title = 'Мыло ' + title;
        super.takeInfo()
    }
}