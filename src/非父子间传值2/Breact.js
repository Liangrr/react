import React from 'react'

export default class Breact extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
			<hr/>
			<p>接收A的消息:{this.props.bval}</p>
			
			</div>
		)
	}
}
