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

console.log(goodsArray);


class GoodsList {
    #goods = goodsArray;

    constructor (filter, sortPrice, sortDir) {
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        const filterGoods = this.#goods.filter(Good.name, /^this.filter/.test(Good.name));
        return console.log(filterGoods);
    }
}

// array.filter(value => /^sortOrder=/.test(value));

const goodlist1 = new GoodsList ('Ботинки мужские', true, true);

goodlist1.list;

class BasketGood extends Good {

    constructor (amount) {
        super();
        this.amount = amount;
    }
}

class Basket {
    
    
    
    get totalAmount() {

    }

    get totalSum() {

    }
}





// /\w+/i.exec(this.filter)