import { TextFieldWithMaxCounter } from "../inputs/TextFieldWithMaxCounter";

export const Image = {
    title: 'A11y Image',
    name: 'a11y_image',
    type: 'document',
    fields: [
        {
            title: 'Alternative Text',
            name: 'alt',
            type: 'string',
            inputComponent: TextFieldWithMaxCounter,
            validation: (Rule) => Rule
                .required()
                .max(125)
                .error('Alternative text of no more than 125 characters is required.')
        },
        {
            title: 'Variant',
            name: 'variant',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'variant'
                }]
            }]
        }
    ]
};
