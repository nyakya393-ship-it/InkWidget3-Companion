import React from "react";

import CurrentCard from "../components/CurrentCard";
import ScheduleTimeline from "../components/ScheduleTimeline";
import EventMatchCard from "../components/EventMatchCard";
import FestivalCard from "../components/FestivalCard";
import GearShopCard from "../components/GearShopCard";


function Home(){

    return (

        <main className="home">


            {/* 現在の状況 */}

            <CurrentCard />



            {/* 24時間スケジュール */}

            <ScheduleTimeline />



            {/* イベントマッチ */}

            <EventMatchCard />



            {/* フェス */}

            <FestivalCard />



            {/* ゲソタウン */}

            <GearShopCard />


        </main>

    );

}


export default Home;
