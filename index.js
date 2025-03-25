const express = require('express');
const phones = require('./phones.json')
const app = express();
const port = 5000;


app.get('/', (req, res)=>{
    res.send('Phones data loading...')
});

app.get('/phones', (req, res)=>{
    res.send(phones)
})


app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const find = phones.find(phone => phone.id === id) || {}
    res.send(find)
})

app.listen(port, ()=>{ console.log(`lisening on port ${port}`)} )


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })