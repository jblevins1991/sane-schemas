export const Carousel = {
    title: 'Carousel',
    name: 'carousel',
    type: 'document',
    fields: [
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'a11y_image'
                }]
            }]
        }
    ]
}