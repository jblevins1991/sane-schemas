export const Post = {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Language',
            name: 'language',
            type: 'reference',
            to: [{ type: 'language' }]
        },
        {
            title: 'Canonical URL',
            name: 'canonical_url',
            type: 'string'
        },
        {
            title: 'Date Published',
            name: 'date_published',
            type: 'date'
        },
        {
            title: 'Last Updated',
            name: 'last_updated',
            type: 'date'
        },
        {
            title: 'Thumbnail',
            name: 'thumbnail',
            type: 'reference',
            to: [{ type: 'a11y_image' }]
        },
        {
            title: 'Category',
            name: 'category',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'category' }]
            }]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'tag' }]
            }]
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Related Articles',
            name: 'related',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'post' }]
            }]
        }
    ]
}