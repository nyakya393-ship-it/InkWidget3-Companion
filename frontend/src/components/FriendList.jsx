import React from "react";

import FriendCard from "./FriendCard";


function FriendList({ friends }){


    return (

        <div className="friend-list">


            {

                friends.map((friend,index)=>(

                    <FriendCard

                        key={index}

                        friend={friend}

                    />

                ))

            }


        </div>

    );

}


export default FriendList;
