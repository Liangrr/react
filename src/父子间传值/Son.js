import React from 'react'

export default class Son extends React.Component{
	constructor(){
		super()
		this.state = {
			inpVal:''
		}
	}
	render(){
		return (
			<div>
			<hr/>
			<p>儿子发送的消息:{this.state.inpVal}</p>
			<p>接收父亲的消息:{this.props.data}</p>
			<input type='text' ref='inp'/>
			<button onClick={()=>{
//				获取输入框的值,然后传到state,然后通过props传到父组件
				let inp = this.refs.inp;
				this.setState({inpVal:inp.value})
				this.props.handle(inp.value)
			}}>儿子发送</button>
			</div>
		)
	}

}
