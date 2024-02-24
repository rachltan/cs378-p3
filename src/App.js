import './App.css';
import MenuItem from './components/MenuItem';
import logo from './logo192.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import React, { useState } from 'react';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function MenuHeader() {
  return (
    <div>
    <div class="row">
            <div class="col-4">
              <img src={logo} class="logo" alt="logo"/>              
            </div>
            <div class="col-8">
              <h2>CAMPUS CAFE</h2>
            </div>
    </div>
    <div class="header">
      <h3>Delicious, From-Scratch Recipes Close at Hand</h3>
      <h1>The Fresh Choice of UT!</h1>
    </div>
    </div>
  );
};

function App() {
  const [cost, setCost] = useState(0);
  const [item, setItem] = useState({});

  const updateItem = (priceChange) => {
    setCost(Math.max(cost + priceChange, 0));
  };

  function handleItemChange(title, itemCount) {
    item[title] = itemCount;
    setItem(item);
  }

  const handleOrder = () => {
    if (cost === 0) {
      alert("No items in cart");
      return;
    }

    let cartMsg = "";

    Object.keys(item).forEach((title) => {
      cartMsg += item[title] + " " + title + "\n";
    });

    alert("Order Placed! \n" + cartMsg);
  };

  const handleClearAll = () => {
    setCost(0);
  };
  
  return (
    <div className='body'>
      <MenuHeader />
      <div className="menu">
        {menuItems.map((item) => (
        <MenuItem 
          title={item.title}
          description={item.description}
          imageName={item.imageName}
          price={item.price}
          updateItem={updateItem}
          cost={cost}
          handleItemChange={handleItemChange}
         />
        ))}
      </div>
      <div className="subtotal">
        Subtotal: ${cost.toFixed(2)}
        <button className="btns" onClick={handleOrder} style={{ marginLeft: '10px' }}>Order</button>
        <button className="btns" onClick={handleClearAll} style={{ marginLeft: '10px' }}>Clear All</button>
      </div>
    </div>
  );
}

export default App;



