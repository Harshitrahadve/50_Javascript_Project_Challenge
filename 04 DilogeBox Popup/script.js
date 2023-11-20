const show = document.getElementById('ShowDialog')
const close = document.getElementById('CloseDialog')
const dialogBox = document.querySelector('.dialogBox')


show.addEventListener('click', ()=> {
    dialogBox.showModal()
})

close.addEventListener('click', () => {
    dialogBox.close('')
})


console.log('this is sript');