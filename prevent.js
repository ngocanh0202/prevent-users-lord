// Preventing the user from taking a screenshot
window.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
        // add a class to the sensitive content
        document.querySelector('.sensitive-content').classList.add('sensitive-content-blocked');
        console.log('User tried to take a screenshot');
        // remove class when user stop screenshot
        setTimeout(() => {
            document.querySelector('.sensitive-content').classList.remove('sensitive-content-blocked');
        }, 1000);
    }
});

// prevent user change tab and alert user
// window.addEventListener('blur', function (e) {
//     alert('Please do not change the tab');
// });

// Preventing the user from copying the content
document.addEventListener('copy', function (e) {
    e.preventDefault();
    console.log('User tried to copy the content');
    alert('User tried to copy the content');
});

// Preventing the user from pasting the content
document.addEventListener('paste', function (e) {
    e.preventDefault();
    console.log('User tried to paste the content');
    alert('User tried to paste the content');
});
// prevent user cut content
document.addEventListener('cut', function (e) {
    e.preventDefault();
    console.log('User tried to cut the content');
    alert('User tried to cut the content');
});
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // The tab has become inactive or a screenshot has been taken
        alert('Please do not change the tab!');
    }
});