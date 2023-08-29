const item = {
    id: 1,
    name: 'Example Item',
    price: 100,
    quantity: 10,
    description: 'This is an example item.',
};

// Create
item.brand = 'Example Brand';

// Read
console.log('Item:', item);

// Update
item.price = 120;
item.quantity = 15;

// Delete
delete item.description;
console.log('Updated Item:', item);
