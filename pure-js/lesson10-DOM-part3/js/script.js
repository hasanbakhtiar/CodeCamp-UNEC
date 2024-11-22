// const ul = document.querySelector('ul');

// const result = ul.firstChild.firstChild.nodeName;
// const result = ul.lastChild.firstChild.nodeName;
// const result = ul.lastChild.previousSibling.firstChild.nodeValue;
// const result = ul.lastChild.previousSibling.firstChild.parentNode.nextSibling.firstChild.nodeValue;

// console.log(result);


// const myNewElem = document.createElement('h1');
// const myNewText = document.createTextNode('Hello Node');
// myNewElem.appendChild(myNewText);
// myNewElem.setAttribute("class","red");
// document.querySelector('body').appendChild(myNewElem);




const input = document.querySelector('input');
const ul = document.querySelector('ul');

const form  = document.querySelector('form');
form.onsubmit=(e)=>{
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li)
    input.value = ""
    li.onclick = ()=>{
        li.style.textDecoration = "line-through"
    }
    li.ondblclick=()=>{
        li.remove();
    }
    
}


// input.onchange= ()=>{
//     console.log(input.value);
    
// }
// console.log(input.value);
