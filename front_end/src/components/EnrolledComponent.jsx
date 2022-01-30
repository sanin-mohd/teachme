import React from 'react';
import {Link} from 'react-router-dom'
function EnrolledComponent() {
  return <div>
      <div className="card">
                      <h3 className="card-header">Enrolled Courses</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Created By</th>
                                    <th>Status</th>
                                    <th>Get Support</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td>100% Completed</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td>50% completed</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td>50% completed</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td>100% Completed</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default EnrolledComponent;
