const http = require("http")
const fs=require("fs")

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        const pageData=fs.readFileSync("pages/index.html")
        // res.write("<h1>Server started....</h1>")
        res.write(pageData)
        res.end()
    }
    else if (req.url === "/about") {
        const pageData=fs.readFileSync("pages/about.html")
        res.write(pageData)
        // res.write("<h1>About page</h1>")
        res.end()
    }
    else if (req.url === "/contact") {
        const pageData=fs.readFileSync("pages/contact.html")
        res.write(pageData)
        // res.write("<h1>Contact pa/ge</h1>")
        res.end()
    }
    else {
        // res.writeHead(404,{"Content-Type":"text/plain"}) // html code will send 
        // as a plain text then tags will not work

        res.writeHead(404,{"Content-Type":"text/html"})
        const pageData=fs.readFileSync("pages/404.html")
        res.write(pageData)
        // res.write("<h1>404 error page not found</h1>")
        res.end()
    }
})
// app.listen(port,ip,callback-function)
app.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000")
})

// req/res status codes
//200-299 ok  req & res success
//300-399 information req & res success
//400-499 req failed  req invalid  
//500-599 req succes   but res failed    

