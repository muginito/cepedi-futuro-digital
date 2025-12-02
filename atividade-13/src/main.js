const input = document.getElementById('input')
const bttnAdd = document.getElementById('bttnAdd')
const ul = document.getElementById('list')

bttnAdd.addEventListener('click', () => {

    if (input.value.trim() == '') {
        return
    }

    const newDiv = document.createElement('div')

    const listItem = document.createElement('li')
    listItem.textContent = input.value

    const bttnRemove = document.createElement('button')
    bttnRemove.textContent = '🗑'
    bttnRemove.addEventListener('click', () => newDiv.remove())

    newDiv.append(listItem)
    newDiv.append(bttnRemove)

    ul.append(newDiv)
    input.value = ''
})
