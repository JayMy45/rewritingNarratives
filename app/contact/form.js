'use client'


import React from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    // loading state for submit button
    const [loading, setLoading] = useState(false);


    // notify functions to display toast messages
    const notifySuccess = () => {
        toast.success('Email sent successfully');
    };

    const notifyError = () => {
        toast.error('Failed to send email');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };
        console.log(data);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('response worked');

            // reset form
            event.target.name.value = '';
            event.target.email.value = '';
            event.target.message.value = '';

            // display toast message when email is sent successfully
            notifySuccess();
        }
        if (!response.ok) {
            setLoading(false);
            console.log('Error sending message');

            // display toast message when email fails to send
            notifyError();
        }
    }

    return (
        <>
            <form className="p-2 lg:p-7 md:ml-5 lg:ml-20" onSubmit={handleSubmit}>

                {/* name */}
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold text-sm md:text-lg text-gray-200" htmlFor="name">Name</label>
                    <input
                        id="name"
                        className="p-2 md:p-4 bg-gray-200 text-black rounded-md md:w-11/12"
                        required
                        type="text"
                        minLength={2}
                        maxLength={150}
                        autoComplete="off"
                    />
                </div>

                {/* email */}
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold text-sm md:text-lg text-gray-200" htmlFor="email">email</label>
                    <input
                        id="email"
                        className="p-2 md:p-4 bg-gray-200 text-black rounded-md md:w-11/12"
                        required
                        type="email"
                        minLength={5}
                        maxLength={150}
                        autoComplete="off"
                    />
                </div>

                {/* message */}
                <div className="w-full flex flex-col my-4">
                    <label className="font-semibold" htmlFor="message text-gray-200">Send a Message</label>
                    <textarea
                        id="message"
                        className="p-2 text-black bg-gray-200 rounded-md md:w-11/12"
                        name="message"
                        rows={4}
                        minLength={10}
                        maxLength={500}
                        placeholder="Send me an email"
                    />
                </div>
                <div>
                    <button
                        disabled={loading}
                        className="bg-slate-500 px-2 py-2 w-24 rounded-lg font-medium disabled:bg:gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        type="submit">
                        Submit
                    </button>

                </div>
            </form>
            {/* toast container */}
            <div className='z-11'>
                <ToastContainer
                    position='bottom-center'
                    autoClose={2000}
                />
            </div>
        </>
    )
}