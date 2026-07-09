import React from "react";


function PlayerResult({player}){


    return (

        <article className="player-result">


            <img

                className="player-weapon"

                src={player.weaponImage}

                alt="weapon"

            />



            <div className="player-main">


                <div className="player-name">


                    <span>

                        {player.rank}

                    </span>


                    <strong>

                        {player.name}

                    </strong>


                </div>



                <div className="player-stats">


                    <span>

                        {player.paint}p

                    </span>


                    <span>

                        {player.kill}/

                        {player.assist}/

                        {player.death}

                    </span>


                    <span>

                        K/D {player.kd}

                    </span>


                    <span>

                        SP {player.special}

                    </span>


                </div>



            </div>



        </article>

    );

}


export default PlayerResult;
