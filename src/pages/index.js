import React, { useState } from 'react';

export default function Home() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid input.');
      return;
    }
    const newItem = inputValue;
    const updatedStack = [newItem].concat(stack); // Push to the top
    setStack(updatedStack);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const updatedStack = removeTop(stack); // Pop from the top
    setStack(updatedStack);
  };

  // Function pra mo remove sa top item from the stack
  const removeTop = (arr) => {
    if (arr.length === 1) {
      return [];
    }
    const newArr = new Array(arr.length - 1);
    for (let i = 1; i < arr.length; i++) {
      newArr[i - 1] = arr[i];
    }
    return newArr;
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center h-screen">
      <div className="border border-gray-300 p-4 rounded-md">
        <div className="mb-4">
          <input
            type="text"
            className="mr-2 px-2 py-1 border border-gray-300 rounded-md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bg-gray-500 text-black px-5 py-1 rounded-md mr-2" onClick={handlePop}>
            Pop
          </button>
          <button className="bg-gray-500 text-black px-4 py-1 rounded-md" onClick={handlePush}>
            Push
          </button>
        </div>
        {stack.length === 0 ? (
          <p className="text-gray-500">Stack is empty.</p>
        ) : (
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
// francis resurreccion
