module.exports = () => {
    const data = {
        posts: [
            { id: 1, title: "Данные 1", author: "Vasya" },
            { id: 2, title: "Данные 2", author: "Misha" },
            { id: 3, title: "Данные 3", author: "Petr" },
        ],
        users: []
    };

    for (let i = 0; i < 1000; i++) {
        data.users.push({ id: i, userId: (i % 3 + 1), comments: [
                { body: `Данные ${i}`, postId: i + 1000 }
            ]
        });
    }
    return data;
};