import mongoose from "mongoose";

const URI =
  "mongodb+srv://nayakprince765:EcGGpVTCmrmRmpLk@cluster0.kwkuseq.mongodb.net/?retryWrites=true";

const databaseConn = () => {
  mongoose

    .connect(URI)
    .then(() => {
      console.log("mongoose connected succussfully");
    })
    .catch((err) => {
      console.log("mongoose not connected " + err.message);
    });
};

// databaseConn();
export default databaseConn;
