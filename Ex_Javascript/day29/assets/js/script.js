document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector('.list');
    let listItems = document.querySelectorAll('.list-item');
    var modules = document.querySelectorAll(".module");

    let draggedItem = null;

    listItems.forEach((item, index) => {
        item.setAttribute("draggable", "true");

        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);

        const span = item.querySelector('span');
        const orderSpan = document.createElement('span');
        orderSpan.className = 'order';
        orderSpan.textContent = `${index + 1}: `;
        item.insertBefore(orderSpan, span);
    });

    list.addEventListener('dragover', handleDragOver);
    list.addEventListener('drop', handleDrop);

    function handleDragStart(e) {
        draggedItem = this;
        e.dataTransfer.setData("text/plain", e.target.id);
    }

    function handleDragEnd() {
        draggedItem = null;
        updateOrderNumbers();
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        if (draggedItem) {
            const targetItem = e.target.closest('.list-item');
            if (targetItem !== null && targetItem !== draggedItem) {
                const targetIndex = [...listItems].indexOf(targetItem);
                const draggedIndex = [...listItems].indexOf(draggedItem);
                const items = [...listItems];

                items[targetIndex] = draggedItem;
                items[draggedIndex] = targetItem;

                list.innerHTML = '';

                items.forEach(item => {
                    list.appendChild(item);
                });

                listItems = document.querySelectorAll('.list-item');
                updateOrderNumbers();
            }
        }
    }

    function updateOrderNumbers() {
        listItems.forEach((item, index) => {
            const orderSpan = item.querySelector('.order');
            orderSpan.textContent = `${index + 1}: `;
        });
    }
});
