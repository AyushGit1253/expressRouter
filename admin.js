const express=require('express')
const router=express.Router()

//router.get matches both path and method..means './' and path which is get/post 
//use only mathes path and not method

//in url we type /add-product but isse smjh nai arha ki kis chiz ka product hai
//like abhi admin ka product hai toh url m admin/add-product hona chaiyea
//ab ya toh sare request m admin/ add krdo ya app.js m ek br add krdo bs
//router.get('/admin/add-product)

router.get('/add-product',(req,res,next)=>{
    res.send(
    `<form action="/admin/product" method="POST"><input type="text" name="uname"><input type="text" name="size"><button type="submit">Send</button></form>`)
})

router.post('/product',(req,res,next)=>{
    const uname=req.body.uname
    const size=req.body.size
    console.log(uname)
    console.log(size)
    res.redirect('/shop')
})

module.exports=router