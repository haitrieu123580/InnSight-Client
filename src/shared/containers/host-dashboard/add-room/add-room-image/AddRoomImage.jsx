import React, { useState } from "react";
import styles from "./AddRoomImage.module.scss";
import IcChevronLeft from "../../../../components/icons/home-icons/IcChevronLeft";
import IcXmark from "../../../../components/icons/home-icons/IcXmark";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,  FormLabel } from "@mui/material";
import CircleExclamation from "../../../../components/icons/home-icons/IcCircleExclamation";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../../redux/host/action";
import ShowToastify from "../../../../../utils/ShowToastify";
import HintAddImage from "../../../../components/hint-add-image/HintAddImage";
const AddRoomImageContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newRoomType = useSelector((state) => state.Host.newRoomType);
  const { currentHotel } = useSelector((state) => state.Host);
  // const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const hotelId = currentHotel;

  const [previewImages, setPreviewImages] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPreviewImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...previewImages];
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddImageRoomType = () => {
    setOpenDialog(true);
  };

  const AddRoomTypeFinished = ()=>{
      const formData = new FormData();
      formData.append('name', newRoomType.name||'');
      formData.append('count', newRoomType.count||'');
      formData.append('price', newRoomType.price||'');
      formData.append('bathroomCount', newRoomType.bathroomCount||'');
      formData.append('roomArea', newRoomType.roomArea||'');
      formData.append('adultCount', newRoomType.adultCount||'');
      formData.append('childrenCount', newRoomType.childrenCount||'');
      formData.append('description', newRoomType.description||'');
      formData.append('view', newRoomType.view||'');
      if (newRoomType.sdRoomName && Array.isArray(newRoomType.sdRoomName)) {
        newRoomType.sdRoomName.forEach((roomName, i) => {
          if (roomName  ) {
            formData.append(`sdRoomName[${i}]`, roomName||'');
          }
        });
      }else{
        formData.append('sdRoomName[0]', '');
      }
      if (newRoomType.amenities && Array.isArray(newRoomType.amenities)) {
        newRoomType.amenities.forEach((amenity, i) => {
          if (amenity  ) {
            formData.append(`amenities[${i}]`, amenity||'');
          }
        });
      }else{
        formData.append('amenities[0]', '');
      }
      if (previewImages[0] ) {
        previewImages.forEach((image, index) => {
          if (image ) {
            formData.append(`images[${index}]`, image.file||null);
          }
        });
      }      
      if (newRoomType.bedTypes && Array.isArray(newRoomType.bedTypes)) {
        newRoomType.bedTypes.forEach((bedType, i) => {
          if (bedType && bedType.name ) {
            formData.append(`bedTypes[${i}].name`, bedType.name||'');
            formData.append(`bedTypes[${i}].count`, bedType.count||0);
          }
        });
      }else{
        formData.append('bedTypes[0].name', '');
        formData.append('bedTypes[0].count', 0);
      }
      dispatch({
        type: HostAction.ADD_ROOM_TYPE,
        id: hotelId,
        data: formData,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Thêm phòng thành công!");
          navigate("/host/dashboard");
        },
        onError: () => {
          ShowToastify.showErrorToast("Thêm phòng thất bại");
        },
      })
      handleCloseDialog()
  }
  return (
    <div className={` ${styles["add-room-image"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden pb-4">
            Phòng này của Quý vị ra sao?
          </h2>
        </div>
        <div className="block lg:flex lg:justify-between lg:space-x-3 ">
          <div className={`flex-1 `}>
            <div className={`px-5 flex flex-col py-5 ${styles["form"]} `}>
              <FormLabel>
                Đăng tải ít nhất 5 ảnh của phòng loại này. Càng đăng nhiều, Quý
                vị càng có cơ hội nhận đặt phòng này. Quý vị có thể thêm ảnh
                sau.
              </FormLabel>
              <div
                className={`border-dashed border-2 items-center flex justify-center  ${styles["container-upload-image"]}`}
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className=""
                />
              </div>
              <div className={`${styles["previewStyles"]}`}>
                {previewImages.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles["imageContainerStyles"]}`}
                  >
                    <img
                      src={image.preview}
                      alt={`preview-${index}`}
                      className={`${styles["imageStyles"]}`}
                    />
                    <button
                      className={`${styles["btn-remove"]}`}
                      onClick={() => handleImageRemove(index)}
                    >
                      <IcXmark />
                    </button>
                  </div>
                ))}
              </div>
              {previewImages.length < 5 ? (
                <div className="flex items-center">
                  <CircleExclamation />
                  <span className="text-red-600 pl-1">
                    Đăng tải thêm {5 - previewImages.length} để tiếp tục
                  </span>
                </div>
              ) : (
                console.log("Đủ ảnh")
              )}
            </div>

            <div className={`flex pt-7`}>
              <Link to="/host/add-room-price">
                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                >
                  <IcChevronLeft />
                </button>
              </Link>
              <button
                className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                onClick={handleAddImageRoomType}
              >
                Tiếp tục
              </button>
              
            </div>
          </div>
          <div className="flex-1">
            <HintAddImage />
          </div>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có đồng ý lưu loại phòng này vào danh sách phòng của khách sạn của mình không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Hủy</Button>
          <Button onClick={AddRoomTypeFinished} autoFocus>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddRoomImageContainer;
