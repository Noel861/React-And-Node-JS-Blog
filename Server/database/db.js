import mongoose from "mongoose";

{/* mongodb+srv://noelshahbaz86:Pwfqz8RWBOO0iz5r@cluster0.sr2glk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */}

const Connection = async () => {

    const URL  = "mongodb+srv://noelshahbaz86:Pwfqz8RWBOO0iz5r@cluster0.sr2glk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error Occur", error )
    }
} 

export default Connection