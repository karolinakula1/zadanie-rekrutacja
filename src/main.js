import {headerFunction} from "./components/header/header.js";
import {projectFunction} from "/src/components/projects/projects.js";

fetch('components/header/header.html')
.then(res => res.text())
.then(data => {
    document.querySelector('#header-content').innerHTML = data;
})
    .then(headerFunction)
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

headerFunction();

fetch('components/sliders/sliders.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-slider').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })


fetch('components/offer/offer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-offer').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })


fetch('components/about/about.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-about').innerHTML = data;
    })
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })

fetch('components/projects/projects.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('#my-projects').innerHTML = data;
    })
    .then(projectFunction)
    .catch(err => {
        console.error('Something went wrong during loading file', err)
    })
