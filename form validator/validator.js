function validator(options){
// lấy element của form cần validate
var formElement =document.querySelector(options.form)
var selectorrules={}//sau khi foreach chay xong sẽ lưu những rule cuả tất cả seclector 
// Hàm thực hiện validate
function validate(inputElement,rule){
         // lấy parentelement of 1 element
         var getparentEl=function(element,seclector){
            while(element.parentElement)//lúc đầu là cha của input-> lun đúng chạy khan treo trình duyệt nên có cái gán elemet dưới á
            if(element.parentElement.matches(seclector)){//matches ni là kiểm tra có pải seclector k á
               return element.parentElement
            }
            element=element.parentElement

         }
         //  var errorMessage= rule.test(inputElement.value)// rule.test giong rules[]
         var errorMessage
         //  var errorElement = inputElement.parentElement.querySelector(options.errorSelector)// chỗ ni là lâys ra element của '#form-group'
         var errorElement=getparentEl(inputElement,options.formgroupseclector).querySelector(options.errorSelector)// thay het phia duoi nua
         //  Lấy ra các rules của seclector
          var rules=selectorrules[rule.selector];
         // kiểm tra từng rule& kiểm tra
         //  neu có lỗi thì dừng kiểm tra
         for(var i=0;i<rules.length;i++){
            // khi dang radio hay checkbox thi đều có value nên --> .value chỉ lấy dk gtr trong html thui
            switch(inputElement.type){
               case 'radio':
               case 'checkbox':
                  errorMessage= rules[i](
                     formElement.querySelector(rule.seclector + ':checked')
                  );
                  break;
               default:
               errorMessage= rules[i](inputElement.value)
            }
            if(errorMessage){
               break;
            }
         }

          if(errorMessage){
                    errorElement.innerText=errorMessage;
                    inputElement.parentElement.classList.add('invalid')

          }
          else{
                    errorElement.innerText=' ';
                    inputElement.parentElement.classList.remove('invalid')
          }
          // console.log(formElement.parentElement.querySelector('.form-message'))
          return errorMessage
}
// console.log(formElement)
if(formElement){
   // khi submit form (bấm vào nut đăng kí)
   formElement.onsubmit=function(e){
      e.preventDefault()//bỏ đi hành vi mặc định
      var isvalid=true;
      // lap lai tung rule & validate tất cả các rule
      options.ruler.forEach((rule) => {
         var inputElement = formElement.querySelector(rule.selector)
        var isformvalid=  validate(inputElement,rule)
        if(isformvalid){
           isvalid=false;
        }

      });
   // if(isvalid){
   //   console.log('khong')
   // } else{
   //    console.log('loi')

   // }// để test thử thâu
   
   if(isvalid){
      // SUBMIT VỚI JAVASCRIPT
     if(typeof options.onSubmit==='function') {
      var enablelement =formElement.querySelectorAll('[name]:not([disabled])')
      console.log(enablelement)
      // conver nodelist thành array
      var formvalue=Array.from(enablelement).reduce(function(values,input){
         // return (values[input.name]=input.value) && values// sẽ bị lỗi khi 1 trong các input mình không request -->input.value->{}
         values[input.name]=input.value
         return values
      },{})
      options.onSubmit(formvalue)
     } else{
      //   submit voi hanh vi mac dinh
      formElement.submit()
     }
   }

   }

         // Lặp qua mỗi rule và xử lý (Lắng nge sự kiện blur, input,...)

          options.ruler.forEach((rule) => {
                    var inputElements = formElement.querySelectorAll(rule.selector)
                    Array.from(inputElements).forEach(function(inputElement){

                       //   Lưu lại các ruler cho mỗi input
                       if(Array.isArray(selectorrules[rule.selector])){
                          selectorrules[rule.selector].push(rule.test)
                          }
                          else{
                          selectorrules[rule.selector]=[rule.test]
                          }
                       // console.log(selectorrules[rule.selector])
                       // selectorrules[rule.selector]=rule.test
                       
                       
                       // console.log(inputElement)
                         // console.log(rule)
                       //lưu lại các rule của mỗi input
                      
     
             
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
                    })
          
});
// console.log(selectorrules)      
}
}

//  dinh nghia ruler
// nguyên tắc của rule
//1. khi có lỗi trả về =>message lỗi
// 2.khi không có lỗi không trả về gi cả(undefined)
validator.isRequest=function(selector,message){
          return {
                    selector:selector,
                    test: function(value){//kiem tra xem user nhap chua
                       return value ? undefined : message||'vui lòng nhâp trường này'
                    }

          }
}
validator.isName=function(selector,message){
          return {
                    selector:selector,
                    test: function(value){// kiem tra xem co phai email khong
                    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    return regex.test(value)?undefined: message ||'Trường này phải là email'
                    }
          }

}
validator.islength=function(selector,min,message){
          return {
                    selector:selector,
                    test: function(value){
                       return value.length >= min? undefined : message || 'vui lòng nhâp lớn hơn 6 kí tự'
                    }

          }

}
validator.isconfirmpass=function(selector,vadaconfirm,message){


return {
          selector:selector,
          test: function(value){
             return value===vadaconfirm()? undefined : message || 'vui lòng nhâp lai ';
          }


}
}
