const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() => {
        console.log("connection Successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};  

let allChats = [
    {
        from: "neha", 
        to: "priya",
        msg: "send me your exams sheet",
        created_at: new Date()
    },
    {
        from: "vineet",
        to: "harshal",
        msg: "how are you bro",
        created_at: new Date()
    },
    {
        from: "pat",
        to: "harry",
        msg: "whatsup bro",
        created_at: new Date()
    },
    {
        from: "raj",
        to: "suraj",
        msg: "send me notes for study",
        created_at: new Date()
    },
    {
        from: "ram",
        to: "shyam",
        msg: "happy birthday bro",
        created_at: new Date()
    },
    {
        from: "payal",
        to: "sumit",
        msg: "How are you bro",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);
