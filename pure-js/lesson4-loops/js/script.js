// let info = 5;
// while(info<10){ //condition
//     info++; //action
//     console.log(info); //result
    
// }


// let info = 0;

// do{
// // result
// console.log(info);

// // action
// info++;
// }while(info>10)//condition



// for(let info = 0; info<10;info++){
//     console.log(info);
// }



const products = [
    {
        title:"Asus Tuf",
        price:2000,
        newDevice:true,
        color:['red','black']
    },
    {
        title:"Acer Predator",
        price:3000,
        newDevice:true,
        color:['red','black']
    },
    {
        title:"Legion",
        price:3000,
        newDevice:true,
        color:['red','black']
    },
    {
        title:"ThinkPad",
        price:1000,
        newDevice:true,
        color:['red','black']
    },

]



let data = ["table",'pen','chair'];


for(let count = 0; count<products.length;count++){
    if (products[count].price < 3000) {
        
        console.log(products[count].title);
    }
    
}

const foo = window.prompt();

console.log(foo);




// for(let info of products){
//     console.log(info.title);
    
// }


