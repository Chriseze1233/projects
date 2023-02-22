const about_container = document.querySelector('.aboutCont');
const btn_about = document.querySelectorAll('.btn-about');
const content_about = document.querySelectorAll('.content');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const nightMode = document.querySelector('.night-mode');

about_container.addEventListener('click', (e) => {
    let targetted = e.target.dataset.id;
    if(targetted) {
        btn_about.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        content_about.forEach((content) => {
            content.classList.remove('active');           
        })
        const show_content = document.getElementById(targetted);
        show_content.classList.add('active');
    }
})

window.addEventListener('scroll', () => {
    let scrol_Y = window.scrollY;
    if(scrol_Y > 120) {
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll')
    }
})

nav.addEventListener('click', (e) => {
    const links = nav.querySelectorAll('a');
    if(!e.target.classList.contains('active')) {
        // for(i = 0; i < links.length; i++) {
            links.forEach((link) => {
                link.classList.remove('active');
                e.target.parentElement.classList.add('active');
                // console.log(e.target);
                // document.body.style.background = "yellow"
            })
            // }
    }
})

nightMode.addEventListener('click', () => {
    nightMode.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
    // document.body.style.background = "red";
})