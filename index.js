require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

const app = express();
app.use(express.json());


app.use("/", require('./routes/employees'))
app.get('/', async (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});