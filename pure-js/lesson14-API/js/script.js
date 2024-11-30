fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    let li = "";
    data.map(item=>{
        li+=`<li><img src="${item.image}" width="100"/>${item.title}</li>`;
    })
    document.querySelector('ul').innerHTML = li;
})