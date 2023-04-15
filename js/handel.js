const resetHtml = document.getElementById('reset')
const inputHtml = document.getElementById('input')
const itemsHtml = document.getElementById('items')

window.onload = () => inputHtml.focus()

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    inputHtml.value = ''
    inputHtml.focus()
  }
})

document.addEventListener('click', (event) => {
  event.preventDefault()
  inputHtml.focus()
})

resetHtml.onclick = () => {
  inputHtml.value = ''
  itemsHtml.innerHTML = '...'
}

inputHtml.onkeyup = () =>
  !inputHtml.value.trim() ? (itemsHtml.innerHTML = '...') : fnSearch()

const fnSearch = () => {
  itemsHtml.innerHTML = ''

  const values = fnSortValue()

  const filter = fnFilterSearch(values)

  const result = fnHighlight(values, filter)

  if (result.length === 0) {
    itemsHtml.innerHTML = 'not found'
  } else {
    result.map((item) => {
      itemsHtml.innerHTML += `<div class="item">${item.question}${item.answer}</div>`
    })
  }
}

const fnSortValue = () => {
  const arr = inputHtml.value.trim().split(' ')
  arr.filter((item) => item != '')
  const values = [...new Set(arr)]
  return values.sort((a, b) => b.length - a.length)
}

const fnFilterSearch = (values) => {
  return data.filter((items) => {
    let res = false
    values.forEach((value) => {
      items.que.forEach((item) => {
        if (item.toLowerCase().includes(value.toLowerCase())) {
          res = true
        }
      })
    })
    return res
  })
}

const fnHighlight = (values, array) => {
  const result = []

  array.forEach((items) => {
    const regex = new RegExp(values.join('|'), 'gi')
    const arrOrder = []
    let order1 = 0
    let order2 = 0
    let question = ''
    let answer = ''

    items.que.forEach((item) => {
      question += `<div class="ques">${item.replace(regex, (x) => {
        arrOrder.push(x)
        order2++
        return `<mark>${x}</mark>`
      })}</div>`
    })

    items.ans.forEach((item) => (answer += `<p class="border">${item}</p>`))

    order1 = [...new Set(arrOrder)].length
    result.push({
      order1,
      order2,
      question,
      answer,
    })
  })

  result.sort((a, b) => b.order2 - a.order2)
  result.sort((a, b) => b.order1 - a.order1)

  return result
}
