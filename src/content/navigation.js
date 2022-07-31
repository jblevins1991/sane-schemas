import { titleField } from "../fields/seo";

export const Navigation = {
    title: 'Navigation',
    name: 'navigation',
    type: 'document',
    fields: [
        titleField,
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
        }
    ]
}