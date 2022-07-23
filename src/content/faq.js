export const FaqSchema = {
    title: 'Frequently Asked Questions',
    name: 'faq',
    type: 'document',
    fields: [
        {
            title: 'Question',
            name: 'question',
            type: 'string'
        },
        {
            title: 'Answer',
            name: 'answer',
            type: 'string'
        },
        {
            title: 'Times Asked',
            name: 'times-asked',
            type: 'number'
        }
    ]
};
