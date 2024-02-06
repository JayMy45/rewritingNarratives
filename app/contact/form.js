'use client'


import React, { useEffect } from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { workshopData } from '../data/workshop';

export default function ContactForm() {

    // resetCount state to reset checkbox state
    const [resetCount, setResetCount] = useState(0);

    // checkbox state to track which services are selected
    const [checkedOptions, setCheckedOptions] = useState(new Set())

    // loading state for submit button
    const [loading, setLoading] = useState(false);

    // set initial state of checkbox to include Mowing and Trimming
    /* useEffect(() => {
         const initialSet = new Set();
         // for each service, if name is Mowing or Trimming, add id to initialSet
         workshopData.forEach(({ id, name }) => {
             if (name === "Rewrite the Narrative Workshop") {
                 initialSet.add(id);
             }
         });
 
         setCheckedOptions(initialSet);
     }, [resetCount]);
 
     */


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
            workshops: Array.from(checkedOptions)
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
            // notifySuccess();
        }
        if (response.ok) {
            console.log('response worked');

            // reset form
            event.target.reset();
            setCheckedOptions(new Set());

            // After successful submission and form reset
            setResetCount(prevCount => prevCount + 1);

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
            <div className='flex justify-center w-full'>
                <form className="flex flex-col w-full w-10/12 md:w-1/2 md:ml-14" onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="w-full flex flex-col my-auto">
                        <label className="font-semibold text-sm md:text-lg text-gray-200" htmlFor="name">Name</label>
                        <input
                            id="name"
                            className="p-2 md:p-4 bg-gray-300 text-black rounded-md md:w-11/12"
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
                            className="p-2 md:p-4 bg-gray-300 text-black rounded-md md:w-11/12"
                            required
                            type="email"
                            minLength={5}
                            maxLength={150}
                            autoComplete="off"
                        />
                    </div>

                    {/* message */}
                    <div className="w-full flex flex-col my-4">
                        <label className="font-semibold text-white" htmlFor="message text-gray-200">Send an inquiry about a workshops</label>
                        <textarea
                            id="message"
                            className="p-2 text-black bg-gray-300 rounded-md md:w-11/12"
                            name="message"
                            rows={4}
                            minLength={10}
                            maxLength={500}
                            placeholder="Send me an email"
                        />
                    </div>
                    <section className="p-5 w-fit">
                        <h3 className="text-white text-md font-semibold">Select the workshop(s) you are interested in:</h3>
                        <div className="grid grid-row-2 md:grid-row-4 gap-3 p-3 outline-dashed outline-2 rounded-md">
                            {workshopData.map(({ id, name }) => (
                                <div key={id} className="">
                                    <input
                                        onChange={(e) => {
                                            const copy = new Set(checkedOptions);
                                            if (copy.has(id)) {
                                                copy.delete(id);
                                            } else {
                                                copy.add(id);
                                            }
                                            setCheckedOptions(copy);
                                        }}
                                        type="checkbox"
                                        id={id}
                                        name={name}
                                        value={id}
                                        checked={checkedOptions.has(id)} // Dynamically set the checked state based on whether id is in checkedOptions set
                                    />
                                    <label htmlFor={id} className="text-xs ml-1 capitalize" >{name}</label>
                                </div>

                            ))}
                        </div>
                    </section>
                    <div className='my-4'>
                        <button
                            disabled={loading}
                            className="bg-slate-500 px-2 py-2 w-24 rounded-lg font-medium hover:bg-blue-800 disabled:bg:gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                            type="submit">
                            Submit
                        </button>

                    </div>
                </form>
            </div >
            {/* toast container */}
            < div className='z-11' >
                <ToastContainer
                    position='bottom-center'
                    autoClose={2000}
                />
            </div >
        </>
    )
}