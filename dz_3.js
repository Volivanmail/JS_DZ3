const f1 = require("./dz_2_2")

class Good {

    constructor (id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable (davailable) {
        this.available = davailable;
    }
}




function createGood (){
    goodsArray = [];
    for (let i=0; i<f1.goods.length; i++) {
        // goodsArray.push('good'+i);
        // console.log(goodsArray);
        const a = new Good (f1.goods[i].id, f1.goods[i].name, f1.goods[i].description, f1.goods[i].sizes, f1.goods[i].price, f1.goods[i].available);
        goodsArray.push(a);
        // console.log(goodsArray);
    }

    return goodsArray;
}
createGood();

goodsArray[4].setAvailable(false);


class GoodsList {
   #goods
    constructor (goods,filter, sortPrice, sortDir) {
        this.#goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        const filterGoods = this.#goods.filter((good) => good.available && RegExp(this.filter).test(good.name));
        if (this.sortPrice) {
            if (this.sortDir) {
               const result = filterGoods.sort((good1,good2) => good1.price > good2.price ? 1:-1);
               return console.log(result);
            }
            else {
                const result = filterGoods.sort((good1,good2) => good1.price > good2.price ? -1:1);
                return console.log(result);
            }
        }    
        return console.log(filterGoods);
    }

    add (element) {
        this.#goods.push(element);
        return console.log(goodsArray = this.#goods); //это если добавить в исходный массив
    }

    remove(id) {
        let result = this.#goods.filter(item => item.id !==id);
        return console.log(result);

    }
}

// const goodlist1 = new GoodsList (goodsArray,'Н', true, false);

// goodlist1.list;

// const d = new Good (6, 'ffs', 'dfdd', [45], 400, true);

// goodlist1.add(d);

// goodlist1.remove(1);



class BasketGood extends Good {

    constructor (good, amount) {
        super();
        this.id = good.id;
        this.name = good.name;
        this.description = good.description;
        this.sizes = good.sizes;
        this.price = good.price;
        this.available = good.available;
        this.amount = amount;
    }
}

const basketGood1 = new BasketGood (goodsArray[3],10);
const basketGood2 = new BasketGood (goodsArray[2],5);


console.log(basketGood1);



class Basket {

    goods = []   

    get totalAmount() {
        let tAmount = 0
        for (let x=0; x<goods.length; x++) {
            tAmount = tAmount + this.goods.price*this.goods.amount;
        }
        return console.log(tAmount);
    }

    get totalSum() {
        let Sum = 0
        for (let i=0; i<this.goods.length; i++) {
            Sum = Sum + this.goods[i].amount;
        }
        return console.log(Amount);
    }

    add(good, amount) {
        for (let i=0; i<this.goods.length; i++) {
            if (good.id == this.goods[i].id) {
                this.goods[i].amount += amount;
                return console.log(this.goods[i], this.goods);
            }
            else {
                const a = new BasketGood (good, amount);
                this.goods.push(a);
                return console.log( a, this.goods);
            }
        }
    }
}

const basket1 = new Basket();

Basket.add(goodsArray[2],5)
