export const apiCallingList = (data)=>{
    return {
        type    : "GET_API_LIST",
        payload : data
    }
}

export const apiCallingDetails  = (data) => {
    return {
        type    : "GET_API_DETAILS",
        payload : data
    }
}