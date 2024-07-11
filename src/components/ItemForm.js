import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit } ) {
  const [itemCategory, setItemCategory] = useState("Produce")
  const [itemName, setItemName] = useState("")

const handleNewCategory = (e) => {
  setItemCategory(e.target.value)
}

const handleAddItem = (e) => {
  setItemName(e.target.value)
}

const newItem = {
  id: uuid(), // the `uuid` library can be used to generate a unique id
  name: itemName,
  category: itemCategory,
}

  

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit(newItem)}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleAddItem}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
