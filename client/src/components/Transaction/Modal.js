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
    importReceipt
}) {


    return (
        <div className={`relative z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg px-6 py-4 sm:w-3/4 md:max-w-lg mx-auto mt-4 sm:mt-0">

                    <div className="">
                        <div className="bg-white">
                            <div className="">
                                <div className="flex items-center justify-center">
                                    <img className='m-5 h-16' src={Spuddy} alt="mascot Spuddy"></img>
                                </div>


                                <div className="">
                                    <h3 className="text-2xl flex items-center justify-center text-lime-600" id="modal-title">Receipt Import</h3>
                                    <div className="mt-2">

                                        <form className="bg-slate-100 rounded-2xl">
                                            <div className='text-xl m-5 p-5'>
                                                <select value={category} onChange={onInputchange} className=" bg-slate-300 rounded-full" htmlFor="category" id="category" type="dropdown" name="category" defaultValue="" >
                                                    <option className="" value="none" disabled>Categories</option>
                                                    <option className="" value="toll">Toll</option>
                                                    <option className="" value="food">Food</option>
                                                    <option className="" value="parking">Parking</option>
                                                    <option className="" value="transport">Transport</option>
                                                    <option className="" value="accommodation">Accommodation</option>
                                                    <option className="" value="gasoline">Gasoline</option>
                                                    <option className="" value="telecom">Telecom</option>
                                                    <option className="" value="miscellaneaous">Miscellaneaous</option>
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
                        <div className="">
                            <button onClick={closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            <button onClick={importReceipt} type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Import Transaction</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
