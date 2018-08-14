import React from 'react'

export default class Inp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			message:'hell',
			radioValue:'男',
			isSelect:true,
			likeArr:['吃']
		}
	}
	render(){
		let inp = <input type='text' value={this.state.message} onChange={this.textInpChange.bind(this)}/>
		return (<div>
			{/*单行输入框*/}
			<p>{this.state.message}</p>
			单行输入框:{inp} <br/>
			
			{/*单选框*/}
			<p>{this.state.radioValue}</p>
			<label>男<input type='radio' 
				checked={this.state.radioValue == '男'} 
				value='男' onChange={this.radioChange.bind(this)}/></label>
			<label>女<input type='radio' 
				checked={this.state.radioValue == '女'} 
				value='女' onChange={this.radioChange.bind(this)}/></label>
			
			{/*多选框*/}
			<br/>多选框
			<input type='checkbox'
				checked={this.state.isSelect}
				onChange={this.checkboxChange.bind(this)}/>
			
			<p>&nbsp;{this.state.likeArr}</p>
			<label>
                吃<input type="checkbox" value="吃" 
                    checked={this.checkInput('吃')}
                    onChange={this.checkboxChange2.bind(this)}/>
            </label>
            <label>
                喝<input type="checkbox" value="喝" 
                    checked={this.checkInput('喝')}
                    onChange={this.checkboxChange2.bind(this)}/>
            </label>
            <label>
                睡<input type="checkbox" value="睡" 
                    checked={this.checkInput('睡')}
                    onChange={this.checkboxChange2.bind(this)}/>
            </label>
			
			</div>)
	}
	textInpChange(ev){
		let value = ev.target.value	
		this.setState({message:value})
	}
	radioChange(ev){
		{/*获取目标元素,的值*/}
		let value = ev.target.value;
		this.setState({radioValue:value});
	}
	checkboxChange(ev){
		this.setState({isSelect:!this.state.isSelect})
	}
	checkInput(value){
		let res = this.state.likeArr.find((item)=>{
			return  item == value
		})
		return res?true:false;
	}
	checkboxChange2(ev){
		let value = ev.target.value;
		console.log(value)
		let result = this.state.likeArr.findIndex((item)=>{
			return value == item;
		})
		console.log(result)
		let newArr = null;
		if(result>=0){
			newArr = this.state.likeArr.filter((item,index)=>{
				return index !== result
			})
		}else{
			newArr = [...this.state.likeArr,value];
		}
		this.setState({likeArr: newArr});

	}
}
