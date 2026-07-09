import React from "react";

import BattleFilter from "../components/BattleFilter";
import BattleCard from "../components/BattleCard";
import BattleDetail from "../components/BattleDetail";


function Battle(){


    const battles = [

        {

            result:"WIN",

            type:"ナワバリバトル",

            stage:"ザトウマーケット",

            rule:"ナワバリ",

            weapon:"スプラシューター",

            kill:5,

            assist:2,

            death:3,

            paint:1056,

            special:5

        },


        {

            result:"LOSE",

            type:"バンカラマッチ",

            stage:"スメーシーワールド",

            rule:"ガチエリア",

            weapon:"52ガロン",

            kill:3,

            assist:1,

            death:6,

            paint:890,

            special:3

        }

    ];



    return (

        <main className="battle-page">


            <BattleFilter />



            <section className="battle-list">


                {

                    battles.map((battle,index)=>(

                        <BattleCard

                            key={index}

                            battle={battle}

                        />

                    ))

                }


            </section>



            <BattleDetail />


        </main>

    );

}


export default Battle;
