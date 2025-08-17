import React, { useState } from 'react'
import { resumeData } from './PricingData'

const Pricing = ({ color, employees, services }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        selectedServices: [],
        selectedStaff: '',
        date: '',
        selectedTime: ''
    });

    const firstService = services[0];
    const firstTitle = firstService?.title;
    const firstServiceList = firstService?.services;
    const secondService = services[1];
    const secondTitle = secondService?.title;
    const secondServiceList = secondService?.services;
    const thirdService = services[2];
    const thirdTitle = thirdService?.title;
    const thirdServiceList = thirdService?.services;
    const fourthService = services[3];
    const fourthTitle = fourthService?.title;
    const fourthServiceList = fourthService?.services;

    const employee11 = employees[0];
    const employee1 = employee11?.image;
    const employeeName1 = employee11?.name;
    const employee12 = employees[1];
    const employee2 = employee12?.image;
    const employeeName2 = employee12?.name;
    const employee13 = employees[2];
    const employee3 = employee13?.image;
    const employeeName3 = employee13?.name;
    const employee14 = employees[3];
    const employee4 = employee14?.image;
    const employeeName4 = employee14?.name;


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleStaffChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            selectedStaff: value
        });
    };

    const handleTimeChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            selectedTime: value
        });
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setFormData(prevState => {
            const selectedServices = prevState.selectedServices;
            if (checked) {
                selectedServices.push(value);
            } else {
                const index = selectedServices.indexOf(value);
                if (index > -1) {
                    selectedServices.splice(index, 1);
                }
            }
            return {
                ...prevState,
                selectedServices
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //submit form logic
        console.log(formData);
    };


    return (
        <div className="section-box mt-4" id="resume">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={resumeData.mainData.title}>{resumeData.mainData.title}</h6>
                    {/* <h1>{resumeData.mainData.title2}</h1> */}
                    <p>{resumeData.mainData.description}</p>
                </div>
            </div>

            <section id="section-form" className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 offset-md-0">
                            <form name="contactForm" id='contact_form' className="form-border" onSubmit={handleSubmit}>
                                <div id="step-1" className="row">
                                    <h3 className="s2">Choose Services</h3>

                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="sc-group">
                                                <h5>{firstTitle}</h5>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Haircuts"
                                                        id="s_a1"
                                                        value={firstServiceList[0]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_a1">{firstServiceList[0]}</label>
                                                </div>

                                                <div className="form-group">
                                                    <input type="checkbox" name="Services Haircuts" id="s_a2" value={firstServiceList[1]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_a2">{firstServiceList[1]}</label>
                                                </div>

                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Haircuts"
                                                        id="s_a3"
                                                        value={firstServiceList[2]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_a3">{firstServiceList[2]}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6">
                                            <div className="sc-group">
                                                <h5>{secondTitle}</h5>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Shave"
                                                        id="s_b1"
                                                        value={secondServiceList[0]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_b1">{secondServiceList[0]}</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Shave"
                                                        id="s_b2"
                                                        value={secondServiceList[1]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_b2">{secondServiceList[1]}</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Shave"
                                                        id="s_b3"
                                                        value={secondServiceList[2]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_b3">{secondServiceList[2]}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6">
                                            <div className="sc-group">
                                                <h5>{thirdTitle}</h5>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Facial"
                                                        id="s_c1"
                                                        value={thirdServiceList[0]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_c1">{thirdServiceList[0]}</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Facial"
                                                        id="s_c2"
                                                        value={thirdServiceList[1]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_c2">{thirdServiceList[1]}</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Facial"
                                                        id="s_c3"
                                                        value={thirdServiceList[2]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_c3">{thirdServiceList[2]}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6">
                                            <div className="sc-group">
                                                <h5>{fourthTitle}</h5>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Package"
                                                        id="s_d1" value={fourthServiceList[0]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_d1">{fourthServiceList[0]}</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Package"
                                                        id="s_d2" value={fourthServiceList[1]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_d2">{fourthServiceList[1]}</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox"
                                                        name="Services Package"
                                                        id="s_d3"
                                                        value={fourthServiceList[2]}
                                                        onChange={handleCheckboxChange} />
                                                    <label htmlFor="s_d3">{fourthServiceList[2]}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="spacer-single"></div>

                                    <div className="row">
                                        <div className="col-lg-6 mb-sm-30">
                                            <h3 className="s2" >Choose Staff</h3>

                                            <div className="de_form de_radio">
                                                <div className="radio-img">
                                                    <input id="radio-1a"
                                                        name="Staff"
                                                        type="radio"
                                                        value={employeeName1}
                                                        checked={formData.selectedStaff === employeeName1}
                                                        onChange={handleStaffChange} />
                                                    <label htmlFor="radio-1a"><img src={employee1} alt={employeeName1} />{employeeName1}</label>
                                                </div>

                                                <div className="radio-img">
                                                    <input id="radio-1b"
                                                        name="Staff"
                                                        type="radio"
                                                        value={employeeName2}
                                                        checked={formData.selectedStaff === employeeName2}
                                                        onChange={handleStaffChange} />
                                                    <label htmlFor="radio-1b"><img src={employee2} alt={employeeName2} />{employeeName2}</label>
                                                </div>

                                                <div className="radio-img">
                                                    <input id="radio-1c"
                                                        name="Staff"
                                                        type="radio"
                                                        value={employeeName3}
                                                        checked={formData.selectedStaff === employeeName3}
                                                        onChange={handleStaffChange} />
                                                    <label htmlFor="radio-1c"><img src={employee3} alt={employeeName3} />{employeeName3}</label>
                                                </div>

                                                <div className="radio-img">
                                                    <input id="radio-1d"
                                                        name="Staff"
                                                        type="radio"
                                                        value={employeeName4}
                                                        checked={formData.selectedStaff === employeeName4}
                                                        onChange={handleStaffChange} />
                                                    <label htmlFor="radio-1d"><img src={employee4} alt={employeeName4} />{employeeName4}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <h3 className="s2" >Select Date</h3>
                                            <input type="date"
                                                name="date"
                                                id="date"
                                                className="form-control"
                                                min="1997-01-01"
                                                required
                                                value={formData.date}
                                                style={{ border: `2px solid ${color}`}}
                                                onChange={handleInputChange} />
                                            <div className="spacer-single"></div>
                                            <h3 className="s2">Select Time</h3>
                                            <div className="custom_radio">
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_8AM" value="8:00 AM"
                                                        name="select_time" checked={formData.selectedTime === '8:00 AM'} onChange={handleTimeChange} /><label htmlFor="choose_8AM">8:00
                                                            AM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_9AM" value="9:00 AM"
                                                        name="select_time" checked={formData.selectedTime === '9:00 AM'} onChange={handleTimeChange} /><label htmlFor="choose_9AM">9:00 AM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_10AM" value="10:00 AM"
                                                        name="select_time" checked={formData.selectedTime === '10:00 AM'} onChange={handleTimeChange} /><label htmlFor="choose_10AM">10:00 AM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_11AM" value="11:00 AM"
                                                        name="select_time" checked={formData.selectedTime === '11:00 AM'} onChange={handleTimeChange} /><label htmlFor="choose_11AM">11:00 AM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_12AM" value="MIDDAY"
                                                        name="select_time" checked={formData.selectedTime === 'MIDDAY'} onChange={handleTimeChange} /><label htmlFor="choose_12AM">12:00 AM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_1PM" value="1:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '1:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_1PM">1:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_2PM" value="2:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '2:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_2PM">2:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_3PM" value="3:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '3:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_3PM">3:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_4PM" value="4:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '4:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_4PM">4:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_5PM" value="5:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '5:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_5PM">5:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_6PM" value="6:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '6:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_6PM">6:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_7PM" value="7:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '7:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_7PM">7:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_8PM" value="8:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '8:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_8PM">8:00 PM</label>
                                                </div>
                                                <div className="radio-opt">
                                                    <input type="radio" id="choose_9PM" value="9:00 PM"
                                                        name="select_time" checked={formData.selectedTime === '9:00 PM'} onChange={handleTimeChange} /><label htmlFor="choose_9PM">9:00 PM</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="spacer-single"></div>

                                    <div className="row">
                                        <h3 className="s2">Your details</h3>


                                        <div className="col-lg-6">
                                            <div id='name_error' className='error'>Please enter your name.</div>
                                            <div className="mb25">
                                                <input type='text' name='name' id='name' className="form-control"
                                                    placeholder="Your Name" required value={formData.name}
                                                style={{ border: `2px solid ${color}`}}
                                                onChange={handleInputChange}  />
                                            </div>

                                            <div id='email_error' className='error'>Please enter your valid E-mail ID.</div>
                                            <div className="mb25">
                                                <input type='email' name='email' id='email' className="form-control"
                                                style={{ border: `2px solid ${color}`}}
                                                placeholder="Your Email" value={formData.email} 
                                                    onChange={handleInputChange} required />
                                            </div>

                                            <div id='phone_error' className='error'>Please enter your phone number.</div>
                                            <div className="mb25">
                                                <input type='text' name='phone' id='phone' className="form-control"
                                                style={{ border: `2px solid ${color}`}}
                                                placeholder="Your Phone" value={formData.phone} 
                                                    onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div id='message_error' className='error'>Please enter your message.</div>
                                            <div>
                                                <textarea name='message' id='message' className="form-control"
                                                style={{ border: `2px solid ${color}`}}
                                                placeholder="Your Message" value={formData.message} 
                                                    onChange={handleInputChange} ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" id='send_message' value='Submit Form'
                                                className="button button-md button-dark" style={{ border: `3px solid ${color}` }}>Submit</button>
                                        </div>
                                    </div>

                                </div>

                            </form>

                            <div id="success_message" className='success'>
                                Your message has been sent successfully. Refresh this page if you want to send more
                                messages.
                            </div>
                            <div id="error_message" className='error'>
                                Sorry there was an error sending your form.
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing