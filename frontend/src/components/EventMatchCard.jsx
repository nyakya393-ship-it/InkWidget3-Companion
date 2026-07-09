import React from "react";


function EventMatchCard(){


    const event = {

        status:"開催中",

        name:"イベントマッチ",

        rule:"特殊ルール",

        stage:"マヒマヒリゾート",

        time:"18:00 - 20:00"

    };



    return (

        <section className="event-card">


            <div className="event-header">


                <h2>
                    {event.name}
                </h2>


                <span>
                    {event.status}
                </span>


            </div>



            <div className="event-body">


                <p>

                    ルール

                </p>


                <strong>

                    {event.rule}

                </strong>



                <p>

                    ステージ

                </p>


                <strong>

                    {event.stage}

                </strong>



                <p>

                    開催時間

                </p>


                <strong>

                    {event.time}

                </strong>


            </div>


        </section>

    );

}


export default EventMatchCard;
