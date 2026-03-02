import React from "react";
import { v4 as uuid } from "uuid";
// submittedData onItemFormSubmit
function ItemForm(props) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={props.handleChangeForm} type="text" name="name" value={props.submittedData.name} />
      </label>

      <label>
        Category:
        <select onChange={props.handleChangeForm} name="category" value={props.submittedData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={props.onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
