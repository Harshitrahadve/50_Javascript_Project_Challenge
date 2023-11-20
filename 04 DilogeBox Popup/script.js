const show = document.querySelector('#ShowDialog')
const close = document.querySelector('#CloseDialog')
const dialogBox = document.querySelector('.dialogBox')

// show.addEventListener('click', () => {
//     dialogBox.showModal()
// })

// close.addEventListener('click', () => {
//     dialogBox.close('')
// })

show.addEventListener('click', () => {
    dialogBox.showModal();
})

close.addEventListener('click', () => {
    dialogBox.close();
})