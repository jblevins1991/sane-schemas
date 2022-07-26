import { TextFieldWithMaxCounter } from "../inputs/TextFieldWithMaxCounter";

export const Post = {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            inputComponent: TextFieldWithMaxCounter,
            validation: (Rule) => Rule
                .required()
                .min(50)
                .max(60)
                .error('A title between 50 and 60 characters is required.')
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
            inputComponent: TextFieldWithMaxCounter,
            validation: (Rule) => Rule
                .required()
                .max(160)
                .error('A description of no more than 155 characters is required.')
        },
        {
            title: 'Language',
            name: 'language',
            type: 'reference',
            to: [{ type: 'language' }]
        },
        {
            title: 'Canonical URL',
            name: 'canonical_url',
            type: 'string'
        },
        {
            title: 'Date Published',
            name: 'date_published',
            type: 'date',
            validation: (Rule) => Rule
                .required()
                .error('Date published is required.'),
            initialValue: (new Date()).toISOString(),
        },
        {
            title: 'Last Updated',
            name: 'last_updated',
            type: 'date',
            validation: (Rule) => Rule
                .required()
                .min(Rule.valueOfField('date_published'))
                .error('Last Updated is required.'),
            initialValue: (new Date()).toISOString(),
        },
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
        {
            title: 'Content',
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
        },
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