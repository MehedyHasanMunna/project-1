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
const home = document.querySelectorAll('.home')
const fontColor = document.querySelector('.fontColor')
const menuIcon = document.querySelector('#menuIcon')
const crosssIcon = document.querySelector('#crosssIcon')
const smallDeviceMenu = document.querySelector('.smallDeviceMenu')
const me = document.querySelectorAll('.me')
const bg = document.querySelector('.addbg')
const briefcase = document.querySelectorAll('.briefcase')
const stroke = document.querySelectorAll('.stroke')
const onemore = document.querySelectorAll('.onemore')





one.addEventListener('click', function () {
    addRemoveClass('bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox1', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
    strokes('str1', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7', 'str8', 'str9', 'str10')
    backgAfter('backg1','backg2','backg3','backg4','backg5','backg6','backg7','backg8','backg9','backg10')
})
two.addEventListener('click', function () {
    addRemoveClass('bg2', 'bg1', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox2', 'iconBox1', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl2', 'cl1', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
    strokes('str2', 'str1', 'str3', 'str4', 'str5', 'str6', 'str7', 'str8', 'str9', 'str10')
    backgAfter('backg2','backg1','backg3','backg4','backg5','backg6','backg7','backg8','backg9','backg10')
})
three.addEventListener('click', function () {
    addRemoveClass('bg3', 'bg1', 'bg2', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox3', 'iconBox2', 'iconBox1', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl3', 'cl2', 'cl1', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
    strokes('str3', 'str2', 'str1', 'str4', 'str5', 'str6', 'str7', 'str8', 'str9', 'str10')
    backgAfter('backg3','backg2','backg1','backg4','backg5','backg6','backg7','backg8','backg9','backg10')
})
four.addEventListener('click', function () {
    addRemoveClass('bg4', 'bg1', 'bg2', 'bg3', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox4', 'iconBox2', 'iconBox3', 'iconBox1', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl4', 'cl2', 'cl3', 'cl1', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
    strokes('str4', 'str2', 'str3', 'str1', 'str5', 'str6', 'str7', 'str8', 'str9', 'str10')
    backgAfter('backg4','backg2','backg3','backg1','backg5','backg6','backg7','backg8','backg9','backg10')
})
five.addEventListener('click', function () {
    addRemoveClass('bg5', 'bg1', 'bg2', 'bg3', 'bg4', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox5', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox1', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl5', 'cl2', 'cl3', 'cl4', 'cl1', 'cl6', 'cl7', 'cl8', 'cl9', 'cl10')
    strokes('str5', 'str2', 'str3', 'str4', 'str1', 'str6', 'str7', 'str8', 'str9', 'str10')
    backgAfter('backg4','backg2','backg3','backg4','backg1','backg6','backg7','backg8','backg9','backg10')
})
six.addEventListener('click', function () {
    addRemoveClass('bg6', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg7', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox6', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox1', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl6', 'cl2', 'cl3', 'cl4', 'cl1', 'cl1', 'cl7', 'cl8', 'cl9', 'cl10')
    strokes('str6', 'str2', 'str3', 'str4', 'str5', 'str1', 'str7', 'str8', 'str9', 'str10')
    backgAfter('backg6','backg2','backg3','backg4','backg5','backg1','backg7','backg8','backg9','backg10')
})
seven.addEventListener('click', function () {
    addRemoveClass('bg7', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg8', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox7', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox1', 'iconBox8', 'iconBox9', 'iconBox10')
    addColor('cl7', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl1', 'cl8', 'cl9', 'cl10')
    strokes('str7', 'str2', 'str3', 'str4', 'str5', 'str6', 'str1', 'str8', 'str9', 'str10')
    backgAfter('backg7','backg2','backg3','backg4','backg5','backg6','backg1','backg8','backg9','backg10')
})
eight.addEventListener('click', function () {
    addRemoveClass('bg8', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg9', 'bg10')
    addRemoveClassTwo('iconBox8', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox1', 'iconBox9', 'iconBox10')
    addColor('cl8', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl1', 'cl9', 'cl10')
    strokes('str8', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7', 'str1', 'str9', 'str10')
    backgAfter('backg8','backg2','backg3','backg4','backg5','backg6','backg7','backg1','backg9','backg10')
})
nine.addEventListener('click', function () {
    addRemoveClass('bg9', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg10')
    addRemoveClassTwo('iconBox9', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox1', 'iconBox10')
    addColor('cl9', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl1', 'cl10')
    strokes('str9', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7', 'str8', 'str1', 'str10')
    backgAfter('backg9','backg2','backg3','backg4','backg5','backg6','backg7','backg8','backg1','backg10')
})
ten.addEventListener('click', function () {
    addRemoveClass('bg10', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9')
    addRemoveClassTwo('iconBox10', 'iconBox2', 'iconBox3', 'iconBox4', 'iconBox5', 'iconBox6', 'iconBox7', 'iconBox8', 'iconBox9', 'iconBox1')
    addColor('cl10', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cl7', 'cl8', 'cl9', 'cl1')
    strokes('str10', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7', 'str8', 'str9', 'str1')
    backgAfter('backg10','backg2','backg3','backg4','backg5','backg6','backg7','backg8','backg9','backg1')


})


function addRemoveClass(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {


    [...home].forEach((e) => {
        e.classList.add(bg1)
        e.classList.remove(bg2)
        e.classList.remove(bg3)
        e.classList.remove(bg4)
        e.classList.remove(bg5)
        e.classList.remove(bg6)
        e.classList.remove(bg7)
        e.classList.remove(bg8)
        e.classList.remove(bg9)
        e.classList.remove(bg10)
    });

    [...briefcase].forEach((ele) => {
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
    });
    bg.classList.add(bg1)
    bg.classList.remove(bg2)
    bg.classList.remove(bg3)
    bg.classList.remove(bg4)
    bg.classList.remove(bg5)
    bg.classList.remove(bg6)
    bg.classList.remove(bg7)
    bg.classList.remove(bg8)
    bg.classList.remove(bg9)
    bg.classList.remove(bg10)

}

function addRemoveClassTwo(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {

    ;
    [...iconBox].forEach((ele) => {
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
    [...me].forEach((ele) => {
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



function strokes(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {

    [...stroke].forEach((ele) => {
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
    });
}

function backgAfter(bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10) {

    [...onemore].forEach((ele) => {
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
    });
}






clickIcon.addEventListener('click', function () {
    clickIcon.classList.add('gearIcon')
    colorChanger.classList.add('changer')
})

crossIcon.addEventListener('click', function () {
    clickIcon.classList.remove('gearIcon')
    colorChanger.classList.remove('changer')
})

menuIcon.addEventListener('click', function () {
    smallDeviceMenu.classList.add('smallDeviceMenuActive')
    crosssIcon.classList.add('add')
    crosssIcon.classList.remove('remove')
    menuIcon.classList.add('remove')
    menuIcon.classList.remove('add')

})

crosssIcon.addEventListener('click', function () {
    smallDeviceMenu.classList.remove('smallDeviceMenuActive')

    crosssIcon.classList.add('remove')
    crosssIcon.classList.remove('add')
    menuIcon.classList.add('add')
    menuIcon.classList.remove('remove')

})