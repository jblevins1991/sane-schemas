export const carouselSchema = {
    title: 'Carousel',
    name: 'carousel',
    type: 'document',
    fields: [
        // @todo: m2m relationship
        {
            title: 'Images',
            name: 'images',
            type: 'reference',
            to: [{ type: 'a11y-image' }]
        }
    ]
}