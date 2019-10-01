const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Timur", img: "https://picsum.photos/100"},
        {id: 2, name: "Sergey", img: "https://picsum.photos/50"},
        {id: 3, name: "Inokentii", img: "https://picsum.photos/70"},
        {id: 4, name: "Viktor", img: "https://picsum.photos/80"},
        {id: 5, name: "Valera", img: "https://picsum.photos/90"},
        {id: 6, name: "Sveta", img: "https://picsum.photos/100"},
        {id: 7, name: "Vyacheslav", img: "https://picsum.photos/60"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Bla bla bla"},
        {id: 4, message: "Yeahaaaaa"},
        {id: 5, message: "Yeahaaaaa"},
        {id: 6, message: "Yeahaaaaa"},
        {id: 7, message: "Yeahaaaaa"}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length++, message: body}]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;