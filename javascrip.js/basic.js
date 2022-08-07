// function writeLog(){
//           var mystring='';
//           for( var param of arguments)
//           {
//                     mystring+= `${param} - `
//           }
//           console.log(mystring)
// }
// writeLog('log1','log2', 'log3')

// // return trong ham
// var isconfirm = confirm('hello');
// console.log(isconfirm)

// function add(a,b){
//           alert(a)
//           // return(a+b)
//           return a.toString()+b.toString()
// }
// var result = add(123,345)
// console.log(result)

// // object contructor

// function User(firstname, lastname , avatar) {
//           this.firstname =firstname;
//           this.lastname =lastname;
//           this.avatar=avatar;

// }

// var author = new User('trang','truong','avatar')
// var user = new User ('tèo','tô','avatar')

// console.log(author);
// console.log(user);


// var date= new Date();
// console.log(date);


// function run(a) {
//           // 
//           if(a%3==0){
//               return 1;
//           }
//           else if(a%5==0){
//               return 2;
      
//           }
//           else if(a%15==0){
//            return 3;
//           }
          
//       }
      
      
//       // Kỳ vọng
//       console.log(run(15)) // 1


// // ĐÊH QUY
// var array=['a','b','c','a','b','c',]      
//  // bỏ những phần tử lặp lại trong mảng ->a,b,c

//  console.log([...(new Set(array))]);


//  // array method

//  var courses = [

//      {
//          id:1,
//          name :'javascript',
//          coin :250,
//      },
//      {
//         id:2,
//         name :'PHP',
//         coin :250,
//     },
//     {
//         id:3,
//         name :'Ruby',
//         coin :0,
//     },
//     {
//         id:4,
//         name :'Ruby',
//         coin :0,
//     },
//  ];
// // duyệt mảng
//  courses.forEach(function(course){
//     console.log(course);
//  })

//  courses.forEach(function(course,index){
//     console.log(index,course);
//  })
// // kiểm tra xem kháo học ni có miễn phí hay không

// var isfree = courses. every(function(course,index){
//     console.log(index);
//     return course.coin===0;
// }) 

// console.log(isfree);
// // kiểm tra khóa học ni có học phần nào miễn phí hay không
// var isfree = courses. some(function(course,index){
//     console.log(index);
//     return course.coin===0;
// }) 
// console.log(isfree);
// //kiểm tra xem có đối tượng trong mảng đó không và in ra
// var course = courses. find(function(course,index){
//     console.log(index);
//     return course.name==='Ruby';
// }) 
// console.log(course);
// //  tìm ra được tất cả các đối tượng có trong mảng và in ra tất cả
// var listcourse = courses. filter(function(course,index){
//     console.log(index);
//     return course.name==='Ruby';
// }) 
// console.log(listcourse);

// //thay đôi element in array-> trong 1 arry mới
//  var newarray=courses.map(function addnewarr(course,index){
//      console.log(index);
//      return {
//          id: `hello ${course.id}`,
//          name: ` khoa hoc ${ course.name}`,
//          coin: `${course.coin}`,//course.coin
//          cointext: `ahihi`,
//          index: index,
//          originArray: courses,

//      }
      

//  })
//  console.log(newarray);

//  // đưa tất cả các name vào 1 arry mới

// var newarray=courses.map(function addnewarr(course,index){
//      console.log(index);
//      return (course.name)
//  })
//  console.log(newarray);

//  // reduce

//  // biến lưu trũ và thực hiện việc lưu trữ
//   var i=0;
//   function coinhandler(accumulator,currentvalue, currentIndex, originArray){
//       i++;
//     //   console.log(i);
//     //   console.table({
//     //       'khoi tao':i,
//     //       'biên tich tru': accumulator

//     //   })
//     //   console.log(curentvalue); // tất cả những gtri hiện tại của array theo thứ tự course
//     //   return 100; //return cái gì thì tích trữ cái đó
//     return  accumulator + currentvalue.coin
  
//   }

