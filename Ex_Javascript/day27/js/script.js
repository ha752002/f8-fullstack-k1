// Đối tượng lưu trữ dữ liệu sản phẩm
var productsData = {
    "products": [
        {
            "id": 1,
            "name": "sản phẩm 1",
            "price": 1000,
            "quantity": 1
        },
        {
            "id": 2,
            "name": "sản phẩm 2",
            "price": 2000,
            "quantity": 1
        },
        {
            "id": 3,
            "name": "sản phẩm 3",
            "price": 3000,
            "quantity": 1
        },
        {
            "id": 4,
            "name": "sản phẩm 4",
            "price": 4000,
            "quantity": 1
        }
    ]
};

var cart = JSON.parse(localStorage.getItem('cart')) || [];
var updateCartButton;

function start() {
    getProduct(renderProduct);
    renderCart();
}

start();

// Hàm lấy dữ liệu sản phẩm
function getProduct(callback) {
    callback(productsData.products);
}

// Hàm render danh sách sản phẩm
function renderProduct(products) {
    var listProductBlock = document.querySelector('.list-product');
    var html = products.map(function (product, index) {
        return `
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="cart-wrapp">
              <form class="form-data" onsubmit="handleCreateData(event, ${product.id}, ${product.price})">
                  <input value="1" type="number" />
                  <button type="submit" class="button">Thêm vào giỏ</button>
              </form>
            </td>
          </tr>
          `;
    });

    listProductBlock.innerHTML = html.join('');
}

// Hàm xử lý thêm sản phẩm vào giỏ hàng
function handleCreateData(event, productId, price) {
    event.preventDefault();
    var quantity = event.target.querySelector('input[type="number"]').value;

    if (quantity < 0) {
        alert('Số lượng phải là số dương.');
        return;
    }

    addToCart(productId, price, quantity);
    renderCart();
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId, price, quantity) {
    var existingItemIndex = cart.findIndex(function (item) {
        return item.productId === productId;
    });

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += parseInt(quantity, 10);
    } else {
        var newItem = {
            productId: productId,
            price: price,
            quantity: parseInt(quantity, 10)
        };

        cart.push(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm render giỏ hàng
function renderCart() {
    var cartTable = document.querySelector('.list-cart');

    var html = cart.map(function (item, index) {
        var stt = index + 1;
        var quantity = parseInt(item.quantity, 10);
        var price = parseFloat(item.price);

        var total = quantity * price;

        return `
          <tr>
              <td>${stt}</td>
              <td>Sản phẩm ${item.productId}</td>
              <td><input type="number" value="${quantity}" data-product-id="${item.productId}" data-item-index="${index}" class="quantity-input"></td>
              <td>${price}</td>
              <td>${total}</td>
              <td><button class="delete-button" data-item-index="${index}">Xóa</button></td>
          </tr>
          `;
    });

    cartTable.innerHTML = html.join('');

    var cartIsEmpty = cart.length === 0;

    if (!cartIsEmpty) {
        updateCartButton = document.createElement('button');
        updateCartButton.textContent = 'Cập nhật giỏ hàng';
        updateCartButton.classList.add('button');
        updateCartButton.id = 'update-cart-button';

        var existingUpdateButton = document.querySelector('#update-cart-button');
        if (existingUpdateButton) {
            existingUpdateButton.remove();
        }

        cartTable.parentElement.appendChild(updateCartButton);

        updateCartButton.addEventListener('click', function () {
            updateCart();
        });

        var deleteButtons = cartTable.querySelectorAll('.delete-button');
        deleteButtons.forEach(function (deleteButton) {
            deleteButton.addEventListener('click', function () {
                var itemIndex = parseInt(deleteButton.getAttribute('data-item-index'), 10);
                removeFromCart(itemIndex);
            });
        });
    } else {
        var existingUpdateButton = document.querySelector('#update-cart-button');
        if (existingUpdateButton) {
            existingUpdateButton.remove();
        }
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(itemIndex) {
    if (itemIndex >= 0 && itemIndex < cart.length) {
        cart.splice(itemIndex, 1);
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

    renderCart();
}
