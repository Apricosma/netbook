import { postContainer, postInput, user, imageInput, previewImage, postElement } from './index.js';

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Creates a new post and prepends it to the post container
function newPost() {
    // creates the div its self
    let element = document.createElement('div');
    postContainer.prepend(element);
    element.classList.add('user-post');

    // creates user icon
    let userImg = document.createElement('i');
    element.appendChild(userImg);
    userImg.classList.add('fa-solid', 'fa-user');

    // attaches username from Object
    let headUserName = document.createElement('p');
    element.appendChild(headUserName);
    headUserName.innerText = user.userName;

    // grabs local time and prints
    let date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    let dateText = document.createElement('p');
    dateText.classList.add('date');
    dateText.innerText = `${month} ${date.getDate()}, ${date.getFullYear()}`;
    element.appendChild(dateText);

    // same for time
    let timeText = document.createElement('p');
    timeText.classList.add('time');
    timeText.innerText = `${currentTime(date)}`;
    element.appendChild(timeText);

    // the text of the post submission
    let postText = document.createElement('p');
    postText.classList.add('post-text');
    postText.innerText = postInput.value;
    element.appendChild(postText);

    // reader 
    const reader = new FileReader();
    reader.onload = function () {
        const img = new Image();
        img.src = reader.result;
        element.appendChild(img);
    }
    reader.readAsDataURL(imageInput.files[0]);

}

// outputs the current time in 12-hour format
function currentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let timeString = hours + ':' + minutes + ' ' + ampm;
    return timeString;
}


export { select, onEvent, newPost }