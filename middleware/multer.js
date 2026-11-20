import multer from "multer";
import fs from "fs"

const storage = multer.diskStorage({
    destination:((req , file , cb)=>{
        if(!fs.existsSync("./upload")){
            fs.mkdir("./upload" , (error)=>{
                if(error){
                    cb(error)
                }else{
                    cb(null , "./upload")
                }
            })
        }else{
            cb(null , "./upload")
        }
    }),
    filename:(req , file , cb)=>{
        const filename = `${new Date().getTime()}-${file.originalname}`;
        cb(null , filename)
    } 
})

const upload = multer({
    storage: storage
})


export default upload