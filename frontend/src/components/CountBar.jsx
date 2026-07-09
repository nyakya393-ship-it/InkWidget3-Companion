import React from "react";


function CountBar({left,right}){


    return (

        <div className="count-wrapper">


            <span className="count-left">

                {left}%

            </span>



            <div className="count-line">


                <div

                    className="count-left-area"

                    style={{

                        width:`${left}%`

                    }}

                >


                </div>



                <div

                    className="count-right-area"

                    style={{

                        width:`${right}%`

                    }}

                >


                </div>



            </div>



            <span className="count-right">

                {right}%

            </span>



        </div>

    );

}


export default CountBar;
