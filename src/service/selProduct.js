import Product from '../model/product'

export default function selProduct(product, amount){
    product.stock -= amount
    return product
}