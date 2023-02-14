import { Component } from "react";

export class Field extends Component {
  render() {
    const { field, value, changeHandler, fieldPath} = this.props;
    if (this.props.field.type === "object") {
      return (
        <div>
          {field.fields.map((nestedField) => {
            return (<Field
              key={nestedField.name}
              field={nestedField}
              value={value[nestedField.name]}
              changeHandler={changeHandler}
              fieldPath={[...fieldPath, field.name]}
            />);
          })}
        </div>
      );
    }
    switch(field.type){
        case "float":
            return (<input
                type="number"
                value={value||0}
                onChange={(e)=>changeHandler([...fieldPath, field.name], e.target.value)}
            />)
        case "date":
            return (<input
                type="date"
                value={value}
                onChange={(e)=>{
                    changeHandler([...fieldPath, field.name], e.target.value)
                }}
            />)
        default:
            return (<input
                type="text"
                value={value||""}
                onChange={(e)=>changeHandler([...fieldPath, field.name], e.target.value)}
            />)
    }
  }
}
