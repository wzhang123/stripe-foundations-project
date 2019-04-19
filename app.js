function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal(title, description) {
  $('#purchaseProductModal').modal('show')
  let productTitle = document.querySelector('#productItemTitle')
  productTitle.innerHTML = title
  let productDes = document.querySelector('#productItemDescription')
  productDes.innerHTML = description
}

console.log(event.srcElement.parentNode.parentNode.innerText)