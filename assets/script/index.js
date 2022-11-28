'use strict'

import { select, onEvent, newPost } from './utility-functions.js'
import { User } from './user-class.js'

// Selectors
const submit = select('.submit-button');
const postInput = select('.input-text');
const postContainer = select('.post-field');
const postElement = select('.user-post');
const modal = select('.modal');

const user = new User(5, 'Jim', 'Jimbo59', 'Jim@mail.com');

onEvent('click', modal, function () {
    console.log(user.getInfo());
})

onEvent('click', submit, function() {
    newPost();
})

export { postInput, postContainer, user };