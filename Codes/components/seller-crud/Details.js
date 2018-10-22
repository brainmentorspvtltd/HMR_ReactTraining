import React from "react";
export const Details = props => {
  return (
    <div className='row'> 
    <div className="col-sm-12">
      <div className="form-group">
        <label htmlFor="">Id</label>
        <input
          type="text"
          onChange={props.takeInputId}
          className="form-control"
          placeholder="Type Item Id"
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={props.takeInputName}
          className="form-control"
          placeholder="Type Item Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Price</label>
        <input
          type="range"
          onChange={props.takeInputPrice}
          className="form-control"
          
        />
        <output>{props.price}</output>
      </div>
      <div className="form-group">
        <label htmlFor="">URL</label>
        <input
          type="text"
          onChange={props.takeInputUrl}
          className="form-control"
          
        />
      </div>
      <div className="btn-group btn-group-justified">
        <button onClick={props.add} className="btn btn-primary">Add</button>
       
        <button className="btn btn-info">Clear All</button>
      </div>
    </div>
    </div>
  );
};
