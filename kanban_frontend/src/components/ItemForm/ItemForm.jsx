import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = (props) => {
  const [label, setLabel] = useState('');

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onItemAdded(label);
    setLabel('');
  };

  return (
    <form className="form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={onLabelChange}
        placeholder={`${props.type} title`}
        value={label}
        required
      />
      <button type="button" className="btn btn-outline-secondary">Add</button>
    </form>
  );
};

export default ItemForm;
