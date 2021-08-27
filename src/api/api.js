import api  from './index'

// 接口1
export function login(data){
   return api('get', `/login`,data );
}

// 接口2
export function regist(data){
   return api('post', `/regist`,data );
}


export default {}