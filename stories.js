const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemHeight = 20
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollDown -= itemHeight + padding
})

next.addEventListener('click',()=>{
  list.scrollDown += itemHeight + padding
})




function openBook(evt, bookName) {
  var i, SmallWindow, items;
  SmallWindow = document.getElementsByClassName("SmallWindow");
  for (i = 0; i < SmallWindow.length; i++) {
    SmallWindow[i].style.display = "none";
  }
  
  items = document.getElementsByClassName("item");
  document.getElementById(bookName).style.display = "block";
}
  
