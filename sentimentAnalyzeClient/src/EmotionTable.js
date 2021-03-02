import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                Object.keys(JSON.stringify(this.props.emotions)).map(
                    function(value, idx) {
                    return <tr id={idx}>
                        <td>{value}</td>
                        <td>{JSON.stringify(this.props.emotions)[value]}</td>
                        </tr>
                    }
                )
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
