import { useStore, useSettings } from './data';
import './App.css';
import { AddProductPopUp, Product } from './components';

export function App() {
  const {productPopUp, changeProductPopUp} = useSettings();
  const { products } = useStore();
  const totals = products.map(p => p.checked?p.price*p.quantity:0).reduce((acc, p) => acc+p);
  return (
    <>
    {
      productPopUp && <AddProductPopUp/>
    }
      <nav>
      <div className="btn-cube" onClick={()=>changeProductPopUp()}><b>+</b></div>
        <h1>Shopping List</h1>
      </nav>
      <section>
        <div className="totals">
          <h3>A pagar: ${totals}</h3>
        </div>
        <ul>
          {
            products.map(product =>(
              <Product key={product.id} id={product.id} quantity={product.quantity} price={product.price} checked={product.checked} name={product.name}/>
            ))
          }
        </ul>
      </section>
    </>
  )
}