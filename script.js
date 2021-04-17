const clickIcon = document.querySelector('#icon')
const crossIcon = document.querySelector('.crossIcon')
const colorChanger = document.querySelector('.colorChanger')
const background = document.querySelector('.background')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const ten = document.querySelector('.ten')

const iconBox = document.querySelectorAll('.iconBox')
const a=document.querySelector('.a')
const home = document.querySelectorAll('.home')

const fontColor = document.querySelector('.fontColor')
const menuIcon = document.querySelector('#menuIcon')
const crosssIcon = document.querySelector('#crosssIcon')
const smallDeviceMenu = document.querySelector('.smallDeviceMenu')



one.addEventListener('click', function () {
    addRemoveClass('bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox1', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
})
two.addEventListener('click', function () {
    addRemoveClass('bg2', 'bg1', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox2', 'iconBox1', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl2', 'cl1', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
})
three.addEventListener('click', function () {
    addRemoveClass('bg3', 'bg1', 'bg2', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox3', 'iconBox2', 'iconBox1', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl3', 'cl2', 'cl1', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
})
four.addEventListener('click', function () {
    addRemoveClass('bg4', 'bg1', 'bg2', 'bg3', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox4', 'iconBox2', 'iconBox3', 'iconBox1', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl4', 'cl2', 'cl3', 'cl1', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
})
five.addEventListener('click', function () {
    addRemoveClass('bg5', 'bg1', 'bg2', 'bg3', 'bg4', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox5', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox1', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl5', 'cl2', 'cl3', 'cl4', 'cl1', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
})
six.addEventListener('click', function () {
    addRemoveClass('bg6', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox6', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox1', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl6', 'cl2', 'cl3', 'cl4', 'cl1', 'cl1', 'cl7', 'cl8', 'cl9', 'cl10')
})
seven.addEventListener('click', function () {
    addRemoveClass('bg7', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox7', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox1', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl7', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl1', 'cl8', 'cl9', 'cl10')
})
eight.addEventListener('click', function () {
    addRemoveClass('bg8', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox8', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox1', 'iconBox9', 'iconBox10')
    addColor('cl8', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl1', 'cl9', 'cl10')
})
nine.addEventListener('click', function () {
    addRemoveClass('bg9', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg10')
    addRemoveClassTwo('iconBox9', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox1', 'iconBox10')
    addColor('cl9', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl1', 'cl10')
})
ten.addEventListener('click', function () {
    addRemoveClass('bg10', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9')
    addRemoveClassTwo('iconBox10', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox1')
    addColor('cl10', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl1')

})


function addRemoveClass(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {
    background.classList.add(bg1)
    background.classList.remove(bg2)
    background.classList.remove(bg3)
    background.classList.remove(bg4)
    background.classList.remove(bg5)
    background.classList.remove(bg6)
    background.classList.remove(bg7)
    background.classList.remove(bg8)
    background.classList.remove(bg9)
    background.classList.remove(bg10)




    a.classList.add(bg1)
    a.classList.remove(bg2)
    a.classList.remove(bg3)
    a.classList.remove(bg4)
    a.classList.remove(bg5)
    a.classList.remove(bg6)
    a.classList.remove(bg7)
    a.classList.remove(bg8)
    a.classList.remove(bg9)
    a.classList.remove(bg10)

    ;[...home].forEach((home)=>{
        home.classList.add(bg1)
        home.classList.remove(bg2)
        home.classList.remove(bg3)
        home.classList.remove(bg4)
        home.classList.remove(bg5)
        home.classList.remove(bg6)
        home.classList.remove(bg7)
        home.classList.remove(bg8)
        home.classList.remove(bg9)
        home.classList.remove(bg10)
    })

 


}

function addRemoveClassTwo(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {
   [...iconBox].forEach((ele)=>{
    ele.classList.add(bg1)
    ele.classList.remove(bg2)
    ele.classList.remove(bg3)
    ele.classList.remove(bg4)
    ele.classList.remove(bg5)
    ele.classList.remove(bg6)
    ele.classList.remove(bg7)
    ele.classList.remove(bg8)
    ele.classList.remove(bg9)
    ele.classList.remove(bg10)
   })
}

function addColor(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {
    fontColor.classList.add(bg1)
    fontColor.classList.remove(bg2)
    fontColor.classList.remove(bg3)
    fontColor.classList.remove(bg4)
    fontColor.classList.remove(bg5)
    fontColor.classList.remove(bg6)
    fontColor.classList.remove(bg7)
    fontColor.classList.remove(bg8)
    fontColor.classList.remove(bg9)
    fontColor.classList.remove(bg10)
}


clickIcon.addEventListener('click', function () {
    clickIcon.classList.add('gearIcon')
    colorChanger.classList.add('changer')
})

crossIcon.addEventListener('click', function () {
    clickIcon.classList.remove('gearIcon')
    colorChanger.classList.remove('changer')
})

menuIcon.addEventListener('click',function(){
    smallDeviceMenu.classList.add('smallDeviceMenuActive')
    crosssIcon.classList.add('add')
    crosssIcon.classList.remove('remove')
    menuIcon.classList.add('remove')
    menuIcon.classList.remove('add')
    
})

crosssIcon.addEventListener('click',function(){
    smallDeviceMenu.classList.remove('smallDeviceMenuActive')
    
    crosssIcon.classList.add('remove')
    crosssIcon.classList.remove('add')
    menuIcon.classList.add('add')
    menuIcon.classList.remove('remove')
})