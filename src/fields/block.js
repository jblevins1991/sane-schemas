
export const blockField = {
    title: 'Content',
    name: 'content',
    type: 'array',
    styles: [
        {
            title: 'H1',
            value: 'h1'
        },
        {
            title: 'H2',
            value: 'h2'
        },
        {
            title: 'H3',
            value: 'h3'
        },
        {
            title: 'H4',
            value: 'h4'
        },
        {
            title: 'Normal',
            value: 'normal'
        },
        {
            title: 'Bullet',
            value: 'bullet'
        },
        {
            title: 'Numbered',
            value: 'numbered'
        },
    ],
    marks: {
        decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Code', value: 'code' },
        ],
    },
    annotations: [
        {
            name: 'Image',
            title: 'image',
            type: 'a11y_image'
        }
    ],
    of: [{type: 'block'}]
};
