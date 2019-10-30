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
                <button class="btn-delete" type="submit" onclick="deleteItem(this)">Delete</button>
            </li>
        `;
    }).join('');
}
getList(items, itemsList);

// Add new list items
addItem = (e) => {
    e.preventDefault();
    const gName = (document.querySelector('[name=item]')).value;
    const gPrice = (document.querySelector('[name=price]')).value;
    const item = {
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
        this.getList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        e.target.reset();
    }
}

addItems.addEventListener('submit', addItem);

// Delete item from list
deleteItem = (e) => {
    e.preventDefault();
}


