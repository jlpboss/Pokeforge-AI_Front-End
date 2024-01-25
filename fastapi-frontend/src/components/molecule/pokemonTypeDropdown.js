import React, { useState } from 'react';
//{ types, onSelect, text, className }
export default function PokemonTypeDropdown (props) {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        props.onSelect(newType);
    };

    return (
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='col text-center'>
                    <label htmlFor="pokemonType">{props.text}</label>
                </div>
            </div>
            <div className='row justify-content-between'>
                <div className='col text-center'>
                    <select
                    id="pokemonType"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className={props.className}
                    >
                        <option value="">-- Select {props.thingString} --</option>
                        {props.types.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};