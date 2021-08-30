// Change your display name on tha landing display
const header = {
    name: "Zain Jeelani",
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const about = {
    paragraph: "Hi.\n I am a Software Engineer, a Mobile and web developer working with React/Nextjs & Flutter, I'm based in Pakistan and have a passion for software development and like to create mobile & web apps. I love automating stuff and have a keen interest in business & blockchain tech. I like reading, learning and exploring new skills and working with the latest technologies. I am currently working on Flutter and Nextjs to create some beautiful mobile & web apps and looking into blockchain tech to create apps for the web3 as well."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "React/Next JS",
        value: 0
    }, {
        name: "Flutter & Dart",
        value: 0
    }, {
        name: "Web3 & Ethers JS for Blockchain",
        value: 0
    }, {
        name: "Node & Express JS",
        value: 0
    }, {
        name: "Firebase & Cloud functions",
        value: 0
    }, {
        name: "Mongodb NOSQL & SQL",
        value: 0
    }, {
        name: "Python & Data Analysis",
        value: 0
    }, {
        name: "Adobe Photoshop & Adobe XD",
        value: 0
    },
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
// then also Add their images in css styles
// and images/folder
const projects = [
    {
        // Add image in './styles/images.css' in #project7
        id: "project7",
        name: "Caketools",
        skills: ["Nextjs/React.js, Typescript, Redux, MaterialUI, Blockchain BSC APIs, ethersjs, Nodejs, firebase hosting & cloud functions ++"],
        url: "https://caketools-e4946.web.app/"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Primus Classroom",
        skills: ["Nextjs, Redux, MaterialUI, React-Dnd, firebase auth & firestore, firebase hosting & cloud functions"],
        url: "https://primusclassroom.com"
    },
    {
        // Add image in './styles/images.css' in #project1
        id: "project5",
        name: "Amazon Web Clone",
        skills: ["HTML5, CSS3, NextJS, ReactJS, firebase, NOSQL, Stripe payment"],
        url: "https://amazon-clone-nextjs.vercel.app/",
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project4",
        name: "Todo list",
        skills: ["HTML5, CSS3, NextJS, ReactJS, Mongoose, NOSQL,"],
        url: "https://react-nextjs-todo-list.vercel.app/"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Digi Counter Tasbeeh",
        skills: ["Flutter, Dart"],
        url: "https://play.google.com/store/apps/details?id=com.amroti_dev.digi_counter&hl=en&gl=US"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project2",
        name: "Personify - Personality Prediction",
        skills: ["Python, DataScience, Machine Learning "],
        url: "https://github.com/Syedzainjeelani/personify_dsa"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project1",
        name: "Covid-19 Analysis",
        skills: ["Python, Data Analysis, Data Visualization"],
        url: "https://github.com/Syedzainjeelani/covid-19-analysis"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Flutter -Budget App UI",
        url: "https://github.com/Syedzainjeelani/budgetApp_flutterUI"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "Flutter -Food Delivery App UI",
        url: "https://github.com/Syedzainjeelani/foodDeliveryApp_flutterUI"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Flutter -Social Media App UI",
        url: "https://github.com/Syedzainjeelani/frenzy_social_media_app"
    },
]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const contact = {
    pitch: "I'm avaialable for freelance work. If you have any project in mind, think you want my help with something or just want a friendly chat, then get in touch...",
    copyright: "Syed Zain Jeelani",
    contactUrl: 'https://formspree.io/f/mbjppepk'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/zainamroti',
    facebook: 'https://web.facebook.com/zainamroti',
    linkedin: 'https://www.linkedin.com/in/zainamroti',
    instagram: 'https://www.instagram.com/zainamroti/',
    resume: process.env.PUBLIC_URL + '/LinkdIn-Resume-Syed-Zain-Jeelani.pdf'
}
// Dont change anything here
export { header, about, skillsBar, projects, miscellaneous, contact, social }