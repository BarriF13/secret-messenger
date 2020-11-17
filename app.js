const {hash} = window.location;
console.log(atob(hash.replace('#', '')));

document.querySelector('form').addEventListener('submit' , (e)=>{
  e.preventDefault();
 document.querySelector('#message-form').classList.add('hide');
 document.querySelector('#link-form').classList.remove('hide');
  const input= document.querySelector('#message-input')
  //console.log(input.value)
const encrypted = btoa(input.value);
const linkInput = document.querySelector('#link-input');
 linkInput.value = `${window.location}#${encrypted}`;
 linkInput.select();
})