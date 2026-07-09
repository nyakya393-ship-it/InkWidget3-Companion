import React from "react";


function FriendDetail(){


    const friend = {


        name:"かなと",

        status:"試合中",

        mode:"バンカラマッチ",

        rule:"オープン",

        stage:"ザトウマーケット"


    };



    return (

        <section className="friend-detail">


            <div className="detail-header">


                <h2>

                    {friend.name}

                </h2>


                <span>

                    {friend.status}

                </span>


            </div>




            <div className="detail-body">


                <p>

                    モード

                </p>


                <strong>

                    {friend.mode}

                </strong>




                <p>

                    ルール

                </p>


                <strong>

                    {friend.rule}

                </strong>




                <p>

                    ステージ

                </p>


                <strong>

                    {friend.stage}

                </strong>



            </div>



        </section>

    );

}


export default FriendDetail;
