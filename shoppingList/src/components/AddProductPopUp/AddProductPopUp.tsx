"use client";
import { useState } from 'react';
import { useSettings, useStore } from '../../data';
import './AddProductPopUp.css';

export type AddProductPopUpProps = {
	// types...
}

export const AddProductPopUp: React.FC<AddProductPopUpProps> = ({ }) => {
	const { changeProductPopUp } = useSettings();
	const { products } = useStore();
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const save = () => {
		const id = Date.now();
		products.push({ name, id, price, quantity, checked: false })
		close();
	}
	const close = () => {
		changeProductPopUp();
	}

	return (
		<div className='addproductpopup'>
			<div className="addproductpopup-content">
				<div className="w100">
					<label htmlFor="">Producto</label><br />
					<input className='w100' type="text" placeholder='PRODUCTO' value={name} onChange={e => setName(e.target.value)} />
				</div>
				<div className="w100">
					<label htmlFor="">Precio (opcional)</label><br />
					<input className="w100" type="number" placeholder='PRECIO (opcional)' value={price} onChange={e => setPrice(Number(e.target.value))} />
				</div>
				<div className="w100">
					<label htmlFor="">Cantidad</label><br />
					<input className="w100" type="number" placeholder='CANTIDAD' value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
				</div>
				<div className="w100">
					<button onClick={close}>CERRAR</button>
					<button onClick={save}>GUARDAR</button>
				</div>
			</div>
		</div>
	);
};