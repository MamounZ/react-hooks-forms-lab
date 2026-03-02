import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, steSearch] = useState("")
  const [newItems, setNewItems] = useState(items)
  const [submittedData, setSubmittedData] = useState({
    name: "",
    category: "Produce"
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    steSearch(event.target.value)
  }

  function handleChangeForm(event){
    let name = event.target.name
    let value = event.target.value
    setSubmittedData({
      ...submittedData,
      id: uuid(),
      [name]: value
    })
  }

  function onItemFormSubmit(event){
    event.preventDefault();
    if(submittedData.name !== ""){
      setNewItems([...newItems, submittedData])
      setSubmittedData({
        name: "",
        category: "Produce"
      })
    }
  }

  const itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm submittedData={submittedData} onItemFormSubmit={onItemFormSubmit} handleChangeForm={handleChangeForm}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
