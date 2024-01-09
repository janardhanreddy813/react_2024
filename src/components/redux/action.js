export const deposit=(amount)=>{

    return{ type:'deposit', payload:amount}

}
export const withdraw=(amount)=>{
    return{type:'withdraw', payload:amount}
}

export const nameUpdate=(fullName)=>{
    return { type:'nameUpdate', payload:fullName}
}

export const updatePhone=(phone)=>{
    return { type:'updatePhone', payload:phone}
}