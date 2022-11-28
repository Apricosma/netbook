'use strict'

import { select, onEvent, newPost } from './utility-functions.js'
import { User } from './user-class.js'

// Selectors
const submit = select('.submit-button');
const postInput = select('.input-text');
const postContainer = select('.post-field');
const postElement = select('.user-post');
const modal = select('.modal');
const imageInput = select('.upload-image');
const previewImage = select('.preview');

const user = new User(5, 'Jim', 'Jimbo59', 'Jim@mail.com');

onEvent('click', modal, function () {
    console.log(user.getInfo());
})

onEvent('click', submit, function() {
    newPost();
})

imageInput.addEventListener('change', function(e) {
    previewImage.onload = function() {
        let dims = this.naturalWidth + 'x' + this.naturalHeight;
        document.querySelector('.dimensions').innerHTML = 'Dimensions: ' + dims;
      
        window.URL.revokeObjectURL(this.src);
    };
    let url = URL.createObjectURL(e.target.files[0]);
    previewImage.setAttribute('src', url);
}, false);

export { postInput, postContainer, user, imageInput, previewImage };