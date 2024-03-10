const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/first..txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`)
//if there any any values intially in that result file then the node overwrites that value .if u want to append anything then inclue{flag:'ur text}