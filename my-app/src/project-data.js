import fml from './images/fml2.png'
import hashi from './images/hashi_image.png'
import instagram from './images/instagram-ish.png'
import wcr from './images/wcr_image.png'


const projects = [
    {
        name: 'Instagram-ish',
        url: "https://github.com/joshua-simon/instagram-clone",
        image: instagram,
        techStack: 'React, Firebase, Tailwind CSS, React Testing Library',
        blurb: 'An instagram clone, built to develop my skills with React Context and testing.'
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
        name: 'The Wellington Coffee Review',
        url: 'https://welly-coffee-review-8eda1.web.app/',
        image:wcr,
        techStack: 'React, Firebase, CSS',
        blurb: 'A cafe review website for Wellingtons, loosely based on TripAdvisor.',
        code:'https://github.com/joshua-simon/welly-coffee-review-v2'
    },
    {
        name: 'Hashigo Zake website',
        url: 'https://hashigo-zake.herokuapp.com/',
        image:hashi,
        techStack: 'React,CSS, MailChimp',
        blurb: "A website for one of Wellington's best craft beer bars"
    }
]

export default projects
