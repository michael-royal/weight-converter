var input = document.getElementById('input')
input.addEventListener('change', ()=>{
  var inpu = document.getElementById('input').value
  var grams = document.getElementById('gramoutput').innerHTML = inpu/0.0022046
  var kilo = document.getElementById('kilooutput').innerHTML = inpu/2.2046
  var ounce = document.getElementById('ounceoutput').innerHTML = inpu*16
})