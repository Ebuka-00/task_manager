import app from './src/routes/app.js'

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

