export const Product = {
    title: 'Product',
    name: 'product',
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
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            title: 'Complimentary',
            name: 'complimentary',
            type: 'reference',
            to: [{ type: 'product' }]
        },
        {
            title: 'Reviews',
            name: 'reviews',
            type: 'reference',
            of: [{ type: 'review' }]
        }
    ]
}