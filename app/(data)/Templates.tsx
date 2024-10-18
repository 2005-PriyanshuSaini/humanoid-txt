export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog titles on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet wise only based on given niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title', 
        form:[
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            },
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that generate blog titles on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet wise only based on given niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title', 
        form:[
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            },
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generate blog titles on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet wise only based on given niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title', 
        form:[
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            },
        ]
    }
]