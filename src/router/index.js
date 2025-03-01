import { lazy } from "react";







const router=[
    {
        path:'/',
        to:'/home'
    },
    {
        path:'/home',
        element:lazy(()=>import('../page/Home/Index'))
    },
    {
        path:'/login',
        element:lazy(()=>import('../page/Login/Index'))
    },
    {
        path:'*',
        element:lazy(()=>import('../page/Error/Index'))
    }
]
export default router;











