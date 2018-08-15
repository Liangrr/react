import React from 'react'
//引入发布/订阅插件
import PubSub from 'pubsub-js'

export default class Breact extends React.Component{
	constructor(){
		super()
		this.state = {
			data:''
		}
	}
	render(){
		return (
			<div>
			<hr/>
			<p>接收One的消息:{this.state.data}</p>
			
			</div>
		)
	}
	componentDidMount(){
//		订阅下来,赋给token是因为结束时能够找到当前实例
		this.token = PubSub.subscribe('one-data',(paramsOne,value)=>{
			this.setState({data:value})
		});
	}
	componentWillUnmount(){
		PubSub.unsubscribe(this.token);
	}
}
