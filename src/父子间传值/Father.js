import React from 'react'

import Son from './Son.js'

export default class Father extends React.Component{
	constructor(){
		super()
		this.state = {
			msg:'',
			remsg:''
		}
	}
	render(){
		return (
			<div>
			<p>父亲发送的消息:{this.state.msg}</p>
			<p>接收儿子的消息:{this.state.remsg}</p>
			<input ref='inp' type='text'/>
			{/*vue和react的ref区别:refs调用不需要$ */}
			<button onClick={()=>{
//				首先获取输入框的值，然后传到state的msg，然后通过Son标签属性传值方式传给子组件
				let inp = this.refs.inp;
				this.setState({msg:inp.value})
			}}>父亲发送</button>
			<Son data={this.state.msg} handle={this.receiveSon.bind(this)}/>
			</div>
		)
	}
	receiveSon(val){
//		收到子组件传来的值,进行渲染到state
		this.setState({remsg:val})
	}
}
