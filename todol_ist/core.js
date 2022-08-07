export default function html([first,...strings],...value){
          return value.reduce(
                    (acc,cur)=> acc.concat(cur,strings.shift()),
                    [first]
          )
          .filter(x=>x && x!==true||x===0)
          .join(' ')

}
export function Creatstore(reducer){
          let state = reducer()// dữ liệu trong store gọi là trạng thái
          const roots= new Map()// map object ni có tính chất đặc biệt có thể lặp qua nó, đặt key bằng bất kì dữ liệu nào, bình thường object chỉ đặt được dạng chuỗi mà thôi
          function render(){
                    for(const [root,component] of roots){
                              const output=component()//return html 
                              root.innerHTML= output
          
                    }
          }
          return{// return method lv vz CREATSTORE
            //attach nhận view trả ra 'root' trong html
                    attach(component, root){//dung enhanced object viết gọn
                              roots.set(root,component)//key : root, value : component
                            render()//root có dữ liệu sau khi map xong render lại ra view
                    },
                    // kết nối từ store tới view-. view có nhiều màn hình nên nó cần seclector dữ liêu cân ra view
                    connect(seclector=state=>state)//state ở đây là dữ liệu mặc định , khi cần duữ liệu khác thì truyền đối số vào , nếu không truyền nó return ra state
                    {
                      return component=>(props,...agr)=>// state, pops, agr -> object
                      component(Object.assign({},props,seclector(state),...agr))
                    },
                    dispatch(action,...agr){
                      state=reducer(state,action,...agr)
                      render()
                    }
                  
          }
}