export const ProductVariant = {
    title: 'Product Variant',
    name: 'product-variant',
    type: 'document',
    fields: [
        {
            title: 'SKU',
            name: 'sku',
            type: 'string'
        },
        {
            title: 'Carousel',
            name: 'carousel',
            type: 'reference',
            to: [{ type: 'carousel' }]
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
    ]
}