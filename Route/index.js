const { register, login } = require("../Controller/users/auth")
const { updateProfile } = require("../Controller/users/profile")
const { JobPost } = require("../Controller/emloyer/employer")
const { fetchJob } = require("../Controller/candidate/candidate")
const { JobId } = require("../Controller/candidate/jobidget")
const { EmpoGet } = require("../Controller/emloyer/Emp.jobget")
const { AppliedJob } = require("../Controller/candidate/appliedjob")
const { Apply } = require("../Controller/candidate/applyjob")
const { AppliedJobc } = require("../Controller/emloyer/EmpAppliedjobget")
const multer = require("multer");
var mkdirp = require('mkdirp');

mkdirp('./uploads/test/');
var localstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/test/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + '_' + Date.now())
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file, "file");
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'application / pdf' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        return cb('jpeg,jpg ,pdf file are allowed', false)
    }
}
var local_upload = multer({
    storage: localstorage,
    fileFilter: fileFilter,
}).single('photos')


const router = require("express").Router();
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/updateProfile").post(local_upload, updateProfile)
router.route("/JobPost").post(JobPost)
router.route("/fetchJob").get(fetchJob)
router.route("/GetJob/:id").get(JobId)
router.route("/EmpoGet").get(EmpoGet)
router.route("/AppliedJob").get(AppliedJob)
router.route("/AppliedJobc").get(AppliedJobc)
router.route("/Apply").post(Apply)
module.exports = router