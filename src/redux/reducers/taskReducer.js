const initialState = {
    authtoken: [],
    notesData: [],
    searchData: [],
    deletedData: [],
    imagesData: [],
    pdfData: [],
    UserData: [],
    UserAllInformation: []
}


const reducer = (state = initialState, action) => {

    if (action.type === "authtoken") {
        return { ...state, authtoken: action.payload }
    }
    else if (action.type === "alltheData") {
        // debugger
        return { ...state, notesData: action.payload }
    }
    else if (action.type === "deleteddata") {
        const sample = state.notesData.filter((data, index) => data._id !== action.payload.note._id)
        console.log(sample);
        return { ...state, notesData: sample }
    }
    else {
        return state
    }

}

export default reducer