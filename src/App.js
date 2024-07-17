import React, { Suspense } from 'react'
import router from './router/index'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
function App() {
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
    <Suspense fallback={<div>加载中...</div>} >
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
