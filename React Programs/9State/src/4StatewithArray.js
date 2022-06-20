import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
   constructor() {
      super();
      this.state = {
         data:[ {"id":101, "name":"Figo","color":"Red"},
				{"id":102, "name":"Fiesta","color":"Blue"},
				{"id":103, "name":"Aspire","color":"White"}]
      }
   }
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((detail, i) => 
				  <TableRow key = {i} data = {detail} />)}
               </tbody>
            </table>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Car Details</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.color}</td>
         </tr>
      );
   }
}
export default Car;