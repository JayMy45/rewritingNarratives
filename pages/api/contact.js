// load environment variables from .env file
require('dotenv').config();

import { workshopData } from "@/app/data/workshop";
import nodemailer from "nodemailer";



export default async function ContactAPI(req, res) {
    const { name, email, message, workshops } = req.body;

    // check if all fields are provided
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    // check if email is valid using isValidEmail function (see below)
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Please provide a valid email address." });
    }

    // store email credentials in user variable from .env file
    const user = process.env.user;

    // create transporter object using nodemailer and gmail credentials (see nodemailer docs for more info)
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass,
        },
    });

    // try to send email (see nodemailer docs for more info)
    try {
        // Map the workshop IDs to their names
        const workshopNames = workshops.map(id => {
            const workshop = workshopData.find(workshop => workshop.id === id);
            return workshop ? workshop.name : undefined;
        }).filter(Boolean); // this filter removes undefined values

        // Create a string of workshop names separated by commas
        const workshopsString = workshopNames.join(", ");

        const mail = await transporter.sendMail({
            from: user,
            to: "rewritethenarrativenow@gmail.com",
            replyTo: email,
            subject: `Rewriting Narratives Submission ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <p><strong>Workshops Interested In</strong>: ${workshopsString}</p>  <!-- Include the workshops here -->
            `,
        });

        console.log("Message sent: %s", mail.messageId);

        // if successful, return success message
        return res.status(200).json({ message: "success" });

        // if error, return error message and log error
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Could not send email. Your message was not sent.",
        });
    }
}

// Validate email address to make sure the format is valid
const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}


/* 
I know there are a lot of comments in this file, 
but I wanted to make sure I explained everything as clearly as 
possible for my future self. 
*/
