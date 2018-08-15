import React from 'react'
//引入发布/订阅插件
import PubSub from 'pubsub-js'

export default class Areact extends React.Component{
	constructor(){
		super()
		this.state = {
			data:''
		}
	}
	render(){
		return (
			<div>
			<p>One发送的消息:{this.state.data}</p>
			<input ref='inp' type='text'/>
			<button onClick={()=>{
				let inp = this.refs.inp;
				this.setState({data:inp.value})
//				直接发布
				PubSub.publish('one-data',inp.value);
			}}>One发送</button>
			</div>
		)
	}
}
