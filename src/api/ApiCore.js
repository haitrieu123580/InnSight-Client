// import axios from "axios";
// const BASE_URL = 'http://localhost:3000'
// const config = {
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };
export const getHotelById = async (id) => {
    // const response = await axios.post(`${BASE_URL}`, JSON.stringify(data), config);
    // return response
    // console.log(id)
    const response = {

        hotelId: 1,
        hotelName: 'Le House Boutique Hotel',
        hotelType: 3,
        address: '54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng 550000, Việt Nam',
        priceByNight: 400000,
        hotelAmenities: [
            "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
        ],
        hotelImage: [
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

        ],
        description: `Lưu trú tại La Beach Hotel là một lựa chọn đúng đắn khi quý khách đến thăm Phước Mỹ. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào.`,
        roomsList: [
            {
                id: 1,
                roomName: 'Phòng Premium hai giường',
                discountPrice: 600000,
                price: 696900,
                roomImage: 'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                adult: 2,
                quatity: 10,
                children: 1,
                services: [
                    "Bãi đậu xe", "Nhận phòng nhanh", "Đã bao gồm bữa sáng", "Có thể đổi lịch"
                ],
                amenities: [
                    "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
                ]
            },
            {
                id: 1,
                roomName: 'Phòng Premium hai giường',
                discountPrice: 600000,
                price: 696900,
                roomImage: 'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                quatity: 5,
                adult: 2,
                children: 1,
                services: [
                    "Bãi đậu xe", "Nhận phòng nhanh", "Đã bao gồm bữa sáng", "Có thể đổi lịch"
                ],
                amenities: [
                    "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
                ]
            }
        ],
        reviews: [
            {
                rate: 8.9,
                review: "Sạch đẹp",
            },
            {
                rate: 9.9,
                review: "Không bẩn",
            }
        ],
        rules: [
            {
                name: "Check in",
                describe: "Từ 14:00 - 00:00",
            },
            {
                name: "Check out",
                describe: "Từ 00:00 - 12:00",
            },
            {
                name: "Hủy đặt phòng/Trả trước",
                describe: "Các chính sách hủy và thanh toán trước có khác biệt dựa trên loại chỗ nghỉ. Vui lòng kiểm tra các điều kiện có thể được áp dụng cho mỗi lựa chọn của bạn.",
            },
            {
                name: "Trẻ em và giường",
                describe: `Chính sách trẻ em
                    Phù hợp cho tất cả trẻ em.
                    Trẻ em từ 18 tuổi trở lên sẽ được tính giá như người lớn tại chỗ nghỉ này.
                    Để xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.
                    
                    Chính sách nôi (cũi) và giường phụ
                    Chỗ nghỉ này không có nôi/cũi và giường phụ.`,
            },
            {
                name: "Hút thuốc",
                describe: "Không cho phép hút thuốc.",
            },
            {
                name: "Vật nuôi",
                describe: "Không cho phép vật nuôi.",
            },
        ]

    }
    return { Data: response };
}
export const searchHotels = (filter) => {
    const tempData = {
        totalItems: 30,
        location: 'Đà Nẵng',
        data: [
            {
                hotelId: 1,
                hotelName: 'Hotel Dao Tien',
                type: "Khách sạn",
                address: "Da nang",
                hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                services: [
                    "Service 1",
                    "Service 2",
                    "Service 3"
                ],
                rate: 9,
                reviews: 123,
                priceByNight: 500000,
            },
            {
                hotelId: 2,
                hotelName: 'Hotel Dao Tien',
                type: "Khách sạn",
                address: "Da nang",
                hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                services: [
                    "Service 1",
                    "Service 2",
                    "Service 3"
                ],
                rate: 9,
                reviews: 123,
                priceByNight: 500000,
            },
            {
                hotelId: 2,
                hotelName: 'Hotel Dao Tien',
                type: "Khách sạn",
                address: "Da nang",
                hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                services: [
                    "Service 1",
                    "Service 2",
                    "Service 3"
                ],
                rate: 9,
                reviews: 123,
                priceByNight: 500000,
            },
            {
                hotelId: 3,
                hotelName: 'Hotel Dao Tien',
                type: "Khách sạn",
                address: "Da nang",
                hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                services: [
                    "Service 1",
                    "Service 2",
                    "Service 3"
                ],
                rate: 9,
                reviews: 123,
                priceByNight: 500000,
            },
            {
                hotelId: 4,
                hotelName: 'Hotel Dao Tien',
                type: "Khách sạn",
                address: "Da nang",
                hotelImgPath: 'https://s3-alpha-sig.figma.com/img/0ec9/f9f3/e7d1ad6c8c1f658dbbf0b08ebbedb09e?Expires=1697414400&Signature=bHPTINr5t8HjgCJNubVnpLGSa9v42~cqZXTFEkLdkUnwGdlsyPvWDjeSELzhdgxyvl1UvxBzlCJVToeFBdamPoq6wR6pysHgV7pjhplVHXlQ0WXqn79zXmaXM3qVyRLzpR3xPOl6nCrw~IfFhaAVEuwZ6khyfNWUnmgQGoIvvM7nZUAZq-JGSF-4VNtAasNzPOE~8vdvrVG-1vgwfK8pXe~x~t4aXsN~GCSWmUVrYngV8xhpzdUSRTzZsjNvLDMI396IiJwzErCqtwazJCHVb2IDyO4xDHSrQ2FFpcqxEE2lzx0wne2JoZJAaqqF6FNz5KdnJQJT9xJTubZJDpmkgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                services: [
                    "Service 1",
                    "Service 2",
                    "Service 3"
                ],
                rate: 9,
                reviews: 123,
                priceByNight: 500000,
            }
        ]
    }
    return { Data: tempData }
}
export const SignIn = (data) => {
    return { Token: 'ABCToken' }
}
export const SignUp = (data) => {
    return { Message: 'OK' }
}