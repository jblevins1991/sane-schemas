// import { TextareaWithMaxCounter } from "../inputs/TextareaWithMaxCounter";
// import { TextFieldWithMaxCounter } from "../inputs/TextFieldWithMaxCounter";

import { blockField } from "../fields/block";
import { canaonicalUrlField, datePublishedField, descriptionField, languageField, lastUpdatedField, slugField, titleField } from "../fields/seo";

export const Post = {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        titleField,
        slugField,
        descriptionField,
        languageField,
        canaonicalUrlField,
        datePublishedField,
        lastUpdatedField,
        {
            title: 'Thumbnail',
            name: 'thumbnail',
            type: 'reference',
            to: [{ type: 'a11y_image' }],
            validation: (Rule) => Rule
                .required()
                .error('Thumbnail is required.')
        },
        {
            title: 'Category',
            name: 'category',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'category' }]
            }],
            validation: (Rule) => Rule
                .required()
                .error('Category is required.')
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'tag' }]
            }]
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
        blockField,
        {
            title: 'Related Articles',
            name: 'related',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'post' }]
            }]
        }
    ]
}