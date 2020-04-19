const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

// if an action is dispatched it can be recieved with the action parameter and the payload retrieved
const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('CREATED');
            return state;

        case  'CREATE_ERROR':
            console.log('Error thrown', action.err)
            return state;

        default:
            return state;
    }
};
export default projectReducer;

//Reducers are objects used to manipulate with stores. you dont have to edit the stores directly.