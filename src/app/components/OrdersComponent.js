import React, { Component } from 'react';
import HomeMenu from './HomeMenu';

class Orders extends Component{
  render(){
    return (
      <div className="Orders">
        <div className="Orders-header">
          <HomeMenu />
        </div>
        <div className="Orders-body">
          <h1>Orders</h1>
        </div>
      </div>
    )
  }
}

export default Orders;