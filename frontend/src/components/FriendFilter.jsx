import React from "react";


function FriendFilter(){


    const filters = [

        "すべて",

        "オンライン",

        "試合中",

        "オフライン"

    ];



    return (

        <div className="friend-filter">


            {

                filters.map((filter,index)=>(


                    <button

                        className={

                            index === 0

                            ? "filter-pill active"

                            : "filter-pill"

                        }

                        key={index}

                    >

                        {filter}

                    </button>


                ))

            }


        </div>

    );

}


export default FriendFilter;
