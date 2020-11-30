const activities = [
    {
        // POST
        id: 1,
        type: 'post',
        caption: 'Voluptatum, quos ratione expedita tempore dolor magnam architecto culpa vitae. Tempore inventore totam voluptatibus asperiores, earum deserunt ullam ducimus! Labore molestias porro deleniti quas alias esse totam, voluptatem distinctio fugit cupiditate. Nesciunt!', 
        date: '2020-03-02T15:34:28',
        likeCount: 3,
        commentCount: 2,
        comments: [
            {
                id: 32,
                userId: 2,
                username: 'Pensuaco',
                profilePic: '',
                comment: 'lol what is this',
                date: '2020-03-07T03:22:59'
            }
        ],
        likes: [
            {
                id: 102,
                userId: 2,
                username: 'Pensuaco',
                profilePic: '',
                date: '2020-03-03T12:04:32'
            },
            {
                id: 98,
                userId: 3,
                username: 'K O R A R U',
                profilePic: '',
                date: '2020-03-02T15:34:28'
            },
            {
                id: 107,
                userId: 4,
                username: 'Hectorino',
                profilePic: '',
                date: '2020-03-04T08:51:12'
            }
        ],

        // IMAGE
        thumbnail: 'https://picsum.photos/300/300',
        alt: 'fulano-dog',
        
        // USER
        username: 'Fulanito',
        profilePic: '',
        userId: 1,
    },
    {
        // ACTION
        id: 5, // commentId or likeId
        type: 'notification',
        date: '2020-06-24T00:20:35',
        action: 'like', // like or comment

        // USER
        postId: 1,
        userId: 1,
        username: 'K O R A R U',
        profilePic: '',
    },
    {
        // ACTION
        id: 6, // commentId or likeId
        type: 'notification',
        date: '2020-06-24T00:20:35',
        action: 'comment', // like or comment

        // USER
        postId: 1,
        userId: 1,
        username: 'K O R A R U',
        profilePic: '',
    },
    {
        // POST
        id: 2,
        type: 'post',
        caption: 'Explicabo qui aliquam perspiciatis ea similique magnam?', 
        date: '2020-06-24T00:20:35',
        likeCount: 1,
        commentCount: 1,
        comments: [
            {
                id: 32,
                userId: 2,
                username: 'Pensuaco',
                profilePic: '',
                comment: 'lol what is this',
                date: '2020-03-07T03:22:59'
            }
        ],
        likes: [
            {
                id: 102,
                userId: 2,
                username: 'Pensuaco',
                profilePic: '',
                date: '2020-03-03T12:04:32'
            },
        ],

        // IMAGE
        thumbnail: 'https://picsum.photos/500/300',
        alt: 'fulano-dog',
        
        // USER
        username: 'K O R A R U',
        profilePic: '',
        userId: 1,
    },
    {
        // POST
        id: 3,
        type: 'post',
        caption: 'Quia optio id molestiae assumenda provident saepe architecto corrupti repudiandae inventore aliquid fuga, blanditiis dignissimos fugiat culpa ipsam harum aut. Architecto, accusantium?', 
        date: '2020-06-23T19:22:45',
        likeCount: 2,
        commentCount: 0,
        comments: [],
        likes: [
            {
                id: 98,
                userId: 3,
                username: 'K O R A R U',
                profilePic: '',
                date: '2020-03-02T15:34:28'
            },
            {
                id: 107,
                userId: 4,
                username: 'Hectorino',
                profilePic: '',
                date: '2020-03-04T08:51:12'
            }
        ],

        // IMAGE
        thumbnail: 'https://picsum.photos/700/350',
        alt: 'fulano-dog',
        
        // USER
        username: 'Pensuaco',
        profilePic: '',
        userId: 1,
    },
];

export default activities;