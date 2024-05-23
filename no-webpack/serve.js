const { serve } = require('@brightspot/styleguide')
const express = require('express')
const app = express()

app.use(serve('./styleguide'))
app.listen(8080)
