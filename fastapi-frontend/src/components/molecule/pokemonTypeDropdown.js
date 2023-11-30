import React, { useState } from 'react';

export default function ({ types, onSelect, text }) {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        onSelect(newType);
    };

    return (
        <div>
            <label htmlFor="pokemonType">{text}</label>
            <select
            id="pokemonType"
            value={selectedType}
            onChange={handleTypeChange}
            >
            <option value="">-- Select Type --</option>
            {types.map((type) => (
            <option key={type} value={type}>
                {type}
            </option>
            ))}
        </select>
        </div>
    );
};