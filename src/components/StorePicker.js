import React from 'react'
import PropTypes from 'prop-types'

import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	static propTypes = {
		history: PropTypes.object
	}

	input = React.createRef()

	goToStore = event => {
		event.preventDefault()
		const storeName = this.input.value.value
		this.props.history.push(`/store/${storeName}`)
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					type="text"
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
					ref={this.input}
				/>
				<button type="submit">Visit Store ➡</button>
			</form>
		)
	}
}

export default StorePicker
