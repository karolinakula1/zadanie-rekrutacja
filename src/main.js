import {headerFunction} from "./components/header/header.js";
import {projectFunction} from "./components/projects/projects.js";

fetch('../src/components/header/header.html')
.then(res => res.text())
.then(data => {
    document.querySelector('#header-content').innerHTML = data;
})
    .then(headerFunction)
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

headerFunction();

fetch('../src/components/sliders/sliders.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-slider').innerHTML = data;

        const sliderButton2 = document.querySelector('.slider-button-2');
        sliderButton2.addEventListener('click', function(event) {
            event.preventDefault();
            const projectsNavi = document.querySelector('.projects-navi');

            if (projectsNavi) {
                projectsNavi.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })


fetch('../src/components/offer/offer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-offer').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })


fetch('../src/components/about/about.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-about').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

fetch('../src/components/projects/projects.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-projects').innerHTML = data;
    })
    .then(projectFunction)
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

fetch('../src/components/contact/contact.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-contact').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

fetch('../src/components/footer/footer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-footer').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

