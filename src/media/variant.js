export const Variant = {
    title: 'Variant',
    name: 'variant',
    type: 'document',
    fields: [
        {
            title: 'Size',
            name: 'size',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule
                .required()
                .error('An image must be uploaded or selected.')
        }
    ]
};
