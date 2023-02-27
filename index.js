const chk = document.getElementById('chk')

chk.addEventListener('change', ()=>{
  document.body.classList.toggle('dark')
  document.text.classList.toggle('text')
})

const text = document.getElementById('message')

text.addEventListener('change', ()=>{
   document.text.classList.toggle('text')
})
