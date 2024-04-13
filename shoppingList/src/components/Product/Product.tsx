"use client";
import { useStore } from '../../data/useShoppingStore';
import './Product.css';
import { tProduct } from '../../data/types';
import checkImg from "../../assets/check.png"


export const Product: React.FC<tProduct> = (props) => {
	const { products, update } = useStore();
	const { id, name, price, quantity, checked } = props;

	const checkProduct = () =>{
		const newProducts = products.map(p => p.id === id ? {id,name,price,quantity,checked:!checked} : p);
		update(newProducts);
	}
	return (
		<div className='product'>
			<div className="product-dual-container">
				<div className='product-quantity'>{quantity}</div>
				<div className='product-price'><small>${price}</small></div>
			</div>
			<div className="product-name">
			<b>{name}</b>
			</div>
			<button onClick={checkProduct}>
				<img className={checked?"active":""} src={checkImg} alt="check product" />
			</button>
		</div>
	);
};