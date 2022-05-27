// function hightlight(...rest)//rest lấy ra all tham số truyền vào hightlight
// {
//           console.log(rest)
// }


//  dùng destructuring
// function hightlight([first,...strings],...value){
// // dùng reduce với value với initial là first
// return value.reduce((acc,curr)=> [...acc,`<span>${curr}</span>`,strings.shift()],[first]

// ).join(' ')

// }
// var brand='F8';
// var course ='Javascript'
// var html= hightlight`hoc lap trinh ${course} tai ${brand} !`;
// console.log(html)


//  fetch API
var postAPI ='https://jsonplaceholder.typicode.com/posts'
fetch(postAPI)// tra ve 1 response
          .then(function(response){
                    return response.json() // tra ve 1 promise
                    // json.parse lun cai response tra ve --> Javascript
          })
          .then (function(posts){
                    // console.log(post)
                    var html = posts.map(function(post){
                              return `<li>
                              <h2>${post.title}</h2>
                              <p>${post.body}</p>
                              </li>`

                    })
                    var htmls= html.join('')
                    document.querySelector('.post-block').innerHTML=htmls
          })