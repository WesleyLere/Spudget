import React from 'react';

const Cta = () => {
    return (
        <section className="">

            {/* cards at the top of cta page to showcase bige features of spudget'*/}
            <div className="">
                <div id="card1" className="">
                <h1 className="">Keep track of your spending</h1>
                <img id='chartImage' src=''></img>
                </div>

                <div id="card2" className="">
                <h1 className="">Have a receipt?</h1>
                <h1 className="">Take a photo and import it!</h1>
                <img id='cameraicon' src=''></img>
                </div>
                
                <div id="card3" className="">
                <h1 className="">Keep track of your spending</h1>
                <img id='chartImage' src=''></img>
                </div>

                <div id="card4" className="">
                <h1 className=''>We also have a potato as mascot</h1>
                <h2 className=''>His name is Spuddy</h2>
                <img className='' id='Spuddy' src=''></img>
                </div>
            </div>

{/* This is the 'list of companies that love using spudget'*/}
            <div className=''>
                <h2 className=''>Google</h2>
                <h2 className=''>NY Times</h2>
                <h2 className=''>Wells Fargo</h2>
                <h2 className=''>Target</h2>
                <h2 className=''>Microsoft</h2>
                <h2 className=''>Sony</h2>
            </div>

{/* happy family photo and other things to note about Spudget*/}
            <div className=''>
                <div>
                    <img src=''></img>
                </div>
                <div>
                    <ul className=''>
                        <li className=''>All of your spending in one place!</li>
                        <li className=''>Companies all around the world continue to use Spudget</li>
                        <li className=''>Get notified before monthly reacurring trans actions</li>
                    </ul>
                </div>
            </div>



    {/* social media connections other company info*/}
    <div className=''>
        <div>
            <h1>Stay Connected with Spuddy!</h1>
            <ul>
                <a><li className=''>Instagram</li></a>
                <a><li className=''>Twitter</li></a>
                <a><li className=''>Facebook</li></a>
                <a><li className=''>TikTok</li></a>
            </ul>
        </div>
    </div>
        </section>
    )
}

export default Cta; 