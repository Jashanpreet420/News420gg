import React, { Component } from 'react'
import { FaLinkedin ,FaFacebookSquare} from "react-icons/fa";
export class Footer extends Component {
    state={
        curDT : new Date().getFullYear().toString()
      }
    
  render() {
    return (
      <footer className="bg-dark text-center text-lg-start">
      <div className="text-center p-1 text-warning">
        © {this.state.curDT} Copyright
      </div>
      <div className="text-center p-1 text-light">
      by &rarr; jashanOP</div>
      <div className='container-fluid d-flex justify-content-center' style={{height: '50px'}}>
      
      <a className="mx-5 mt-1"href='https://www.linkedin.com/in/jashan-preet-4ba594195/' >
      <FaLinkedin size={42} color='white'   /></a>
      <a className="mx-5 mt-1 "href='https://www.facebook.com/profile.php?id=100011282160875' >
      <FaFacebookSquare size={42} color='white'/></a>
      </div>
      
        </footer>
    )
  }
}

export default Footer