import { languageField, slugField } from "../fields/seo";

export const NavigationItem = {
    title: 'Navigation Item',
    name: 'navigation_item',
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
            title: 'Document',
            name: 'document',
            type: 'reference',
            to: [{ type: 'documentation' }]
        },
        {
            title: 'Navigation Links',
            name: 'navigation_links',
            type: 'array',
            of: [{ type: 'navigation_item' }]
        }
    ]
}