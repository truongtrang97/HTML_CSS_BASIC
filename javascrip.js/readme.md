
### Function
+ argument
- đối tượng arguments
- vòng for of
```
function writeLog(){
          var mystring='';
          for( var param of arguments)
          {
                    mystring+= `${param} - `
          }
          console.log(mystring)
}
writeLog('log1','log2', 'log3')
```
#### Return trong hàm
 < sau lệnh return trong hàm thì sẽ dừng lại k thực hiện các lệnh tiếp theo của hàm
```
function add(a,b){
          alert(a)
          // return(a+b)
          return a.toString()+b.toString() // giống return = 'a' + 'b'
}
var result = add(123,345)
console.log(result)

```

+ khi 2 function trùng tên function sau sẽ đè lên function trk 
+ biến khi báo trong hàm chỉ có thể use trong hàm đó thâu

### String
- vao backslash in javascrip để xem cách viết các "", /...
+ xam dộ dài chuỗi <.length>
+ template string É6 < `${...}`>
``` 
var thirdname='truong';
var lastname ='trang';
console.log=(`Tôi là: ${thirdname} ${lastname}`)
```
+ làm việc với chuỗi
- keyword: javascript string methods
ex: var my String='...'
1. length
console.log(mystring.length)
ex:

function getContentLength(content) {
return (content.length) 
}

