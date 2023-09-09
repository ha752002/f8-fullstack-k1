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
    var html = products.map(function (product) {
        return `
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="cart-wrapp">
              <form class="form-data">
                  <input value="1" type="number" />
                  <button type="button" class="button" onclick="addToCart(${product.id}, ${product.price})">Thêm vào giỏ</button>
              </form>
            </td>
          </tr>
          `;
    });

    listProductBlock.innerHTML = html.join('');
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId, price) {
    var quantityInput = document.querySelector('.form-data input[type="number"]');
    var quantity = parseInt(quantityInput.value, 10);

    if (quantity < 0) {
        alert('Số lượng phải là số dương.');
        return;
    }

    var existingItem = cart.find(function (item) {
        return item.productId === productId;
    });

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            price: price,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Hàm render giỏ hàng
function renderCart() {
    var cartTable = document.querySelector('.list-cart');
    var html = cart.map(function (item, index) {
        var stt = index + 1;
        var quantity = item.quantity;
        var price = item.price;

        var total = quantity * price;

        return `
          <tr>
              <td>${stt}</td>
              <td>Sản phẩm ${item.productId}</td>
              <td><input type="number" value="${quantity}" data-product-id="${item.productId}" data-item-index="${index}" class="quantity-input"></td>
              <td>${price}</td>
              <td>${total}</td>
              <td><button class="delete-button" data-item-index="${index}" onclick="removeFromCart(${index})">Xóa</button></td>
          </tr>
          `;
    });

    cartTable.innerHTML = html.join('');

    var cartIsEmpty = cart.length === 0;

    if (!cartIsEmpty) {
        var updateCartButton = document.querySelector('#update-cart-button');
        if (!updateCartButton) {
            updateCartButton = document.createElement('button');
            updateCartButton.textContent = 'Cập nhật giỏ hàng';
            updateCartButton.classList.add('button');
            updateCartButton.id = 'update-cart-button';
            updateCartButton.addEventListener('click', updateCart);
            cartTable.parentElement.appendChild(updateCartButton);
        }

        var clearCartButton = document.querySelector('#clear-cart-button');
        if (!clearCartButton) {
            clearCartButton = document.createElement('button');
            clearCartButton.textContent = 'Xóa toàn bộ giỏ hàng';
            clearCartButton.classList.add('button');
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
