function menuPage(){
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

    


    let container = document.createElement('div')
    container.classList.add('menu-container')
    
    let header = document.createElement('h2')
    header.classList.add('header')
    header.textContent = 'What Others Are Eating'

    let dispRow1 = document.createElement('div')
    dispRow1.classList.add('disp-row')

    dispRow1.innerHTML = `<div class="card">
    <div class="img-edit food-img-1"></div>
    <div class="food-det">
        <h3 class="name">Tomato Fried Eggs <span class="price">$80</span></h3>
    </div>
</div>
<div class="card">
    <div class="img-edit food-img-2"></div>
    <div class="food-det">
        <h3 class="name">Hot African Tacos <span class="price">$100</span></h3>
    </div>
</div>
<div class="card">
    <div class="img-edit food-img-3"></div>
    <div class="food-det">
        <h3 class="name">African Meat Salad <span class="price">$20</span></h3>
    </div>
</div>`

    let dispRow2 = document.createElement('div')
    dispRow2.classList.add('disp-row')

    dispRow2.innerHTML = `<div class="card">
    <div class="img-edit food-img-4"></div>
    <div class="food-det">
        <h3 class="name">Tortillas Ghana <span class="price">$90 </span></h3>
    </div>
</div>
<div class="card">
    <div class="img-edit food-img-5"></div>
    <div class="food-det">
        <h3 class="name">SandWich Kenya <span class="price">$20</span></h3>
    </div>
</div>
<div class="card">
    <div class="img-edit food-img-6"></div>
    <div class="food-det">
        <h3 class="name">chaskele <span class="price">$20</span></h3>
    </div>
</div>`


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

container.appendChild(topContent)

container.appendChild(header)

container.appendChild(dispRow1)

container.appendChild(dispRow2)

container.appendChild(footer)

contentContainer.appendChild(container)

}

export default menuPage