Middlewares
suppose i want to buy a land and i will contact to broker he will check wether i have funds or i am a fruad he will ask my details 
dumbest dalali method is using conditionals in a method this will lead in excessive and violates code repetiton 
the file dumbAuthVal.js show the dumbest dalaali 

the cleaner way is to do dalaali is via middlewares 
the file middlewares.js have two function both takes input of req,res,next one checks user existance and other checks about correct input
middlewares are callback fns that are given to the Request Methods after declaring routes and before the last callback .

app.use(); this is used when we need a middleware in every routes 
suppose their is another check is heart health checkup there also i will need user authentication so i can use that user check middleware in app.use

global catches help us to give better message to client it takes 4 inputs 
app.use((err,req,res,next)=>res.send("Something is wrong")) this will keeps our error data safe and will send the text that is given we can log our error in our side 

ZOD is a library for input validation, first impport zod, create structure of input that you expect from client and then by using that structure 
pass the inputs from that structure if it is as expected will give an object {success : true} else {success : false}