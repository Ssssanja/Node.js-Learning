const express = require('express')

const app = express()

app.get('/', (req, res) => { //первый параметр - роут (слэш), второй - функция, кот. принимает реквэст и респонс
    res.end('Hello from nodeJS')
})

app.listen(3000, ()=> {  //первый параметр - порт, на котором запускаем сервер, второй - колбэк
    console.log('Server has started on port 3200...')
})