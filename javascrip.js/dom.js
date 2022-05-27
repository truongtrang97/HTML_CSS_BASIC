
// ID
var headingNode =document.getElementById('heading')// chỉ lấy dk duy nhất 1 element(nên quy định chỉ đặt 1 tên cho 1 id thâu, trường hợp nhiều id trùng nhau sẽ lấy cái đầu tiên )
console.log(headingNode)
console.log({
          element: headingNode
})
// CLASS
var headingNodes=document.getElementsByClassName('heading')
console.log(headingNodes)
// tag
var headingNodes=document.getElementsByTagName('h1')
console.log(headingNodes)
// css selecter
var headingNode=document.querySelector('.heading:nth-child(2)')
console.log(headingNode)

var headingNodes=document.querySelectorAll('.heading')[0]
console.log(headingNodes)
//console.log(headingNodes[2])// list ra 1 phần tử bất kì như array+
// HTML COLLECTION
 
console.log(document.forms)
console.log(document.forms['form-1'])

console.log(document.anchors)//xem lai

// dom attribute
 var headingattri= document.querySelector('h1');
 headingattri.title ='heading';
 headingattri.id ='heading';
 headingattri.className='heading';
// thêm atribute bằng phương thức
var headingattribute= document.querySelector('h2');
 headingattribute.setAttribute('href','heading')
//  Lấy ra value của attribute 
console.log(headingattribute.getAttribute('class'))
console.log(headingattribute.getAttribute('href'))
// innerNote
var elementheading =document.querySelector('h3')
console.log(elementheading.innerText)
console.log(elementheading.textContent)

//textContent
headingattribute.textContent=` 
 trangto
 
 `  
// innerHTML
var node = elementheading.innerHTML='<span class="nodetexxt">TEXT CONTENT</span>'
console.log(elementheading.innerHTML)
// outerHTML
var node = headingattribute.outerHTML='<span class="nodetexxt">TEXT CONTENT</span>'
console.log(headingattribute.innerHTML)
// DOM CSS
var elementbox =document.querySelector('.box-3')
console.log(elementbox)
console.log(elementbox.style)
elementbox.style.width='100px'
elementbox.style.height='100px'
elementbox.style.backgroundColor='red'
console.log(elementbox.style.width)
//classlist property
// Attribute envents
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
// làm chữ nhấp nháy nè

// Assign event using the element node
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
// input/select
var inputelement=document.querySelector('input[type=text]')  
// console.log(inputelement)
var valueinput  ;
inputelement.oninput =function(e){
          // console.log(e.target.value)
          // biến toàn cục 
          valueinput =e.target.value
        
}
//checkbox
var checkboxelement=document.querySelector('input[type=checkbox]')  
checkboxelement.onchange =function(e){
          console.log(e.target.checked)
}
//select
var selectelement=document.querySelector('select')  
selectelement.onchange =function(e){
          console.log(e.target.value)
}
//PreventDefault
var aelement=document.links
// console.log(aelement)
for(var i=0; i<aelement.length;i++){
          aelement[i].onclick=function(e){
                    if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
                              e.preventDefault();
                    };
          }
}

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
