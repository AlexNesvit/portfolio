// toggle icon navbar


//scroll sections
window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}