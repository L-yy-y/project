import React, { Suspense } from 'react'
import router from './router/index'
import { Spin } from 'antd';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
function App() {
  const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
  const render=(arr)=>{
    return arr&&arr.map((item,index)=>{
      return <Route key={index} path={item.path}
      element={item.element?<item.element></item.element>:<Navigate to={item.to}></Navigate>}
      >
      {
        item.children&&render(item.children)
      }
      </Route>
    })
  }
  return (
    <Suspense fallback={<div>加载中... 
      <Spin tip="Loading" size="large">
        {content}
      </Spin></div>} >
      <BrowserRouter>
        <Routes>
          {
            render(router)
          }
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
