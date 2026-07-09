import React from "react";


function GearShopCard(){


    const gear = {

        name:"イカテンくつ",

        brand:"クラーゲス",

        ability:"イカダッシュ速度アップ",

        subAbilities:[

            "復活時間短縮",

            "スペシャル増加量アップ"

        ],

        remain:"あと 12時間",

        image:"/assets/gear/gear01.png"

    };



    return (

        <section className="gear-shop-card">


            <div className="gear-header">


                <h2>
                    ゲソタウン
                </h2>


                <span>
                    {gear.remain}
                </span>


            </div>




            <div className="gear-body">



                <img

                    className="gear-image"

                    src={gear.image}

                    alt={gear.name}

                />




                <div className="gear-info">



                    <h3>
                        {gear.name}
                    </h3>



                    <p>
                        ブランド
                    </p>


                    <strong>
                        {gear.brand}
                    </strong>




                    <p>
                        メインギア
                    </p>


                    <strong>
                        {gear.ability}
                    </strong>




                    <p>
                        追加ギア
                    </p>


                    <div className="gear-sub">


                        {

                            gear.subAbilities.map((ability,index)=>(

                                <span key={index}>

                                    {ability}

                                </span>

                            ))

                        }


                    </div>



                </div>



            </div>



        </section>

    );

}



export default GearShopCard;
