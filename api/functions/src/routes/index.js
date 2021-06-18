import { Router } from 'express';
import { config } from "dotenv";
import sgMail from '@sendgrid/mail'
config();

const router = Router();

router.post("/sendemail", async (req, res) => {

    sgMail.setApiKey(process.env.SENDGRID_KEY)

    const {
        name,
        email,
        message } = req.body

    try {

        await sgMail.send({
            to: process.env.MAIL_TO,
            from: process.env.MAIL_FROM,
            subject: `${name} from Dev Portfolio`,
            text: email,
            html: `<div><h3>${name}</h3><p>${email}</p></div><p>${message}</p></div>`
        })

        res.json("Email sent")

    } catch (error) {
        console.log(error.response.body.errors)
    }
})

router.get("/", (req, res) => {
    res.json("hola")
})

export default router;
