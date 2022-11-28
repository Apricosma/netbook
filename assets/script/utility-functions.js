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

    let date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    let dateText = document.createElement('p');
    dateText.classList.add('date');
    dateText.innerText = `${month} ${date.getDate()}, ${date.getFullYear()}`;
    element.appendChild(dateText);

    let timeText = document.createElement('p');
    timeText.classList.add('time');
    timeText.innerText = `${currentTime(date)}`;
    element.appendChild(timeText);

    let postText = document.createElement('p');
    postText.innerText = postInput.value;
    element.appendChild(postText);
}

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