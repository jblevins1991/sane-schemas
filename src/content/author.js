import { TextFieldWithMaxCounter } from "../inputs/TextFieldWithMaxCounter";

export const Author = {
    title: 'Author',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'a11y_image',
            validation: (Rule) => Rule
                .required()
                .error('An avatar image is required')
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            inputComponent: TextFieldWithMaxCounter,
            validation: (Rule) => Rule
                .required()
                .min(2)
                .max(100)
                .error('A name with no less than 2 characters and no more than 100 characters is required.')
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'string',
            inputComponent: TextFieldWithMaxCounter,
            validation: (Rule) => Rule
                .required()
                .min(50)
                .max(250)
                .error('A bio with no less than 50 characters and no more than 250 characters is required.')
        }
    ]
};
