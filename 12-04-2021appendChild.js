//create list items as children in js file and assign the text "hi there" to each list item ('ul' exists in HTML with no children)
//practice for menus/navbars

for(i = 0; i < 5; i++) {
    let unorderedList = document.querySelector('ul')
    let listItem = document.createElement('li')
    let content = listItem.innerHTML = "hi there"
    unorderedList.appendChild(listItem)
  }
  