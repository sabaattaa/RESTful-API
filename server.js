const express = require("express");

const app = express();
// console.log(app,"kkkkkkk")

app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log("app is runing on http://localhost:3000/");
});
app.get("/server", (req, res) => {
  const info = {
    id: "1",
    name: "saba",
    "f-name": "atta",
  };
  res.send(info);
});

app.get("/putos", (req, res) => {
  console.log("this is request", req);
  console.log("this is response", res);
  res.send("api is callnig");
});

app.post("/poss", (req, res) => {
  const requestData = req.body;
  console.log("Received POST request with data:", requestData);
  res.status(200).send("POST request received successfully");
});

const stuinfo = [
  { id: "1", name: "saba", uni: "UMT" },
  { id: "2", name: "asifa", uni: "PU" },
  { id: "3", name: "Mariam", uni: "NCBA" },
];

app.put("/pop", (req, res) => {
  const data = req.body;
  const id = data.id;
  const name = data.name;
  const uni = data.uni;
  console.log(data.id, "llllllll");
  stuinfo.map((item, index) => {
    console.log("data is ",item.id,item.name,item.uni)
    if (item.id == id) {
      item.name = name;
      item.uni = uni;
    } else {
      console.log("No id match");
    }
  });
  console.log("this is put Id", data);
  res.status(200).send("put api is working");
});


app.get("/getdata",(req,res)=>{

  res.status(200).send(stuinfo)


})