//   var totalcoin = courses.reduce(coinhandler,0);// 0 là giá trị khởi tạo được gán cho lần thực hiện đầu tiên
//  console.log(totalcoin)

// //  reduce ngan gon

//  var totalcoin = courses.reduce(function (accumulator, currentvalue){
//     return  accumulator + currentvalue.coin;
//  }, 0);
//  console.log(totalcoin)

//  var totalcoin = courses.reduce((a,b)=> a+b.coin, 0);
//  console.log(totalcoin)
// // không cần đưa giá trị khởi tạo
//  var numbers=[100,200,300,400];
//  var totalnumber=numbers.reduce(function(total,number){
//      return total+number;
//  })
// //Flat-làm phẳng mảng từ Depth array(Mảng sâu)
// var Deptharray =[12,4,5,[3,4],5,[6,7,8],7,90]

// var flatnewarr= Deptharray.reduce(function(flatoutput,depthitem){
//     return flatoutput.concat(depthitem)
// },[])

// console.log(flatnewarr)

// // lấy ra các khóa học vào đưa vap 1 mảng mới

// var topics=[
//     {
//         topic: 'frontend',
//         courses:[
//             {
//                 id:1,
//                 name :'javascript',
//                 coin :250,
//             },
//             {
//                id:2,
//                name :'PHP',
//                coin :250,
//            },
//         ]
//     },
//     {
//         topic: 'backend',
//         courses:[
//             {
//                 id:1,
//                 name :'python',
//                 coin :250,
//             },
//             {
//                id:2,
//                name :'ruby',
//                coin :250,
//            },
//         ]
//     },

// ];

// var newcourses = topics.reduce(function(course,topic){
//     return course.concat(topic.courses);
// },[])
// console.log(newcourses)
// // đưa qua html 

//  var html =newcourses.map(function(coursess){
//      return `
//      <div> 
//      <h2>${coursess.name}</h2>
//      <p>id :${coursess.id}</p>
//      </div>`
//  })
// //  console.log(html)
//  console.log(html.join(''))
//  console.log(Number.prototype.includes)

//  //
//  // định nghĩa thêm 1 function map2 cho array
//  var courses =[
//     'javascript',
//     'php',
//     'ruby'

//  ]
//  Array.prototype.map2=function(callback){
//      var arraylength =this.length;
//      var output=[];
//      for(var i=0; i< arraylength;i++){
//         var result= callback(this[i],i)
//         output.push(result)
        
//      }
//      return output;// note return
//  }
//  var htmls= courses.map2(function(course){
//  return `<h2>${course}</h2>`
//  }
//  )
//  console.log(htmls)
//  console.log(htmls.join(' '))

//  // forEach2
//   Array.prototype.forEach2=function(callback){
 
//       for(var index in this)
//       {
//           if(this.hasOwnProperty(index)){
//               callback(index, this[index],this)
//           }
//       }

//   }
//   courses.forEach2(function(index,course,array){
//       console.log(index,course,array)
//   })
//   // filter2
//   var courses=[

//       {
//         id:1,
//         name :'javascript',
//         coin :250,
//     },
//     {
//        id:2,
//        name :'PHP',
//        coin :400,
//     },
//   ]
//   Array.prototype.filter2=function(callback){
//       var output=[];
//       for(var index in this){
//           if(this.hasOwnProperty(index))
//           {
//               var result= callback(this[index],index,this)
//           }
//           if(result){
//             output.push(this[index])
//           }
//       }
      
//       return output
//   }
//   var newfilter= courses.filter2(function(course){
//       return course.coin>300
//   })
//   console.log(newfilter)
 
var arr = [['name', 'Sơn Đặng'], ['age', 18]]
function arrToObj(array) {
    var newObject = array.reduce(function(start, current) {
//         return start = Object.assign(start, {[current[0]]: current[1]});
return console.log([current[0]])
    }, {})
//     return newObject
}
// Expected results
console.log(arrToObj(arr)) // Output: { name: 'Sơn Đặng', age: 18 }
