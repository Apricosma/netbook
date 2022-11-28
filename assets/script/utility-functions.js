import { postContainer, postInput, user } from './index.js';

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

 function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function newPost() {
    let element = document.createElement('div');
    postContainer.prepend(element);
    element.classList.add('user-post');

    let userImg = document.createElement('i');
    element.appendChild(userImg);
    userImg.classList.add('fa-solid', 'fa-user');

    let headUserName = document.createElement('p');
    element.appendChild(headUserName);
    headUserName.innerText = user.userName;

    let postText = document.createElement('p');
    postText.innerText = postInput.value;
    element.appendChild(postText);

    
}

export { select, onEvent, newPost }