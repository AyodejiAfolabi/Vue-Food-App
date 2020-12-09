const state={
    num:1,
    
    name:'Joel'
} ;
const getters={
    // getNum(){
    //     return state.num;
    // },
    getNum:()=>state.num,
    getName(){
        return state.name
    }
}
const actions={
increment({commit},val){
    commit('increaseByOne',val);
},
decrement({commit},val){
    commit('decreaseBySix',val)
}
};
const mutations={
    
increaseByOne(state,val){
//     let {num}=state
//    return num+1;
state.num=state.num+val
console.log(val)
},
decreaseBySix(state,val){
    console.log(val)
state.num=state.num+val
}

};

const allObj ={state,getters,actions,mutations}
export default allObj