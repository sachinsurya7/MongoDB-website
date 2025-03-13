import React, { useState } from "react";
import './App.css';

// Import images
import brownie from './images/brownie.jpg';
import buttermilkWaffles from './images/buttermilkwaffles.jpg';
import cupcakes from './images/cupcakes.jpg';

function App() {
  const [desserts, setDesserts] = useState([
    { id: 1, name: "Buttermilk Waffles", image: buttermilkWaffles },
    { id: 3, name: "Brownie Waffles", image: brownie },
    { id: 4, name: "Cupcakes", image: cupcakes },
  ]);

  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    // Generate a unique ID by finding the highest existing ID and adding 1
    const newId = Math.max(...desserts.map(dessert => dessert.id)) + 1;
    const newDessert = {
      id: newId,
      name: `New Dessert ${newId}`,
      image: "https://via.placeholder.com/150", // Replace with a local image if needed
    };
    setDesserts([...desserts, newDessert]);
  };

  const handleDelete = (id) => {
    const updatedDesserts = desserts.filter((dessert) => dessert.id !== id);
    setDesserts(updatedDesserts);
  };

  const handleEdit = (id) => {
    setEditing(id);
    const dessertToEdit = desserts.find((dessert) => dessert.id === id);
    setNewName(dessertToEdit.name);
  };

  const handleSave = (id) => {
    const updatedDesserts = desserts.map((dessert) =>
      dessert.id === id ? { ...dessert, name: newName } : dessert
    );
    setDesserts(updatedDesserts);
    setEditing(null);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to The Waffle Shop</h1>
      </header>

      <section className="desserts">
        {desserts.map((dessert) => (
          <div key={dessert.id} className="dessert-card">
            <img src={dessert.image} alt={dessert.name} className="dessert-image" />
            <div className="dessert-info">
              {editing === dessert.id ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="edit-input"
                  />
                  <button onClick={() => handleSave(dessert.id)} className="save-btn">
                    Save
                  </button>
                </>
              ) : (
                <h3>{dessert.name}</h3>
              )}

              <div className="actions">
                <button onClick={() => handleEdit(dessert.id)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(dessert.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <button onClick={handleAdd} className="add-btn">Add Dessert</button>
    </div>
  );
}

export default App;
