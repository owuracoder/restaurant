import "@fortawesome/fontawesome-free/css/all.css";

import './styles.css'

import homepage from './page-load'

import menupage from './menu-page'

import contactpage from './contact-page'


function uiController(){
    homepage()

    addListeners().menuBtn
    addListeners().contactBtn
    addListeners().homeBtn

    function renderHomePage(){
        setUpPage(homepage)
    }

    function renderContactPage(){
        setUpPage(contactpage)
    }

    function renderMenuPage(){
        setUpPage(menupage)
    }

    function setUpPage(btnPage){
        clearPage()
        btnPage()
        addListeners().contactBtn
        addListeners().menuBtn
        addListeners().homeBtn
    }

    function addListeners(){
        const menuBtn = document.getElementById('menu')

        const contactBtn = document.getElementById('contact')
        
        const homeBtn = document.getElementById('home')

        homeBtn.addEventListener('click',renderHomePage)
    
        contactBtn.addEventListener('click',renderContactPage)
    
        menuBtn.addEventListener('click',renderMenuPage)

        return {
            menuBtn,
            contactBtn,
            homeBtn
        }
    }

    function clearPage(){
        const content = document.getElementById('content')

        while(content.firstChild){
            content.lastChild.remove()
        }
    }
}

uiController()




