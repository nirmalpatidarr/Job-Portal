const userSchema = require("../../Model/schema/user")

// for updating profile of user
const updateProfile = async (req, res) => {
    if (req.body.data && JSON.parse(req.body.data) && JSON.parse(req.body.data)._id) {
        console.log(req.file, "files");
        var formData = JSON.parse(req.body.data)
        formData.Resume = req.file.filename
        // in this some mandatry field which is not to update while updating profile we have to filter // 
        const filter = { _id: req.body._id }
        try {
            // console.log(filter, "geting")
            // deleting data from update profile using delete //
            delete formData._id
            delete formData.Email
            delete formData.Role
            delete formData.Passward
            // console.log(formData);


            const updatepro = await userSchema.findOneAndUpdate(filter, formData)
            console.log(filter, "aaa")
            if (updatepro) {

                return res.status(200).send({ Error: "", message: "ok", result: [updatepro] });
            }
            else {
                return res.status(500).send({ message: "Data not Updated !!!" });
            }
        }
        catch (error) {

            return res.status(500).send({ Error: error, message: "something went wrong", result: [] });
        }
    } else {
        return res.status(500).send({ Error: "error", message: "something went wrong", result: [] });
    }


}




module.exports = {
    updateProfile
}



