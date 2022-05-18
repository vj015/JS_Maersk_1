console.log('XHR');
let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click', datafac);
function datafac(){
    const xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/products", true);
xhr.onload = function(){
    if(this.status === 200){
    let obj = JSON.parse(xhr.responseText);
    let products = obj.products;
    console.log(products);
    let list = document.getElementById('list');
    str = "";
    
    products.forEach(function(element,index) {
        str += `<li>${element['title']} </li>`
    });
    list.innerHTML=str; 
    }
    else{
        console.log('some error occured');
    }
};
xhr.send();
console.log('we are done');

} 