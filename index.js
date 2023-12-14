const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const createPost = (content, imageURL) => {
    const postsContainer = document.querySelector('.posts-container');

    const post = document.createElement('div');
    post.classList.add('post','feed');

    post.innerHTML = `
    <div class="user">
    <div class="profile-photo">
        <img src="./images/profile-1.jpg">
    </div>
    <div class="info">
        <h3>Saiyam Jain</h3>
        <small>Lucknow, Just Now</small>
    </div>
    <span class="edit">
        <i class="uil uil-ellipsis-h"></i>
    </span>
</div>
<div class="photo">
    <img src="${imageURL}">
</div>
<div class="action-buttons">
    <div class="interaction-buttons">
        <span><i class="uil uil-heart"></i></span>
        <span><i class="uil uil-comment-dots"></i></span>
        <span><i class="uil uil-share-alt"></i></span>
    </div>
    <div class="bookmark">
        <span><i class="uil uil-bookmark-full"></i></span>
    </div>
</div>
<div class="liked-by">
    <span><img src="./images/profile-10.jpg"></span>
    <span><img src="./images/profile-4.jpg"></span>
    <span><img src="./images/profile-15.jpg"></span>
    <p>Liked by <b>Aniket Singh</b> and <b>2, 23 others</b></p>
</div>
<div class="caption">
    <p><b>Saiyam Jain</b> ${content} <span class="harsh-tag">#lifestyle</span></p>
</div>
<div class="comments text-muted">
    View all 17 comments
</div>
`;


    postsContainer.appendChild(post);
};

const postContent = document.getElementById('postContent');

const handlePostSubmission = (event) => {
    event.preventDefault();

    const content = postContent.value;
    const imagePath = './images/feed-1.jpg';

    if (content.trim() !== '' && imagePath) {
        createPost(content, imagePath);
        postContent.value = '';
    } else {
        alert('Please enter text');
    }
};
const postForm = document.querySelector('.create-post');
postForm.addEventListener('submit', handlePostSubmission);


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex'; 
        } else {
            user.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);
const removeSizeSelectors = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}
fontSize.forEach(size => { 
   size.addEventListener('click', () => {
        removeSizeSelectors();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')) { 
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')) { 
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
   })
})
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass(); 
        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});
