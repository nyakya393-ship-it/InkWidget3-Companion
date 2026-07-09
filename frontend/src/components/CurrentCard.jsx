import React from "react";


function CurrentCard(){

    const battle = {

        mode: "バンカラマッチ",

        rule: "ガチエリア",

        stage: "ザトウマーケット",

        time: "あと 1時間23分",

        image: "/assets/stages/zato-market.png"

    };


    return (

        <section className="current-card">


            <div className="current-header">

                <span>現在</span>

                <span>{battle.time}</span>

            </div>



            <div className="current-body">


                <div className="current-info">


                    <h2>
                        {battle.mode}
                    </h2>


                    <p>
                        {battle.rule}
                    </p>


                    <strong>
                        {battle.stage}
                    </strong>


                </div>



                <img

                    className="stage-image"

                    src={battle.image}

                    alt={battle.stage}

                />


            </div>


        </section>

    );

}


export default CurrentCard;
