const aboutUs = document.getElementById('about')
const team = document.getElementById('team')
const photos = document.getElementById('photos')
const contact = document.getElementById('contact')


const aboutUsBlock = document.getElementById('aboutusblock')

function scrollToElement(theElement) {
    var selectedPosX = 0;
    var selectedPosY = 0;
    while (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }window.scrollTo(selectedPosX,selectedPosY);
}

aboutUs.onclick = ()=>{
    scrollToElement(aboutUsBlock)
}