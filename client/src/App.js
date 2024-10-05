import React, { useState, useEffect } from 'react';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/items')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="App">
            <h1>Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
