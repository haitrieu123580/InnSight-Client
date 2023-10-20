import React, { useState } from "react";
import styles from "./RegisterHost5.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import IcXmark from "../../../components/icons/home-icons/IcXmark";
import IcCamera from "../../../components/icons/home-icons/IcCamera";
import { Link } from "react-router-dom";
import { FormLabel } from "@mui/material";
import CircleExclamation from "../../../components/icons/home-icons/IcCircleExclamation";

const RegisterHost5Container = () => {
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
              <div className={`border-dashed border-2 items-center flex justify-center  ${styles['container-upload-image']}`}>
                
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
                {
                    previewImages.length < 5 ?
                     (
                      <div className="flex items-center">
                        <CircleExclamation/>
                        <span className="text-red-600 pl-1">Đăng tải thêm {5-previewImages.length} để tiếp tục</span>
                      </div>
                      
                     
                     )
                     :
                     (console.log("Đủ ảnh"))
                  }
            </div>

            <div className={`flex pt-7`}>
              <Link to="/host/register-4">
                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                >
                  <IcChevronLeft />
                </button>
              </Link>
              <Link
                to="/host/register-5"
                className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
              >
                <button className="h-full">Tiếp tục</button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className={`flex-1  justify-between ml-3 hidden xl:flex `}>
              <div className={`mx-4 p-5 flex-1 ${styles["hint-box"]}`}>
                <div className="flex h-16 align-top ">
                  <IcCamera />
                  <h2 className="text-xl pl-2">
                    Nếu tôi không có ảnh chụp chuyên nghiệp thì sao?
                  </h2>
                </div>
                <div>
                  <h2>
                    Không sao cả! Quý vị có thể sử dụng smartphone hoặc máy ảnh
                    kỹ thuật số. Sau đây là một số mẹo chụp ảnh đẹp cho chỗ nghỉ
                    của Quý vị:
                  </h2>
                  <ul className="py-5 px-8">
                    <li>
                      Những hình ảnh tốt nhất cần thể hiện được cả thiết kế nội
                      thất và ngoại thất của chỗ nghỉ.
                    </li>
                    <li>Ảnh ngang tốt hơn ảnh dọc</li>
                    <li>
                      Hãy chụp ảnh vào ban ngày. Mở rèm và bật tất cả đèn để có
                      ánh sáng tốt nhất.
                    </li>
                    <li>
                      Nhằm bảo vệ sự riêng tư, Quý vị hãy lưu ý rằng những hình
                      ảnh được đăng không hiển thị biển số xe, màn hình TV, máy
                      tính để bàn hay máy tính xách tay.
                    </li>
                    <li>
                      Tránh dùng hình ảnh chìm, logo hay giá phòng không thuộc
                      về chỗ nghỉ trong ảnh
                    </li>
                  </ul>
                  <h2>
                    Tốt nhất Quý vị nên tránh sử dụng ảnh mà mình không biết tác
                    giả. Quý vị chỉ nên sử dụng ảnh của người khác khi đã có sự
                    chấp thuận của họ
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost5Container;
