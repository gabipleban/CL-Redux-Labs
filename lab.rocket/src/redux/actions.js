  
// Tutaj zaimplementuj akcje
export const START_ROCKET = "START_ROCKET"
export const COUNTER =  "COUNTER"


export const counter = (current) => ({
    type: COUNTER,
    payload: current - 1
})

export const start = () => ({
    type: START_ROCKET,

})

export const deploy = () => (dispatch, getState) =>{
    const interval = setInterval(()=>{
        const curState= getState();
        if(curState.counter === 0){
            clearInterval(interval);
            dispatch(start())
        }else {
            dispatch(counter(curState.counter))
        }
    },1000)
}
