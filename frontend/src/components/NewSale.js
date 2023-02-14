import axios from "axios";
import { Component } from "react";

import { Field } from "./Field";

export class NewSale extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    await axios.post("http://localhost:5001/sales", this.state);
    this.props.refresh();
  }
  processState(state, fieldPath, value) {
    if (fieldPath.length === 1) {
      return {
        ...state,
        [fieldPath[0]] : value
      };
    }
    const [field, ...rest] = fieldPath;
    return {
      ...state,
      [field] : this.processState(state[field], rest, value)
    }
  }
  handleChange(fieldPath, value) {
    this.setState(prevState=>{
      return this.processState(prevState, fieldPath, value);
    })
  }
  render() {
    return (
      <div id="new-sale-container">
        <form onSubmit={this.handleSubmit}>
          <div id="inputs-container">
            {this.props.fields.map((field) => {
              return (
                <Field
                  key={field.name}
                  field={field}
                  value={this.state[field.name] || ''}
                  changeHandler={this.handleChange}
                  fieldPath={[]}
                />
              );
            })}
          </div>
          <button type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
