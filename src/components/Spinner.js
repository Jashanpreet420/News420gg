import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
        <div className='d-flex justify-content-center'>
        <div className="spinner-grow my-3" role="status">
        <span className="sr-only"></span>
      </div>
      </div>
    )
  }
}

export default Spinner