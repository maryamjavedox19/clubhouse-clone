import React from "react";
import style from "../style/dailyInfoCard.module.css";
import data from "../data/dailyCard.json";

export default function dailyInfoCard() {
    console.log(data);
    return (
        <div className="style.dailyCard">
            {data.map((item) => (
                <div>
                    <span className="">{item.time}</span>
                    <p>{item.description}</p>

                    <div>
                        <span>{item.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
