import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/profile/:handle', (req, res) => {
  const { handle } = req.params
  res.json({ handle, total_usd: 12345.67, last_updated: Date.now() })
})

app.listen(, () => console.log('Backend running on port '))
