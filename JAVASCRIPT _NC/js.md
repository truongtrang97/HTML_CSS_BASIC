## IIFE (immediately invoked function expression)--> biểu thức tạo ra 1 hàm, hàm ni được gọi ngay lập tức
-> self - invokeing function
+ ex: ;(function(){
          console.log('abc)
})()-->enter---thuc thi ngay lap tuc
+ note trước IIFE có ;
+ vd gọi trong cũng oki
ex: ;(function(){
          console.log('abc)
}())
+ vd : đặt thêm tên cũng dk, nhưng tên ni chỉ được gọi trong IIFE ni thâu không gọi được ở ngoài ( được dùng gọi như đệ quy)
ex: ;(function name(){
          console.log('abc)
          name()--> xem đệ quy chớ k bị treo browser
})()
note không gọi được như ri ở ngoài name()
+ IIFE ni được dùng để viết thư viện , thường những biến trong IIFE ni được dùng kiều không public, trong ni thì biến sẽ không global
+ tính 'PRIVATE'
- đảm bảo tính an toàn toàn vẹn dữ liệu (xem lại cái ni)
![img](/assets/img/IIFE1.png)
![img](/assets/img/IIFE2.png)
+ note 
- Function được khởi tạo không có từ khóa return nên nó sẽ trả về giá trị undefined khi được thực thi.
- X**X =X^X(ngu)
## scope : phạm vi
<khi ta khai bao 1 biến hay 1 hàm thì ta phải biết phạm vi hoạt động của nó
+ các loại phạm vi
- global: toàn cầu
- code block: khối mã: const, let
- local scope : Hàm var, function
+ Khi gọi mỗi hàm luôn có 1 phạm vi mới tạo ra  
- khi khai báo hàm thì hàm đó chỉ thuộc phạm vi mà nó được khai báo 
+ Các hàm có thể truy cập vào các biến được khai báo trong phạm vi của nó và bên ngoài nó
+ Cách thức 1 biến được truy cập: sẽ truy cập vào biến gần nó nhất
+ Khi nào một biến bị xóa khỏi bộ nhớ
- Global: vòng đời của biến: tạo ra khi khai báo biến toàn cầu giá trị được lưu ở bộ nhớ và nó mất đi khỏi bộ nhớ khi thoát chương trình đó
-( f5 mất đi tại thời điêm reset lại, bấm tắt tab)
+ Hạn chế dùng biến global -> <tốn bộ nhớ
+ Biến trong code block và trong hàm
- Khi hàm được thực thi xong thì biến trong hàm được xóa khỏi bộ nhớ
+ Biến trong hàm được tham chiếu bởi 1 hàm
 ![img](/assets/img/Scope.png)
  Trong ni biến let không bị xóa đi, hàm được thực thi thực tế là hàm increase() biến couter được xem như biến toàn cục trong hàm makeCouter(kiu đóa)

+ note 
- Biến được khai báo với từ khóa var sẽ có phạm vi global
- Biến được khai báo với từ khóa let không được truy cập ở ngoài phạm vi của biến đó.
## CLOSURE
 - là hàm có thể ghi nhớ nơi nó được tạo
 - truy cập được biến ở bên ngoài phạm vi của nó
 ![img](/assets/img/Scope.png)
 - hàm makeCourese chỉ được gọi 1 lần -> nó tạo ra 1 phạm vi hoạt động thâu, nên khi function increase() thực thi thì giá trị couter được nhận giá trị mới -> mỗi console.log tăng lên như z đóa.[( gọi là tham chiếu giá trị couter bên ngoài (giá trị lưu ở bộ nhớ đó thay đổi sau khi function thực hiện))]
 - nếu h gọi thêm 1 lần hàm makeCourese ở phía dưới console.log ra gía tri 1 như ban đầu vì nó tạo ra 1 phạm vi hoạt động khác
 + ứng dung:
 - viết code ngắn hơn

## HOISTING
(đưa lên trên cùng của phạm vi)
<thêm ví dụ>
## STRICT MODEL
<nghiêm ngặc trong code>
## PRIMITIVE TYPES AND REFERENCEN TYPES
1. Primitive type<tham trị>-- VALUE TYPES
- mỗi giá trị được lưu vào 1 vùng nhớ khác nhau
a=b
- b tạo ra 1 vùng nhớ sao chép giá trị a vào b
2. Referencen types <tham chiếu>
- chỉ lưu vào 1 vùng nhớ
a={}
b=a;
b -> trỏ vào vùng nhớ của a
 + khi so sánh a==b thì trả gtri false 
## THIS <chỗ ni xem lại video >
### bind
![img](/assets/img/bind1.png)
note : const getTeacherName= teacher.getFullName
- chỗ ni teacher.getFullName( không phải goi hàm mà chỉ truy cập vào function mà thôi)
- Gán function ni vào 1 biến khác
 function bản chất là 1 object đặc biệt--> dạng tham chiếu(bản chất chỉ gán vùng nhớ sang 1 biến kia thâu--> cả 2 trỏ về 1 vùng nhớ
 etTeacherName=== teacher.getFullName-->true)
 - khi gọi hàm không thông qua 1 đối tượng( không có chi chấm đằng trk) thid từ khóa this sẽ trỏ ra đối tượng global
 ==> cho dù 1 method được tạo ra (getFullName) bên trong 1 đối tượng (object) nếu chúng ta gán qua 1 biến khác và gọi biến đó không thông qua đối tượng  thì từ khóa this trong method((getFullName)) vẫn trỏ ra đối tượng window
 + this không phải là 1 biến 1 gia trị nó chỏ là từ khóa tham chiếu đến 1 đối tượng khác thôi
 - tại thời điểm 
vd: đã code
### Fn.call()
- Là 1 function trong prototype của function contructor, phuong thức này dùng để gọi hàm và cũng có thể bind this cho hàm
1. gọi hàm với call-method 
<enzin(k rõ)> khi gọi hàm thì enzin của JS sẽ gọi đến call-method để gọi hàm
2. Gọi hàm và bind this
- bind chỉ bind this trả ra hàm mới & không gọi hàm(giống chỉ ràn buộc thui á)
- call nó bind this trả ra hàm mới & gọi lun hàm đó
### lưu ý trong strict mode vẫn có this nếu chúng ta bind
```
'use strict'
 this.firstname='trang',
 this.lastname='truong'
  function showfullname(){
                              console.log(this)
                              console.log(`${this.firstname} ${this.lastname}`)
                    }
                    // showfullname()//error
                    showfullname.call(this)
```
3. Thể hiện tính kế thừa (extends) trong OOP
<kê thừa ở đây là thừa hưởng 1 property hay  1 method của 1 đối tượng khác>
```
function Animal(name,weight){
          this.name=name,
          this.weight=weight
};
function Chicken(name, weight,legs){
          Animal.call(this,name,weight)
          this.legs=legs
}
const trang=new Chicken('trang',12,2)
console.log(trang)
```
4. Mượn hàm(function borrowing) thêm ví dụ với arrgument
### fn apply()


![img](/assets/img/fn.apply.png)
  
+ khác nhau cách truyền đối số apply(truyền trong mảng), call(bình thường)
![img](/assets/img/apply2.png)
![img](/assets/img/apply3.png)


+ tính kế thừa


![img](/assets/img/kethua_apply.png)

+ argument -> tính chất tương tự mảng
<kế thừa cả prototype nữa>
#### ứng dụng khi mượn hàm
## so sánh bind, call,apply (cái ni hay hỏi phỏng vấn)
++ giống nhau:
- cú pháp truy cập
đều function.bind() or function.call() or function.apply()
- là các method được kế thừa từ function.prototype
function fn(){}
  fn.bind===function.prototype.bind

+ truy cập đến method bind <fn.bind>
++ khác nhau
- các đối số và cách hoạt động
+ bind method
- trả về hàm mới với this tham chiếu tới this argument
- không thực hiện gọi hàm
- nếu được bind kèm với arg1, agr2 .. thì các đối số  này sẽ được ưu tiên hơn
vd ; const newfn=fn.bind(thisargument, arg1,arg2..)//giá trị bind arg1. arg2.. ở đây được ưu tiên hơn giá trị ở function mới newfn(arg1,arg2...)
+ Nếu muốn newfn(arg1,arg2...) ni hoạt động thì trên phải  
const newfn=fn.bind(thisargument) nhiêu thôi không bind thêm arg1,arg2...


--> có giá trị, còn call, apply trả undefined
+ call method
- thực hiện bind this với this argument 
- thực hiện gọi hàm
- nhận các đối số cho hàm gốc từ ag1,ag2...
vd: fn.call(thisarg.arg1,arg2...)
+ apply method
- thực hiện bind this với this argument 
- thực hiện gọi hàm
- Nhận đối số hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2...]`
fn.apply(thisarg,[arg1, arg2...])
note : vd được tham khảo từ javascripttutorial.net
## note 
- ứng dụng khi mượn hàm
- khi extend(tính kế thừa)
























 +register: đăng kí
 + contex: định nghĩa văn bản
 + xem lai &times, focus()
 + khi xoa phan tu can index
 - lang nghe su kien click trk khi element dua vao dom
 - moi khi render phai di listen tung element
 ```
 root.onclick =this.handleDelete
 this.render();
 ```
 + khi bạn muốn gọi một hàm thì dùng (), còn muốn chỉ muốn truy cập để mượn cấu trúc của hàm thì không có () --->xem lai cho ni nha
 + e.target : trỏ chuột vào đâu thì sẽ trả về cái đó < e ni là event>
 + closest là 1 dom element giúp kiểm tra element hay cha của element đó có chứa class đó hay không
 ```
 const deletebtn=e.target.closest('.delete')
 ```
 + data- ( cai ni tao ra dataset)
 + const index=deletebtn.dataset.index cum ni giong dung attribute
 + xem lại toán tử rest(... á)
 + Array.from()--> biến thành mảng


