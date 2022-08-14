import { blockField } from "../fields/block";
import { canaonicalUrlField, datePublishedField, descriptionField, languageField, lastUpdatedField, slugField, titleField } from "../fields/seo";

export const Documentation = {
    title: 'Documentation',
    name: 'documentation',
    type: 'document',
    fields: [
        titleField,
        slugField,
        descriptionField,
        languageField,
        {
            title: 'Version',
            name: 'version',
            type: 'reference',
            to: [{ type: 'semantic_version'}]
        },
        canaonicalUrlField,
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
        blockField
    ]
}