export const Navigation = {
    title: 'Navigation',
    name: 'navigation',
    type: 'document',
    fields: [
        {
            title: 'Navigation Links',
            name: 'navigation_links',
            type: 'array',
            of: [{ type: 'navigation_item' }]
        }
    ]
}