import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase())

    return categoryMatch && searchMatch
  });

 

  const itemFormSubmit = item => e => {
    e.preventDefault()
    setItems([...items, item])
  }
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={itemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
