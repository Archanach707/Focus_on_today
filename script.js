const checkBoxList = document.querySelectorAll('.custom-checkbox')

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    // console.log('Checkbox Clicked')
    checkbox.parentElement.classList.add('completed')
  })
})