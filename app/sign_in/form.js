'use client'


import React from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    // loading state for submit button
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');


    // notify functions to display toast messages
    const notifySuccess = () => {
        toast.success('Sign-In submitted successfully');
    };

    const notifyError = () => {
        toast.error('Failed to send email');
    };

    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (input.length > 10) {
            input = input.slice(0, 10); // Limit to 10 digits
        }
        // Format the phone number as XXX-XXX-XXXX
        let formattedNumber = '';
        for (let i = 0; i < input.length; i++) {
            if (i === 3 || i === 6) {
                formattedNumber += '-';
            }
            formattedNumber += input[i];
        }
        setPhoneNumber(formattedNumber);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
        };
        console.log(data);
        const response = await fetch('/api/si_contact', {
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
            event.target.phone.value = '';

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
            <div className='flex justify-center border border-4 border-yellow-600 p-5'>
                <form className="w-full p-2" onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="w-full flex flex-col my-auto">
                        <label className="font-semibold mt-5 md:mt-0 text-sm md:text-lg text-gray-200" htmlFor="name">Name</label>
                        <input
                            id="name"
                            className="p-2 md:p-4 mb-5 md:mb-0 bg-gray-300 text-black rounded-md md:w-full"
                            required
                            type="text"
                            minLength={2}
                            maxLength={150}
                            autoComplete="off"
                        />
                    </div>

                    {/* email */}
                    <div className="w-full flex flex-col my-4">
                        <label className="font-semibold text-sm md:text-lg text-gray-200" htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="p-2 md:p-4 mb-5 md:mb-0 bg-gray-300 text-black rounded-md md:w-full"
                            required
                            type="email"
                            minLength={5}
                            maxLength={150}
                            autoComplete="off"
                        />
                    </div>
                    {/* phone */}
                    <div className="w-full flex flex-col my-4">
                        <label className="font-semibold text-white" htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            className="p-2 md:p-4 mb-5 md:mb-0 bg-gray-300 text-black rounded-md md:w-full"
                            required
                            type="tel"
                            minLength={5}
                            maxLength={12} // Allow for the formatted input (XXX-XXX-XXXX)
                            autoComplete="off"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div>
                        <button
                            disabled={loading}
                            className="bg-slate-500 px-2 py-2  mb-5 md:mb-0 w-full md:w-24 rounded-lg font-medium hover:bg-blue-800 disabled:bg:gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                            type="submit">
                            Submit
                        </button>

                    </div>
                </form>
            </div>
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