import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
         {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Welcome to your Dashboard</label> */}
      
         <h2 className='text-3xl font-bold text-purple-500 my-4'>Welcome to your Dashboard</h2>
         <Outlet></Outlet>
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      
          <li><Link to='/dashboard/addcomputer'>Add Computer Product</Link></li>
          <li><Link to='/dashboard/addcloth'>Add Cloth Product</Link></li>
                         
            
      
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;