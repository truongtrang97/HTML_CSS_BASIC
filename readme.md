+ reset css
- normalize css cdn (một trong những thư viện reset css)-- nhúng file có đuôi <min css> nhớ đưa trên cùng để khi ta css đè lên được.
- <https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css>... link đây nha
+ Thường thì font-size: 100% của trình duyệt =16px=1 rem.
- hay use font-size:62,5% (hack) ---> muốn font-size:10px=1rem, 12px=1,2rem ...







# THUỘC TÍNH CSS
+ COLOR
- backgroud-image: linear-gradient( )
```
Dùng hàm linear-gradient(0deg, #333, #ccc) - (góc xoay, màu bắt đầu, màu kết thúc). để trải màu đều đều.
Hướng xoay.
90deg: trái sang phải.
180deg: trên xuống dưới.
45deg: chéo
```
+ display
- thuộc tính block =list-item


+ bỏ gạch chân
<a> - text-decoration


+CACH LÀM DẤU GẠCH SAU 1 DÒNG
EX: đăng kí |  <đoạn ni xem lại chưa hỉu lắm>
```
.header__navbar-item--separate::after{
    content:"";
    display: block;
    position: absolute;
    border-left: 1px solid #F96C5C;
    height: 14px;
    right: -9px;
    top:50%;
    transform: translateY(-50%);
}
```

# một số @@
- inherit: kế thừa.
- san-serif: là 1 chủng tập hợp những font chữ không có gạch ở chân.
- grid:  lưới
- deg: độ(degrees)
- :root (tạo biến)
- mặc định thẻ ul có padding left:40px
- separate: phân cách


