var infoOne:number = 2000;
var infoTwo:string = "Hello";
var infoThree:boolean = true;


// var product:string[] = ['Table','Pen','Phone'];
// var product:Array<string> = ['Table','Pen','Phone'];
// var product:Array<string|number> = ['Table','Pen','Phone',5];
// var product:string,number  = ['Table','Pen','Phone',5];


// type productType = {
//     title:string,
//     price:number,
//     stock:boolean
// }


// var product:productType = {
//     title:"Name",
//     price:300,
//     stock:true
// }

type productType = {
    title:string,
    price:number,
    stock:number
}



var products:productType[] = [
    {
        title:"Phone one",
        price:300,
        stock:10
    },
    {
        title:"Phone two",
        price:400,
        stock:10
    },
    {
        title:"Phone three",
        price:500,
        stock:10
    }
]