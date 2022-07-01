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
        const a = new Good (f1.goods[i].id, f1.goods[i].name, f1.goods[i].description, f1.goods[i].sizes, f1.goods[i].price, f1.goods[i].available);
        goodsArray.push(a);
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

const goodlist1 = new GoodsList (goodsArray,'Н', true, false);

goodlist1.list;
console.log('/////////////////////');

const d = new Good (6, 'ffs', 'dfdd', [45], 400, true);

goodlist1.add(d);

goodlist1.remove(1);

console.log('-----------------');

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

console.log('~~~~~~~~~~~~~~~~~~~~~');

class Basket {

    goods = [];

    get totalAmount() {
        let result = this.goods.reduce((sum, good) => {
            return sum + good.price*good.amount
        },0);
        console.log(result);
    }

    get totalSum() {
        let sum = 0;
        this.goods.forEach((good) => {
            return sum += good.amount
        });
        console.log(sum);
    }

    add(good, amount) {

        if (this.goods.length == 0) {
            const a = new BasketGood (good, amount);
            this.goods.push(a);
            return console.log(a);
        }
        else {
            for (let i=0; i<this.goods.length; i++) {
                if (good.id == this.goods[i].id) {
                    this.goods[i].amount += amount;
                    return console.log(this.goods[i]);           
                }
                else {
                    const a = new BasketGood (good, amount);
                    this.goods.push(a);
                    return console.log(a);
                }
            }
        }
    }

    remove(good, amount) {
        if (this.goods.length == 0) {
            console.log('Корзина пустая!');
        }
        else {
            for (let i=0; i<this.goods.length; i++) {
                if (good.id == this.goods[i].id) {
                    this.goods[i].amount -= amount;
                        if (this.goods[i].amount === 0) {
                            this.goods.splice(i, 1);
                        }
                    return console.log(this.goods); 
                }
                return console.log('Нет такого товара!');
            }
            
        }
    }

    clear() {
        this.goods.length = 0;
        return this.goods;
    }

    removeUnavailable() {
        let result = this.goods.filter(item => item.available !==false);
        return console.log(result);
    }
}
const basket1 = new Basket();

basket1.add(goodsArray[2],5);
basket1.add(goodsArray[2],10);
basket1.add(goodsArray[3],2);


basket1.totalAmount;
basket1.totalSum;

// console.log('@@@@@@@@@@@@@@@@@@@@@@');
// console.log(basket1);
// console.log('___________________');
// basket1.remove(goodsArray[2],3);
// console.log('___________________');
// basket1.remove(goodsArray[2],12);
// console.log('___________________');
// basket1.remove(goodsArray[5],2);
// console.log('___________________');
// basket1.remove(goodsArray[3],2);
// console.log('___________________');
// basket1.remove(goodsArray[3],2);

// console.log('*************************');
// console.log(basket1);
// console.log('___________________');
// basket1.clear();
// console.log(basket1);

// console.log('&&&&&&&&&&&&&&&&&&&&&');
// basket1.add(goodsArray[4],1);
// console.log('_______________');
// basket1.removeUnavailable();
