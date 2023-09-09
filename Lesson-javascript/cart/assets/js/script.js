var productData = [
    {
        "price": 1000,
    },
    {
        "price": 2000,
    },
    {
        "price": 3000,
    },
    {
        "price": 4000,
    }
];
document.addEventListener('DOMContentLoaded', function () {
    start();
});

function start() {
    renderProductData(productData);
    renderCart();
}


var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render the product
function renderProductData(productData) {
    var listProductBlock = document.querySelector('.list-product');

    productData.forEach(function (product, index) {
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>Sản phẩm ${index + 1}</td>
        <td>${product.price}</td>
        <td>
          <input type="number" class="quantity-input" value="1" />
          <button type="submit" data-index="${index}" data-price="${product.price}">Thêm vào giỏ</button>
        </td>
      `;

        var addToCartButton = row.querySelector('button[data-index]');
        var quantityInput = row.querySelector('input.quantity-input');

        addToCartButton.addEventListener('click', function () {
            var index = parseInt(addToCartButton.getAttribute('data-index'));
            var price = parseInt(addToCartButton.getAttribute('data-price'));
            var quantity = parseInt(quantityInput.value, 10);
            addToCart(index, price, quantity);
        });

        listProductBlock.appendChild(row);
    });
}

function addToCart(index, price, quantity) {
    var existingItem = cart.find(function (item) {
        return item.productId === index;
    });

    if (quantity < 0) {
        alert('Số lượng phải là số dương.');
        return;
    }

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: index,
            price: price,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    var cartTable = document.querySelector('.list-cart');
    var html = cart.map(function (data, index) {
        var stt = index + 1;
        var quantity = data.quantity;
        var price = data.price;
        var total = quantity * price;

        return `
          <tr>
              <td>${stt}</td>
              <td>Sản phẩm ${stt}</td>
              <td><input type="number" value="${quantity}" data-product-id="${data.productId}" data-item-index="${index}" class="quantity-input"></td>
              <td>${price}</td>
              <td>${total}</td>
              <td><button class="delete-button" data-item-index="${index}" onclick="removeFromCart(${index})">Xóa</button></td>
          </tr>
          `;
    });

    cartTable.innerHTML = html.join('');

    var cartIsEmpty = cart.length === 0;
    console.log(cartIsEmpty);
    if (!cartIsEmpty) {
        var updateCartButton = document.querySelector('#update-cart-button');
        if (!updateCartButton) {
            updateCartButton = document.createElement('button');
            updateCartButton.textContent = 'Cập nhật giỏ hàng';
            updateCartButton.classList.add('button');
            updateCartButton.classList.add('button-cart');
            updateCartButton.id = 'update-cart-button';
            updateCartButton.addEventListener('click', updateCart);
            cartTable.parentElement.appendChild(updateCartButton);
        }

        var clearCartButton = document.querySelector('#clear-cart-button');
        if (!clearCartButton) {
            clearCartButton = document.createElement('button');
            clearCartButton.textContent = 'Xóa toàn bộ giỏ hàng';
            clearCartButton.classList.add('button');
            clearCartButton.classList.add('button-cart');
            clearCartButton.id = 'clear-cart-button';
            clearCartButton.addEventListener('click', clearCart);
            cartTable.parentElement.appendChild(clearCartButton);

        }
    } else {
        var existingUpdateButton = document.querySelector('#update-cart-button');
        if (existingUpdateButton) {
            existingUpdateButton.remove();
        }

        var existingClearButton = document.querySelector('#clear-cart-button');
        if (existingClearButton) {
            existingClearButton.remove();
        }
    }
}


function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Hàm cập nhật giỏ hàng
function updateCart() {
    var cartTable = document.querySelector('.list-cart');
    var quantityInputs = cartTable.querySelectorAll('.quantity-input');
    var hasNegativeQuantity = false;

    cart.forEach(function (item) {
        var productId = item.productId;
        var newQuantity = 0;
        var input = cartTable.querySelector(`.quantity-input[data-product-id="${productId}"]`);

        if (input) {
            newQuantity = parseInt(input.value, 10);

            if (newQuantity < 0) {
                hasNegativeQuantity = true;
                return;
            }

            item.quantity = newQuantity;
        }
    });

    if (hasNegativeQuantity) {
        alert('Số lượng sản phẩm phải là số không âm.');
        return;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Bạn có chắc chắn muốn cập nhật giỏ hàng không?');
    renderCart();
}



// Hàm xóa toàn bộ giỏ hàng
function clearCart() {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?')) {
        cart = [];
        localStorage.removeItem('cart');
        renderCart();
    }
}

