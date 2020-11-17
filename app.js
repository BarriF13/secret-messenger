document.querySelector('form').addEventListener('submit' , (e)=>{
  e.preventDefault();
  const input= document.querySelector('#message-input')
  //console.log(input.value)
const encrypted = btoa(input.value);
 document.querySelector('#link-input').value = encrypted;
})