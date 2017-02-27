// import React, {Component} from 'react';
//
// export default class Controls extends Component {
//   constructor() {
//     super();
//     this.state = {
//       location: '',
//     };
//   }
//   handleClick() {
//     this.props.submit(this.state);
//     this.setState({ location: '' });
//   }
//
//   render() {
//     return (
//       <div>
//         <input type='text'
//                placeholder='Please Enter City and State'
//                value={this.state.location}
//                onChange={(e) => this.setState({ location: e.target.value })}/>
//         <button disabled={!this.state.location}
//                onClick= {() => this.handleClick()}
//               location={this.state.location}>
//         </button>
//       </div>
//     );
//   }
// }
