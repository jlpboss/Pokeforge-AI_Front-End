import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import TierButtons from '@/components/molecule/tierButtons';
import PokemonTypeDropdown from '@/components/molecule/pokemonTypeDropdown';

export default function Home() {

  const testTiers = [ "Illegal", "LC", "NFE", "PU", "(PU)", "NU", "OU", "NUBL", "RU", "PUBL", "UU", "RUBL", "Uber", "UUBL", "AG", "CAP LC", "CAP", "CAP NFE" ] 

  const pokemonTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']
  
  const [selectedTier, setSelectedTier] = useState('')

  const [selectedTypeP, setSelectedTypeP] = useState('')

  const [selectedTypeS, setSelectedTypeS] = useState('')

  function handleTierClick(e){
    console.log(e.target.id)
    setSelectedTier(e.target.id)
  }

  const handleTypeSelectP = (type) => {
    setSelectedTypeP(type)
  }

  const handleTypeSelectS = (type) => {
    setSelectedTypeS(type)
  }


  return (
    <>
      <TierButtons
      allTiers={testTiers}
      clickHandler={handleTierClick}
      />
      <p></p>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col'>
            <PokemonTypeDropdown 
            types={pokemonTypes} 
            onSelect={handleTypeSelectP}
            text={'Select Primary Pokémon Type:'} 
            />
          </div>
          <div className='col'>
            <PokemonTypeDropdown 
            types={pokemonTypes} 
            onSelect={handleTypeSelectS}
            text={'Select Secondary Pokémon Type:'} 
            />
          </div>
        </div>
      </div>
      <p></p>
      <div className='container'>
        <p>Selected Tier: {selectedTier}</p>
        <p>Selected Pokémon Primary Type: {selectedTypeP}</p>
        <p>Selected Pokémon Secondary Type: {selectedTypeS}</p>

        <Link href="/">Home</Link>
      </div>
    </>
  )
}