export const postSchema = {
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
            type: 'date'
        },
        {
            title: 'Last Updated',
            name: 'lastUpdated',
            type: 'date'
        },
        {
            title: 'Thumbnail',
            name: 'thumbnail',
            type: 'reference',
            to: [{ type: 'a11y-image' }]
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'reference',
            to: [{ type: 'tag' }]
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        },
        // @todo: m2m issues...ugh
        {
            title: 'Related Articles',
            name: 'related',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}