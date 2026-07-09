import React from "react";


function FriendCard({friend}){


    return (

        <article className="friend-card">


            <div className="friend-header">


                <h3>
                    {friend.name}
                </h3>


                <span>

                    {friend.status}

                </span>


            </div>




            {

                friend.status === "試合中" && (


                    <div className="friend-battle">


                        <p>

                            {friend.mode}

                        </p>


                        <strong>

                            {friend.rule}

                        </strong>


                        <span>

                            {friend.stage}

                        </span>


                    </div>


                )

            }




            {

                friend.status === "オンライン" && (


                    <div className="friend-online">

                        ロビー待機中

                    </div>


                )

            }




            {

                friend.status === "オフライン" && (


                    <div className="friend-offline">

                        オフライン

                    </div>


                )

            }



        </article>

    );

}


export default FriendCard;
