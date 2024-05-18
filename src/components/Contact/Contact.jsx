import React from 'react'
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png"
import mail_icon from "../../assets/images/mail-icon.png"
import phone_icon from "../../assets/images/phone-icon.png"
import location_icon from "../../assets/images/location-icon.png"
import white_arrow from "../../assets/images/white-arrow.png"
const Contact = () => {

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0e0c3734-7db4-43d3-b31c-61114068fa5b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact' id='contact'>
       <div className='contact-col'>
        <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, em facere veniam quaerat maxime. Ducimus.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@</li>
            <li><img src={phone_icon} alt="" />865213</li>
            <li><img src={location_icon} alt="" />usa usa ysa usamjmj ffjf</li>
            </ul>
        </div> 
        
       <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' 
            required/>
             <label>Phone</label>
            <input type="tel" name='phone' placeholder='Enter Your m nom' 
            required/>
             <label>message</label>
            <textarea name='msg' rows="6" placeholder='Enter Your m54lm' 
            required></textarea>
            <button type='Submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
            </div> 
    </div>
  )
}

export default Contact;
