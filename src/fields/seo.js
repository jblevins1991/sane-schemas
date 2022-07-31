
export const titleField = {
    title: 'Title',
    name: 'title',
    type: 'string',
    validation: (Rule) => [
        Rule
            .required()
            .error('A title is required.'),
        Rule
            .min(50)
            .error('A title of no less than 50 characters is required.'),
        Rule
            .max(60)
            .warning('A title of no more than 60 characters is required.'),
    ],
    // inputComponent: TextFieldWithMaxCounter,
};

export const slugField = {
    title: 'Slug',
    name: 'slug',
    type: 'slug'
};

export const descriptionField = {
    title: 'Description',
    name: 'description',
    type: 'string',
    validation: (Rule) => [
        Rule
            .required()
            .error('A description is required.'),
        Rule
            .max(160)
            .error('A description of no more than 155 characters is required.'),
    ],
    // inputComponent: TextareaWithMaxCounter,
};

export const languageField = {
    title: 'Language',
    name: 'language',
    type: 'reference',
    to: [{ type: 'language' }]
};

export const canaonicalUrlField = {
    title: 'Canonical URL',
    name: 'canonical_url',
    type: 'string'
};

export const datePublishedField = {
    title: 'Date Published',
    name: 'date_published',
    type: 'date',
    validation: (Rule) => Rule
        .required()
        .error('Date published is required.'),
    initialValue: (new Date()).toISOString(),
};

export const lastUpdatedField = {
    title: 'Last Updated',
    name: 'last_updated',
    type: 'date',
    validation: (Rule) => Rule
        .required()
        .min(Rule.valueOfField('date_published'))
        .error('Last Updated is required.'),
    initialValue: (new Date()).toISOString(),
};
