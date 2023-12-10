import TierButtons from '@/components/molecule/tierButtons';
import PokemonTypeDropdown from '@/components/molecule/pokemonTypeDropdown';
import TextInput from '../atom/textInput';
import Button from '../atom/button';

export default function GenerationSelector(props) {

    return (
        <div>
            
            <p></p>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <TextInput
                        label={"Your Pokémon's Name:"}
                        value={props.inputText}
                        handleInputChange={props.handleInputChange}
                        className={props.className}
                        textClassName={props.textClassName}
                        />
                    </div>
                </div>
            </div>
            <p></p>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <PokemonTypeDropdown 
                        types={props.pokemonTypes} 
                        onSelect={props.handleTypeSelectP}
                        text={'Select Primary Pokémon Type:'} 
                        className={props.className}
                        thingString='Type'
                        />
                    </div>
                </div>
                <p></p>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <PokemonTypeDropdown 
                        types={props.pokemonTypes} 
                        onSelect={props.handleTypeSelectS}
                        text={'Select Secondary Pokémon Type:'} 
                        className={props.className}
                        thingString='Type'
                        />
                    </div>
                </div>
            </div>
            <p></p>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <PokemonTypeDropdown 
                        types={props.Tiers} 
                        onSelect={props.handleTierSelect}
                        text={'Select Your Tier of Play:'} 
                        className={props.className}
                        thingString='Tier'
                        />
                    </div>
                </div>
                <p></p>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <p>Selected Tier: {add_tier_fullname(props.selectedTier)}</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <Button 
                        text={"Generate!"}
                        clickHandler={props.handleGenClick}
                        className={props.className}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function add_tier_fullname(tier) {
    switch(tier) {
        case "LC":
            return "LC - Little Cup";
        case "NFE":
            return "NFE - Not Fully Evolved";
        case "PU":
            return "PU - PoorlyUsed (The Lowest Tier of Play)";
        case "(PU)":
            return "(PU) - Borderline PU";
        case "NU":
            return "NU - NeverUsed";
        case "OU":
            return "OU - OverUsed (The Standard Tier of Play)";
        case "NUBL":
            return "NUBL - NeverUsed Banlist";
        case "RU":
            return "RU - RarelyUsed (The Third Tier of Play)";
        case "PUBL":
            return "PUBL - PoorlyUsed Banlist";
        case "UU":
            return "UU - UnderUsed (The Second Tier of Play)";
        case "RUBL":
            return "RUBL - RarelyUsed Banlist";
        case "Uber":
            return "Uber - Legendary and Mythical Pokemon";
        case "UUBL":
            return "UUBL - UnderUsed Banlist";
        case "AG":
            return "AG - Anything Goes";
        case "CAP LC":
            return "CAP LC - Create-A-Pokemon Little Cup";
        case "CAP":
            return "CAP - Create-A-Pokemon";
        case "CAP NFE":
            return "CAP NFE - Create-A-Pokemon Not Fully Evolved";
        case "Illegal":
            return "Illegal - Not Avalible In The Current Generation"
        default:
            return tier;
    }
}