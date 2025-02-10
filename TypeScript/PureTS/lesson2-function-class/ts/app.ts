// function myFunc(a: number=10, b: number=20): void {
//     let c = a + b;
//     console.log(c);
// }

// myFunc(5, 10);


// const myFunc = (a: number=10, b: number=20):void=>{

// }

class Car{
    private infoTitle:string;
    public infoPrice:number;
    public infoColor:string;

    constructor(title:string,price:number,color:string){
        this.infoTitle = title;
        this.infoPrice = price;
        this.infoColor = color;
    }

    public calculateSpeed(km:number,hour:number){
        return `${this.infoTitle} speed: ${km/hour} km/h`
    }
}


const myCar = new Car("BMW",30000,'red');
console.log(myCar.infoTitle);


class Moto extends Car{
    constructor(title:string,price:number,color:string){
        super(title,price,color)
    }
    public showBrand (){
        return this.infoTitle;
    }
}

const myMoto = new Moto("Yamaha",3000,"black");
console.log(myMoto.infoTitle);

