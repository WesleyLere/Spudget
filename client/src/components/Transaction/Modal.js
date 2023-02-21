import Spuddy from '../../images/logo.png'
import React, { useState } from 'react';


export function Modal({
    isOpen,
    closeModal,
    category,
    date,
    supplier,
    totalAmount,
    onInputchange,
    importRecipt
}) {
   

    return (
        <div className={`relative z-10 ${isOpen ? '' : 'hidden'}`}>
            <div className="sm:flex sm:flex-wrap sm:flex-col sm:p-1 fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="flex flex-shrink-0 items-center justify-center rounded-full">
                                    <img className='m-2 h-16' src={Spuddy} alt="mascot Spuddy"></img>
                                </div>


                                <div className="mt-5  ml-4 text-left">
                                    <h3 className="text-2xl  text-lime-600" id="modal-title">Receipt Import</h3>
                                    <div className="mt-2">

                                        <form className="bg-slate-100 rounded-2xl">
                                            <div className='text-xl m-5 p-5'>
                                                <select className=" bg-slate-300 rounded-full" htmlFor="category" id="category" type="dropdown" name="category" defaultValue="" value={category} onChange={onInputchange}>
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
                        <div className="flex flex-row justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={importRecipt} type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Import Transaction</button>
                            <button onClick={closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}