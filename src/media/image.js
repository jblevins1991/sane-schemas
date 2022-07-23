export const Image = {
    title: 'A11y Image',
    name: 'a11y_image',
    type: 'document',
    fields: [
        {
            title: 'Alternative Text',
            name: 'alt',
            type: 'string'
        },
        {
            title: 'Variant',
            name: 'variant',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'variant'
                }]
            }]
        }
    ]
};
