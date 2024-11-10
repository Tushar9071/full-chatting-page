const conversations = require('../modules/schema/conversation');
const massageModul = require('../modules/schema/massage.modul');

const sendMassage = async (req , res) =>{
    try {
        const message = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id
        console.log(message, receiverId, senderId);

        let conversation = await conversations.findOne({
            participants:{$all:[senderId,receiverId]},
        })

        if(!conversation){
            conversation = await conversations.create({
                participants: [senderId, receiverId],
            })
        }
        const newMessage = new massageModul({
            senderId,
            receiverId,
            message:message.message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
            await Promise.all([conversation.save(),newMessage.save()])
        }

        res.status(201).json({message:"message send successfully"});

    } catch (e) {
        console.log("error in sendMassage controller" , e);
        res.status(500).json({error:"internal server error"})
    }
}

const getMessage = async (req, res) => {
    try {
        const userToChatId = req.params.id;
        const senderId = req.user._id;

        const conversation = await conversations.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages")
        if(!conversation){
            return res.status(200).json([]);
        }
        const message = conversation.messages;
        res.status(200).json(message)

    } catch (e) {
        console.log("error in getMessage controller" , e);
        res.status(500).json({error:"internal server error"})
    }
}

module.exports = {
    sendMassage,
    getMessage,
}