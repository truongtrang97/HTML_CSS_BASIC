// vd1
// const teacher={

//           firstname:'trang',
//           lastname:'truong'
// };
// const me={
//           firstname:'son',
//           lastname:'dang',
//           showfullname(){
//                     console.log(this)
//                     console.log(`${this.firstname} ${this.lastname}`)
//           }
// }
// // me.showfullname()
// // me.showfullname.call()//this ở đây không phải là me mà window
// me.showfullname.call(teacher)//--> ni là kĩ thuật mượn hàm
// vd2 : vẫn có this trong strict mode nếu ta bind
// 'use strict'
//  this.firstname='trang',
//  this.lastname='truong'
//   function showfullname(){
//                               console.log(this)
//                               console.log(`${this.firstname} ${this.lastname}`)
//                     }
//                     // showfullname()//error
//                     showfullname.call(this)
// vd3: tính kế thừa 
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
