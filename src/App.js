import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
	constructor() {
		super();
		this.state = {
			chartData: {},
		};
	}

	componentWillMount() {
		this.getChartData();
	}

	getChartData() {
		//Ajas calls here
		this.setState({
			chartData: {
				labels: [
					'Boston',
					'Worcester',
					'Springfield',
					'Lowell',
				],
				datasets: [
					{
						label: 'Population',
						data: [61475, 184685, 138468, 13879],
						backgroundColor: [
							'rgba(255,99,132,0.6)',
							'rgba(54,162,235,0.6)',
							'rgba(54,162,2,0.6)',
							'rgba(255,99,13,0.6)',
						],
					},
				],
			},
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to
						reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<Chart
					chartData={this.state.chartData}
					legendPosition="bottom"
				></Chart>
			</div>
		);
	}
}

export default App;
