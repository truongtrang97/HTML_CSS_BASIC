## var/ let /const
1. scope <pham vi truy cập>
- Trong code block : {}, khối if, for
+ var : gtri đk định nghĩa ở trong block truy cập được cả trong và ngoài code block;
+ let, const:  gtri đk định nghĩa ở trong block chỉ truy cập được ở trong , ngoài undefined
2. Hosting:
- var dk hỗ trợ còn let, const không đk
ex: a=1;
var a; ---> biến a có gtri 1;( hosting đưa var a, lên đầu trk a=1)
nếu là let a; or const a; ---> lỗi

3. assignment( gán gtri)
+ var, let dùng toán tử gán nhiều lân dk , còn const không;
var(let) a=1;
a=100;
--> gtri lấy 100
+ const : không được dùng toán tử gán lần 2 cho chính nó, còn thuộc tính của nó thì có thể gán nhiều lần dk
ex: const a={
          name:'php'
}
a.name ='123' -> oki
+ note :
- dùng var khi code thuần : không qa trình thông dịch , thư viện khác
- nếu dùng thư viên baleb thì chỉ được dùng const và let thui< định nghia và không gán : const , còn lại dùng let>
## template literals
- var course ='PHP'
- var deci = 'khoa hoc là :' + course;
+ dùng template string:
- var deci = `khoa hoc là :${course}`;// trình bày ntn hiện thị như vậy < dấu cách , xuống dòng >
note: muốn thêm những kí tự đặc biệt ta thêm / trươc kí tự đó
## Arrow function
var a =(a,b)=>(a+b)
var a = a => console.log()
var a =(a,b)=>({a:a,b:b,})
note: arrow function không dùng this dk(context)
   - arrow function không viết dk constructor function
## classes
function Course(name, price){
          this.name=name;
          this.price=price;
          this.getname = function(){
                    return this.name;

          }
}
===> Dùng class
class Course {
          constructor(name, price){
                   this.name=name;
                   this.price=price; 
          }
          getname(){
                return this.name;    
          }
}
## default parameter value(gia trị tham số mặc đinh)
ex:
![img](/assets/img/Screenshot%20from%202022-05-25%2016-24-51.png)
## Enhanced object literal
++ ---> viết gọn
![img](/assets/img/anhancedobjcetliterals.png)
![img](/assets/img/enhanced2.png
![img](/assets/img/enhance3.png)

## Destructuring (phân rã)
+ array
- lấy ra phần tử của mảng & lấy phần tử còn lại bằng rest parameter
![img](/assets/img/destructuring1.png)
---> có thể xóa đi 1 ptu var(name,...newArray)
+ object
- xóa đi 1 phần tử của object
![img](/assets/img/delete1valuearray1.png)
- th có object con nằm trong object cha
var(name, children: {name})--> lúc này có 2 name trùng nhau ta đặt tên cho name trk để sau use k trùng
![img](/assets/img/destructuring3.png)
- TH khi ta cần lấy 1 key k có trong object(vd: class) :
var(class='abc') = course , khi lấy ra key class có gtri abc
- toán tử rest---> thành mảng
![img](/assets/img/toan%20tu%20rest.png)
### spread (toán tử giải)
- nối array vz nhau
ex: var array1=['123','trang'];
    var array2=['456','ahaha'];
    var array=[ ...array1,...array2]
- dùng nối object
ex:
 var object ={
           ...object1,
           ...object2
 }
+ hợp nhất các object lại với nhau (2 key trùng nhau sẽ lấy key được định nghĩa sau)
  <hay ứng dụng trong api config>
+ rest use khi kết hợp với destructuring trong việc định nghĩa ra tham số
+ spread : gọi đến hàm chuyển đối số ...(?) & giải cho1 array or object khác
### Tagged template literal
```
/ function hightlight(...rest)//rest lấy ra all tham số truyền vào hightlight
// {
//           console.log(rest)
// }


//  dùng destructuring
function hightlight([first,...strings],...value){
// dùng reduce với value với initial là first
return value.reduce((acc,curr)=> [...acc,`<span>${curr}</span>`,strings.shift()],[first]

).join(' ')

}
var brand='F8';
var course ='Javascript'
var html= hightlight`hoc lap trinh ${course} tai ${brand} !`;
console.log(html)
```
## fetch


### note
+ tabnine : cài thêm vào vscode trình duyet thông minh
+ parameter: tham số
+ config : cấu hình
+ ${...}--.> biến nội suy
+ render: kết xuất
+ HANDLE : xử lý


+ khi -->event
+ khi xets 1 giá trị nào đó --> property
+ khi thực hiện hành động --> method

+ Một số property note
- Lấy kích thước : offsetWidth or offsetHeight 
- duration (lấy toàn bộ time của audio tính bằng giây)
- currentTime(Đặt hoặc trả về vị trí phát lại hiện tại trong âm thanh / video (tính bằng giây))

+ xem lại
- defineproperty
- animate 

## bug
+ Failed to load resource: the server responded with a status of 523 ()
+ music_player.js:146 Uncaught (in promise) DOMException: The element has no supported sources.
playbtn.onclick @ music_player.js:146
+ GET http://127.0.0.1:5500/assets/img/song_jpeg 404 (Not Found)
+ viết sai 

+ 1 so chua hoan thanh music player




