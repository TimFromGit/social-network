import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "It's my life", likesCount: 12, img: "https://picsum.photos/200"},
        {id: 2, message: "It's now or never", likesCount: 33, img: "https://picsum.photos/300"},
        {
            id: 3, message: "This ain",
            likesCount: 2,
            img: "https://picsum.photos/150"
        }
    ]
};

it('length of post should be incremented', () => {
    //1. start test data
    let action = addPostActionCreator("Text for test")

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    //1. start test data
    let action = addPostActionCreator("Text for test")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[3].message).toBe("Text for test");
});

it('after deleting length of messages should be decrement', () => {
    //1. start test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
    //1. start test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});