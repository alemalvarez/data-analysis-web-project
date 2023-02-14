import { connect, Provider } from "react-redux";
import { Component } from 'react';
import { store } from "./app/store";
import { setFields, setSales } from './app/actions';
import App from "./components/App";

const mapStateToProps = (state) =>{
    return {
        sales : state.sales,
        fields : state.fields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSales : ()=>dispatch(setSales()),
        setFields : ()=>dispatch(setFields())
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

class Root extends Component{
    render(){
        return (
            <Provider store={store}>
                <ConnectedApp />
            </Provider>
        );
    }
}

export default Root;
