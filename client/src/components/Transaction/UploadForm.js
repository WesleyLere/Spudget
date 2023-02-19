import React, { useState } from 'react';
import Spuddy from '../../images/logo.png'

const UploadForm = () => {
    const [file, setFile] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState('');
    const [supplier, setSupplier] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    function handleFile(event) {
        setFile(event.target.files[0])
    }

    function onInputchange(event) {
        if (event.target.name === "category") {
            setCategory(event.target.value);
        } else if (event.target.name === "date") {
            setDate(event.target.value);
        } else if (event.target.name === "supplier") {
            setSupplier(event.target.value);
        } else {
            setTotalAmount(event.target.value)
        }
    }


    const submitFile = async (event) => {

        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setCategory(data.category);
                setDate(data.date);
                setSupplier(data.supplier);
                setTotalAmount(data.totalAmount);
            })
            .catch(error => {
                console.error(error);
            });
        openModal()
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    function importRecipt() {
        
        console.log(FormData)
        
        closeModal()
    }

    return (
        <section className="xl:flex xl:flex-col xl:flex-wrap xl:items-center justify-center xl:m-5 xl:p-5 bg-gradient-to-t from-lime-300 to-lime-500 rounded-2xl">
            <h2 className="flex flex-col flex-wrap items-center justify-center text-slate-100 text-5xl m-5 p-5">Upload your Recipets here!</h2>
            <form id="upload-form">
                <div className="rounded-3xl text-xl flex flex-col flex-wrap items-center justify-center drop-shadow-2xl bg-green-600 m-10 p-5">
                    <input type="file" name="file" onChange={handleFile} />
                </div>
                <div className='flex-row flex'>
                    <button onClick={submitFile} className='text-3xl flex flex-col flex-wrap items-center justify-center m-10 p-5 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        <input type="button" value="Upload" />
                    </button>
                    <button onClick={openModal} className='text-3xl flex flex-col flex-wrap items-center justify-center m-10 p-5 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        <input type="button" value="Manual Entry" onClick={submitFile} />
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

            <div className={`relative z-10 ${isOpen ? '' : 'hidden'}`}>
                <div class="sm:flex sm:flex-wrap sm:flex-col sm:p-1 fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="flex flex-shrink-0 items-center justify-center rounded-full">
                                        <img className='m-2 h-16' src={Spuddy}></img>
                                    </div>


                                    <div class="mt-5  ml-4 text-left">
                                        <h3 class="text-2xl  text-lime-600" id="modal-title">Receipt Import</h3>
                                        <div class="mt-2">

                                            <form className="bg-slate-100 rounded-2xl">
                                                <div className='text-xl m-5 p-5'>
                                                    <select className=" bg-slate-300 rounded-full" for="category" id="category" type="dropdown" name="category" defaultValue="" value={category} onChange={onInputchange}>
                                                        <option className="" value="" disabled>Categories</option>
                                                        <option className="" value="Toll">Toll</option>
                                                        <option className="" value="Food">Food</option>
                                                        <option className="" value="Parking">Parking</option>
                                                        <option className="" value="Transport">Transport</option>
                                                        <option className="" value="Accommodation">Accommodation</option>
                                                        <option className="" value="Gasoline">Gasoline</option>
                                                        <option className="" value="Telecom">Telecom</option>
                                                        <option className="" value="Miscellaneaous">Miscellaneaous</option>
                                                    </select>

                                                </div>


                                                <div className='text-xl m-5'>
                                                    <h1 className="text-lime-600">Purchase Date</h1>
                                                    <input className="bg-slate-200 rounded-full" id="date" type="date" name="date" value={date} onChange={onInputchange}></input>
                                                </div>

                                                <div className='text-xl m-5'>
                                                    <h1 className="text-lime-600">Place of Purchase</h1>
                                                    <input className="bg-slate-200 rounded-full " id="supplier" type="text" name="supplier" value={supplier} onChange={onInputchange}></input>
                                                </div> 


                                                <div className='text-xl m-5'>
                                                    <h1 className="text-lime-600">Transaction Amount</h1>
                                                    <input className="bg-slate-200 rounded-full mb-5" id="totalAmount" type="number" name="totalAmount" value={totalAmount} onChange={onInputchange}></input>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={importRecipt} type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Import Transaction</button>
                                <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default UploadForm; 