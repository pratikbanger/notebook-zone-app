import React from 'react'

const contact = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <section className="container my-3" style={{width: "50%"}}>
                <div className="flex flex-col text-center w-full mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Contact Us</h1>
                    <p className="">We would be glad to hear you!!</p>
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="name" className="my-2">Name</label>
                        <input type="text" id="name" name="name" className="form-control" />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="email" className="my-2">Email</label>
                        <input type="email" id="email" name="email" className="form-control" />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="message" className="my-2">Message</label>
                        <textarea id="message" name="message" className="form-control"></textarea>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-primary my-3">Submit</button>
                </div>
                <div className="flex-col text-center">
                    <a className="">inotebook@support.com</a>
                    <div className="">49 Smith St.</div>
                    <div className="">Saint Cloud, MN 56301</div>
                </div>
            </section >
        </div>
    )
}

export default contact
