//actions are dispatched with payload to the reducers which in turn edits the state of the store,
//with thunk the action can return a function
//we did all this so we can have a async function to halt the operation or simply to push the dispatch process
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Make Async call to anything, e.g database
        const firestore = getFirestore;
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore().collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project})

        }).catch((err) => {
                dispatch({type: 'CREATE_ERROR', err: err})
            }
        )
    }

}