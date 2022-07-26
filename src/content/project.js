export const projectSchema = {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule
                .required()
                .min(50)
                .max(60)
                .error('A title of no less than 50 characters and no more than 60 characters is required.')
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
                    { title: 'Deno', value: 'deno' },
                    { title: 'Django', value: 'django' },
                    { title: 'Elixir', value: 'elixir' },
                    { title: 'Erlang', value: 'erlang' },
                    { title: 'Express', value: 'express' },
                    { title: 'Firebase', value: 'firebase' },
                    { title: 'Flutter', value: 'flutter' },
                    { title: 'iOS', value: 'ios' },
                    { title: 'Java', value: 'java' },
                    { title: 'JavaScript', value: 'javascript' },
                    { title: 'Kotlin', value: 'kotlin' },
                    { title: 'Ktor', value: 'ktor' },
                    { title: 'Laravel', value: 'laravel' },
                    { title: 'MongoDB', value: 'mongodb' },
                    { title: 'MySQL', value: 'mysql' },
                    { title: 'Node.js', value: 'node' },
                    { title: 'Pheonix', value: 'pheonix' },
                    { title: 'PHP', value: 'php' },
                    { title: 'PosgreSQL', value: 'postgres' },
                    { title: 'Primsa', value: 'prisma' },
                    { title: 'Python', value: 'python' },
                    { title: 'React', value: 'react' },
                    { title: 'React Native', value: 'react-native' },
                    { title: 'Spring Boot', value: 'spring' },
                    { title: 'Svelte', value: 'svelte' },
                    { title: 'Swift', value: 'swift' },
                    { title: 'Typescript', value: 'typescript' },
                    { title: 'Vue', value: 'vue' },
                    { title: 'WordPress', value: 'wordpress' },
                ]
            },
            validation: (Rule) => Rule
                .required()
                .error('A technology is required.')
        },
        {
            title: 'Project Type',
            name: 'project_type',
            type: 'string',
            options: {
                list: [
                    { title: 'GraphQL', value: 'gql' },
                    { title: 'Library', value: 'library' },
                    { title: 'Mobile', value: 'mobile' },
                    { title: 'Socket', value: 'socket' },
                    { title: 'REST', value: 'rest' },
                    { title: 'Web', value: 'web' },
                ]
            },
            validation: (Rule) => Rule
                .required()
                .error('A project type is required.')
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
            validation: (Rule) => Rule
                .required()
                .max(160)
                .error('A description of no more than 160 characters is required.')
        },
        {
            title: 'Documentation URL',
            name: 'documentation',
            type: 'url',
            validation: (Rule) => Rule
                .required()
                .custom(value => {
                    if (!value.startsWith('https://') || value.startsWith('http://')) {
                        return 'URLs must start with https://';
                    }
            
                    return true;
                })
        },
        {
            title: 'Blog Post',
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}