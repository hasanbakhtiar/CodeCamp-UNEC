
// const h1 = document.getElementsByTagName("h1")[2];
// h1.innerText = "<i>Selcan</i>"
//  document.getElementById('info').innerHTML = "new value"
//  document.getElementsByClassName('info')[0].innerHTML = "new value";

// document.querySelector(".info").innerHTML = "new data";
// document.querySelectorAll(".info")[2].innerHTML = "new data";

// const headLineEl = document.querySelectorAll('h1');
// console.log(headLineEl.length);
// for(let i=0; i<headLineEl.length;i++ ){
//     headLineEl[i].innerHTML = "new data"
// }


// import {products} from './data.js';


// const elMap=(data)=>{
//     data.map((item,index)=>(
//         headLineEl[index].innerHTML = item.title
//     ))
// }

// elMap(products);

const navLink = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#lang-btn');

console.log(navLink);



const lang = {
    az:["Ana Sehife","Haqqimizda"],
    en:["Home","About"]
}

const changeLang=()=>{
    if (langBtn.innerHTML === "AZ") {
        lang.az.map((item,index)=>{
            navLink[index].innerHTML = item;
        })
        langBtn.innerHTML = "EN";
    }else{
        lang.en.map((item,index)=>{
            navLink[index].innerHTML = item;
        })
        langBtn.innerHTML = "AZ";
    }
    
}

langBtn.addEventListener('click',changeLang);




 