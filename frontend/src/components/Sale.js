import { Component } from "react";

class Sale extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr className="sale-row">
        {this.props.fields.map((field) => {
          if (field.type === "object") {
            return field.fields.map((objectField) => {
              return (
                <td key={objectField.name} className={objectField.name}>
                  {this.props.sale[field.name][objectField.name]}
                </td>
              );
            });
          } else
            return (
              <td key={field.name} className={field.name}>
                {this.props.sale["fecha"]}
              </td>
            );
        })}
      </tr>
    );
  }
}

export default Sale;
