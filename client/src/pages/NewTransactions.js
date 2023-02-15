import React from 'react';

const NewTransactions = () => {
    return (
        <section className="">
            <form id="upload-form">
                <input type="file" name="file" />
                <input type="submit" value="Upload" />
            </form>
        </section>
    )
}

export default NewTransactions; 