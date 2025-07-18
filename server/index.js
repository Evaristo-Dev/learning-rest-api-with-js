const express = require('express')
app = express()
app.use('/', require('./route/postsRoute'))

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});