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
<!-- nhớ có đơn vị deg -->
```
-+ <current-color -> ăn theo màu của color đứng trk nó
+ <filter:brightness(%)-> lm giảm độ sáng của màu

+ POSITION
- Khi có 1 đối tượng phụ thuôc vào đối tượng khác : position:obsolute;
- Khi có 1 đối tượng phụ thuộc vào cửa sổ trình duyệt: position:fixed (thêm ni vô nó thành 1 lớp nổi bên trên các đối tượng khác)


+ display
- thuộc tính block =list-item

+ backgroud-image :url() -> css cho hình ảnh vào đúng khung cha có kích thước hình vuông dùng:
   <padding-top:100% <100% của thẻ cha chưa nó>



+ Căn giữa:
- khi display : <flex hay block thì ta margin: auto tự canh giữa. 
- align-items: center; <căn giữa các phần tử nội tuyến (text hoặc link...) theo chiều ngang của trong phần tử cha (block-level)
- text-align: center;< căn giữa nd vb>
- align-item: base-line; <lấy chân chữ để canh chỉnh>

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
+ viết hoa
Thuộc tính text-transform  kiểm soát cách viết hoa của văn bản.

+ class giả:
::before < nếu class chinh có nhieu element thì before lun đướng trk các element khác và after đứng sau cùng> mỗi element chỉ có 1 before và 1 after
::after
```css : bắt buộc có 
- content=""; (để class ni tồn tại)
- display: block;
```

+ xuất hiện ảnh 
- transfrom:scale();
- transfrom origin :(12px top) giá trị chuyển động vị trí


+ cursor
- text: không bấm vào dk
- user-select:none (không copy đk)

+ focus
```
.subheader-search:focus ~.sub-search-input{
    display:block;
}
```
+ Overflow: auto -> xuất hiện theo kéo < nếu quá chìu dọc thì xuất hiện thanh dọc còn cả 2 dọc và ngang thi  xuất hiện cả 2 thanh dọc vz ngang>

+ dùng đơn vị {vh}  view-port height < để kích thước theo kích thước màng hình>

+ dùng z-index: cho mấy cái bấm vào xuất hiện

# một số @@
- inherit: kế thừa.
- san-serif: là 1 chủng tập hợp những font chữ không có gạch ở chân.
- grid:  lưới
- deg: độ(degrees)
- :root (tạo biến)
- mặc định thẻ ul có padding left:40px
- separate: phân cách
- switch: công tắc chuyển đổi
- aside: một bên
- policy: chính sách
- selection:sự lựa chọn
- option: lựa chọn
- label
- focus
- category: thể loại





+ link : https://www.youtube.com/watch?v=-P_POiNr8P4 (xem github)
+ học <css selector reference
+ xem responsive với 12 column
   ( tạo div row chứa div column )

hỏi?
+ chưa tải được font awesome
+ flex chỗ colum bài flexbox
+ bị lỗi có gạch ngang trên icon-navbar
+ copy class icon trên font awesome -- 1 số k hiển thị
+ overflow:hidden;<xem lại chõ lm search-header>
+ k lm dk transition chỗ danh muc ??? -> right
+ xem lại grid_column <>
+ ưu điểm của đưa img bằng backgrougd-image
+ thẻ a nhưng k có pointer chỗ product??


 ### NOTE
 - Khi làm một box nhiu thông tin có cấu trúc giống nhau nên dùng thẻ ul -li ... 
 - Tạo 1 class giả như class xuất hiện
 - hay sai font-weight:400;(không có đơn vị px)
 - /* transform-origin:calc(100%-20px) top; không chạy dk k bit nguyên nhân viết cách ra như ri mới chạy ```transform-origin: calc(100% - 20px) top; ```
 - soi ảnh kĩ để css : hay k thấy bo góc
 - mai xem lại position; relative vz absolute
 - lm tam giác chỉ thông bá0
 ```
 border-width: 20px 30px;
 border-style: solid;
 border-color: transparent transparent var(--white_color) transparent;
 ```


 #### xem lại
 ```
 
#### làm modal
```
<div class="modal">
      <div class="modal__modal"></div>
      <div class="modal__body">
          <div class="modal__inner">
              <!-- form login/regitered -->
          </div>

      </div>
  </div>
```

+ copy 1 logo ảnh (svg) ourehtml trên code
+ ``` https://webformatter.com/html``` ->code copy vô
+ css color cho ảnh svg dùng <trong path thêm  fill:<màu cần>>

#### Giới hạn đoạn văn có 2 dòng và kết thúc ...
<css
```
text-align: justify;
margin: 10px 10px 6px 10px;
/* làm co 3 chấm sau cùng*/
height:3.6rem; <nên dùng max-height >
overflow:hidden;
display:block; 
/* không chạy dk cái dưới sẽ chạy cái trên */
display:-webkit-box;
-webkit-box-orient: vertical; 
/* hướng dòng chữ <dọc> */
-webkit-line-clamp:2;
/* Thuộc tính CSS -webkit-line-clamp cho phép giới hạn nội dung của vùng chứa khối ở số dòng được chỉ định. */
```







<proh-has call- webkit>????