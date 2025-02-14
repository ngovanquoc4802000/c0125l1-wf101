const content = document.querySelector(".content");

const cart = [
  {
    id: 0,
    title: "Bún Thủy - Trần Nhật Duật",
    address: "98 Trần Nhật Duật, Hoàn Kiếm, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7r98o-lstsw0780on8b4@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 1,
    title: "Trà Sữa Tocotoco - Thiên Đường Bảo Sơn",
    address: "A32-18 Khu A Geleximco Lê Trọng Tấn, Hoài Đức, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7r98o-lsu96zdn3jk40a@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 2,
    title: "Gà Rán KFC - Hồ Gươm Plaza",
    address: "Tầng 1, Tầng 1, Hồ Gươm Plaza, 110 Trần Phú, Hà Đông, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7r98o-lstv6g0syytgc2@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 3,
    title: "Trà Sữa Royaltea - Lê Lai",
    address: "64 Lê Lai, P. Hà Cầu, Hà Đông, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7r98o-lsv9zuv8iy1081@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 4,
    title: "Mì Trộn Indomie 158 - Thành Công",
    address: "105 - C8 Thành Công, P. Thành Công, Ba Đình, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7r98o-lsv9u5wwg8t5cd@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 5,
    title: "Gà Rán Popeyes - Trần Quốc Hoàn",
    address: "69 Trần Quốc Hoàn, P. Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7ras8-m4iwmn1h83hc17@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 6,
    title: "Trà sữa Mixue - Big C Thăng Long",
    address: "222 Big C Thăng Long, Trần Duy Hưng, P. Trung Hoà, Cầu Giấy, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134513-7ras8-m63ua1zf53g850@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 7,
    title: "Vịt 29 - Vịt Quay Bắc Kinh - Bạch Mai",
    address: "506 Bạch Mai, P. Trương Định, Hai Bà Trưng, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134259-7r98o-lwezmvyb6uhl4c@resize_ss750x400!@crop_w750_h400_cT",
  },
  {
    id: 8,
    title: "Doo Foods - Burger, Gà Rán & Cơm Gà - Giải Phóng",
    address: "37 ngõ 205 Giải Phóng, P. Đồng Tâm, Hai Bà Trưng, Hà Nội",
    src: "https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-ltx5hp6uok5p92@resize_ss640x400!@crop_w640_h400_cT",
  },
  {
    id: 9,
    title: "Le Castella Hà Nội - Taste Of Taiwan - Vũ Hữu",
    address: "170 Vũ Hữu, P. Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
    src: "https://mms.img.susercontent.com/vn-11134259-7r98o-lw94dui96l7f8a@resize_ss750x400!@crop_w750_h400_cT",
  },
];

const renderContent = () => {
  cart.forEach(({ title, address, src }, id) => {
    content.innerHTML +=`
        <div id=${id} class="cart">
        <div class="gallery">
          <a target="_blank" href="">
            <img src="${src}" alt="Hinh anh mon an">
          </a>
          <div class="desc">
            <span>${title.length > 24 ? title.slice(0,24) + "..." : title}</span>
            <p>${address.length > 30 ? address.slice(0,30) + "..." : address}</p>
          </div>
        </div>
      </div>
     `;
  })
};
renderContent()