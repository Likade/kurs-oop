export class Merchendise {
    constructor(title, price){
        this.title = title;
        this.price = price;
        this.count = 0;
    }
    sell(num){
        if(Number(this.count) < Number(num)) {
            console.log(this.count, num)
            return false;
        }
        else {
            this.count -= Number(num);
            localStorage.setItem(this.title, localStorage.getItem(this.title) - Number(num));
            return true
        }
    }
    order(num) {
        this.count += Number(num);
        localStorage.setItem(this.title, Number(localStorage.getItem(this.title)) + Number(num));
    }
}