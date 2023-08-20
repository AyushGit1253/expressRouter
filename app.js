const http=require('http')

const express=require('express')

const bodyParser=require('body-parser')

const app=express()

const adminRoute=require('./admin')
const shopRoute=require('./shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/shop',shopRoute)
//shoproute contains './' route so welcome should print at /add-product if we refresh since '/' matches
//but since we use router.get/post..now ordering will not have role and jo bhi path hoga add-product ka woi run hoga
app.use('/admin',adminRoute)

//if no path matches the give 404 error

app.get('/', (req, res, next) => {
    res.send('<h1>welcome to express</h1>');
});

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(3000)