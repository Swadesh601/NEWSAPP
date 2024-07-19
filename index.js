import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port =3000;
const app = express();

const api_key="078b382508274c4bad960526b01fbedb";
const url ="https://newsapi.org/v2/everything";
// const newsrouter = express.Router(); // creating new router object to handle request

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , async (req,res) => {
try 
{
 const response = await axios.get(`${url}?domains=wsj.com&apiKey=${api_key}`);
 const result = response.data; // JSON
 console.log(result.articles);
 res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
}
catch(error) 
{
    res.render("index.ejs" , {final:error.response.data});
}
});

app.post("/" , async (req,res) => {
    try 
    {
     console.log(req.body);
     const searchid = req.body["search"];
     const response = await axios.get(`${url}?q=${searchid}&apiKey=${api_key}`);
     const result = response.data; // JSON
     res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].       
    }
    catch(error) 
    {
        res.render("index.ejs" , {final:error.response.data});
    }
    });
    
    app.get("/home" , async (req,res) => { // <a class="nav-link mx-3"  href="home"> here href=home is accessed as endpoint for localhost
        try 
        {
         const response = await axios.get(`${url}?domains=wsj.com&apiKey=${api_key}`);
         const result = response.data; // JSON
         res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
        }
        catch(error) 
        {
            res.render("index.ejs" , {final:error.response.data});
        }
        });

        app.get("/sports" , async (req,res) => {  // <a class="nav-link mx-3"  href="sports"> here href=home is accessed as endpoint for localhost
            try 
            {
             const response = await axios.get(`${url}?q=sports&apiKey=${api_key}`);
             const result = response.data; // JSON
             res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
            }
            catch(error) 
            {
                res.render("index.ejs" , {final:error.response.data});
            }
            });
            
            app.get("/technology" , async (req,res) => { // <a class="nav-link mx-3"  href="home"> here href=technology is accessed as endpoint for localhost
                try 
                {
                 const response = await axios.get(`${url}?q=technology&apiKey=${api_key}`);
                 const result = response.data; // JSON
                 res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
                }
                catch(error) 
                {
                    res.render("index.ejs" , {final:error.response.data});
                }
                });

                app.get("/finance" , async (req,res) => {  // <a class="nav-link mx-3"  href="finance"> here href=home is accessed as endpoint for localhost
                    try 
                    {
                     const response = await axios.get(`${url}?q=finance&apiKey=${api_key}`);
                     const result = response.data; // JSON
                     res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
                    }
                    catch(error) 
                    {
                        res.render("index.ejs" , {final:error.response.data});
                    }
                    });
                       
                    app.get("/business" , async (req,res) => { // <a class="nav-link mx-3"  href="home"> here href=business is accessed as endpoint for localhost
                            try 
                            {
                             const response = await axios.get(`${url}?q=business&apiKey=${api_key}`);
                             const result = response.data; // JSON
                             res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
                            }
                            catch(error) 
                            {
                                res.render("index.ejs" , {final:error.response.data});
                            }
                            });

                            app.get("/politics" , async (req,res) => { // <a class="nav-link mx-3"  href="politics"> here href=home is accessed as endpoint for localhost
                                try 
                                {
                                 const response = await axios.get(`${url}?q=politics&apiKey=${api_key}`);
                                 const result = response.data; // JSON
                                 res.render("index.ejs" , { final:result.articles}); // passing an array here [articles is an array refer url with postman].  
                                }
                                catch(error) 
                                {
                                    res.render("index.ejs" , {final:error.response.data});
                                }
                                });        

app.listen(port, () => {
console.log(`Server is running on ${port}`);
});   
