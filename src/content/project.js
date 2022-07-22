export const projectSchema = {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Technology',
            name: 'technology',
            type: 'string',
            options: {
                list: [
                    { title: 'Android', value: 'android' },
                    { title: 'Angular', value: 'angular' },
                    { title: 'Apollo Server', value: 'apollo-server' },
                    { title: 'C', value: 'c' },
                    { title: 'C++', value: 'c-plus-plus' },
                    { title: 'Django', value: 'django' },
                    { title: 'Elixir', value: 'elixir' },
                    { title: 'Express', value: 'express' },
                    { title: 'Flutter', value: 'flutter' },
                    { title: 'iOS', value: 'ios' },
                    { title: 'Java', value: 'java' },
                    { title: 'JavaScript', value: 'javascript' },
                    { title: 'Kotlin', value: 'kotlin' },
                    { title: 'Ktor', value: 'ktor' },
                    { title: 'Laravel', value: 'laravel' },
                    { title: 'Pheonix', value: 'pheonix' },
                    { title: 'PHP', value: 'php' },
                    { title: 'Python', value: 'python' },
                    { title: 'React', value: 'react' },
                    { title: 'React Native', value: 'react-native' },
                    { title: 'Spring Boot', value: 'spring' },
                    { title: 'Svelte', value: 'svelte' },
                    { title: 'Typescript', value: 'typescript' },
                    { title: 'Vue', value: 'vue' },
                    { title: 'WordPress', value: 'wordpress' },
                ]
            }
        },
        {
            title: 'Project Type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'GraphQL', value: 'gql' },
                    { title: 'Library', value: 'library' },
                    { title: 'Mobile', value: 'mobile' },
                    { title: 'Socket', value: 'socket' },
                    { title: 'REST', value: 'rest' },
                    { title: 'Website', value: 'website' },
                ]
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Documentation URL',
            name: 'documentation',
            type: 'url'
        },
        {
            title: 'Blog Post URL',
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}