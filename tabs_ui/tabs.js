const $ =document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const tabs =$$('.tab-item')
const panes=$$('.tab-pane')

const tabActive=$('.tab-item.active')
const paneActive=$('.tab-pane.active')
const line =$('.tabs .line')

requestIdleCallback(function(){
line.style.width=tabActive.offsetWidth +"px"
line.style.left=tabActive.offsetLeft +"px"

})
tabs.forEach((tab,index) => {
     const pane=panes[index]    
//      console.log(tab)
     tab.onclick=function(){
          $('.tab-item.active').classList.remove('active')
          $('.tab-pane.active').classList.remove('active')

               line.style.width=this.offsetWidth+"px"
               line.style.left=this.offsetLeft+"px"

               this.classList.add('active')
               pane.classList.add('active')


     }
})
