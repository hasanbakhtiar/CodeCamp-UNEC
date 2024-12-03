
// const fetchData = new Promise((resolve,reject)=>{
//     const status = false;
//     if (status) {
//         resolve("success");
//     }else{
//         reject("something is wrong");
//     }
// })

// fetchData
// .then(res=>console.log(res))
// .catch(err=>console.log(err))




// try{
//     throw "test";
//     console.loga("Hello");
// }catch(err){
//     console.log("My bug:"+err);
// }finally{
//     console.log('im alive');
    
// }




// const fetchData = async()=>{}
// const fetchData = async function() {
// }


// async function fetchData(){}





const fetchData = async()=>{
    const data = await fetch("https://mocki.io/v1/b81dd9ab-e15d-4f69-bfbe-537b887af7d0")
    const result = await data.json();
    
    
    
}
fetchData();

