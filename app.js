const http=require('http')

const express=require('express')

const bodyParser=require('body-parser')

const app=express()

const adminRoute=require('./admin')
const shopRoute=require('./shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use(shopRoute)
//shoproute contains './' route so welcome should print at /add-product if we refresh since '/' matches
//but since we use router.get/post..now ordering will not have role and jo bhi path hoga add-product ka woi run hoga
app.use(adminRoute)


app.listen(3000)