//tạo đối tượng hàm express lấy từ thư viện "express" vừa mới tạo
// require nhập vào
const express = require("express");

// chạy hàm => đối tượng

const app = express(); // đôi tượng express

// tạo ra 1 API với đương dãn là /
// đối số 1 là đường dẫn của API
//đối số 2 là hàm sẽ chạy khi API được gọi
app.get('/',(req,res) => res.send("test dữ liệu đưa vào response"));
app.get('/api/getHeader', (req, res) => {
    res.json({ header: 'I am a message from Server!'});
  })

// lắng nghe trên cổng 4000
app.listen(4000,() => console.log("đang đợi yêu cầu gửi vào củng 4000"));