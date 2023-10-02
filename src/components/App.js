import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const addShape = () => {
    const newShape = {
      type: selectedShape,
      id: Date.now().toString(), // Use a unique identifier as the key
    };
    setShapes([...shapes, newShape]);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={addShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={shape.type.toLowerCase()}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;

