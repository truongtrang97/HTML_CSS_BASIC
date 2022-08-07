=+ code thư viện
-TODOS->code thuần
- Library-> TODOS->180deg

+ callback -> ( chắc function)
+ tạo ra thư viện kết hợp giữa react+ redux 
[img]
- view : giao diện dùng
- dispatch: hành động của user(vd cuộn chuột . click)
-> dispatch ni chọc ra action
- actions : mô tả hành động( thêm , sửa , xóa .. thì lm gì)--> nó không thực hiện hành động đó
- reducers: lúc nào cũng có gtri khởi tạo--. dùng đối số của lần trước để dùng lại cho lần sau ( kiểu đó)< xem lại kiến thức reduce>
  reducers ni nhân gtri từ action xong xử lý tạo ra dữ liệu mới trả về Store( nơi lưu trữ dữ liệu)
- update lại store -> xong render lại view



## lm html trống-> code js xong innerhtml qua
+ Template enzin (literals) chế bằng template string ( là cái dấu ni ` `)
+ <ul>
<li>BMW</li>,<li>Porsche</li>,<li>Mercedes</li>
</ul>
 map ->return -> array xong conver từng phần tử của array qua string và nối bằng dấu , -> mất dấu , ta join(' ')
1. k nen dung join('')
2. const issuccess =false
const output=`
<h1>${issuccess && 'Thanh cong'}</h1>
--> kết quả mong muốn không trả về gì hết thay vì false
<giải quyết >
- tạo ra file core.js

+ toán tử &&
&&Toán tử AND thực hiện như sau:

Đánh giá toán hạng từ trái sang phải.
Đối với mỗi toán hạng, chuyển đổi nó thành một boolean. Nếu kết quả là false, dừng và trả về giá trị ban đầu của toán hạng đó.
Nếu tất cả các toán hạng đã được đánh giá (tức là tất cả đều là đúng), trả về toán hạng cuối cùng.
Nói cách khác, AND trả về giá trị giả đầu tiên hoặc giá trị cuối cùng nếu không tìm thấy.

Các quy tắc trên tương tự như OR. Sự khác biệt là AND trả về giá trị false đầu tiên trong khi OR thì trả về giá trị đúng đầu tiên.
1. module
    1. Tạo file thành module < <script type="module" src="./buildUI.js"></script>  >
    import html from './core.js'
    export defaut html ( hay 1 function)
2. Tagged template literals 
    function master(...rest){
      console.log(rest)
    }
    var happy ='happy',
    master `hc lap trinh ${happy}`
    - Khi dùng toán tử rest lấy ra tất cả các tham số được truyền vào function master và biến thành mảng
    MẢNG NI CÓ: arr1 là tất cả các string không có phần nồi suy ( biến á)
3.  .filter(x=>x && x!==true||x===0)
< chỉ lấy phần tử truthy trừ true & lấy luôn 0>
- Ôn lại kiến thức về Truthy và Falsy
( caí ni giải quyết được bỏ true, false hiển thị trên thẻ h1)
4. const roots= new Map()//
- map object ni có tính chất đặc biệt có thể lặp qua nó, đặt key bằng bất kì dữ liệu nào, bình thường object chỉ đặt được dạng chuỗi mà thôi

+ core: cốt lõi