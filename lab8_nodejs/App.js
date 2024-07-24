console.log('\n-----Example1: gloabal object, console -----')
console.log('welcome to NODEJS by Ebboni ')
console.warn ('WARNING! The file is corrupt')
console.error('SYNTAX ERROR! check spelling')
console.trace ('Trace error in line')

console.log('------Eaxmple2: gloabal object, timer----')
setTimeout(()=>{console.warn('time is over')},3000)

let count=9
const timer = setInterval(()=>{
  console.log(`Counting ${count}`)
  count-=1
  if (count==0){clearInterval(timer)
    }
},2000)

console.log('-------Eample 3: check or print directory or file----')
console.log (`current directory ${__dirname}`)
console.log(`current file ${__filename}`)

console.log ('----Example 4: working with differnt module---')
//import the module
const name = require ('./mod')

console.log(name.helper("Martha"))
console.log (name.id(123))
console.log(name.email("abcdef@abc.com"))

console.log ('\n---- Example 5: nodejs event module-----')
//import the nodjs module events
const events = require('events')

//use constructor new to create an object of events
const eventEmitter = new events.EventEmitter()

eventEmitter.on ('test', function(e){
    console.log(e)
})

eventEmitter.emit('test', 'EVENT EMITTERS IN NODEJS')

console.log('\n---Example 6: read file-----')
const fs = require('fs')
fs.readFile('readmore.txt','utf-8', function(error,data){
  console.log(data)
console.log(`Error = ${error}`)
})

console.log('\n ----- Example 7 write file in nodejs ---')
let info="this file has three names: \n1. Ebbon\n2. Jay\n3. Em"
fs.writeFile('readmore.txt',info, function(error){
  if(error){
    console.log(error)
  }
})

console.log ('\nexample 8: append data into exisitng file------')
fs.appendFile("user_emails.txt",info,function(error){
  if(error){console.log(error)}
})

console.log ('\n example 9: remove file------')
fs.unlink('user_emails.txt',(error)=>{
  if(error){console.log(error)}
})


console.log ('\nexample 10: create file------')
//.writeFile(), .appendFile(), .open()
fs.open ('newfile.txt','w', function(err){
  if (err) {console.log(err)}
  else{console.log('File saved')}
})

console.log ('\n---- Example 11: create directory-----')
fs.mkdirSync('new_directory')




console.log ('\n---- Example 12: -----')