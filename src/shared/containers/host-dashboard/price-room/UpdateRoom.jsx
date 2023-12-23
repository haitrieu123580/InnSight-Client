import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import React, { useState } from "react";
import styles from "./PriceRoom.module.scss";
import Constants from "../../../../utils/Contants";

const UpdateRoom = ( selectedRoom) => {
  // console.log("isOpen", isOpen)
  // const [open, setOpen] = useState(isOpen);
  let isOpen=true
  const bedTypes = Constants.bedTypes;

  const [bedTypeCount, setBedTypeCount] = useState(
    bedTypes.map((bedType) => ({ name: bedType.name, count: 0 }))
  );
  const handleChangeBedCount = (event, index) => {
    const value = parseInt(event.target.value);
    setBedTypeCount((prevBedCount) => {
      const newBedCount = [...prevBedCount];
      newBedCount[index] = { ...newBedCount[index], count: value };
      return newBedCount;
    });
  };
  const [childrenCountUpdate, setChildrenCountUpdate] = useState(0);
  const handleChangeChildrenCountUpdate = (event) => {
    setChildrenCountUpdate(parseInt(event.target.value));
  };
  const [adultCountUpdate, setAdultCountUpdate] = useState(0);
  const handleChangeAdultCountUpdate = (event) => {
    setAdultCountUpdate(parseInt(event.target.value));
  };
  const [roomAreaUpdate, setRoomAreaUpdate] = useState(0);
  const handleChangeRoomAreaUpdate = (event) => {
    setRoomAreaUpdate(parseInt(event.target.value));
  };

  const handleSumbit = (selectedRoom) => {
    let updateRoom = { ...selectedRoom };
    updateRoom.bedTypes = bedTypeCount;
    updateRoom.adultCount = adultCountUpdate;
    updateRoom.childrenCount = childrenCountUpdate;
    updateRoom.roomArea = roomAreaUpdate;

    console.log("update", updateRoom);
  };

  return (
    <>
      {isOpen ? (
        <>
          <div className={`${styles["content"]}`}>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Loại giường: </span>
              <div className="flex gap-2">
                {bedTypeCount.map((bed, index) => {
                  return (
                    <div
                      className={`${styles["bed-type-count"]}`}
                      key={bed.name}
                    >
                      <div className="flex flex-col">
                        <h3 className="">{bed.name}</h3>
                        <p className="text-slate-400">{bed.description}</p>
                      </div>
                      <input
                        type="number"
                        value={bed.count}
                        onChange={(event) => handleChangeBedCount(event, index)}
                        className="border p-2 border-black"
                        min={0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Diện tích: </span>
              <input
                type="number"
                value={roomAreaUpdate}
                onChange={handleChangeRoomAreaUpdate}
              />
            </div>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Số người lớn: </span>
              <input
                type="number"
                value={adultCountUpdate}
                onChange={handleChangeAdultCountUpdate}
              />
            </div>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Số trẻ em: </span>
              <input
                type="number"
                value={childrenCountUpdate}
                onChange={handleChangeChildrenCountUpdate}
              />
            </div>
          </div>

          <Button >Hủy</Button>
          <Button onClick={() => handleSumbit(selectedRoom)}>Cập nhật</Button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default UpdateRoom;
