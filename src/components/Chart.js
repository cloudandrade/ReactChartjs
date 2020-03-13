import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

// import { Container } from './styles';

export default class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData,
		};
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
	};

	render() {
		return (
			<div className="chart">
				<Bar
					data={this.state.chartData}
					width={100}
					height={25}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Largest Cities in Massachussetts',
							fontSize: 25,
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition,
						},
					}}
				></Bar>
				<br />
				<Line
					data={this.state.chartData}
					width={100}
					height={25}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Largest Cities in Massachussetts',
							fontSize: 25,
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition,
						},
					}}
				></Line>
				<br />
				<Pie
					data={this.state.chartData}
					width={100}
					height={25}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Largest Cities in Massachussetts',
							fontSize: 25,
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition,
						},
					}}
				></Pie>
			</div>
		);
	}
}
