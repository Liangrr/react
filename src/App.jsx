import React, {Component} from 'react'
//	父子传值
import Father from './父子间传值/Father.js'
//	非父子间传值，通过子传父，父传子
import ABreact from './非父子间传值2/ABreact.js'
//	非父子间传值，通过发布/订阅
import One from './非父子间传值/One.js'
import Two from './非父子间传值/Two.js'
export default class App extends Component{
//	非父子间传值，通过子传父，父传子
	render(){
		return (
			<div>
				<One></One>
				<Two></Two>
			</div>
		)
	}
	
//	非父子间传值，通过子传父，父传子
//	render(){
//		return (
//			<div>
//				<ABreact></ABreact>
//			</div>
//		)
//	}
	
//	父子传值的render
//	render(){
//		return (
//			<div>
//				<Father/>
//			</div>
//		)
//	}
	
    //提供组件的dom结构
    // render(){
    //     return (
    //         <header>
    //             <h1>header</h1>
    //         </header>
    //     );
    // }


    /*
    v-text
    v-html
    v-show
    v-if
    v-for
    v-bind
    v-model
    v-on
    */

    // v-text
    // render(){
    //     let message = 'hello react';
    //     return (
    //         <div>{message}</div>
    //     )
    // }

    //v-html
    // render(){
    //     let message = <h1>hello react</h1>;
    //     let list = [<li key="1">item1</li>,<li key="2">item2</li>,<li  key="3">item3</li>];
    //     return (
    //         <div>{list}</div>
    //     )
    // }


    // v-show
    // render(){
    //     let isShow = true;
    //     return <div id="box" style={{display: isShow?'':'none'}}></div>
    // }


    // v-if
    // render(){
    //     let isShow = true;
    //     return isShow ? <div id="box"></div> : null;
    //     // return isShow && <div id="box"></div>;
    // }


    // v-for
    /*
    render(){
        let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

        // let newArr = arr.map((item, index)=>{
        //     return <li key={index}>{item}</li>
        // })

        let newArr = [];
        for(var i = 0; i < arr.length; i++){
            newArr.push(<li key={i}>{arr[i]}</li>);
        }

        // return (
        //     <ul>
        //         {newArr}
        //     </ul>
        // );

        // return (
        //     <ul>
        //         {arr.map((item, index)=>{
        //             return <li key={index}>{item}</li>
        //         })}
        //     </ul>
        // );

        return (
            <ul>
                {(function(){
                    let newArr = [];
                    for(var i = 0; i < arr.length; i++){
                        newArr.push(<li key={i}>{arr[i]}</li>);
                    }
                    return newArr;
                })()}
            </ul>
        )

    }
    */


    // v-bind
	//  render(){
	//      let aPath = 'https://www.baidu.com/';
	//      let imgPath = 'https://www.baidu.com/img/bd_logo1.png?where=super';
	//      return (
	//          <div 
	//              id="box" 
	//              className="box red" 
	//              style={{background: 'yellow', 
	//              border: '1px solid #ddd', 
	//              marginTop: '20px'}}>
	//              <a href={aPath}>百度一下</a>
	//              <img src={imgPath}/>
	//              </div>
	//      )
	//  }
}