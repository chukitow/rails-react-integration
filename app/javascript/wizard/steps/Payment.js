import React from 'react';

const Payment = ({
  onSave
}) => (
  <div className="card">
    <div className="card-header">
      Payment Information
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label for="inputEmail4">Credit Card Numebr</label>
          <input type="text" className="form-control" id="inputEmail4" placeholder="4242 4242 4242 4242"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="inputState">Expiration</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="12/07"/>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">CVV</label>
            <input type="password" className="form-control" placeholder="***"/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSave}>Save</button>
      </form>
    </div>
  </div>
);

export default Payment;
