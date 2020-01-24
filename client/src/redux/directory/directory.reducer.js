const INITIAL_STATE = {
    sections: [
        {
            title: 'Slatka Zimnica',
            imageUrl:
                'https://images.bonnier.cloud/files/bob/production/2018/05/29141801/gode-rad-om-syltning-rJ6e-TKz5SQkJpLfOcvUuw.jpg?auto=compress&fm=pjpg&max-w=2160&ixlib=js-1.4.1',
            size: 'large',
            id: 4,
            linkUrl: 'shop/slatka%20zimnica',
        },
        {
            title: 'Slana Zimnica',
            imageUrl:
                'https://slika.nezavisne.rs/2017/09/750x450/20170908183106_442307.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/slana%20zimnica',
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
