import React from 'react'

import Areact from './Areact.js'
import Breact from './Breact.js'

export default class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:''
		}
	}
//	非父子间传值
	render(props){
		return (
			<div>
				<Areact aval={(val)=>{
					this.setState({data:val})
				}}></Areact>
				<Breact bval={this.state.data}></Breact>
			</div>
		)
	}
}