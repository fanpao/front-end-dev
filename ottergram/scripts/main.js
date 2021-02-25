const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'
const HIDDEN_DETAIL_CLASS = 'hidden-detail'
const ESC_KEY = 27
const DETAIL_FRAME_SELECTOR ='[data-image-role="frame"]'
const TINY_EFFECT_CLASS ='is-tiny'

function setDetails(imageUrl, titleText){
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR)
    detailImage.setAttribute('src', imageUrl)
    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR)
    detailTitle.textContent=titleText
}

function imageFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-url')
}

function titleFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-title')
}

function setDetailsFromThumb(thumbnail){
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail))
}

function onClick(){
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR)
    for(let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function (event) {
            event.preventDefault()
            setDetailsFromThumb(thumbnails[i])
            showDetails()
        })
    }
}

function hideDetails(){
    document.body.classList.add(HIDDEN_DETAIL_CLASS)
}

function showDetails(){
    document.body.classList.remove(HIDDEN_DETAIL_CLASS)
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR)
    frame.classList.add(TINY_EFFECT_CLASS)
    setTimeout(()=>{
        frame.classList.remove(TINY_EFFECT_CLASS)
    }, 50)
}

function addKeyPressHandler(){
    document.body.addEventListener('keyup', function (event){
        event.preventDefault()
    if(event.keyCode === ESC_KEY){
        hideDetails()
    }
    })
}

onClick()
addKeyPressHandler()

