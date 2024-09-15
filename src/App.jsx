import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  let [items, setItems] = useState([
    {
      id: uuidv4(),
      name: 'Watermelon',
      isPurchased: false,
    },
    {
      id: uuidv4(),
      name: 'Tomato',
      isPurchased: false,
    },
  ]);

  let [itemInput, setItemInput] = useState({
    name: '',
    isPurchased: false,
    id: uuidv4(),
  });

  // Handle input change
  let onChangeHandler = (e) => {
    setItemInput({ ...itemInput, name: e.target.value });
  };

  // Handle adding a new item
  let onClickFunction = (e) => {
    e.preventDefault();

    // Normalize the items' names to lowercase for case-insensitive comparison
    let arrOfItems = items.map((el) => el.name.toLowerCase());

    // Input validation
    if (!itemInput.name.trim()) {
      alert('Your input must contain characters');
      return;
    }

    // Check if item already exists (case-insensitive)
    if (arrOfItems.includes(itemInput.name.toLowerCase())) {
      alert('This item is already in your list');
      return;
    }

    // Add new item if input is valid and unique
    if (itemInput.name.trim() && !arrOfItems.includes(itemInput.name.toLowerCase())) {
      setItems([...items, { ...itemInput, id: uuidv4() }]); // Add new item with a new id
    }

    // Clear input field
    setItemInput({ name: '', isPurchased: false, id: uuidv4() });
  };

  // Handle deleting an item
  let onDelete = (id) => {
    setItems(items.filter((el) => el.id !== id));
  };

  // Handle checkbox toggle for purchased status
  let onCheckbox = (id) => {
    setItems(
      items.map((el) =>
        el.id === id ? { ...el, isPurchased: !el.isPurchased } : el
      )
    );
  };
  return (
    <>
    <div className='title'><h1>Shopping List</h1></div>
      <form action="" className='addTodo'>
        <input type="text" 
        placeholder='Enter Item'
        onChange={onChangeHandler} 
        value={itemInput.name}/>
       
        <button onClick={onClickFunction}>Add to list</button>
      </form>
      <div>
        <ul>
          {items.map((el) => {
            return <li className='item'
            key={el.id}>
              <input type="checkbox" 
              checked={el.isPurchased}
              onChange={() => 
                onCheckbox(el.id)}
                />
              
              <p className={el.isPurchased? 'purchase' : ''}>
                {el.name}
                </p>
                <button onClick={() => onDelete(el.id)}>Delete</button>
              </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
