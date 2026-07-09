import React from "react";


function BattleCard({battle}){


    return (

        <article className="battle-card">


            <div className="battle-result">


                <span>

                    {battle.result}

                </span>


            </div>



            <div className="battle-info">


                <h3>

                    {battle.type}

                </h3>


                <p>

                    {battle.stage}

                </p>


                <p>

                    {battle.rule}

                </p>



                <p>

                    {battle.weapon}

                </p>


            </div>




            <div className="battle-stats">


                <div>

                    <span>
                        キル
                    </span>

                    <strong>
                        {battle.kill}
                    </strong>

                </div>



                <div>

                    <span>
                        アシスト
                    </span>

                    <strong>
                        {battle.assist}
                    </strong>

                </div>



                <div>

                    <span>
                        デス
                    </span>

                    <strong>
                        {battle.death}
                    </strong>

                </div>


            </div>




            <div className="battle-footer">


                <span>

                    {battle.paint}p

                </span>


                <span>

                    SP {battle.special}

                </span>


            </div>



        </article>

    );

}


export default BattleCard;
