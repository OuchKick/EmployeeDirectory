import React from "react";
import "./index.css"

function TableTop () {
    return (
      <table className="table table-striped variant">
      <thead className="text-center align-center">
        <tr>
          <th scope="col"><p className="text-danger" >Image</p></th>
          <th scope="col"><button type="button" className="btn text-danger" onClick={() => this.sortByName()}>Name</button></th>
          <th scope="col"><p className="text-danger">Email</p></th>
          <th scope="col"><p className="text-danger">Phone #</p></th>
          <th scope="col"><p className="text-danger">DOB</p></th>
        </tr>
      </thead>
      </table>
    );
  }






export default TableTop;


