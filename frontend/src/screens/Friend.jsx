import React from "react";

import FriendFilter from "../components/FriendFilter";
import FriendCard from "../components/FriendCard";
import FriendDetail from "../components/FriendDetail";


function Friends(){


    const friends = [

        {

            name:"かなと",

            status:"試合中",

            mode:"バンカラマッチ",

            rule:"オープン",

            stage:"ザトウマーケット"

        },

        {

            name:"あいう",

            status:"オンライン",

            mode:"ロビー",

            rule:"",

            stage:""

        },

        {

            name:"うえお",

            status:"オフライン",

            mode:"",

            rule:"",

            stage:""

        }

    ];



    return (

        <main className="friends-page">


            <FriendFilter />



            <section className="friend-list">


                {

                    friends.map((friend,index)=>(


                        <FriendCard

                            key={index}

                            friend={friend}

                        />


                    ))

                }


            </section>



            <FriendDetail />


        </main>

    );

}



export default Friends;
