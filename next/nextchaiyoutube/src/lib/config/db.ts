import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number
}

const connection: connectionObject = {}

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        return;
    }
    try {
        const dB = await mongoose.connect(process.env.MONGODB_URL || '', {
            dbName: "CHAINEXT"
        })
        console.log(dB);
        connection.isConnected = dB.connection.readyState;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default dbConnect;