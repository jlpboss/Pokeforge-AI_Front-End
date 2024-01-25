import React, { useState, useEffect } from 'react'
import GenerationSelector from '@/components/organism/generationSelector';
import GeneratedPokemonCard from '@/components/organism/generatedPokemonCard';
import styles from '@/styles/global.module.css';
import axios from 'axios';
import Navbar from '@/components/molecule/navbar';
import getAiImage from '@/components/utils/getAiImage';

export default function Home() {

  const [testTiers, setTestTiers] = useState([])

  useEffect(() => {
    axios.get('https://pokeforge-ai-back-end.replit.app/api/v1/pokemon/all-tiers')
        .then(function (response) {
            console.log(response);
            setTestTiers(response.data)
            
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }, [])  

  

  // const testTiers= ["Illegal", "LC", "NFE", "PU", "ZU", "ZUBL", "NU", "OU", "UU", "PUBL", "RU", "RUBL", "Uber", "UUBL", "NUBL", "AG", "CAP LC", "CAP","CAP NFE" ]
  const pokemonTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']
  
  const [pokemon, setPokemon] = useState({
    "name": "Loading",
    "types": [
      "",
      ""
    ],
    "baseStats": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "tier": "Loading"
  })

  const [selectedTier, setSelectedTier] = useState('')
  const [selectedTypeP, setSelectedTypeP] = useState('')
  const [selectedTypeS, setSelectedTypeS] = useState('')
  const [inputText, setInputText] = useState('')
  const [gened, setGened] = useState(false)
  const [pokemonImg, setPokemonImg] = useState('')

  function handleTierSelect (tier){
    setSelectedTier(tier)
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

  useEffect(() => {
      console.log(pokemonImg)
  }, [pokemonImg])

  function handleResetClick() {
    setSelectedTier("")
    setSelectedTypeP("")
    setSelectedTypeS("")
    setInputText("")
    setGened(false)
    setPokemonImg("")
    setPokemon({
      "name": "Loading",
      "types": [
        "",
        ""
      ],
      "baseStats": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "spa": 0,
        "spd": 0,
        "spe": 0
      },
      "tier": "Loading"
    })
  }
  
  function handleGenClick (){
    if(selectedTier != ""){
      let new_pokemon = {
      "name": inputText,
      "types": [
        selectedTypeP,
        selectedTypeS
      ],
      "tier": selectedTier
    }
    console.log(new_pokemon)
    setGened(true)

    let img

    axios.post('https://pokeforge-ai-back-end.replit.app/api/v1/pokemon/generate', new_pokemon)
        .then(async function (response) {
            console.log(response);
            setPokemon(response.data)
            img = await getAiImage(response.data)
            console.log(img)
            setPokemonImg(img.data.generations_by_pk.generated_images[0].url)
            
      })
        .catch(function (error) {
            console.log(error);
        });}
  }

  return (
    <div className={styles.custom}>
      <Navbar 
      className={styles.navbar}
      colapseClass={styles.navcolapsed}
      active={["","active",""]}
      current={["","page",""]}
      />
      <div>
      {!gened ? (
        <div className={'container ' + styles.addTopSpace}>
          <GenerationSelector
          Tiers={testTiers}
          handleTierSelect={handleTierSelect}
          pokemonTypes={pokemonTypes}
          handleTypeSelectP={handleTypeSelectP}
          handleTypeSelectS={handleTypeSelectS}
          selectedTier={selectedTier}
          handleGenClick={handleGenClick}
          inputText={inputText}
          handleInputChange={handleInputChange}
          className={styles.customInput}
          textClassName={styles.text}
          />
        </div>
      ) : (
        <div className='container'>
          <GeneratedPokemonCard
          imageUrl={pokemonImg}
          pokemonName={pokemon.name}
          pokemonType1={pokemon.types[0]}
          pokemonType2={pokemon.types[1]}
          className={styles.customTable}
          tableClass={styles.customTableReal}
          tableDataClass={styles.tableData}
          stats={pokemon.baseStats}
          pokemonTier={pokemon.tier}
          handleResetClick={handleResetClick}
          classNameButton={styles.customInput}
          />
        </div>
      )}
      </div>
    </div>
  )
}