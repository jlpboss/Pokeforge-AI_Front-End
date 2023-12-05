import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import GenerationSelector from '@/components/organism/generationSelector';

export default function Home() {

  const testTiers = [ "Illegal", "LC", "NFE", "PU", "(PU)", "NU", "OU", "NUBL", "RU", "PUBL", "UU", "RUBL", "Uber", "UUBL", "AG", "CAP LC", "CAP", "CAP NFE" ] 
  const pokemonTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']
  
  const [selectedTier, setSelectedTier] = useState('')
  const [selectedTypeP, setSelectedTypeP] = useState('')
  const [selectedTypeS, setSelectedTypeS] = useState('')
  const [inputText, setInputText] = useState('')

  function handleTierClick (e){
    console.log(e.target.id)
    setSelectedTier(e.target.id)
  }

  function handleTypeSelectP (type) {
    setSelectedTypeP(type)
  }

  function handleTypeSelectS (type) {
    setSelectedTypeS(type)
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  
  function handleGenClick (){
    new_pokemon = {
      "name": "test",
      "types": [
        selectedTypeP,
        selectedTypeS
      ],
      "tier": selectedTier
    }
  }

  return (
    <>
      <div className='container'>
        <GenerationSelector
        Tiers={testTiers}
        handleTierClick={handleTierClick}
        pokemonTypes={pokemonTypes}
        handleTypeSelectP={handleTypeSelectP}
        handleTypeSelectS={handleTypeSelectS}
        selectedTier={selectedTier}
        handleGenClick={handleGenClick}
        inputText={inputText}
        handleInputChange={handleInputChange}
        />
      </div>
      <p></p>
      <div className='container'>
        <p>Selected Pokémon Primary Type: {selectedTypeP}</p>
        <p>Selected Pokémon Secondary Type: {selectedTypeS}</p>
        <Link href="/">Home</Link>
      </div>
    </>
  )
}