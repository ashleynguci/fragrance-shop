const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: "bestsellers",
            imageUrl: require("../../image/bestsellers.jpg"),
            linkUrl: "shop/bestsellers"
        },
        {
            id: 2,
            title: "luxury",
            imageUrl: require("../../image/luxury.jpg"),
            linkUrl: "shop/luxury"
        },
        {
            id: 3,
            title: "budget",
            imageUrl: require("../../image/budget.jpg"),
            linkUrl: "shop/budget"
        },
        {
            id: 4,
            title: "womens",
            imageUrl: require("../../image/womens.jpg"),
            size: "large",
            linkUrl: "shop/womens"
        },
        {
            id: 5,
            title: "mens",
            imageUrl: require("../../image/mens.jpg"),
            size: "large",
            linkUrl: "shop/mens"
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;