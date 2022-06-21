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

const d = new Good (6, 'ffs', 'dfdd', [45], 400, true);


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

// goodsArray[0].setAvailable(false);

// goodsArray.push(d);

// console.log(goodsArray);


class GoodsList {
    #goods = goodsArray;

    constructor (filter, sortPrice, sortDir) {
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    // проблема здесь точно есть:
    get list() {
        const filterGoods = this.#goods.filter((good) => /this.filter/.test(good.name));
        if (this.sortPrice) {
            const filterAvailableGoods = filterGoods.filter((good) => good.available == true);
            if (this.sortDir) {
               const result = filterAvailableGoods.sort((good1,good2) => good1.price > good2.price ? 1:-1);
            }
            else {
                const result = filterAvailableGoods.sort((good1,good2) => good1.price > good2.price ? -1:1);
            }
        }    
            return console.log(result);

        return console.log(filterGoods);
    }

    // add ()
}

const goodlist1 = new GoodsList ('Носки', true, true);

goodlist1.list;

// class BasketGood extends Good {

//     constructor (amount) {
//         super();
//         this.amount = amount;
//     }
// }

// class Basket {
    
    
    
//     get totalAmount() {

//     }

//     get totalSum() {

//     }
// }


