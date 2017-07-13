const PhepTinh =require('../PhepTinh');
function xuLyPhepTinh(req,res){
    const {tenPhepTinh,a,b}=req.params;
    const apt= new PhepTinh(a,b,tenPhepTinh);
    const str=apt.getResultString();
    res.send("ket qua: "+ str);
}

module.exports=xuLyPhepTinh;