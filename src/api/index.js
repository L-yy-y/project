import instance from './request'


export const UserLogin=(params)=>{
    return instance.post('http://localhost:8080/login',params)
}