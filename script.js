const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

const cardList = document.querySelectorAll('.card')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerHTML = count++


  newCard.addEventListener('click', () => {
    newCard.remove()
  })
  container.append(newCard)
})

// For removeing card but it is not a good practice
// cardList.forEach((card) => {
//   console.log(card);
//   card.addEventListener('click', () => {
//     card.remove()
//   })
// })


container.addEventListener('click', (e) => {
  if(e.target !== container) {
    e.target.remove()
  }
})
