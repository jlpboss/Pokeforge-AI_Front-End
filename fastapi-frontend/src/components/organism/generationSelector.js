import TierButtons from '@/components/molecule/tierButtons';
import PokemonTypeDropdown from '@/components/molecule/pokemonTypeDropdown';
export default function GenerationSelector(props) {

    return (
        <>
            <TierButtons
            allTiers={props.Tiers}
            clickHandler={props.handleTierClick}
            />
            <TextInput
            label={"Your Pokémon's Name: "}
            value={props.inputText}
            handleInputChange={props.handleInputChange}
            />
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <PokemonTypeDropdown 
                        types={props.pokemonTypes} 
                        onSelect={props.handleTypeSelectP}
                        text={'Select Primary Pokémon Type:'} 
                        />
                    </div>
                    <div className='col'>
                        <PokemonTypeDropdown 
                        types={props.pokemonTypes} 
                        onSelect={props.handleTypeSelectS}
                        text={'Select Secondary Pokémon Type:'} 
                        />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <p>Selected Tier: {props.selectedTier}</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                    <Button 
                    text={"Generate!"}
                    clickHandler={props.handleGenClick}
                    className={"custom-button"}
                    />
                    </div>
                </div>
            </div>
        </>
    )
}