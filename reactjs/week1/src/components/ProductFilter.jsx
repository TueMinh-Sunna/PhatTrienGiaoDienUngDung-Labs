import React, { useMemo, useState } from 'react'

const products = Array.from(
    { length: 1000 }
    , (_, index) => ({
        id: index,
        name: `Product ${index}`,
        price: Math.floor(Math.random() * 1000 + 1)
    }))

function ProductFilter() {
    const [name, setName] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    console.time('filter')

    const filteredProducts = useMemo(
        () => {
            return products.filter(product => {
                const matchName = product.name
                    .toLowerCase()
                    .includes(name.toLocaleLowerCase())

                const matchMinPrice = minPrice === ""
                    || product.price >= Number(minPrice)

                const matchMaxPrice = maxPrice === ""
                    || product.price <= Number(maxPrice)

                return matchMaxPrice && matchMinPrice && matchName
            }
            )
        }
        , [name, minPrice, maxPrice]
    )

    const totalPrice = useMemo(
        () => {
            return filteredProducts.reduce(
                (sum, product) => sum + product.price
                , 0
            )
        }
        , [filteredProducts]
    )

    console.timeEnd('filter')

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
            />
            <br />
            <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder='minPrice'
            />
            <br />
            <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder='maxPrice'
            />

            {filteredProducts.map(product => (
                <div key={product.id}>
                    {product.name} - {product.price}
                </div>
            )
                
            )}

        </div>
    )
}

export default ProductFilter