import React from "react";


function FriendStatusView({ friend }){


    if(friend.status === "試合中"){

        return (

            <div className="friend-status-view">


                <p>
                    {friend.status}
                </p>


                <strong>
                    {friend.mode}
                </strong>


                <span>
                    {friend.rule}
                </span>


                <span>
                    {friend.stage}
                </span>


            </div>

        );

    }



    if(friend.status === "オンライン"){

        return (

            <div className="friend-status-view">


                <p>
                    {friend.status}
                </p>


                <strong>
                    {friend.mode}
                </strong>


            </div>

        );

    }



    if(friend.status === "オフライン"){

        return (

            <div className="friend-status-view">


                <p>
                    {friend.status}
                </p>


            </div>

        );

    }



    return null;


}


export default FriendStatusView;
