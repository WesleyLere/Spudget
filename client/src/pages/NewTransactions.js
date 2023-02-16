import React from 'react';

const NewTransactions = () => {
    return (
        <section className="flex flex-col flex-wrap items-center justify-center m-5 p-5 bg-gradient-to-t from-lime-300 to-lime-500 rounded-2xl">
            <h2 className="flex flex-col flex-wrap items-center justify-center text-slate-100 text-5xl m-5 p-5">Upload your Recipets here!</h2>
            <form id="upload-form">
                <div className="rounded-3xl text-xl flex flex-col flex-wrap items-center justify-center drop-shadow-2xl bg-green-600 m-10 p-5">
                    <input type="file" name="file" />
                </div>
                <div>
                    <button className='text-3xl flex flex-col flex-wrap items-center justify-center m-10 p-5 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        <input type="submit" value="Upload" />
                    </button>
                </div>
                <div className='flex flex-col flex-wrap items-center justify-center'>
        <h3 className='text-slate-700 hover:text-slate-500 drop-shadow-lg shadow-lg rounded-xl flex flex-wrap text-2xl m-5 p-5'>Step 1: Take a photo of your reciept</h3>
        <h3 className='text-slate-700 hover:text-slate-500 drop-shadow-lg shadow-lg rounded-xl flex flex-wrap text-2xl m-5 p-5'>Step 2: Click on choose file</h3>
        <h3 className='text-slate-700 hover:text-slate-500 drop-shadow-lg shadow-lg rounded-xl flex flex-wrap text-2xl m-5 p-5'>Step 3: Click on the receipt you'd like to upload</h3>
        <h3 className='text-slate-700 hover:text-slate-500 drop-shadow-lg shadow-lg rounded-xl flex flex-wrap text-2xl m-5 p-5'>Step 4: Click Upload</h3>
        <h3 className='text-slate-700 hover:text-slate-500 drop-shadow-lg shadow-lg rounded-xl flex flex-wrap text-2xl m-5 p-5'>Step 5: Thank Spuddy.</h3>
                </div>

            </form>
        </section>
    )
}

export default NewTransactions; 