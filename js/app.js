// --------------------------- CRUD --------------------------- //

// Declare Variables
const addItems = document.querySelector('.addItems');
const itemsList = document.querySelector('.groceries');
const items = JSON.parse(localStorage.getItem('items')) || [];

// Display list items
getList = (groceries = [], myList) => {
    myList.innerHTML = groceries.map((food, i) => {
        return `
            <li>
                <label for="item${i}"><i class="fas fa-shopping-bag"></i> ${food.gName}</label>
                <label>$${food.gPrice}</label>
                <button class="btn-delete" data-id=${food.id} type="submit" onclick="deleteItem(this)">Delete</button>
            </li>
        `;
    }).join('');
}
getList(items, itemsList);

// Add new list items
addItem = (e) => {
    e.preventDefault();
    const id = Math.random();
    const gName = (document.querySelector('[name=item]')).value;
    const gPrice = (document.querySelector('[name=price]')).value;
    const item = {
        id,
        gName,
        gPrice
    };

    // Validate fileds
    if(gName == '' || gPrice == '') {
        alert('All fields must be completed.');
        return false;
    }
    else if(isNaN(gPrice)) {
        alert('Price must be a number.');
        return false;
    }
    else {
        items.push(item);
        getList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        e.target.reset();
        
        // Noty modal-add notification
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: `You have added "${gName}" to the list`
        }).show();
    }
}

addItems.addEventListener('submit', addItem);

// Delete item from list
deleteItem = (e) => {
    itemsList.addEventListener('click', (event) => {
        Noty.closeAll();
        if(event.target.classList.contains('btn-delete')) {

            let removeItem = event.target;
            let id = removeItem.dataset.id;

            // Delete item
            for (let i = 0; i < items.length; i++) {
                if(items[i].id == id) {
                    // Noty modal-delete notification
                    new Noty({
                        type: 'warning',
                        layout: 'topRight',
                        text: `Do you want to delete "${items[i].gName}" from the list?`,
                        buttons: [
                        Noty.button('YES', 'btn btn-success', function () {
                                // Delete item
                                items.splice(i, 1);
                                localStorage.setItem('items', JSON.stringify(items));
                                itemsList.removeChild(removeItem.parentElement);
                                Noty.closeAll();
                        }, {id: 'button1', 'data-status': 'ok'}),
                    
                        Noty.button('NO', 'btn btn-error', function () {
                            return false;
                        })
                        ]
                    }).show();
                }
            }
        }
    })
}

window.addEventListener('load', function() {
    if(items.length == 0) {
        let loading = `<li class="loading">Loading groceries...</li>`;
        itemsList.innerHTML = loading;
    }
})


