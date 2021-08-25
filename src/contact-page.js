function contact(){
    const contentContainer = document.getElementById('content')

    let topContent = document.createElement('div')
    topContent.classList.add('top-content')

    let logoBrand = document.createElement('div')
    logoBrand.classList.add('logo-brand')

    logoBrand.innerHTML = `<a id='home' href="#"><i class="fas fa-utensils fa-2x"></i><span id="text">CHOP BETTER</span></a>`

    let navigationBtn = document.createElement('div')
    navigationBtn.classList.add('mem-section')

    navigationBtn.innerHTML = `<h3 id="menu" class="active"><a href="#">Menu</a></h3>
    <h3 id="contact" class="active"><a href="#">Contact</a></h3>`

    topContent.appendChild(logoBrand)
    topContent.appendChild(navigationBtn)



    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')

    contactContainer.innerHTML = `<h2 class="contact-head">Hello How Can We Help?</h2>
    <h3 class="contact-sub">Got a question or an idea? <br> We would love to hear from you</h3>
    <button class="contact-btn">Contact us</button>`

    let footer = document.createElement('div')
    footer.classList.add('footer')

    footer.innerHTML = `<ul class="foot-items foot-items-1">
    <h3>Get to Know Us</h3>
    <li><a href="">Careers</a></li>
    <li><a href="">Investors</a></li>
    <li><a href="">Company Blog</a></li>
</ul>
<ul class="foot-items foot-items-2">
    <h3>Support</h3>
    <li><a href="">Help center</a></li>
    <li><a href="">Shipping information</a></li>
    <li><a href="">Contact Us</a></li>
</ul>
<ul class="foot-items foot-items-3">
    <h3>Explore</h3>
    <li><a href="">Our Story</a></li>
    <li><a href="">Outreach Programs</a></li>
    <li><a href="">Meal Plans</a></li>
</ul>
<ul class="foot-items foot-items-4">
    <h3>Follow</h3>
    <li><a href=""><i class="fab fa-instagram"></i></a></li>
    <li><a href=""><i class="fab fa-facebook"></i></a></li>
    <li><a href=""><i class="fab fa-youtube"></i></a></li>
</ul>`
    contentContainer.appendChild(topContent)
    contentContainer.appendChild(contactContainer)
    contentContainer.appendChild(footer)

}

export default contact