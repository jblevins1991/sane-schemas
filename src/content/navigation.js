export const Navigation = {
    title: 'Navigation',
    name: 'navigation',
    type: 'document',
    fields: [
        {
            title: 'Label',
            name: 'label',
            type: 'string'
        },
        languageField,
        slugField,
        {
            title: 'Version',
            name: 'version',
            type: 'reference',
            to: [{ type: 'semantic_version' }]
        },
        {
            title: 'Navigation Links',
            name: 'navigation_links',
            type: 'array',
            of: [{ type: 'navigation_item' }]
        }
    ]
}