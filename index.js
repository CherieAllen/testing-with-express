import express, {json} from "express";


const app = express()
app.use(json())

app.get("/pets",(req,res)=>{
    
    res.send('All the pets I loved before!')
})



const PORT = 3030
app.listen(PORT,()=> {
    console.log(`We are listening on http://localhost:${PORT}/pets`)
})

export default app;