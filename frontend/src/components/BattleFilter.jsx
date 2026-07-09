import React from "react";


function BattleFilter(){


    const filters = [

        "すべて",

        "バトル種類",

        "ルール",

        "ステージ",

        "ブキ"

    ];



    return (

        <div className="battle-filter">


            {

                filters.map((filter,index)=>(


                    <button

                        key={index}

                        className={

                            index === 0

                            ? "battle-filter-button active"

                            : "battle-filter-button"

                        }

                    >

                        {filter}

                    </button>


                ))

            }


        </div>

    );

}


export default BattleFilter;
