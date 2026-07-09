import React from "react";


function BattleDetail(){


    const battle = {

        stageImage:"/assets/stages/zato.png",

        date:"2026/07/09 16:00",

        type:"ナワバリバトル",

        rule:"ナワバリ",

        countLeft:"50.2%",

        countRight:"43.2%"

    };



    return (

        <section className="battle-detail">



            <img

                className="battle-stage-image"

                src={battle.stageImage}

                alt="stage"

            />




            <div className="battle-detail-info">


                <p>

                    {battle.date}

                </p>


                <strong>

                    {battle.type}

                </strong>


                <span>

                    {battle.rule}

                </span>


            </div>




            <div className="battle-count">


                <span>

                    {battle.countLeft}

                </span>


                <div className="count-bar">

                </div>


                <span>

                    {battle.countRight}

                </span>


            </div>




            <div className="battle-players">


                <h3>

                    参加者8人

                </h3>


            </div>



        </section>

    );

}


export default BattleDetail;
