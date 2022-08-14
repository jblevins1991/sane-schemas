import { languageField, slugField } from "../fields/seo";

export const NavigationItem = {
    title: 'Navigation Item',
    name: 'navigation-item',
    type: 'document',
    fields: [
        slugField,
        {
            title: 'Version',
            name: 'version',
            type: 'reference',
            to: [{ type: 'semantic_version' }]
        },
        {
            title: 'Label',
            name: 'label',
            type: 'string'
        },
        languageField,
        {
            title: 'Document',
            name: 'document',
            type: 'reference',
            to: [{ type: 'documentation' }]
        },
        {
            title: 'Navigation Links',
            name: 'navigationLinks',
            type: 'array',
            of: [{ type: 'navigation-item' }]
        }
    ]
}