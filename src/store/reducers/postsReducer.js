const initialData = [
    {
        id: '1',
        title: 'Sample post title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dicta ' +
            'eligendi enim ex hic iste minima modi quia quidem quod repellat reprehenderit rerum tempora tenetur, ' +
            'ullam voluptas! Expedita, magnam, non. A accusamus adipisci aliquid animi aspernatur assumenda atque consequatur culpa debitis distinctio doloribus earum eligendi eveniet ex ipsum iste iure laboriosam laborum molestias natus nesciunt odit officiis quas quasi, quis quod rerum sed tenetur veniam vero. Aliquid consequuntur doloremque hic, itaque omnis sint. Alias doloribus, quod. Aspernatur beatae consectetur, cum earum excepturi fuga ipsum, iure minima minus obcaecati pariatur ' +
            'perspiciatis possimus quaerat quam qui quibusdam tempora vero voluptate voluptatem.',
        img_url: '1.jpg',
        categories: ['travel']
    },
    {
        id: '2',
        title: 'Sample post title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dicta ' +
            'eligendi enim ex hic iste minima modi quia quidem quod repellat reprehenderit rerum tempora tenetur, ' +
            'ullam voluptas! Expedita, magnam, non. A accusamus adipisci aliquid animi aspernatur assumenda atque consequatur culpa debitis distinctio doloribus earum eligendi eveniet ex ipsum iste iure laboriosam laborum molestias natus nesciunt odit officiis quas quasi, quis quod rerum sed tenetur veniam vero. Aliquid consequuntur doloremque hic, itaque omnis sint. Alias doloribus, quod. Aspernatur beatae consectetur, cum earum excepturi fuga ipsum, iure minima minus obcaecati pariatur ' +
            'perspiciatis possimus quaerat quam qui quibusdam tempora vero voluptate voluptatem.',
        img_url: '2.jpg',
        categories: ['blog']
    },
    {
        id: '3',
        title: 'Sample post title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dicta ' +
            'eligendi enim ex hic iste minima modi quia quidem quod repellat reprehenderit rerum tempora tenetur, ' +
            'ullam voluptas! Expedita, magnam, non. A accusamus adipisci aliquid animi aspernatur assumenda atque consequatur culpa debitis distinctio doloribus earum eligendi eveniet ex ipsum iste iure laboriosam laborum molestias natus nesciunt odit officiis quas quasi, quis quod rerum sed tenetur veniam vero. Aliquid consequuntur doloremque hic, itaque omnis sint. Alias doloribus, quod. Aspernatur beatae consectetur, cum earum excepturi fuga ipsum, iure minima minus obcaecati pariatur ' +
            'perspiciatis possimus quaerat quam qui quibusdam tempora vero voluptate voluptatem.',
        img_url: '3.jpg',
        categories: ['journey']
    },
];

const postReducers = (state = initialData, action) => {
    switch (action.type)
    {
        case 'ADD_POST':
            return [...state, action.post]
            break;

        case 'UPDATE_POST':
            return state.map(post =>
                post.id === action.id ? (post = action.post) : post)
            break;

        case 'DELETE_POST':
            return state.filter(post =>
                post.id !== action.id)


        default:
            return state;
    }
}

export default postReducers;