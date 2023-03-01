let initial = {
    RouterBtns: [
        { id: 1, name: "Главная", url: '/Main', flag:true },
        { id: 2, name: "Проекты", url: '/Projects', flag:true },
        { id: 3, name: "О Платформе", url: '/Platform', flag:false }
    ]
}

let MainReducer = (state = initial, action) => {
    if (action.type === 'SUBSCR') {
        debugger
        let stateDOM = {...state}
        stateDOM.RouterBtns = {...state.RouterBtns}
        if(true){
            console.log('aaa')
        }
        return stateDOM;
    }
    return state;
}
export default MainReducer;