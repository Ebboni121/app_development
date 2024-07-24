import React, {useState} from "react"
//list of messages
const message = ["Believe in yourself", "you got this", "stay focused"]
/*
//add event listener to next, prev buttons
const next_btn = document.querySelector ('.next_btn')
next_btn.addEventListener('click', function(){alert('NEXT BUTTON')})

//Collect and event on the same line, note no "const"call
document.querySelector ('.prev_btn').addEventListener('click', function(){alert('PREVIOUS BUTTON')})*/










function App() {

  //set the state EXAMPLE 1=================================================================================
  const [count,setCount] = useState(1)

  //set state EXAMPLE 2============================================================================================
  const[counter, setCounter] = useState(1)

    //set state EXAMPLE 3=======================================================================================
    const[isOpen, setIsopen] = useState(false)

      //set the state EXAMPLE 4=================================================================================
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
  alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \nGender: ${inputdata.gender} \nSuggestions ${inputdata.usercomments}`)
  
}


  return (
   
   <>

<h1 className="title"> Example 4</h1>

<section>
  <form className="signupform" onSubmit={submitform}>
    <fieldset>
      <legend>Sign up Form</legend>
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
  <label for="comments"> Suggest something</label>
  <textarea id="comments"
  placeholder="Max 100 characters"
  maxLength={100}
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




<h1 className="title"> Example 3: Open & Close Button</h1>
   <section className="intro">
    <b> Kids</b> , Two kids are more than enough!
    <button onClick={function(){setIsopen(!isOpen)}}>{isOpen ?"Hide" : "Read More"}</button>
    
        

   </section>
   <section>
    {
    isOpen &&
    (<div className="readmore">
    JTLKheslkafjhsdklfjlsadkfjasd;kljf  sdklfjasdklfjksdljf sijf klasdjfklsdajfkls addsklafjlaksdjf sdklf sdkfjlsdklf jsda klfsdlkfjsdklfjdsklf jasdklfj sd sdkjfsakdjfsdkljfksdl jfasdkl fksdljfaklsdjf asdklfj sadklfj sda;flkjsd;fkljasdfkljasdkflj asdklfjasdklfj asdlkjfasdklfjasd fksad kfjasdklfjsa lkfjasdlkfj askldfj askldjfaklsdjfksladjfaghjkadfhioewarusdalkvnadn ajdkfgh;sadkan isaurwour92whngaknvaowr893290uvdk
    </div>)}
    
   </section>

  

   <h1 className="title"> Example 2: Slice app</h1>
   <section className="slicecontainer">
    <div className="slicewrapper">
      <div className={counter==1 ? "active":""}>1</div>
      <div className={counter==2 ? "active":""}>2</div>
      <div className={counter==3 ? "active":""}>3</div>
    </div>

    <p className="displaymsg">Message {counter} = "{message[counter-1]}"</p>

    <div className="groupbtn">
    <button className="prev_btn" onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>


    <button className="next_btn" onClick={function(){if(counter<3)setCounter(counter+1)}}>Next</button>
    </div>
   </section>

   <h1 className="title"> Example 1</h1>
   <p>The count is = {count}</p>
   <button className="incrementbtn" onClick={function(){setCount(count+1)}}>Increment</button>




 
   </> 
  );
}

export default App;
