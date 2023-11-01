const app=require('./app')

const port = 8000

//listen the activity  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
