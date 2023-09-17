document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector('.list');
    let listItems = document.querySelectorAll('.list-item:not(.module)');
    let modules = document.querySelectorAll(".list-item.module");

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

    modules.forEach((module, index) => {
        module.setAttribute("draggable", "true");

        module.addEventListener('dragstart', handleDragStart);
        module.addEventListener('dragend', handleDragEnd);

        const span = module.querySelector('span');
        const orderSpan = document.createElement('span');
        orderSpan.className = 'order';
        orderSpan.textContent = `${index + 1}: `;
        module.insertBefore(orderSpan, span);
    });

    list.addEventListener('dragover', handleDragOver);
    function handleDragStart(e) {
        draggedItem = this;
        // e.dataTransfer.setData("text/plain", e.target.id);
        e.target.classList.add("dragging");

    }

    function handleDragEnd(e) {
        draggedItem = null;
        updateOrderNumbers();
        e.target.classList.remove("dragging");

    }

    function handleDragOver(e) {
        e.preventDefault();
        if (draggedItem) {
            const targetItem = e.target.closest('.list-item');
            if (targetItem !== null && targetItem !== draggedItem) {
                // const targetIndex = [...listItems].indexOf(targetItem);
                // const draggedIndex = [...listItems].indexOf(draggedItem);

                const targetRect = targetItem.getBoundingClientRect();
                const dropPosition = e.clientY < targetRect.top + targetRect.height / 2 ? 'before' : 'after';

                if (dropPosition === 'before') {
                    list.insertBefore(draggedItem, targetItem);
                } else {
                    list.insertBefore(draggedItem, targetItem.nextElementSibling);
                }

                listItems = document.querySelectorAll('.list-item:not(.module)');
                updateOrderNumbers();
            }
        }
    }


    function updateOrderNumbers() {
        listItems.forEach((item, index) => {
            if (!item.classList.contains('module')) {
                const orderSpan = item.querySelector('.order');
                orderSpan.textContent = `${index + 1}: `;
            }
        });

        modules = document.querySelectorAll(".list-item.module");
        modules.forEach((module, index) => {
            const orderSpan = module.querySelector('.order');
            orderSpan.textContent = ` ${index + 1}: `;
        });
    }
});
