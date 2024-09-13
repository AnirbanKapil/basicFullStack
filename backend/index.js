import express from "express";


const app = express();


app.get("/jokes",(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 2,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 3,
          title: "Why did the math book look sad?",
          content: "Because it had too many problems."
        },
        {
          id: 4,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 5,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts."
        }
      ];
    res.send(jokes)
})




app.listen(3000,()=>{
    console.log("app up and running")
})