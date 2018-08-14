import React from 'react'

export default class Areact extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:''
		}
	}
	render(){
		return (
			<div>
			<p>A发送的消息:{this.state.data}</p>
			<input ref='inp' type='text'/>
			<button onClick={()=>{
				let inp = this.refs.inp;
				this.props.aval(inp.value);
				this.setState({data:inp.value})
			}}>A发送</button>
			</div>
		)
	}
}
