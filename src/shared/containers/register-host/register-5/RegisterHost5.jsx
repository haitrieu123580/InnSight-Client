import React, { useState } from "react";
import styles from "./RegisterHost5.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import IcXmark from "../../../components/icons/home-icons/IcXmark";
import { Link } from "react-router-dom";
import { FormLabel } from "@mui/material";
import CircleExclamation from "../../../components/icons/home-icons/IcCircleExclamation";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addImagesHotel } from "../../../../redux/host/slice";
import HintAddImage from "../../../components/hint-add-image/HintAddImage";
const RegisterHost5Container = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const onSubmit = () => {
    dispatch({
      type: addImagesHotel,
      payload: previewImages,
    });
    navigate("/host/register-list-section/2");
  };

  return (
    <div className={` ${styles["register-5"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">
            Đăng chỗ nghỉ của Quý vị trên InnSight và bắt đầu đón tiếp khách
            thật nhanh chóng!
          </h2>
          <p className="text-xl py-4">
            Cho chúng tôi biết thêm về chỗ nghỉ của Quý vị
          </p>
        </div>
        <div className="block lg:flex lg:justify-between lg:space-x-3 ">
          <div className={`flex-1 `}>
            <div className={`px-5 flex flex-col py-5 ${styles["form"]} `}>
              <FormLabel>
                Đăng tải ít nhất 5 ảnh của chỗ nghỉ. Càng đăng nhiều, Quý vị
                càng có cơ hội nhận đặt phòng. Quý vị có thể thêm ảnh sau.
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
              <Link to="/host/register-4">
                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                >
                  <IcChevronLeft />
                </button>
              </Link>
              <button
                className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                onClick={onSubmit}
                disabled={previewImages.length < 5 }
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
    </div>
  );
};

export default RegisterHost5Container;
