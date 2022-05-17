const products = []
const addProductButton = document.getElementById('add-product-button');
const showProductButton = document.getElementById('show-product-button');
const productFormDiv = document.querySelector('#product-form');
const productListDiv = document.querySelector('#list-form');
const productForm = document.querySelector('#productForm');

addProductButton.addEventListener('click', () => {
    productFormDiv.style.display = 'block';
    productListDiv.style.display = 'none';
})

showProductButton.addEventListener('click', () => {
    productFormDiv.style.display = 'none';
    productListDiv.style.display = 'block';
})

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form is submitting");

    const imageUrl = document.querySelector('#productImageURLInput').value;
    const productName = document.querySelector('#productNameInput').value;
    const productDes = document.querySelector('#productDescriptionInput').value;
    const product = { 
       imageUrl, productName, productDes 
    }
    products.push(product);

    console.log(products)
    productForm.reset();
    renderTable();
})

function renderTable() {
    const productTableBody = document.querySelector("#productTableBody");
    let productsHTML = ''
    products.forEach(product1 => {
        const productHtmlText = `
                      <tr>
                           <td>${product1.productName}</td>
                           <td>${product1.productDes}</td>
                           <td><img src="${product1.imageUrl}" alt="productimage"></td>
                      </tr>
                    `

                    productsHTML += productHtmlText;

    })
    console.log(productsHTML)
    productTableBody.innerHTML = productsHTML
}



