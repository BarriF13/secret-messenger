document.querySelector('form').addEventListener('submit' , (e)=>{
  e.preventDefault();
  const input= document.querySelector('#message-input')
  //console.log(input.value)
const encrypted = btoa(input.value);
const linkInput = document.querySelector('#link-input');
 linkInput.value = `${window.location}#${encrypted}`;
 linkInput.select();
})