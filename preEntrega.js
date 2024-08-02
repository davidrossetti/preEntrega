import express from  "express";

const app= express();

app.get("/api/products", (req, res) =>{
    res.send("productos");
});

app.get('/api/card', (req, res) =>{
    const producto = {
        id: 1,
        title : "String",
        description:"String",
        code:"String",
        price: 2,
        status:true,
        stock: 1,
        category:"String",
        thumbnails: []
    }
    res.send({producto});
});


app.listen(8080, () =>{
    console.log("holla")
})