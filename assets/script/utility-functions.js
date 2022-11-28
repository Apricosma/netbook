import { postContainer, postInput, user, imageInput, previewImage } from './index.js';

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
    let userImg = document.createElement('img');
    userImg.src = "./assets/media/vecteezy_girl-flat-design-avatar-with-angry-face-for-profile-picture_7819618.png"
    userImg.classList.add('user-img');
    element.appendChild(userImg);
    

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

    // reader object
    const reader = new FileReader();

    reader.onload = function () {
        const img = new Image();
        img.src = reader.result; 
        element.appendChild(img); // appends the result of the reader to element
        
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

function populateModal() {
    const userName = select('.user-name');
    const name = select('.name');
    const email = select('.email');
    const id = select('.id');
    const pages = select('.pages');
    const groups = select('.groups');
    const subscribed = select('.subscribed')
    console.log(user.getInfo());

    userName.innerText = user.userName;
    name.innerText = user.name;
    email.innerText = user.email;
    id.innerText = `Account ID: ${user.id}`;

    let pageList = user.pages;
    pages.innerText = `My pages: ${pageList.join(', ')}`;
    
    if (user.canMonetize) {
        subscribed.innerText = `Monetization: Enabled`
    }

    let groupList = user.groups;
    groups.innerText = `Groups: ${groupList.join(', ')}`;
}

function openModal() {
    let overlay = select('.overlay');
    overlay.style.display = 'block';
}

export { select, onEvent, newPost, populateModal, openModal }