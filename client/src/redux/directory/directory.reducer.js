const INITIAL_STATE = {
    sections: [
        {
            title: 'Mans',
            imageUrl:
                'https://firebasestorage.googleapis.com/v0/b/crown-db-49fc2.appspot.com/o/mans-min.jpg?alt=media&token=16de17de-e704-4139-8b54-a09e0bf92c22',
            size: 'large',
            id: 4,
            linkUrl: 'shop/mens',
        },
        {
            title: 'Womens ',
            imageUrl:
                'https://firebasestorage.googleapis.com/v0/b/crown-db-49fc2.appspot.com/o/womans-min.jpg?alt=media&token=4c0a6459-95f2-4c78-b77b-eba51f6fb67f',
            size: 'large',
            id: 5,
            linkUrl: 'shop/womens',
        },
    ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer
