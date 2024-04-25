import express from 'express';
import {create as createHandlebarsEngine} from "express-handlebars";
import { title } from 'process';

const app = express();
const handlebarsEngine = createHandlebarsEngine({
    defaultLayout:"main",
    layoutsDir:"views/layouts",
    partialsDir:"views/particals"
});
//Khai bao engin handlebars
app.engine("handlebars", handlebarsEngine.engine);
// Su dung engine handlebars
app.set("view engine","handlebars");
// Cau hinh folder views
app.set("views","views/pages");
// Cau  hinh static file
app.use(express.static("public"));// ham nay se tra cho chung ta middleware

// Tao Routes

//homepage
app.get("/",(req,res)=>{
    res.render("homepage");
});
// About page
app.get("/about",(req,res)=>{
    res.render("about",{
        name:"Thanh",
        user:{
            firstName:"Khang"
        },
        values:[
            {
                title :"handsome",
                desc: "1"
            },
            {
                title :"beautiful",
                desc: "2"
            }
        ]
    });
});
// Blog page
app.get("/blog",(req,res)=>{
    res.render("blog");
});
app.listen(3000,()=>{
    console.log("App run port 3000");
});