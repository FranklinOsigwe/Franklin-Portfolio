import './productList.css';
import Product from '../product/Product'
import {products} from '../../data'

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Franklin</h1>
        <p className="pl-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam enim sapiente nobis nemo, quia natus accusantium illo eveniet facilis rerum eos doloribus similique quod dicta vitae.
        </p>
      </div>

      <div className="pl-list">
        {products.map((item) => (
          <Product/>
        ))}
      </div>
    </div>
  )
}

export default ProductList