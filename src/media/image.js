export const imageSchema = {
    title: 'A11y Image',
    name: 'a11y-image',
    type: 'document',
    fields: [
        {
            title: 'Alternative Text',
            name: 'alt',
            type: 'string'
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'reference',
            to: [{ type: 'tag' }]
        },
        {
            title: 'Variant',
            name: 'variant',
            type: 'reference',
            to: [{ type: 'variant' }]
        }
    ]
};
