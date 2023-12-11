import StatBar from "../atom/statBar";
import StatTable from "../molecule/statTable";
import Button from "../atom/button";

export default function GeneratedPokemonCard (props) {
    
    return (
        <div className={"card " + props.className}>
            <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col text-center">
                                {!props.imageUrl && <div className="spinner-border" style={{width: '4rem', height: '4rem'}} role="status"> <span className="visually-hidden">Loading...</span></div>}
                                {props.imageUrl && <img src={props.imageUrl} className="card-img" alt="Loading Image" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-text">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col text-center">{props.pokemonName}</div>
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col text-center">{props.pokemonType1}</div>
                                <div className="col text-center">{props.pokemonType2}</div>
                            </div>
                        </div>
                        <p></p>
                        <div className="container">
                            <div className="row justify-content-between">
                                <StatTable
                                hp={props.stats.hp}
                                atk={props.stats.atk}
                                def={props.stats.def}
                                spa={props.stats.spa}
                                spd={props.stats.spd}
                                spe={props.stats.spe}
                                tableClass={props.tableClass}
                                tableDataClass={props.tableDataClass}
                                />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col text-center">{props.pokemonTier}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col text-center'>
                            <Button 
                            text={"Generate a New Pokemon!"}
                            clickHandler={props.handleResetClick}
                            className={props.classNameButton}
                            />
                        </div>
                    </div>
                </div>
        </div>
    );
};

