// Read Write from the file system

const fs = require("fs");
fs.readFile("./myText.txt","utf-8", function(err,data){
    if(err){
        throw error(err);
    }
    else{
        write(data);
    }
})

function write(data){
    fs.writeFile("write.txt", data,(err)=>{});
    console.log(data);
}

// We can create, delete, update file and folder 