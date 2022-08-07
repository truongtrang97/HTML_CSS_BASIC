+ invalid :
- thêm class invalid ni vào để xuất hiện màu đỏ 
+ dùng parentElement để đến element gần nó nhất
+ formElement.querySelectorAll('[name]:not([disabled])')--> Lấy ra những element có attribute là name và không có attribute 'disabled
+ var formvalue=Array.from(enablelement)// conver nodelist thành array

- validate : xác nhận
+ Kiểm tra xem có phải email không < web :javascript email regex >
- return 'dang chuỗi' --> gias trị bắt buộc nhập vào xác nhận lại mật khâu, sửa type ='password'--> mật khẩu tự ẩn đi


+ note
 + selectorrules[rule.selector]=rule.test
 + var errorMessage= rule.test(inputElement.value)// test dưới là function
 + var formvalue=Array.from(enablelement).reduce(function(values,input){
      return (values[input]=input.value)&&values
   },{}) ---> đoạn toán tử logic
 + xem lại bài toan tử logic và câu lệnh điều kiện if