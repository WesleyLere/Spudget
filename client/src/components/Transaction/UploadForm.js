import React, { useState } from 'react';
import { Modal } from './Modal';
import { ADD_TRANSACTION } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

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
        console.log(event.target.value)
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

    const [addTransaction] = useMutation(ADD_TRANSACTION);
    const importReceipt = async () => {
        const newdatearray = date.split('-').map((num) =>parseInt(num) )
        
        console.log(newdatearray)
        const { data } = await addTransaction({
            variables: {
                year: newdatearray[0],
                month: newdatearray[1],
                date: newdatearray[2],
                category: category,
                vendor: supplier,
                amount: totalAmount,
            },
        });


        closeModal()
        setFile('')
    }

    return (
        <section className="xl:flex xl:flex-col xl:flex-wrap xl:items-center justify-center xl:m-5 xl:p-5 bg-gradient-to-t from-lime-300 to-lime-500 rounded-2xl">
            <h2 className="flex flex-col flex-wrap items-center justify-center text-slate-100 text-5xl m-5 p-5">Upload your Recipets here!</h2>
            <form id="upload-form">
                <div className="rounded-3xl text-xl flex flex-col flex-wrap items-center justify-center drop-shadow-2xl bg-green-600 m-10 p-5">
                    <input type="file" name="file" onChange={handleFile} />
                </div>
                <div className='flex-row flex'>
                    <button onClick={submitFile} className='text-3xl flex flex-col flex-wrap items-center justify-center xl:m-10 sm:m-5 p-5 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        <input type="button" value="Upload" />
                    </button>
                    <button onClick={openModal} type="button" className='text-3xl flex flex-col flex-wrap items-center justify-center m-10 p-5 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        Manual Entry
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

            <Modal
                importReceipt={importReceipt}
                isOpen={isOpen}
                closeModal={closeModal}
                category={category}
                date={date}
                supplier={supplier}
                totalAmount={totalAmount}
                onInputchange={onInputchange}
            />

        </section>
    )
}

export default UploadForm; 