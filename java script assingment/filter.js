const products = [
    { brand: 'Apple', price: 80000 },
    { brand: 'Samsung', price: 75000 },
    { brand: 'Apple', price: 60000 },
    { brand: 'Sony', price: 45000 },
];

function filterData() {
    const appleProducts = products.filter(product => product.brand === 'Apple');
    console.log('Apple products:', appleProducts);

    const highPricedProducts = products.filter(product => product.price > 50000);
    console.log('High-priced products:', highPricedProducts);

    const filteredProducts = products.filter(product => (product.brand === 'Apple' || product.brand === 'Samsung') && product.price > 70000);
    console.log('Filtered products:', filteredProducts);
}

filterData();
