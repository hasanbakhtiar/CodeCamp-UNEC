// function myFunc(a: number=10, b: number=20): void {
//     let c = a + b;
//     console.log(c);
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// myFunc(5, 10);
// const myFunc = (a: number=10, b: number=20):void=>{
// }
var Car = /** @class */ (function () {
    function Car(title, price, color) {
        this.infoTitle = title;
        this.infoPrice = price;
        this.infoColor = color;
    }
    Car.prototype.calculateSpeed = function (km, hour) {
        return "".concat(this.infoTitle, " speed: ").concat(km / hour, " km/h");
    };
    return Car;
}());
var myCar = new Car("BMW", 30000, 'red');
console.log(myCar.infoTitle);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(title, price, color) {
        return _super.call(this, title, price, color) || this;
    }
    Moto.prototype.showBrand = function () {
        return this.infoTitle;
    };
    return Moto;
}(Car));
var myMoto = new Moto("Yamaha", 3000, "black");
console.log(myMoto.infoTitle);
