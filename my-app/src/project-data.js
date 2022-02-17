import fml from './images/fml2.png'
import wellyadvisor from './images/wellyadvisor.png'
import instagram from './images/instagram-ish.png'



const projects = [
    {
        name: 'Wellyadvisor - In Progress',
        url: 'https://welly-advisor.herokuapp.com/',
        image:wellyadvisor,
        techStack: 'React, Firebase, CSS',
        blurb: 'A review website for Wellington, based on TripAdvisor.',
        code:'https://github.com/joshua-simon/welly-trip-advisor'
    },
    {
        name: 'Follow My Lead',
        url: 'http://f-m-l.herokuapp.com',
        image:fml,
        techStack: 'React,CSS, Express,SQLite3',
        blurb: "My final group project for Dev Academy: an app that pairs dog walkers with dog owners.",
        code: 'https://github.com/kahu-2020/Follow-My-Lead'
    },
    {
        name: 'Instagram-ish',
        url: "https://github.com/joshua-simon/instagram-clone",
        image: instagram,
        techStack: 'React, Firebase, Tailwind CSS, React Testing Library',
        blurb: 'An instagram clone, built to develop my skills with React Context and testing.'
    },

]



export default projects
