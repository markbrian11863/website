import React, { useState } from 'react';

function calculateTotal(items) {
    let total = 0;
    for(let i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }
    return total;
}

const CalculatorComponent = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple', price: 1.50 },
        { id: 2, name: 'Banana', price: 0.75 },
        { id: 3, name: 'Orange', price: 2.00 }
    ]);

    const [newItem, setNewItem] = useState({ name: '', price: 0 });

    const addItem = () => {
        if (newItem.name && newItem.price > 0) {
            setItems([...items, {
                id: Date.now(),
                name: newItem.name,
                price: parseFloat(newItem.price)
            }]);
            setNewItem({ name: '', price: 0 });
        }
    };

    const total = calculateTotal(items);

    return (
        <div className="calculator-container">
            <h2>Price Calculator</h2>
            
            <div className="items-list">
                <h3>Items:</h3>
                {items.map(item => (
                    <div key={item.id} className="item">
                        <span>{item.name}: ${item.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <div className="add-item">
                <h3>Add New Item:</h3>
                <input
                    type="text"
                    placeholder="Item name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                />
                <button onClick={addItem}>Add Item</button>
            </div>

            <div className="total-display">
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>

            <style jsx>{`
                .calculator-container {
                    max-width: 500px;
                    margin: 20px auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-family: Arial, sans-serif;
                }

                .item {
                    padding: 8px;
                    margin: 5px 0;
                    background: #f5f5f5;
                    border-radius: 4px;
                }

                .add-item input {
                    margin: 5px;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                .add-item button {
                    margin: 5px;
                    padding: 8px 16px;
                    background: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .total-display {
                    margin-top: 20px;
                    padding: 15px;
                    background: #e8f5e8;
                    border-radius: 8px;
                    font-size: 1.2em;
                }
            `}</style>
        </div>
    );
};

export default CalculatorComponent;