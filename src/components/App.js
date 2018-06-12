import React from 'react'
import PropTypes from 'prop-types'

import sampleFishes from '../sample-fishes'
import base from '../base'

import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'

class App extends React.Component {
	static propTypes = {
		match: PropTypes.object
	}

	state = {
		fishes: {},
		order: {}
	}

	componentDidMount() {
		const { params } = this.props.match
		const localStorageRef = localStorage.getItem(params.storeId)
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) })
		}
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		})
	}

	componentDidUpdate() {
		localStorage.setItem(
			this.props.match.params.storeId,
			JSON.stringify(this.state.order)
		)
	}

	componentWillUnmount() {
		// when components unmounts remove any memory issues
		base.removeBinding(this.ref)
	}

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes })
	}

	addFish = fish => {
		const fishes = { ...this.state.fishes }
		fishes[`fish${Date.now()}`] = fish
		this.setState({ fishes })
	}

	updateFish = (key, updatedFish) => {
		const fishes = { ...this.state.fishes }
		fishes[key] = updatedFish
		this.setState({ fishes })
	}

	deleteFish = key => {
		const fishes = { ...this.state.fishes }
		fishes[key] = null
		this.setState({ fishes })
	}

	addToOrder = key => {
		const order = { ...this.state.order }
		order[key] = order[key] + 1 || 1
		this.setState({ order })
	}

	removeFromOrder = key => {
		const order = { ...this.state.order }
		delete order[key]
		this.setState({ order })
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order
					fishes={this.state.fishes}
					order={this.state.order}
					removeFromOrder={this.removeFromOrder}
				/>
				<Inventory
					fishes={this.state.fishes}
					storeId={this.props.match.params.storeId}
					addFish={this.addFish}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		)
	}
}

export default App
