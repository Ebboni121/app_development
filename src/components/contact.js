import React,{useState} from 'react'
import '../index.css';






const Contact= function(){



    const [inputdata, setInputdata] = useState({})

    //function to collect changes of each input data
    const handledata = function(e){
      const name = e.target.name
      const value = e.target.value
      setInputdata (values =>({...values,[name]:value}))
    }
    
    
    //submit function
    const submitform = function(e){
      e.preventDefault()
      alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \nGender: ${inputdata.gender} \nsport: ${inputdata.sport}\nSuggestions ${inputdata.usercomments}`)
      
    }

    return(
        <>
        <header className='header'>
            <h1 className='headertitle'>Contact Us</h1>
            <h2>Tell us about your viewing expereince for a chance to win tickets to the LA 2028 Olympic's</h2>
        </header>
        <section>
  <form className="signupform" onSubmit={submitform}>
    <fieldset>
      <legend>Leave a Comment</legend>
      <label for="name">Enter Name:</label>
      <input id="name" 
      type="text" 
      placeholder="Type your name..."
      name="fullname"
      value={inputdata.fullname}
      onChange={handledata}
      />

<div className="formcontrol">
<label for="age">Enter age:</label>
      <input id="age" 
      type="number" 
      placeholder="Enter age..."
      name="age"
      value ={inputdata.age}
      onChange={handledata}
      />

</div>
<div className="formcontrol">
<label for="selectgender">Enter Gender</label>
<select 
 id="selectgender" 
 name="gender"
 value ={inputdata.gender} 
 onChange={handledata}
    
     >
    <option value="female">Female</option>
      <option value="male">male</option>
      <option value="other">Other</option>
      </select>
</div>
<div className="formcontrol">
<label for="selectsport">What was your favorite sport to watch</label>
<select 
 id="selectsport" 
 name="sport"
 value ={inputdata.sport} 
 onChange={handledata}
    
     >
    <option value="female">Swimming</option>
      <option value="male">Fencing</option>
      <option value="other">Diving</option>
      <option value="female">Equestrian</option>
      <option value="male">Track & Field</option>
      <option value="other">Gymnastics</option>
      <option value="male">Surfing</option>
      <option value="other">Break Dancing</option>
      </select>
</div>

<div className="formcontrol">
  <label for="comments"> Suggest something</label>
  <textarea id="comments"
  placeholder="Max 100 characters"
  maxLength={1000}
  name="usercomments"
  value={inputdata.usercomments}
  onChange={handledata}
  />
</div>
<div className="formcontrol">
        <button type="submit">Submit</button>
      </div>
    </fieldset>
  </form>
</section>



        </>
    )
}

export default Contact;