let input = document.querySelector('#check');
let form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let data = input.value.trim();
  
  isPalindrome(`${data}`);
}
)

function isPalindrome(param) {
 let clean = param.replace(/[^a-z0-9]/gi, '').toLowerCase();
let joins = clean.split('').reverse().join('');
   alert(` the palindrome is ${(joins === clean)}`);

}

