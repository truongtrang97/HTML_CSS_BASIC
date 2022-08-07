const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const app = (()=>{
          const cars=['BMB']
          const root=$('#root')
          const summit =$('#summit')
          const input=$('#input')
          // console.log(summit)
          return {
                    add(car){
                              cars.push(car)
                    },
                    delete(index){
                              cars.splice(index,1)
                    },
                    render(){
                              const html=cars.map((car,index)=>`<li>
                              ${car}
                              <span class="delete" data-index=${index}>&times</span>     
                              </li>`).join('')
                              root.innerHTML=html

                    },
                    handledelete(e){
                      const deletebtn=e.target.closest('.delete')
                    if(deletebtn){
                              const index=deletebtn.dataset.index
                              this.delete(index)// cho ni this la (root) neu k dung bind o duoi
                              this.render()
                    }
                    },
                    init(){
                              this.add('honda')
                               this.render()
                              // handle dom event
                              summit.onclick=()=>{
                               const car=input.value
                               this.add(car)
                               this.render()
                               input.value=null// de xoa
                               input.focus()//chua hiu lam

                              }
                    root.onclick = this.handledelete.bind(this)// this ni la app
                    this.render()
                    }



          }
})();
app.init()
