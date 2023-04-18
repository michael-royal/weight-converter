var input = document.getElementById('input')
var rit = document.getElementById('rit')
rit.style.display = 'none'

var rita = document.getElementById('rita')
rita.style.display = 'none'

var rital = document.getElementById('rital')
rital.style.display = 'none'


input.addEventListener('change', ()=>{

  var rit = document.getElementById('rit')
rit.style.display = 'block'

var rita = document.getElementById('rita')
rita.style.display = 'block'

var rital = document.getElementById('rital')
rital.style.display = 'block'
  var inpu = document.getElementById('input').value
  var grams = document.getElementById('gramoutput').innerHTML = inpu/0.0022046
  var kilo = document.getElementById('kilooutput').innerHTML = inpu/2.2046
  var ounce = document.getElementById('ounceoutput').innerHTML = inpu*16
})