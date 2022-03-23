import axios, { Axios } from "axios";

export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
};

export const withdrawMoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

//kucing

const getKucing = ()=>{
    return{
        type: "getKucing"
    }
}

const getSuccess=(data)=>{
    return{
        type: "getSuccess",
        payload: data
    }
}

export const apikucing = ()=>{
    return async (dispatch)=>{
        dispatch(getKucing())

        const hasil = await axios.get("https://api.thecatapi.com/v1/breeds")
        dispatch(getSuccess(hasil.data))
    }
}