/* Dark mode */

const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', function () {

    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'Mode clair';
    } else {
        themeToggle.innerText = 'Mode sombre';
    }
});

/* Animation img Index page */

const imgTalk = document.querySelector('.imgTalk');

const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        imgTalk.classList.add('appear');

        observer.unobserve(imgTalk);
    }
});

observer.observe(imgTalk);

