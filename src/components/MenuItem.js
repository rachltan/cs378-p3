import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, updateItem, cost, handleItemChange}) => {
    var [count, setCount] = useState(0);

    const add = () => {
        handleItemChange(title, count + 1);
        setCount(count + 1);
        updateItem(price);
    };

    const remove = () => {
        if (count > 0) {
            handleItemChange(title, count - 1);
            setCount(count - 1);
            updateItem(-price);
        }
    };

    if (count !== 0 && cost === 0) {
        setCount(0);
    };
    
    return (
            <div class="row"> 
                <div class = "col-4">
                    <img className="food" src={require(`../images/${imageName}`)} alt={title} />
                </div>
                <div class = "col-6">
                        <h4>{title}</h4>
                        <h5>{description}</h5>
                        <div class="row">
                            <div class="col-5">
                                <h6>{price}</h6>
                            </div>
                            <div className="col-7">
                                <div >
                                    <button className="button" onClick={remove}>-</button>
                                    <span style={{ marginLeft: '6px', marginRight: '6px' }}>{count}</span>
                                    <button className="button" onClick={add}>+</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default MenuItem;
