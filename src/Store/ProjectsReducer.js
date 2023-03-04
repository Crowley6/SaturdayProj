let initial = {
    Projects: [
        { id: 1, img: '1.jpg', h1: 'Загаловок1', name: "Информация1" },
        { id: 2, img: '2.jpg', h1: 'Загаловок2', name: "Информация2" },
        { id: 3, img: '3.jpg', h1: 'Загаловок3', name: "Информация3" },
    ]
}

let ProjectsReducer = (state = initial, action) => {
    if (action.type === 'SUBSCR') {
        debugger
        let stateDOM = { ...state }
        stateDOM.RouterBtns = { ...state.RouterBtns }
        if (true) {
            console.log('aaa')
        }
        return stateDOM;
    }
    return state;
}
export default ProjectsReducer;