import { blockField } from "../fields/block";
import { canaonicalUrlField, datePublishedField, descriptionField, languageField, lastUpdatedField, slugField, titleField } from "../fields/seo";

export const Page = {
    title: 'Page',
    name: 'page',
    type: 'document',
    fields: [
        titleField,
        slugField,
        descriptionField,
        languageField,
        canaonicalUrlField,
        datePublishedField,
        lastUpdatedField,
        blockField
    ]
}