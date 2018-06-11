import React from 'react'
import PropTypes from 'prop-types'

import { formatPrice } from '../helpers'

class Fish extends React.Component {
	static propTypes = {
		details: PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
			desc: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string
		}),
		addToOrder: PropTypes.func
	}

	render() {
		const { name, image, desc, price, status } = this.props.details
		const isAvailable = status === 'available'
		return (
			<li className="menu-fish">
				<img src={image} alt={`${name} - ${desc}`} />
				<h3 className="fish-name">
					{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button
					onClick={() => this.props.addToOrder(this.props.index)}
					disabled={!isAvailable}
				>
					{isAvailable ? 'Add To Order' : 'Sold Out'}
				</button>
			</li>
		)
	}
}

export default Fish
