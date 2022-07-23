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
            name: 'canonicalUrl',
            type: 'string'
        },
        {
            title: 'Date Published',
            name: 'datePublished',
            type: 'date',
            required: true
        },
        {
            title: 'Last Updated',
            name: 'lastUpdated',
            type: 'date',
            required: true
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
            required: true
        },
        {
            title: 'Content',
            name: 'content',
            type: 'block',
            required: true
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