let buttons = document.querySelectorAll('i')


buttons.forEach(id =>{
    id.addEventListener('click', e =>{
        console.log(id)
    })
})