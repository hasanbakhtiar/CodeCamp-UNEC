


//  function info(name,surname){
//     this.iname = name;
//     this.isurname = surname;
// }

// info.prototype.age = 27;

// var myInfo = new info("Hasan","Bakhtiar");

// console.log(myInfo.age);



class Car1{
    constructor(brand,color,year){
        this.ibrand = brand;
        this.icolor = color;
        this.iyear = year;
    }

    calculateSpeed(km,hour){
        return `${this.ibrand} speed: ${km/hour}km/h`
    }
    
}

class Car2{
    constructor(brand,color,year){
        this.ibrand = brand;
        this.icolor = color;
        this.iyear = year;
    }

    calculateSpeed(km,hour){
        return `${this.ibrand} speed: ${km/hour}km/h`
    }
    
}


const myCar1 = new Car1("BMW","white",2000);
const myCar2 = new Car2("BMW","white",2000);
console.log(myCar1.calculateSpeed(300,3));

class Moto extends Car1{
    constructor(brand,color,year){
        super(brand,color,year);
    }


}



const myMoto = new Moto("Yamaha","black",2010);
console.log(myMoto.calculateSpeed(400,2));









