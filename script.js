// Sample data for AI tools
const tools = [
    /*  {
         name: ' ',
         description: ' ',
         link: ' ',
         tags: [' ',' ',' '],
         isNew: true,
       price: ' '
     }, */
    {
        name: 'Photopea',
        description: 'A free online Photoshop alternative that lets you edit PSD, XCF, Sketch, XD, and CDR files directly in your browser.',
        link: 'https://www.photopea.com/',
        tags: ['Image Editor', 'Photoshop Alternative', 'Design', 'Web-based'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'Scribbr',
        description: 'An academic proofreading and plagiarism-checking platform that helps you write better papers and theses.',
        link: 'https://www.scribbr.com/',
        tags: ['Plagiarism Checker', 'Proofreading', 'Academic Writing'],
        isNew: true,
        price: 'Paid with Free Tools'
    },
    {
        name: 'Tome',
        description: 'Create beautiful AI-powered presentations and visual storytelling documents with ease.',
        link: 'https://tome.app/',
        tags: ['Presentations', 'AI Tools', 'Storytelling', 'Productivity'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'PDFescape',
        description: 'Free online PDF editor that allows you to annotate, fill out forms, and edit PDFs easily.',
        link: 'https://www.pdfescape.com/',
        tags: ['PDF Editor', 'Form Filler', 'Annotator'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'WriteSonic',
        description: 'An AI writing tool to generate blog posts, product descriptions, ads, and more with just a few inputs.',
        link: 'https://writesonic.com/',
        tags: ['AI Writing', 'Marketing', 'Content Creation'],
        isNew: true,
        price: 'Freemium'
    },
    {
        name: 'TTSMaker',
        description: 'Convert text to speech for free using realistic AI voices. Supports multiple languages and accents.',
        link: 'https://ttsmp3.com/',
        tags: ['Text to Speech', 'Voice Generator', 'Accessibility'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'Hunter.io',
        description: 'Find professional email addresses easily and verify them with powerful tools for outreach.',
        link: 'https://hunter.io/',
        tags: ['Email Finder', 'Outreach', 'Lead Generation'],
        isNew: true,
        price: 'Freemium'
    },
    {
        name: 'Blackbox AI',
        description: 'Code faster using this AI tool that autocompletes, explains, and writes code in your favorite language.',
        link: 'https://www.useblackbox.io/',
        tags: ['AI for Coders', 'Autocompletion', 'Programming', 'Developer Tools'],
        isNew: true,
        price: 'Freemium'
    }
    ,
    {
        name: 'Remove.bg',
        description: 'Instantly remove image backgrounds for free, perfect for designers, photographers, and anyone needing a clean cutout.',
        link: 'https://www.remove.bg/',
        tags: ['Background Remover', 'Image Editing', 'Design Tools'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'TinyWow',
        description: 'Free online tools to help with everyday tasks, including PDF editing, file conversion, and image utilities.',
        link: 'https://tinywow.com/',
        tags: ['PDF Tools', 'Converters', 'Image Tools', 'Productivity'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'Undraw',
        description: 'Open-source illustrations for any idea you can imagine and create, completely free for commercial and personal use.',
        link: 'https://undraw.co/illustrations',
        tags: ['Illustrations', 'Design Resources', 'Open Source'],
        isNew: true,
        price: 'Free'
    },
    {
        name: 'Zamzar',
        description: 'Convert files from one format to another, supporting over 1200 different conversions.',
        link: 'https://www.zamzar.com/',
        tags: ['File Converter', 'Documents', 'Videos', 'Images'],
        isNew: true,
        price: 'Freemium'
    },
    {
        name: 'PineTools',
        description: 'A collection of simple and free tools for quick data and file manipulation like text, images, math, and more.',
        link: 'https://pinetools.com/',
        tags: ['Online Tools', 'Quick Utilities', 'Text Editing', 'Image Editing'],
        isNew: true,
        price: 'Free'
    }
    ,

    {
        name: 'Ahrefs',
        description: 'Ahrefs Paraphrasing Tool uses a language model to generate human-like text by learning patterns, grammar, and vocabulary from extensive text data.',
        link: 'https://ahrefs.com/writing-tools/paraphrasing-tool',
        tags: ['AI', 'Paraphrasing', ' Humanizer'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'QuillBot',
        description: 'QuillBot offers AI tools for effortless writing: paraphrasing, grammar checking, tone analysis, fluency improvement, and more, enhancing writing efficiency.',
        link: 'https://quillbot.com/',
        tags: ['Plagiarism Checker', 'Paraphrasing', ' Humanizer', 'Grammar Checker'],
        isNew: false,
        price: 'Free'
    },

    {
        name: 'Bypass GPT',
        description: 'Ahrefs Paraphrasing Tool uses a language model to generate human-like text, learning from extensive data on patterns, grammar, and vocabulary.',
        link: 'https://bypassgpt.ai/',
        tags: ['AI', 'AI Content Detector', 'Paraphrasing', ' Humanizer'],
        isNew: false,
        price: 'Paid'
    },
    {
        name: 'Zero GPT',
        description: 'ZeroGPT offers a high-accuracy AI Content and ChatGPT Detector. Free AI Checker & AI Detector for identifying AI GPT plagiarism.',
        link: 'https://www.zerogpt.com/',
        tags: ['AI', 'AI Content Detector'],
        isNew: false,
        price: 'Free'
    }, {
        name: 'Google Keep',
        description: 'Keep makes note organization simple and efficient, helping you easily find what you need and manage your information effortlessly.',
        link: 'https://keep.google.com/',
        tags: ['Google', 'Nots Maker', 'List Maker', 'Reminders'],
        isNew: false,
        price: 'Free'
    }, {
        name: 'List Maker',
        description: 'Free, fast, and user-friendly. Create and share lists of movies, video games, characters, music, and more with friends and others.',
        link: 'https://listmaker.com/',
        tags: ['List Maker'],
        isNew: false,
        price: 'Free'
    }, {
        name: 'Roadmap',
        description: 'Roadmap offers community-created roadmaps, guides, and articles to help developers choose learning paths and grow in their careers.4',
        link: 'https://roadmap.sh',
        tags: ['Roadmap', 'Learning'],
        isNew: false,
        price: 'Free'
    }, {
        name: 'Icon finder',
        description: 'Iconfinder is the largest marketplace for icons, illustrations, and 3D illustrations, offering SVG, AI, and PNG formats for designers.',
        link: 'https://www.iconfinder.com/',
        tags: ['Icon', 'Stickers', '3D', 'Illustrations'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Slow Road',
        description: 'Slow Road: A calming browser game where you enjoy endless, peaceful driving through serene landscapes.',
        link: 'https://slowroads.io/',
        tags: ['Web Game'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Flaticon',
        description: 'Download free icons and stickers for your projects. Access images crafted by designers, available in PNG, SVG, EPS, PSD, and CSS formats.',
        link: 'https://www.flaticon.com/',
        tags: ['Icon', 'Stickers'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Resume Ground',
        description: 'Resume Ground offers professional resume and CV maker services with a focus on dependability and online resume creation for your convenience.',
        link: 'https://www.resumeground.com/',
        tags: ['Resume Builder'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Dora',
        description: 'Deliver flawless projects effortlessly using AI, create 3D animated sites without coding. Dora AI offers originality with no templates or stock photos.',
        link: 'https://dora.run/',
        tags: ['AI', 'Website Builder', '3D'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Profesia',
        description: 'Explore work, employment, careers, temporary jobs, and new opportunities worldwide. Discover current job vacancies at home and abroad.',
        link: 'https://www.profesia.sk',
        tags: ['Jop Finder'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Magic Studio',
        description: 'With Magic Studio, harness AI to create, edit images effortlessly—add, remove objects, backgrounds, and craft stunning visuals for product pages.',
        link: 'https://magicstudio.com/',
        tags: ['AI', 'Text to Image', 'Image Upscaler', 'Magic Eraser', 'Background Remover'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Pacdora',
        description: 'Pacdora is an online tool for packaging design, offering editing, 3D preview, rendering, and real-time application of designs to packaging models.',
        link: 'https://ideogram.ai/t/explore',
        tags: ['AI', '3D', 'Mokeup'],
        isNew: false,
        price: 'Paid'
    },
    {
        name: 'Submagic',
        description: 'Submagic, an AI for content creators, generates catchy captions with emojis for short-form content in under 2 minutes, enhancing engagement effortlessly.',
        link: 'https://www.canva.com/',
        tags: ['AI', 'Video Editor'],
        isNew: false,
        price: 'Paid'
    },
    {
        name: 'Leonardo AI',
        description: 'Transform your projects with our AI image generator. Create high-quality, AI-generated images swiftly, enhancing your creative work with unmatched speed and style.',
        link: 'https://leonardo.ai/',
        tags: ['AI', 'Text to Image'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Ideogram',
        description: 'An ideogram is a symbol representing an idea or concept, independent of language, with varying degrees of arbitrariness and resemblance to their meanings.',
        link: 'https://ideogram.ai/t/explore',
        tags: ['AI', 'Text to Image'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Canva',
        description: 'Canva is a graphic design platform launched in 2013, offering tools for creating social media graphics, presentations, merchandise, and websites.',
        link: 'https://www.canva.com/',
        tags: ['Mokeup', 'Logo', 'illustrations', 'Video Editor'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Microsoft Designer',
        description: 'A graphic design app for creating professional-quality social media posts, invitations, digital postcards, graphics, and more with ease.',
        link: 'https://designer.microsoft.com/',
        tags: ['Mokeup', 'Logo', 'illustrations', 'Video Editor'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Placeit',
        description: 'Upload your design or use templates. Create a T-shirt mockup in seconds and design easily with a few simple steps.',
        link: 'https://placeit.net/',
        tags: ['Mokeup', 'Logo', 'illustrations', 'Video Editor'],
        isNew: false,
        price: 'Paid'
    },
    {
        name: 'Viggle',
        description: 'Viggle, the hottest new AI creative tool, is revolutionizing memes and the future of AI video with its innovative features.',
        link: 'https://viggle.ai/',
        tags: ['AI', 'Text to Video', 'Image to Video'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'InVideo',
        description: 'Copy.ai supports all major LLMs, guaranteeing zero-retention of your data inputs for maximum choice and privacy.',
        link: 'https://invideo.io/',
        tags: ['AI', 'Video Editor', 'Text to Video'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Photopea',
        description: 'Photopea is a web-based, ad-supported editor for photo and graphic design, compatible with all modern browsers, ideal for image editing and web design.',
        link: 'https://www.photopea.com/',
        tags: ['Image Editor', 'Web Design', 'illustrations'],
        isNew: false,
        price: 'Free'
    },
    {
        name: '10 Web',
        description: 'Elevate your web presence with 10Web. Discover seamless website management, powerful hosting, building, optimizing, and securing tools.',
        link: 'https://10web.io/',
        tags: ['AI', 'Website Builder', 'Chatbot', 'Automate Their Workflow'],
        isNew: false,
        price: 'Paid'
    },
    {
        name: 'Copy AI',
        description: 'Copy.ai supports all major LLMs, guaranteeing zero-retention of your data inputs for maximum choice and privacy.',
        link: 'https://scikit-learn.org/',
        tags: ['AI', 'Research', 'Chatbot', 'Automate Their Workflow'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Pika',
        description: 'Pika is an AI video platform enabling users to create videos from their ideas, perfect for memes and creative projects.',
        link: 'https://pika.art/home',
        tags: ['AI', 'Text to Video', 'Image to Video'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Zety',
        description: 'Zety is an online platform providing resume templates, career advice, and tools to create professional resumes, cover letters, and CVs.',
        link: 'https://zety.com/',
        tags: ['Resume Builder'],
        isNew: false,
        price: 'Paid'
    },
    {
        name: 'Resume Worded',
        description: 'Our AI-powered career platform enhances student outcomes and efficiency, offering scalable career coaching services like resume and LinkedIn reviews.',
        link: 'https://resumeworded.com/',
        tags: ['AI', 'LinkedIn reviews', 'Resume Review'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Google Gemini',
        description: 'Google Gemini is an AI project combining advanced machine learning and language models to enhance search accuracy, content understanding, and user interaction.',
        link: 'https://gemini.google.com/app',
        tags: ['AI', 'Research', 'Chatbot', 'Google'],
        isNew: false,
        price: 'Free'
    },
    {
        name: 'Chat GPT',
        description: 'ChatGPT is an advanced AI language model by OpenAI, capable of understanding and generating human-like text for diverse applications.',
        link: 'https://chatgpt.com/',
        tags: ['AI', 'Research', 'Chatbot', 'OpenAI'],
        isNew: false,
        price: 'Free'
    }
]
const allTags = new Set();

// Extract unique tags
tools.forEach(tool => {
    tool.tags.forEach(tag => allTags.add(tag));
});

// Function to render tools
const renderTools = (tools) => {
    const toolsList = document.getElementById('tools-list');
    toolsList.innerHTML = '';
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'col';
        toolCard.innerHTML = `
                ${tool.isNew ? '<span class="new-marker">New</span>' : ''}
                <span class="price-marker ${tool.price === 'Paid' ? 'paid' : ''} ${tool.price === 'Freemium' ? 'Freemium' : ''}
                ${tool.price === 'Paid with Free Tools' ? 'PaidwithFree' : ''}">${tool.price}</span>
               

                <h5>${tool.name}</h5>
                <p>${tool.description}</p>
                <div class="tags">
                    ${tool.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                </div>
                <a href="${tool.link}" class="btn" target="_blank">Visit</a>
            `;
        toolsList.appendChild(toolCard);
    });
};

// Function to render tags
const renderTags = (tags) => {
    const tagsList = document.getElementById('tags-list');
    tagsList.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagElement.onclick = () => {
            const filteredTools = tools.filter(tool => tool.tags.includes(tag));
            renderTools(filteredTools);
        };
        tagsList.appendChild(tagElement);
    });
};

// Function to handle search
const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredTools = tools.filter(tool => {
        return tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    });
    renderTools(filteredTools);
};

// Event listener for search input
document.getElementById('search').addEventListener('input', handleSearch);

// Initial render
renderTools(tools);
renderTags(allTags);