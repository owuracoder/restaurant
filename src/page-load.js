
function pageLoad(){
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

    contentContainer.appendChild(topContent)


    let centerContent = document.createElement('div')
    centerContent.classList.add('center-content')

    let centerItem = document.createElement('div')
    centerItem.classList.add('center-item')
    centerItem.innerHTML = `<h3>The best selection of healthy food for your heavenly experience</h3>`

    let addressBar = document.createElement('div')
    addressBar.classList.add('address-bar')

    addressBar.innerHTML = `<div class="loc"><i class="fas fa-map-marker-alt fa-lg"></i></div>
    <input class="address" type="text" placeholder="Enter Delivery Address"
    ><div class="arrow-box"><i class="fas fa-arrow-right"></i></div>`

    centerContent.appendChild(centerItem)

    centerContent.appendChild(addressBar)



    contentContainer.appendChild(centerContent)



    let foodDisp1 = document.createElement('div')
    foodDisp1.classList.add('food-disp-1')
    foodDisp1.id = 'food-disp'

    let textDescription1 = document.createElement('div')

    textDescription1.classList.add('text-description-1')

    let text1 = document.createElement('div')
    text1.classList.add('text-1')

    text1.innerHTML = `<h3>WE have The best Quality food for you</h3>
    <p>Discover the kinds of food that will make you salivate at every sight at the same time making you healthy and hot as fuck</p>
    <button>I need This</button>`

    textDescription1.appendChild(text1)

    foodDisp1.appendChild(textDescription1)

    let imgDesc = document.createElement('div')

    imgDesc.classList.add('img-desc')

    foodDisp1.appendChild(imgDesc)

    contentContainer.appendChild(foodDisp1)

    let foodDisp2 = document.createElement('div')
    foodDisp2.classList.add('food-disp-2')

    foodDisp2.id = 'food-disp'

    let textDescription2 = document.createElement('div')
    textDescription2.classList.add('text-description-2')

    let text2 = document.createElement('div')
    text2.classList.add('text-2')
    text2.innerHTML = `<h3 class="head">Get whatever cuisine you have ever dreamt about here</h3>
    <p class="desc">Finding a well prepared food with passion and care in mind is the type of food you need for your body. We give you a world class meal with particular attention to detail</p>
    <button class="btn">I Want This</button>`

    textDescription2.appendChild(text2)

    let imgDesc1 = document.createElement('div')
    imgDesc1.classList.add('img-desc-1')

    foodDisp2.appendChild(textDescription2)

    foodDisp2.appendChild(imgDesc1)

    contentContainer.appendChild(foodDisp2)

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

 contentContainer.appendChild(footer)
}

export default pageLoad