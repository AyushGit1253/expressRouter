const express=require('express')
const router=express.Router()


router.get('/add-product',(req,res,next)=>{
    res.send(
    `<form action="/product" method="POST"><input type="text" name="uname"><input type="text" name="size"><button type="submit">Send</button></form>`)
})

router.post('/product',(req,res,next)=>{
    const uname=req.body.uname
    const size=req.body.size
    console.log(uname)
    console.log(size)
    res.redirect('/')
})

module.exports=router