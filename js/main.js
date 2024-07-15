const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}




const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const blurHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
  e.preventDefault()
 
  emailjs.sendForm('service_ztiphrg', 'template_tl394lk', '#contact-form', 'mg4TaD9wId6o49upO')
         .then(() =>{

          contactMessage.textContent = 'Message sent successfully ✅'

          setTimeout(() =>{
            contactMessage.textContent = ''
          }, 3000)

          contactForm.reset()

         }, () =>{
            contactMessage.textContent = 'Message not sent (service error) ❌'

            setTimeout(() =>{
              contactMessage.textContent = ''
            }, 3000)
  
            contactForm.reset()
         })
}

contactForm.addEventListener('submit', sendEmail)




const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                          : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)



const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{ 
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 150,
  reset: true
})

sr.reveal(`.home__data, .home__social,.contact__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__image`, {origin: 'right'})
sr.reveal(`.skills__data`, {origin: 'right'})
sr.reveal(`.skills__content`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card, .footer__container`, {interval: 80})