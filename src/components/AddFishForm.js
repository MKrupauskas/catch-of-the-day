import React from 'react'
import PropTypes from 'prop-types'

class AddFishForm extends React.Component {
	static propTypes = {
		addFish: PropTypes.func
	}

	nameRef = React.createRef()
	priceRef = React.createRef()
	statusRef = React.createRef()
	descRef = React.createRef()
	imageRef = React.createRef()

	createFish = event => {
		event.preventDefault()
		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		}
		this.props.addFish(fish)
		event.currentTarget.reset()
	}

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input type="text" placeholder="Name" name="name" ref={this.nameRef} />
				<input
					type="number"
					placeholder="Price"
					name="price"
					ref={this.priceRef}
				/>
				<select name="status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea placeholder="Description" name="desc" ref={this.descRef} />
				<input
					type="text"
					placeholder="Image"
					name="image"
					ref={this.imageRef}
				/>
				<button type="submit">Add Fish</button>
			</form>
		)
	}
}

export default AddFishForm
