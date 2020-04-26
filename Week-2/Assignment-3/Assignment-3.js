function avg(data) { 
    let size = data.size;
    let totalPrice = 0;
    let avgPrice;
    for (let i = 0; i < size; i++){
        totalPrice += data.products[i].price;
    }
    avgPrice = totalPrice / size;
    return avgPrice;
    // your code here } 
}

console.log( 
    avg({ 
            size:3, 
            products:[ 
                { 
                    name:"Product 1", price:100 
                }, 
                { 
                    name:"Product 2", price:700 
                }, 
                { 
                    name:"Product 3", price:250 
                }   
            ] 
        }
    )
) // should print the average price of all products 