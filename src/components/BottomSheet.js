import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";

export default function BottomSheet(props) {
    return (
        <SwipeableBottomSheet
            open={props.sheetVisible}
            onChange={() => {
                props.setSheetVisible(!props.sheetVisible);
                props.setItemsVisible(true);
            }}
            //   If the title is "room detail," the sheet takes up the whole screen; otherwise, it doesn't.
            fullScreen={props.sheetTitle === "room detail" ? true : false}
        >
            <div
                className={style.BottomSheetContainer}
                style={{
                    backgroundColor: props.sheetTitle === "profile" ? "transparent" : "",
                }}
            >

                {/* If "sheetTitle" is "new room," it shows the "NewRoom" component, If "sheetTitle" is "start room," it shows the "StartRoom" component. Otherwise, it shows nothing (an empty string). */}
                {props.sheetTitle == "new room" ? (
                    <NewRoom
                        cardDetail={props.cardDetail}
                        setSheetVisible={(item) => {
                            props.setSheetVisible(item);
                            props.setItemsVisible(true);
                        }}
                    />
                ) : props.sheetTitle == "start room" ? (
                    <StartRoom
                        setSheetCreateRoom={props.setSheetCreateRoom}
                        setSheetVisible={(item) => {
                            props.setSheetVisible(item);
                            props.setItemsVisible(true);
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
        </SwipeableBottomSheet>
    );
}


