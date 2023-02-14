import {Component} from 'react';
import Row from './Sale';
import _ from 'underscore';

export class Sales extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields : []
        }
    }
    componentDidUpdate(prevProps){
        if(!_.isEqual(prevProps, this.props)){
            let expandedFields = [];
        this.props.fields.forEach(field => {
            if(field.type!=='object'){
                expandedFields.push(field);
            }else{
                expandedFields.push(...field.fields);
            }
        });
        this.setState({
            fields : expandedFields
        })
        }
    }
    render(){
        return (
            <div id="sales-container"> 
                <table>
                    <thead>
                        <tr>
                            {this.state.fields.map((field, index)=>{
                                return <th key={index}>{field.name}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.sales.map((sale, index)=>{
                            return <Row key={index} sale={sale} fields={this.props.fields}/> 
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