2. find index
console.log(mystring.indexOf('cum can tim vitri"))
- neu k tim dk tra ve -1
- vd có nhiều "cụm từ gống nhau"-> in ra vị trí đầu tiên của cụm đầu tiên thâu
- muon tìm 'vi tri cụm từ thứ 2' 
->console.log(mystring.indexOf('cum can tim vitri', 'stt sau cụm từ đầu'))
- cụm từ cuối ->console.log(mystring.lastindexOf('cum can tim vitri"))
-console.log(mystring.search('cum can tim vitri")) . chỉ tìm ra vị trí đầu
3. cut string
ex var my string='hoc JS tại f8';
+ cut JS:console.log(mystring.slice(4,6))<vị tri đâu cuôi>
+ cut 'JS tại f8'->console.log(mystring.slice(4))
+ cut f8 -> console.log(mystring.slice(-3,-1))

4. replace
- thay thế JS thành Javascrip
- <thay thế cụm đầu tiên> -> console.log(mystring.replace('JS','Javascript))
<thay thế tất cả chữ JS có trong chuỗi> ->console.log(mystring.replace(/JS/g,'Javascript))
5. convert to upper case
<chuyển chữ viết thường thành viết hoa> -> console.log(mystring.toUpperCase())
6. convert to lower case
<chuyển chữ viết hoa thành viết thường> -> console.log(mystring.toLowerCase())
7. trim
<loại bỏ khoảng trắng dư ở 2 đầu>
console.log(mystring.trim())
8. split
<dua vào điểm chung để chuyển string thành array>
->console.log(mystring.split(', ')

9. get a character by index
<lấy ra kí tự từ 1 số index>
->console.log(mystring.charAt(index))
- c2: console.log(mystring[index])

<thêm typeof ...>


#### cách khai báo
+ var million = 1e6; // tương tự: 1000000

+  Đối tượng number

Phương thức	          Vai trò
Number.isFinite()	          Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	          Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	          Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	          Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

example:

```
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'

```
#### làm việc với number
keyword:javascript number methods
+ toString
var age=18;
console.log(age.toString())-> chuyển kiểu number thành string;
+ toFixed (làm tròn number)
var age= 3.1454;
console.log(age.toFixed())-> kq:3 (làm tròn trên 5, giữ nguyên dưới 5)
console.log(age.toFixed(2))-> kq:3.16

+
```
function isNumber(value){
return typeof value == "number"
}
```
### ARRAY
- Kiểm tra có phải array hay không?
+ console.log(Array.isArray(tên mảng)) -> bloolean

+ truy xuất mảng
- console.log(tên_mảng.length)->độ dài mảng
- console.log(tên _mảng[số index])-> lấy ra giá trị index

+ làm việc với array
ex: var language=[
          'Javascript',
          'PHP',
          'Ruby'
          }

]
1. to string
console.log(language.toString())-> chuyển mảng thành dạng chuỗi ( có dấu ,)
2. Join
console.log(language.join(', ')) ->chuyển mảng thành dạng chuỗi ( cách nhau ntn tùy mình chọn () )
3. pop 
console.log(language.pop())-> xóa đi phần tử cuối mảng và trả về phần tử đã xóa -> Ruby
console.log(language)-> mảng mới
4. Push
console.log(language.push('dart', 'hgy'))-> thêm nhiều phần tử vào cuối mảng và trả về độ dài mảng mới
5. shift
console.log(language.shift())->xóa đi phần tử đầu mảng và trả về phần tử đã xóa -> javascript
6. Unshift
console.log(language.unshift('dart', 'hgy'))-> thêm nhiều phần tử vào đầu mảng và trả về độ dài mảng mới
7. splicing
language.splice(vị trí đặt con trỏ, số lượng xóa đi, 'tên phần tử thêm vào')
ex: xóa PHP language.splice(1,1)
   - thay thê PHP bằng Dart -> language.splice(1,1,'Dart')
   - thêm Dart sau PHP ->language.splice(1,0,'Dart')
8. concat
nối 2 mảng lại với nhau mảng language với language2 -> console.log(language.concat(language2))
9. slicing
- cắt 1 phần tử 
ex: cắt PHP -> console.log(language.slice(1,2))-> (vị trí bắt đầu, vị trí kết thúc))
            -> console.log(language.slice(-1,-2))-> tính từ cuối
            -> console.log(language.slice(1))-> cắt đến hết mảng
            -> console.log(language.slice(0))-> copy mảng

#### Array _method
1. forEach(): duyệt qua từng phần tử của mảng
kn : callback-> hàm truyền về dưới dạng tham số
```
courses.forEach(function(course){
    console.log(course);
})
```
-> in ra từng phần tử của mảng
-> thêm index;
```
courses.forEach(function(course,index){
    console.log(index,course);
})
```

2. every() ->kiểm tra tất cả các phần tử của mảng thỏa mãn 1 điều kiện nào đó->boolean
```
// kiểm tra xem kháo học ni có miễn phí hay không

var isfree = courses. every(function(course,index){
    console.log(index);
    return course.coin===0;
}) 

console.log(isfree);
```
3. some()---> chỉ cần có 1 đối tượng thỏa mãn điều kiện là oki ->boolean
```
// kiểm tra khóa học ni có học phần nào miễn phí hay không
var isfree = courses. some(function(course,index){
    console.log(index);
    return course.coin===0;
}) 
console.log(isfree);
```
4. find()----> kiểm tra xem có đối tượng trong mảng đó không và in ra <chỉ tìm ra 1 ptử đầu tiên và dừng>
```
//kiểm tra xem có đối tượng trong mảng đó không và in ra
var course = courses. find(function(course,index){
    console.log(index);
    return course.name==='Ruby';
}) 
console.log(course);
```
5. filter()----> tìm ra được tất cả các đối tượng có trong mảng và in ra tất cả
```
//  tìm ra được tất cả các đối tượng có trong mảng và in ra tất cả
var listcourse = courses. filter(function(course,index){
    console.log(index);
    return course.name==='Ruby';
}) 
console.log(listcourse);
```
6. map()---> thay đối element array < thêm bất cứ thứ gì mún nha>
 + 
 < ứng dụng hiện thị view cho  user in website> return về 1 html  sau dùng array.join ()-> biến thành string
 ```
//thay đôi element in array-> trong 1 arry mới
 var newarray=courses.map(function addnewarr(course,index){
     console.log(index);
     return {
         id: `hello ${course.id}`,
         name: ` khoa hoc ${ course.name}`,
         coin: `${course.coin}`,//course.coin
         cointext: `ahihi`,
         index: index,
         originArray: courses,

     }
      

 })
 console.log(newarray);

 // đưa tất cả các name vào 1 arry mới

var newarray=courses.map(function addnewarr(course,index){
     console.log(index);
     return (course.name)
 })
 console.log(newarray);
```
7. reduce() ----> đưa về 1 giá trị duy nhất sau khi tính toán
```
var totalcoin = courses.reduce(function (accumulator, currentvalue){
    return  accumulator + currentvalue.coin;
 }, 0);// 0 ni là giá trị khởi tạo
 console.log(totalcoin)
 // accumulator gọi là biến tích trữ, lúc đầu nó nhận giá trị khởi tạo, và những lần tiếp theo cộng thêm currentvalue -> lần lượt là các gtri của mảng sau mỗi lần gọi
 // khi không có giá trị khởi tại, biến tích trữ nhận gtri đầu tiên của mảng, currentvalue nhận gtri thứ 2 của mảng
```
ES6 NGAN GON

var totalcoin = courses.reduce((a,b)=> a+b.coin, 0);
 console.log(totalcoin)

 **  note :muốn giá trị return về có kiểu dữ kiệu gì thì ban đâu đưa giá trị khởi tạo vào dạng đó **

 + cách logic của reduce
![img](/assets/img/reduce1.png)
+ cách trên được mô tả theo dưới ni á
![img](/assets/img/reduce_gthich.png)



8. include method

+ kiểm tra 1 method có được dùng ở kiểu dữ liệu nào đó k.
--> console.log(Array.prototype.includes)  + có: kq:ƒ includes() { [native code] }
--> console.log(Number.prototype.includes)  + không: kq:underfined
+ used vz string
![img](/assets/img/stringreduce1.png)
![img](/assets/img/reducearray1.png)
< thêm số phía sau là bắt đầu tính từ vị trí đó>
![img](/assets/img/aray-include2.png)
<nhập số k nằm trong index mà âm thì dk tính length+(số đó ra stt)>
![img](/assets/img/array.inluced3.png)
< trường hợp truyền vô kêt quả tính ra số âm thì sẽ tính từ 0... vd -4 thì 3+-4=-1 tính từ 0>

### callback
- là hàm được truyền qua đối số
- khi gọi hàm khác
![img](/assets/img/vd%20-callback.png)
< cần kiểm tra pải function k  >
![img](/assets/img/ktrafunction.png)
+++ độ dài của mảng
![img](/assets/img/lenghtarray.png)

+ for_in : không những duyệt qua những element nằm trong mãng mà còn đuyệt qua những phương thức trong protopype
![img](/assets/img/for_in.png)

+ hasOwnProperty: kiểm tra index có phải thuộc array gốc không( để loại trừ index từ phương thức của protopyte)
```
// forEach
  Array.prototype.forEach2=function(callback){
      var arrylength =this.length;
      for(var index in this)
      {
          if(this.hasOwnProperty(index)){
              callback(index, this[index],this)
          }
      }

  }
  courses.forEach2(function(index,course,array){
      console.log(index,course,array)
  })
  ```









### Object

+ ex: var myinf={
          name: 'trang',
          age:'25',
          address:'qn'
          getname: function(){
                    this.name
          }
          -> muốn xem getname -. console.log(myinf.getname())--> trang

          + function-> phương thưc (methods)
          + others-. thuộc tính (property)

}
 -- thêm 1 key trong object: myinf.email='trangtrang.@gmail' hoăc myinf['my-email']='trangtrang.@gmail'

 ex: lấy ra qn từ myinf và mykey='address';-> console.log(myinf.[mykey])
 + xóa đí 1 key
 delete myinf.age

### object constructor
- nên viết hoa chữ cái đầu đó là quy ước chung
ex:
```
function User(firstname, lastname , avatar) {
          this.firstname =firstname;
          this.lastname =lastname;
          this.avatar=avatar;
          this.getname= function(){
             return `${firstname} ${lastname}`
          }

}

var author = new User('trang','truong','avatar')
var user = new User ('tèo','tô','avatar')

console.log(author);
console.log(user);
console.log(author.getname());

```
+ cách xem lại contructor:
console.log(author.contructor)
+ có thể thêm các key riêng lẻ như title k ảnh hưởng tới contructor vào author:
<chỉ xuất hiện ở author>
author.title ='trang tồ tồ '

##### object prototype

- có thể thêm thuộc tính hay phương thức vào object contructor qua prototype.
ex  User.prototype.nameclass='f8';
    User.prototype.adressclass= function(){
       return this.nameclass;
    }
     <thí ở đây là chính cái mà gọi đến adressclass>

+ Đối tượng Date
- var data= new Date();
consle.log(data)
- var year= data.getFullyear();
- var month =data.getMonth()+1;
- var day = data,getDate();
get.Hours()
get.Minutes()
get.Seconds()
console.log(`${day} / ${month} /{year}`)
<keyword: javascript date object mozilla>

### Math object
1. Math.PI -> ra số pi
2. Math.round()-> làm tròn số
3. Math.abs()-> lấy giá trị tuyệt đối <chuyển số - thành số +>
4. Math.ceil()-> làm tròn trên (4.00001)-> thành 5<ap dụng số +>
5. Math.floor()-> làm tròn dưới <ap dụng số +>
6. Math.random()
console.log(Math.random())->kq ra số thập phân bất kì bé hơn 1
console.log(Math.floor(Math.random()*10)) -> tạo ra random số ngẫu nhiên từ 0->9

+ ex: lây random từ 1 mãng 
var random =Math.floor(Math.random()*5);
var bonus =[
   '10 coin'
   '50 coin'
   '60 coin'
   '70 coin'
   '80 coin'
]
-> console.log(bonus[random])

+ tao ra tỉ lệ % ngẫu nhiên xuất hiện
var random =Math.floor(Math.random()*100); 
<!-- 0->99% -->
if(random< 50)
<!-- ở đây 50% -->
{
   console.log('trúng số')
}

7. Math.max()-> trả về số max trong dãy số
8. Math.min()-> trả về số min trong dãy số

### HTML DOM
1. KN :
- document object modal
- dom theo tiêu chuẩn W3SC
+ DOM có 3 thành phần chính:
- element
- attribute
- text

+ javascript: brower / server
+ Brower : HTML ->DOM -> DOM API (application programming interface)
<DOM k thuộc Javascript, javascrip cung cấp công cụ truy xuất dom>
 - document. <công cụ của javascript để  truy xuất vào mô hình dom>

 ++ < trình duyệt đọc html tạo ra dom lưu vào document(đại diện cho website)>
 ### get element methods
++ get qua node của dom 
+ Element : ID,class,tag name, css selecter,HTML collection
- <getElementById>--> trả về trực tiếp element
```
// ID
var headingNode =document.getElementById('heading')// chỉ lấy dk duy nhất 1 element(nên quy định chỉ đặt 1 tên cho 1 id thâu, trường hợp nhiều id trùng nhau sẽ lấy cái đầu tiên )
console.log(headingNode)
console.log({
          element: headingNode
})
```
- <document.getElementsByClassName()> -> trả về HTML collection(k trả về trực tiếp element): giống array (dùng if, vòng for... không có phương thức như map, find,.. của array)
- <document.getElementsByTagName('h1')>-->
```
// CLASS
var headingNodes=document.getElementsByClassName('heading')
console.log(headingNodes)
// tag
var headingNodes=document.getElementsByTagName('h1')
console.log(headingNodes)
```
+ CSS SELECTOR 
+ <document.querySelector('.')>---> trả về trực tiếp element--> ('.class') &('#id')
```
var headingNode=document.querySelector('.heading')//('.heading:nth-child(2)')---(.'heading:first-child')
console.log(headingNode)
```
+<document.querySelectorAll('.')> -> trả về Nodelist k trả về trực tiếp element): giống array (dùng if, vòng for... không có phương thức như map, find,.. của array)
```
var headingNodes=document.querySelectorAll('.heading')// or document.querySelectorAll('.box-1 li')
console.log(headingNodes)
console.log(headingNodes[2])// list ra 1 phần tử bất kì như array

```
+HTML COLLECTION
-<console.log(document.forms)>--> trả về html colection
```
console.log(document.forms)
console.log(document.forms['form-1'])--> lấy thêm id=form-1 ( tên ni k dùng dk sẽ bị lỗi cấu truc)
console.log(document.forms.testform)--->lấy thêm id=testform 
```
+ Mở rộng
1. cần  boxNode trước
var boxNode = document.querySelector('.box-1')
2. cần li element của box sau
 boxNode.querySelectorAll('li')

 + từ 1 element ta seclect ra ta có thể dựa vào đó tìm ra các element con như tìm từ document

+++ muốn lấy ra element ta thêm [index] phía sau . vd var headingNodes=document.querySelectorAll('.heading')[0]
+ khi dom được tải lên xong ta thêm document.write ('hello')--> thì sẽ ghi đè lên tất cả
##### innerHTML--> thêm được elementnode, attributenode, textnode
+ innerHTML
vd: var node = elementheading.innerHTML='<span class="nodetexxt">TEXT CONTENT</span>'-->set
console.log(elementheading.innerHTML)-->get ra dang chuỗi

+++ trong trình duyệt khi lăn chuột tới đâu tải tới đó --> bản chất là innerHTML
+ outerHTML
```
var node = headingattribute.outerHTML='<span class="nodetexxt">TEXT CONTENT</span>'--> ghi đè lên thẻ h2 (element gốc)
console.log(headingattribute.innerHTML)---> vẫn hiện thị như của element gốc <note>
```
### một số thuộc tính hay dùng của elementnode
- attributes (attributes node) --> là object 
###### nhiều thuộc tính note k hết < khi cần xem lại 114.Node properties/js cơ ban f8>
++ thêm thuộc tính vào element 
<contenteditable="" --> thuộc tính ni có thể chỉnh sửa trực tiếp trên trình duyệt

### attribute node and test node
1. Dom attribute
- thêm attribute vào element trong js khi thực thi , nó không thêm vào mã nguồn html gốc nên khi wiev page code lên k có
+ seter : xét trực tiếp bằng toán tử gán
```
var headingattri= document.querySelector('h1');
 headingattri.title ='heading';
 headingattri.id ='heading';
 headingattri.className='heading';
```
+ thêm bằng thuộc tính- thêm attribute tùy biến ( có thể thêm vào các attribute không hợp lệ đối với element đó)
```
 var headingattribute= document.querySelector('h2');
 headingattribute.setAttribute('href','heading')
```
+ Lấy ra value của attribute < lấy ra được cả value của attribute được thêm vào từ js và html gốc>
```
console.log(headingattribute.getAttribute('class'))
++ khi attribute hợp lệ với element ta có thể đứng từ elementnode chấm tới thuộc tính hợp lệ để lấy value ra
+ vd: console.log(headingattribute.class)
```
2. TEXT NODE
 + thuộc tính innerText ,textContent tồn tại trong elementNode
a. innerText
+ lấy ra textnode -->lấy ra hết nội dung (k quan tâm thẻ con bên trong)
```
var elementheading =document.querySelector('h3')
console.log(elementheading.innerText)
```
+ thay đổi textnode
```
elementheading.innerText='trangto'
// hiển thị khac nhau
elementheading.innerText=` 
 trangto
 
 `  ;
```
--> nội dung ni thay đổi khi mã js ta được thực thi. <nội dung thay đổi khi mã js ni chọc vào dom và thay đổi nội dung textnode>
b. textContent
+ lấy ra textnode
```
console.log(elementheading.textContent)
```
+ thay đổi textnode
```
elementheading.textContent='trangto'
// hiển thị giống nhau
elementheading.innerText=` 
 trangto
 
 `  ;
```
++ geter: lấy ra 
vd :console.log(elementheading.textContent)
++ seter : thay đổi nội dung của một đối tượng
vd: elementheading.textContent='trangto'

+++ khác nhau giữa textContent và innerText
- innerText: lấy ra nội dung text như xuất hiện ở trình duyệt
- textContent : lấy ra nội dung text như thẻ htlm ta trình bày, < bỏ qua lun thuộc tính display:none nó vẫn hiện nội dung ta none đi>
   + trả về cả nội dung css trong thẻ style con của element (chỉ bỏ qa thẻ)

++ kiểm tra là node gì:
console.log(đoituongcankiemtra.nodeType)-->1: elementnode, 2-attributenodenode, 3-textnode
### DOM CSS
(elementnode).style --> list ra nhưng style của element đã CSS
```
// DOM CSS --> chỉ xét dk css inline cho element thâu(css trực tiếp vào thẻ)
var elementbox =document.querySelector('.box-3')
console.log(elementbox)
console.log(elementbox.style)
elementbox.style.width='100px'
elementbox.style.height='100px'
elementbox.style.backgroundColor='red'
console.log(elementbox.style.width)// lấy ra giá trị thuộc tính của css-- không phải lấy ra chiều ngang của đối tượng
```
## classlist property
<thuộc tính của element node - chỉ use khi lấy ra dk 1 element node>
+ (elementnode).classlist  -> kq: domtokenlist : là đối tượng để quản lý class của element
+ Những thuộc tính hay dùng với domtokenlist:
1. add--> thêm class vào element
2.contains--> kiểm tra xem class có nằm trong element đó hay không
3. remove---> xóa bở class khỏi element
4. toggle---> nếu có class trong element khi gọi đến toggle thì nó sẽ xóa đi còn khi không có thì nó lại thêm vào
```
//classlist property
console.log(elementbox.classList)
console.log(elementbox.classList[0])
console.log(elementbox.classList[2])
console.log(elementbox.classList.length)
console.log(elementbox.classList.value)// lấy ra tên class dạng chuỗi
elementbox.classList.add('green','red')
console.log(elementbox.classList.contains('yellow'))
// elementbox.classList.remove('green','red')
// setTimeout(()=>{
//           elementbox.classList.remove('green','red')
// },5000);

// setTimeout(()=>{
//           elementbox.classList.toggle('green')
// },1000);

setInterval(()=>{
          elementbox.classList.toggle('green')
},1000)
// <làm chữ nhấp nháy nè
```
## DOM EVENTS
++ đọc tài liêu dom event in W3SC
- thêm on vào trk các event

1. Attribute envents
```
  <h1 class="heading"  onclick="console.log(Math.random())"> heading1</h1>
   <h3 id="heading"  onmouseover="console.log(Math.random())"> heading4</h3>
          <form action="" id="form-1" onclick="console.log(this)">abc</form>
          <form action="" id="form-2" onclick="console.log(this.innerText)">abc</form>
          <a href="" name="youtube" onmouseout="console.log(Math.random())" >trangdep</a>
          // sự kiện nổi bọt -->onclick vào con thì tác động vào cả cha(....)
```

2. Assign event using the element node // gán events vào use element node
```
var box1 =document.querySelector('.box-1')

// box1.onclick =function(){
//           console.log(box1)
// }
box1.onclick =function(e){
          console.log(e.target)
}// xuất hiện mouseEvent ( thông tin về click)
var boxall =document.querySelectorAll('.box-1')
console.log(boxall)// mảng duyệt mảng
 
for(var i=0; i< boxall.length; ++i){
          boxall[i].onclick= function(e){
                    console.log(e.target);
}
}
```
3. Input/select
--> lấy value của thẻ input[type='text']
+  elementnode.onchange --> lấy ra đk value khi input thay đổi nội dung và con trỏ k còn xuất hiện trong thẻ input(blơ ra ngoài)
```
var inputelement=document.querySelector('input[type=text]')    
console.log(inputelement)
inputelement.onchange =function(e){
          console.log(e.target.value)
}
```

+ slementnode.oninput ---> gõ nội dung đến đâu thì lấy ngay ra được value lúc đó
```
var inputelement=document.querySelector('input[type=text]')    
console.log(inputelement)
inputelement.oninput =function(e){
          console.log(e.target.value)
}
      
// lưu vào biến toàn cục
var valueinput  ;
inputelement.oninput =function(e){
          // console.log(e.target.value)
          valueinput =e.target.value
        
}
```
--> lấy value của thẻ input[type='checkbox']
```
var checkboxelement=document.querySelector('input[type=checkbox]')  
checkboxelement.onchange =function(e){
          console.log(e.target.checked)
}
```
--> lấy value của thẻ input['select']
```
var selectelement=document.querySelector('select')  
selectelement.onchange =function(e){
          console.log(e.target.value)
}
```
4. Key down/ key up


5. PreventDefault--> ngăn chặn hành vi mặc định html
```
var aelement=document.links
// console.log(aelement)
for(var i=0; i<aelement.length;i++){
          aelement[i].onclick=function(e){
                    if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
                              e.preventDefault();
                    };
          }
}
```

6. StopPropagation ---> ngăn chặn hành vi nổi bọt
elementnode.StopPropagation()
7. EventListener
- addEventListener('action' ,'function')
- removeEventListener('action' ,'function')

## JSON
+ Kn: là một định dạng dữ liệu chuỗi
- javascript Object Notation
< mang lại cách truyền tải dữ liệu dơn giản -> bất kì ngôn ngữ nào cũng có thể dùng JSON .
- jSON : giúp thể hiện những dạng dữ liệu: number, boolean, string, array, null, object trong javascript
+ thao tac: encode & decode
-> stringify : -> chuyển từ JS sang Json-> JSON.stringify() --() tất cả thành chuỗi)
-> parse : chuyển từ JSON sang JS--> JSON.parse()
+ note Json : ' (ngăn cách các key bằng "")' , ngoài các kiểu dữ liệu trên chuyển về json thì function k chuyển dk
(BE -> dữ liệu Json -> FE chuyển về js)???

## Promise(sync,async)
+ sync:xử lý đồng bộ-->  chạy từ trên xuống, theo luồng , tuần tự
+ async: xử lý bất đồng bộ-->
- một số ... gây ra không đồng bộ(có thể viết trk chạy sau tùy)
-EX: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
- CALLBACK xử lý những bất đồng bộ ni(???)--> nhưng nó sẽ xảy ra 1 số vấn đề --> cần promise

+++ callback hell : các callback lồng nhau --> promise giải quyết

+ Cách hoạt động promise:
- 1 tạo :new Promise
- 2 tạo :executor
```
// promise co 3 trang thai
//1. pendding
//2. fulfilled
//3. Rejected

var prommise = new Promise(
          //executor
          function(resovel,reject){
                    // code ra logic
                    // goi :resovel if thanh cong;
                    // goi: reject if từ chối
                    // bat buoc pai goi neu k bi memory leak (rò rỉ bộ nhớ)
                    // Fake call API (??)
                    reject(); 

          }
) // Object contructor
prommise
          .then(function(){
                    console.log('successfull')

          })// Thực thi khi promise : resovel
          .catch(function(){
                    console.log('failure')
          })// Thực thi khi promise : reject
          .finally(function(){
                    console.log('done')
          })// thực thì khi 1 trong 2 cái trên thực thi
 ```

### promise sinh ra ES6 để xử lý những thao tác bất đồng bộ ( như callback hell - code rối)
```
// sau 1s xuất 1 1s sau 2 1s sau 3

function sleep(ms){
          return new Promise(function(resovel){
                    setTimeout(resovel,ms)

          })
          
}
sleep(3000)
          .then(function(){
                    console.log(1);
                    return sleep(3000)// then phiá sau phải đợi promise đk return ni giải quyết xong mới tới then tiếp theo
          })
          .then(function(){
                    console.log(2);
                    return sleep(3000)
          })
          .then(function(){
                    console.log(3);
                    return sleep(1000)
          })

```
+++
1. Promise.resolve('') --> mặc định thành công
2. Promise.reject('') -->mặc định fail
3. Promise.all('') -->
ex: khi 2 promise đều cần thực thi có time khác nhau và độc lập vz nhau -> gọp lại để time thực thi min<>
![img](/assets/img/promise.png)


## if_switch


+ switch

![img](/assets/img/Switch.png)

+ toán tử 3 ngôi

![img](/assets/img/toantu3ngoi.png)

### Vòng lặp

+ kn

![img](/assets/img/kn_vong%20l%C4%83p.png)

+ for_in

1. 
![img](/assets/img/l%E1%BA%A5y%20%20key%20trong%20array%201.png)
![img](/assets/img/key2_for.png)
![img](/assets/img/l%C3%A2y_index_array.png)
![img](/assets/img/for5.png)
![img](/assets/img/for_6.png)


## Đệ quy


```
var array=['a','b','c','a','b','c',]      
 // bỏ những phần tử lặp lại trong mảng ->a,b,c

 console.log([...(new Set(array))]);
```
--->>> new Set : chỉ tồn tại 1 elment k lặp lại
<...> --> để bỏ vào mảng
+++
- dùng đệ quy phải :
- xác định được điểm dừng
- logic handle -> tạo ra điểm dừng
vd 1 : countdown
![img](/assets/img/dequy1.png)

+ vd2 :  duyệt mảng
![img](/assets/img/dequy2.png)

+ vd3: tính giai thừa
![img](/assets/img/dequy3.png)

### note
-NaN :đại diện cho 1 số không hợp lê
```
var result =20/AA

console.log(isNaN(result))
-> true;

var result =20/AA
console.log(isNaN(result))
->false
```
+console -> hiện số màu đen là tring, màu xanh là number

+ @@
- private: rieng tư
- argument : đối tượng
- deprecated : không dùng nữa
- sibling:( hiu kiu ae ruot)--> dùng khi đứng từ 1 element muốn lấy element tiếp theo
- drag : liên quan đến việc kéo thả
- scroll: lăng chuột

??? tràn bộ nhớ 
stack??? -> các lỗi khi dùng vòng lặp và đệ quy
// A-> lặp ->CPU
// A-> đệ quy->RAM (Tràn bộ nhớ)
+ lập trình hướng hàm - hay dùng đệ quy(tự xem)

+ xem lai
- khác nhau == & ===;



+ thực hanh
 + jsfiddle.net
 + tham khảo
 + value types and reference types

 + hiểu rõ về DOM
 - element
 - htlm collection
 - node list
 - <trỏ chuột , bôi den trong dom>