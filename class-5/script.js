document.addEventListener('DOMContentLoaded', () => {
    // Elements of DOM
    const btnAdd = document.getElementById('btnAdd');
    const inputItem = document.getElementById('txtItem');
    const itemList = document.getElementById('itemList');

    // array
    let items = [
        { name : "Laptop", purshase : false },
        { name : "Speakers", purshase : true },
        { name : "MacBook", purshase : false }
    ];

    function renderList() {
        itemList.innerHTML = '';

        
        items.forEach((item, index) => {
            let li = document.createElement('li');

            li.innerHTML = `
                <span>${item.name}</span>
                <button type="button" class="btn btn-outline-danger" id="${index}">Delete</button>
            `;

            const button = li.querySelector('button')

            button.addEventListener('click', (element) => {
                const buttonSelect = element.target;
                items.splice(parseInt(buttonSelect.id), 1);
                
                renderList();
            });

            itemList.appendChild(li);
        });
        
    }

    btnAdd.addEventListener('click', () => {
        let item = inputItem.value;

        if (item == '') return;

        items.push({ name : item, purshase : false});

        renderList();
    });
    
    renderList();

});