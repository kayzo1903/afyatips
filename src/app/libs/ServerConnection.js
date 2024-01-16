"use server"

// thise server action has got no use as redirect 
// failed several time now we trying another method
// API METHOD

import { sentMailer } from "./SentMailer"

export const sentComplaints = async (formData) =>{
    try {
        let UserEmail = formData.get("userEmail")
        let Complains = formData.get("userMessage")
           await sentMailer( {
            to : UserEmail ,
            html : `<p>${Complains}</p>`
        })
    } catch (error) {
        console.log(error);
    }
} 