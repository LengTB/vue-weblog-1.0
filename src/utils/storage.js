const INFO_KEY = 'token'


export const getInfo = ()=>{
    const info = localStorage.getItem(INFO_KEY);
    return info != null ? info : ''
}
export const setInfo = (obj)=>{
    localStorage.setItem(INFO_KEY,obj);
}

export const removeInfo = ()=>{
    localStorage.removeItem(INFO_KEY)
}