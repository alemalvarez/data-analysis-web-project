import axios from "axios"

const SET_FIELDS = "SET_FIELDS";
const SET_SALES = "SET_SALES";

export const setFields = () => {
    return function(dispatch){
        axios.get('http://localhost:5001/fields')
            .then((response)=>{
                dispatch({
                    type: SET_FIELDS,
                    fields : response.data
                });
            })
    }
}

export const setSales = ()=>{
    return function(dispatch){
        axios.get('http://localhost:5001/sales')
            .then((response)=>{
                dispatch({
                    type : SET_SALES,
                    sales : response.data
                })
            });
    }
}