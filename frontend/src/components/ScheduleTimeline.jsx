import React from "react";


function ScheduleTimeline(){


    const schedules = [

        {
            time:"12:00 - 14:00",
            type:"バンカラマッチ",
            rule:"ガチエリア",
            stage:"ザトウマーケット"
        },

        {
            time:"14:00 - 16:00",
            type:"レギュラーマッチ",
            rule:"ナワバリバトル",
            stage:"ヤガラ市場"
        },

        {
            time:"16:00 - 18:00",
            type:"サーモンラン",
            rule:"シフト",
            stage:"シェケナダム"
        },

        {
            time:"18:00 - 20:00",
            type:"イベントマッチ",
            rule:"特殊ルール",
            stage:"マヒマヒリゾート"
        }

    ];



    return (

        <section className="schedule-section">


            <h2 className="section-title">
                スケジュール
            </h2>



            <div className="timeline">


                {

                    schedules.map((item,index)=>(


                        <article

                            className="schedule-card"

                            key={index}

                        >


                            <div className="schedule-time">

                                {item.time}

                            </div>



                            <div className="schedule-info">


                                <h3>

                                    {item.type}

                                </h3>


                                <p>

                                    {item.rule}

                                </p>


                                <span>

                                    {item.stage}

                                </span>


                            </div>



                        </article>


                    ))

                }


            </div>


        </section>

    );

}



export default ScheduleTimeline;
