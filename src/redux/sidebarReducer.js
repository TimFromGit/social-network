debugger;
let initialState = {
    friends: [
        {id: 1, name: "Vasya", img: "https://picsum.photos/50"},
        {id: 2, name: "Alisa", img: "https://picsum.photos/51"},
        {id: 3, name: "Igor", img: "https://picsum.photos/52"},
        {id: 4, name: "Petya", img: "https://picsum.photos/53"},
        {id: 5, name: "Stepa", img: "https://picsum.photos/54"},
        {id: 6, name: "Marat", img: "https://picsum.photos/55"},
        {id: 7, name: "Denis", img: "https://picsum.photos/56"},
        {id: 8, name: "Kuzya", img: "https://picsum.photos/57"},
        {id: 9, name: "Svets", img: "https://picsum.photos/58"},
        {id: 10, name: "Marina", img: "https://picsum.photos/59"},
        {id: 11, name: "Kolya", img: "https://picsum.photos/60"},
        {id: 12, name: "Dima", img: "https://picsum.photos/61"},
        {id: 13, name: "Danila", img: "https://picsum.photos/62"},

    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;