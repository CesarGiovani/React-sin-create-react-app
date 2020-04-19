import React from 'react';
import PropType from 'prop-types';

const Cart = ({ Title, Poster, Year, Type }) => {
	return (
		<div className="col-md-4">
			<div className="card">
				<img className="card-img-top" src={Poster} alt={Title} width="100"/>
				<div className="card-body">
					<h4>
						{Title} {Year}
					</h4>
					<p>{Type}</p>
				</div>
			</div>
		</div>
	);
};

Cart.propTypes = {
    Title: PropType.string,
    Poster: PropType.string,
    Year: PropType.string,
    Type: PropType.string,
}

export default Cart;
