const getJob = require("../../Model/schema/job")


const fetchJob = async (req, res) => {

    try {
        // makin connection btwn two controller or tabel job and employer
        const jobTable = await getJob.find().populate("EmployerId")
        // console.log(jobTable,"joid")
        return res.status(200).send(jobTable)


    } catch (error) {
        response.status(500).send(error);
    }

}







module.exports = { fetchJob }



