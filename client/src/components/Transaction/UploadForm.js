import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState();
    const [category, setCategory] = useState();
    const [date, setDate ] = useState('');
    const [supplier, setSupplier ] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

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
    }

    return (
        <section className="flex flex-col flex-wrap items-center justify-center m-5 p-5 bg-gradient-to-t from-lime-300 to-lime-500 rounded-2xl">
            <h2 className="flex flex-col flex-wrap items-center justify-center text-slate-100 text-5xl m-5 p-5">Upload your Recipets here!</h2>
            <form id="upload-form">
                <div className="rounded-3xl text-xl flex flex-col flex-wrap items-center justify-center drop-shadow-2xl bg-green-600 m-10 p-5">
                    <input type="file" name="file" onChange={handleFile}/>
                </div>
                <div>
                    <button className='text-3xl flex flex-col flex-wrap items-center justify-center m-10 p-5 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        <input type="button" value="Upload" onClick={submitFile} />
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
            <form>
                <input id="category" type="text" name="category" value={category} onChange={onInputchange}></input>
                <input id="date" type="date" name="date" value={date} onChange={onInputchange}></input>
                <input id="supplier" type="text" name="supplier" value={supplier} onChange={onInputchange}></input>
                <input id="totalAmount" type="number" name="totalAmount" value={totalAmount} onChange={onInputchange}></input>
            </form>
        </section>
    )
}

export default UploadForm; 