const names=require('./4-names');
const say=require('./5-utils')
console.log(names)
const data=require('./6-alternative-flavour')
console.log(data)
require('./7-mind-greade.js')
//when we have a function inside the module then we can easily run the function without creating an variable.


say(names.john)
say(names.peter)
say('devika')
//modules-encapsulated code(only share minimum)

