function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal(title, description, price) {
  $('#purchaseProductModal').modal('show')
  let productTitle = document.querySelector('#productItemTitle')
  productTitle.innerHTML = title
  let productDes = document.querySelector('#productItemDescription')
  productDes.innerHTML = description
  let productPri = document.querySelector('#productItemPrice')
  productPri.innerHTML = price
}

console.log(event.srcElement.parentNode.parentNode.innerText)