import React from "react";
import IcCamera from "../icons/home-icons/IcCamera";
import styles from "./HintAddImage.module.scss";
const HintAddImage = () => {
  return (
    <>
      <div className={`ml-3 hidden xl:flex `}>
        <div className={`mx-4 p-5 flex-1 ${styles["hint-box"]}`}>
          <div className="flex h-16 align-top ">
            <IcCamera />
            <h2 className="text-xl pl-2">
              Nếu tôi không có ảnh chụp chuyên nghiệp thì sao?
            </h2>
          </div>
          <div>
            <h2>
              Không sao cả! Quý vị có thể sử dụng smartphone hoặc máy ảnh kỹ
              thuật số. Sau đây là một số mẹo chụp ảnh đẹp cho chỗ nghỉ của Quý
              vị:
            </h2>
            <ul className="py-5 px-8">
              <li>
                Những hình ảnh tốt nhất cần thể hiện được cả thiết kế nội thất
                và ngoại thất của chỗ nghỉ.
              </li>
              <li>Ảnh ngang tốt hơn ảnh dọc</li>
              <li>
                Hãy chụp ảnh vào ban ngày. Mở rèm và bật tất cả đèn để có ánh
                sáng tốt nhất.
              </li>
              <li>
                Nhằm bảo vệ sự riêng tư, Quý vị hãy lưu ý rằng những hình ảnh
                được đăng không hiển thị biển số xe, màn hình TV, máy tính để
                bàn hay máy tính xách tay.
              </li>
              <li>
                Tránh dùng hình ảnh chìm, logo hay giá phòng không thuộc về chỗ
                nghỉ trong ảnh
              </li>
            </ul>
            <h2>
              Tốt nhất Quý vị nên tránh sử dụng ảnh mà mình không biết tác giả.
              Quý vị chỉ nên sử dụng ảnh của người khác khi đã có sự chấp thuận
              của họ
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HintAddImage;
