'use strict'

import { select, onEvent, newPost, populateModal, openModal } from './utility-functions.js'
import { User } from './user-class.js'
import { Subscriber } from './subscriber-class.js';

// Selectors
const submit = select('.submit-button');
const postInput = select('.input-text');
const postContainer = select('.post-field');
const postElement = select('.user-post');
const modal = select('.modal');
const imageInput = select('.upload-image');
const previewImage = select('.preview');
const overlay = select('.overlay');
const err = select('.error');

// modal selectors

const user = new Subscriber(
    1, 
    'Beth', 
    'Bethzilla', 
    'bethzilla666@email.com',
    29, 
    ['Anime Fans', 'Geeks', 'Bloggers', 'Canadians'],
    true
);

onEvent('click', modal, function () {
    populateModal();
    openModal();
})


onEvent('click', submit, function() {
    if (postInput.value == '') {
        err.innerText = 'Message field must have text';
        throw new Error('Message field must have text');
    } else {
        err.innerText = '';
        newPost();
    }
})

window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display = 'none';
    }
}

imageInput.addEventListener('change', function(e) {
    // preview
    let url = URL.createObjectURL(e.target.files[0]);
    previewImage.setAttribute('src', url);

}, false);

export { postInput, postContainer, user, imageInput, previewImage, postElement, modal };