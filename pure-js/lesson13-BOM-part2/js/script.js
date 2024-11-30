

// setTimeout(printText,2000);
// setInterval(()=>{
//     document.write("Hello")
// },2000)




const printText = ()=>{
    // document.querySelector('.con').innerHTML = new Date().getSeconds();
    // window.location.assign("https://google.com")
    
}

const progress = setInterval(printText,1000);

document.querySelector('button').onclick = ()=>{
    clearInterval(progress);
}





