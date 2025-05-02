import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const filteredItems = menuItems.filter((item) =>
    filter ? item.dietary.includes(filter) : true
  );

  return (
    <div>
      <h2>Menu</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;