import {Component} from 'react';
import {NewSale} from './NewSale';
import {Sales} from './Sales';

class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.setFields();
    this.props.setSales();
  }
  render(){
    return (
      <div className='app'>
        <main>
          <NewSale
            fields={this.props.fields}
            refresh={this.props.setSales}
          />
          <Sales
            fields={this.props.fields}
            sales={this.props.sales}
          />
        </main>
      </div>
    )
  }
}

export default App;