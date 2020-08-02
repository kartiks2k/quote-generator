var quote=require("inspirational-quotes");
var express=require("express");
var app=express();
const path = require("path")
const cors=require("cors");
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("/",function(req,res){
  res.send(quote.getQuote());
})

let port=process.env.PORT;
if(port==null || port==""){
  port=8000;
};

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port,function(){
  console.log("Listening on port 8000");
});
