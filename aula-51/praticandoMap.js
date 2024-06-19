const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, stock: 5 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800, stock: 10 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 50, stock: 20 },
    { id: 4, name: 'Pants', category: 'Clothing', price: 40, stock: 15 },
    { id: 5, name: 'Hat', category: 'Accessories', price: 20, stock: 30 }
  ]

function transformProducts(products) {
    return {
    'transformedProducts': products.map(function(element){
        return {
        'id': element.id,
        'name': element.name,
        'category': element.category,
        'totalValue': element.price * element.stock,
        'isExpensive': element.price > 100?true:false
        }
    }),

    'categorySummary': products.reduce(function(value, element) {
        if(value[element.category]) {
            value[element.category]++
        } else {
            value[element.category] = 1
        }
        return value
    }, {})
    }
}

const result = transformProducts(products)
console.log(result.transformedProducts)
console.log(result.categorySummary)
