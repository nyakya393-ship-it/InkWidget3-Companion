import React from "react";


function FestivalCard(){


    const festival = {

        status:"開催予定",

        title:"次回フェス",

        theme:"好きな味は？",

        teams:[

            "チームA",

            "チームB",

            "チームC"

        ],

        myTeam:"未選択",

        start:"7/20 09:00",

        end:"7/22 09:00",

        result:"結果発表前"

    };



    return (

        <section className="festival-card">


            <div className="festival-header">


                <h2>
                    フェス
                </h2>


                <span>
                    {festival.status}
                </span>


            </div>




            <div className="festival-body">


                <h3>
                    {festival.title}
                </h3>



                <p>
                    お題
                </p>


                <strong>
                    {festival.theme}
                </strong>




                <p>
                    参加チーム
                </p>


                <div className="festival-teams">


                    {

                        festival.teams.map((team,index)=>(

                            <span key={index}>

                                {team}

                            </span>

                        ))

                    }


                </div>




                <p>
                    自分のチーム
                </p>


                <strong>
                    {festival.myTeam}
                </strong>




                <p>
                    開催期間
                </p>


                <strong>

                    {festival.start}

                    <br/>

                    ~

                    <br/>

                    {festival.end}

                </strong>




                <p>
                    結果
                </p>


                <strong>
                    {festival.result}
                </strong>



            </div>


        </section>

    );

}


export default FestivalCard;
