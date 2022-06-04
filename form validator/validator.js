function validator(options){
// lấy element của form cần validate
var formElement =document.querySelector(options.form)

function validate(inputElement,rule){
          var errorMessage= rule.test(inputElement.value)
          var errorElement = inputElement.parentElement.querySelector(options.errorSelector)

          if(errorMessage){
                    errorElement.innerText=errorMessage;
                    inputElement.parentElement.classList.add('invalid')

          }
          else{
                    errorElement.innerText=' ';
                    inputElement.parentElement.classList.remove('invalid')
          }
          // console.log(formElement.parentElement.querySelector('.form-message'))
}
// console.log(formElement)
if(formElement){
          options.ruler.forEach((rule) => {
                    var inputElement = formElement.querySelector(rule.selector)
                    
                    // console.log(inputElement)
                    // console.log(rule)

        
                    if(inputElement){
                                //  xử lý trường hợp blur khỏi input
                              inputElement.onblur=function(){
                                        // lay dk value trong inputElement.value
                                        // lay dk test function trong: rule.test
                                    validate(inputElement,rule)
                              // xử lý mỗi khi người dùng nhập vào input
                              inputElement.oninput=function(){
                                        var errorElement = inputElement.parentElement.querySelector('.form-message')
                                        errorElement.innerText=' ';
                                        inputElement.parentElement.classList.remove('invalid')   
                              }
                    }
          




          }
});
          
}
}
//  dinh nghia ruler
// nguyên tắc của rule
//1. khi có lỗi trả về =>message lỗi
// 2.khi không có lỗi không trả về gi cả(undefined)
validator.isRequest=function(selector){
          return {
                    selector:selector,
                    test: function(value){//kiem tra xem user nhap chua
                       return value ? undefined : 'vui lòng nhâp trường này'
                    }

          }
}
validator.isName=function(selector){
          return {
                    selector:selector,
                    test: function(value){// kiem tra xem co phai email khong
                    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    return regex.test(value)?undefined:'Trường này phải là email'
                    }
          }

}
validator.islength=function(selector,min){
          return {
                    selector:selector,
                    test: function(value){
                       return value.length >= min? undefined : 'vui lòng nhâp lớn hơn 6 kí tự'
                    }

          }

}
validator.isconfirmpass=function(selector,confirm){


return {
          selector:selector,
          test: function(value){
             return value===confirm()? undefined : 'vui lòng nhâp lai mat khau'
          }


}
}
