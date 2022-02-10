buttons = document.querySelectorAll('button');
for (items of buttons) {
  items.addEventListener('click', (e) => {
    texts.style.color = e.target.value
  })}
  
  cols.addEventListener('click',()=>{
    texts.style.color=inp1.value
    texts.style.fontSize=selection.value+'px'
    if(selection.value>100){
      selection.value=100
    }
    texts.style.fontFamily=fontselection.value
  })
