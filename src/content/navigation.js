export const Navigation = {
    title: 'Navigation',
    name: 'navigation',
    type: 'document',
    fields: [
        {
            title: 'Navigation Links',
            name: 'navigationLinks',
            type: 'array',
            of: [{ type: 'navigation-item' }]
        }
    ]
}