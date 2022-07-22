export const authorSchema = {
    title: 'Author',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'image'
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'string'
        }
    ]
};
