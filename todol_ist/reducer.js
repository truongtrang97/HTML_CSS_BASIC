const init={
          cars:['BMV'],
}
export default function reducer(state = init,action,agr){
          console.log(action,agr)
          switch (action){
                    case "add":{
                              const newcar=agr
                              return{
                                        ...state,
                                        cars:[...state.cars,newcar]
                              }
                    }
          
          default:
                    return state

          }
}