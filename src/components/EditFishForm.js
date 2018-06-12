import React from 'react'
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {
	static propTypes = {
		fish: PropTypes.shape({
			name: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string,
			desc: PropTypes.string,
			image: PropTypes.string
		}),
		index: PropTypes.string,
		updateFish: PropTypes.func
	}

	handleChange = event => {
		const value =
			parseFloat(event.currentTarget.value) || event.currentTarget.value
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: value
		}
		this.props.updateFish(this.props.index, updatedFish)
	}

	render() {
		return (
			<div className="fish-edit">
				<input
					required
					type="text"
					name="name"
					value={this.props.fish.name}
					onChange={this.handleChange}
				/>
				<input
					required
					type="number"
					name="price"
					value={this.props.fish.price}
					onChange={this.handleChange}
				/>
				<select
					name="status"
					value={this.props.fish.status}
					onChange={this.handleChange}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					required
					name="desc"
					value={this.props.fish.desc}
					onChange={this.handleChange}
				/>
				<input
					required
					type="text"
					name="image"
					value={this.props.fish.image}
					onChange={this.handleChange}
				/>
				<button onClick={() => this.props.deleteFish(this.props.index)}>
					Remove Fish
				</button>
			</div>
		)
	}
}

export default EditFishForm
