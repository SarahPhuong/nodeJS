function showController(req,res){
      const {firstname,lastname}=req.params;
    res.send("Hello! "+ firstname+" "+lastname)
}
module.exports=showController