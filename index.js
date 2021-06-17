const fs = require('fs')

const data = `
    Hello from NodeJs
    I am random text!
`

fs.writeFileSync('nodejs.txt', data)

const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'})

console.log(__dirname)
console.log(__filename)