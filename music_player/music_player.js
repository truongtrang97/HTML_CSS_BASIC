const $=document.querySelector.bind(document)        
const $$=document.querySelectorAll.bind(document)  
    const heading=$('header h2')
    const cdthumb=$('.cd-thumb')
    const audio=$('#audio')
    const playbtn=$('.btn-toggle-play')
    const player =$('.player')
    const progress=$('#progress')
    const btnprev =$('.btn-prev')
    const btnnext=$('.btn-next')
    const btnrandom=$('.btn-random')
    const btnrepeat =$('.btn-repeat')
    const playlist =$('.playlist')
// 8.activesong
// 9. scroll active song into view
// 10.
   
const app={
          currentIndex:0,
          isPlaying:false,
          israndom:false,
          isrepeat:false,
          songs:[

                    
                            {
                              name: "Nơi ấy con tìm về",
                              singer: "Hồ Quang Hiếu",
                              path: "/assets/img/NoiAyConTimVe-HoQuangHieu-2961670.mp3",
                              image:
                              "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
                            },

                            {
                              name: "Monster",
                              singer: "Raftaar x Salim Merchant x Karma",
                              path: "/assets/img/MonstersAlbumVersionEdited-TimefliesKatieSky-6124468.mp3",
                              image:
                                "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
                            },
                            {
                              name: "YesterdayOnceMore",
                              singer: "Raftaar x Brobha V",
                              path:
                                "/assets/img/YesterdayOnceMore-Carpenters_3pmfk.mp3",
                              image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
                            },
                            {
                              name: "SayYouWill",
                              singer: "Raftaar x Nawazuddin Siddiqui",
                              path: "/assets/img/SayYouWill-TokyoSquare-419501.mp3",
                              image:
                                "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
                            },
                            {
                              name: "LemonTree",
                              singer: "Raftaar",
                              path: "/assets/img/LemonTree-FoolsGarden_45ena.mp3",
                              image:
                                "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
                            },
                            {
                              name: "AsLongAsYouLoveMe",
                              singer: "Raftaar",
                              path: "/assets/img/AsLongAsYouLoveMe-BackstreetBoys-2906648.mp3",
                              image:
                                "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
                            },
                           
          ],  
  defineProperties: function(){

      Object.defineProperty(this, 'currentSong', {
      get: function(){
      return this.songs[this.currentIndex]
        }
      })
  },
  //Render song   (doc api render ra danh sachs bai hat hien thi phia duoi)   
  //render ra view
    render: function(){
  var htmls= this.songs.map((song,index) =>{
             return `<div class="song ${index===this.currentIndex ? 'active' : ''}" data-index=${index}>
             <div class="thumb"
                 style="background-image: url('${song.image}')">
             </div>
             <div class="body">
                 <h3 class="title">${song.name}</h3>
                 <p class="author">${song.singer}</p>
             </div>
             <div class="option">
                 <i class="fas fa-ellipsis-h"></i>
             </div>
         </div>`
          

   });
   
    $('.playlist').innerHTML= htmls.join(' ');//NOTE 
  },
  handleEvent: function(){
          const _this=this
          const cd=$('.cd')
          const cdWidth = cd.offsetWidth
          // console.log(cdWidth)


  // xử lý phóng to thu nhỏ CD        
  document.onscroll= function(){
          const scrollTop =  document.documentElement.scrollTop || window.scrollY
          //  console.log(window.scrollY)// một số trình duyệt không chạy được cái ni nên dùng cái ni  document.documentElement.scrollTop
           const newWidthscroll = cdWidth - scrollTop;
           cd.style.width= newWidthscroll>0?newWidthscroll+'px':0;
           cd.style.opacity=newWidthscroll/cdWidth
          
 }

// xử lý quay CD(cd rotate)
const cdthumbAnimate = cdthumb.animate([
  {transform:'rotate(360deg)'}
],{
  duration:10000,//10 seconds
  iterations:Infinity
}
)
cdthumbAnimate.pause()

 // Xử lý click play
//  không dùng this ở đây (this chỉ app á)
 playbtn.onclick= function(){
   if(_this.isPlaying){
    //  _this.isPlaying=false
     audio.pause()
    //  player.classList.remove('playing')
   }
   else{
    // _this.isPlaying=true
    audio.play()
    // player.classList.add('playing')
   }
  //  dung event
   audio.onpause=function(){
    _this.isPlaying=false
    player.classList.remove('playing')
    cdthumbAnimate.pause()
   }
   audio.onplay=function(){
    _this.isPlaying=true
    player.classList.add('playing')
    cdthumbAnimate.play()

   }
  //  xử lý khi tua song
  progress.onchange=function(e){
 const currentseek= (audio.duration/100)*e.target.value
//  console.log(currentseek)
//  console.log(audio.duration)
 audio.currentTime=currentseek


  }
  
}
// nextbtn
btnnext.onclick=function(){
  if(_this.btnrandom){
    _this.randomsong()
  }
  else{

    _this.nextsong()
  }
  audio.play()
  _this.render()
  _this.scrollToActiveSong()  
}
// prevbtn
btnprev.onclick=function(){
  if(_this.btnrandom){
    _this.randomsong()
  }
  else{

    _this.prevsong()
  }
  
  audio.play()
  _this.render()
  _this.scrollToActiveSong()
}
// xử lý next song khi audio ended 
audio.onended=function(){
  if(_this.isrepeat)
  {
    audio.play()
  }
  else{

    btnnext.click()
  }
}
// repeat
btnrepeat.onclick=function(e){
_this.isrepeat=!_this.isrepeat
btnrepeat.classList.toggle('active',_this.isrepeat)
}

// //randombtn()-> bật tắt randomsong
// btnrandom.onclick=function(e){
// // e.target.classList.add('active')// bam trung icon bi loi
// btnrandom.classList.add('active')// bam trung icon bi loi
btnrandom.onclick=function(e){
_this.israndom=!_this.israndom
btnrandom.classList.toggle('active',_this.israndom)
_this.randomsong()
audio.play()
}
playlist.onclick=function(e){
  const elementnode=e.target.closest('.song:not(.active)')
if((elementnode)||(!e.target.closest('.option'))){
  // xu ly khi click vao song
  if(elementnode){
  // console.log(elementnode.getAttribute('data-index'))// co data- (dung dataset.)
//  console.log(elementnode.dataset.index)
_this.currentIndex=Number(elementnode.dataset.index)
_this.loadCurrentSong()
_this.render()
audio.play()
  }
  //  xu ly khi click vao option
  if(!e.target.closest('.option')){

  }
}
}

},
//btn-next
nextsong: function(){
 this.currentIndex++
 if(this.currentIndex>=this.songs.length){
   this.currentIndex=0
 }

this.loadCurrentSong()
},
prevsong: function(){
this.currentIndex--
if(this.currentIndex<0){
  this.currentIndex=this.songs.length-1
}
this.loadCurrentSong()

},
randomsong: function(){
let newrandom
do{
  newrandom=Math.floor(Math.random()*this.songs.length)
  
}
while(newrandom===this.currentIndex)
this.currentIndex=newrandom
this.loadCurrentSong()
},
  scrollToActiveSong: function(){
   setTimeout(()=>{
     $('.song.active').scrollIntoView({
      behavior: 'smooth',
      block: 'center',//nearest: hien ()
     })   
   },200)
  },

  loadCurrentSong:function(){
    
    heading.textContent=this.currentSong.name
    cdthumb.style.backgroundImage = `url(${this.currentSong.image})`
    audio.src=this.currentSong.path
    
  },
  getcurrentSong: function(){
    return this.songs[this.currentIndex]

  },
  //1 tao start chay
  start: function(){
    // định nghĩa các thuộc tính của object
  this.defineProperties()
  // console.log(this.getcurrentSong())// ra bai hat dau tien
    // lắng nghe xử lý các sự kiện(Dom event)
   this.handleEvent()    
   // tải thông tin bài hát đầu tiên khi chạy ứng dụng
   this.loadCurrentSong()

   //render playlist     
   this.render()
 // moi thu duoc chay o day
  },
    
}    
app.start()//code bat dau chay
//+  play/pause/seek
// khi tuong tac 1 phuong thức với element thì phải get element trk

