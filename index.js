
let more = document.querySelector('.more')
let btns = document.querySelectorAll('button')
let img = document.querySelector('.img-screen')
let span = document.querySelector('.span')
let back = document.querySelector('.back')
let imr = document.querySelector('.img-right')
let modalTwo  = document.querySelector('.screen1')
let modal = document.querySelector('.modal')
let search = document.querySelector('.head-img2')
let open_item = document.querySelectorAll('.item')
let cls_btn = document.querySelector('.close_btn')

let iphones = {
    black: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-midnight?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712887881",
    silver: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712887888",
    blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-starlight?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888655",
    green: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128",
    pink: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1657641867367",
    red: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656720518797"
}

more.onclick = () => {
    modalTwo.style.display = 'block'

    setTimeout(() => {
       modalTwo.style.opacity = '1'
       modalTwo.style.transform = 'transform: translate(-50%, -50%) scale(1)'
    },200)
}

btns.forEach((btn) => {
    btn.onclick = () => {
        let color = btn.getAttribute('data-color')
        let imgB = iphones[color]
        img.style.backgroundImage = `url("${imgB} )`
    
        img.style.transition = '1s'
    }
    })
    

    back.onclick = () => {
        modalTwo.style.display = 'none'

        setTimeout(() => {
           modalTwo.style.opacity = '0'
           modalTwo.style.transform = 'transform: translate(-50%, -50%) scale(1)'
        },200)
    }
search.onclick = () => {
    modal.style.display = 'block'

    setTimeout(() => {
       modal.style.opacity = '1'
       modal.style.transform = 'transform: translate(-50%, -50%) scale(1)'
    },200)
}



open_item.forEach(item => {
    item.onclick = () =>{
        item.style.height = '150px'
        item.style.background = 'firebrick'
    }
})


open_item.forEach(itemTwo => {
    itemTwo.onmouseleave = () =>{
        itemTwo.style.height = '55px'
        itemTwo.style.background = 'violet'
    }
})

cls_btn.onclick = () => {
    modal.style.display = 'none'
    modal.style.opacity = '0'
}

let support = document.querySelector('.support_span')

support.onclick = () => {
    support.href = 'https://www.unicef.org/emergencies/war-ukraine-pose-immediate-threat-children'
}