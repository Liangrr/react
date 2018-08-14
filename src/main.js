import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import Inp from './Inp.jsx'

ReactDOM.render(
    //jsx语法
    // <p>test</p>,
    // <h1 title={title}>{message}</h1>,
//  <Inp/>,
    <App/>,
    document.querySelector('#root'),
    function(){
        console.log('渲染完成');
    }
)