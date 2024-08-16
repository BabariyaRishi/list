import React, { useState } from "react";

function SearchFilter() {
  // Step 1: Declare React states
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search input
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry"
  ]); // Sample list of items to filter

  // Step 2: Function to handle the input change and update the state
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Step 3: Filter items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "0 auto" }}>
      {/* Step 2: Input text for entering search term */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      {/* Step 3: Display the filtered list */}
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #ccc",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={{ padding: "8px" }}>No items found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
