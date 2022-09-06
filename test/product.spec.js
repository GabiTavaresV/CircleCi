import Product from '../src/model/product';
import sell from '../src/service/selProduct'


it('Should to validade stok the one unit', ()=> {
    let produto = new Product('Celular', 500.00, 900.00, 10)
    sell(produto, 1)
    expect(produto.stock).toBe(9)

})

it('Should acept sell more one unit', ()=> {
    let produto = new Product('Celular', 500.00, 900.00, 10)
    sell(produto, 3)
    expect(produto.stock).toBe(7)
})