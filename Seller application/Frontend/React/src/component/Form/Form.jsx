import React,{useRef} from 'react'
import './Form.css'
import Uploadimage from '../../image/uploadimage.jpg'
function Form() {
    const fileinputref= useRef(null)
    const handleclick = () =>{
        fileinputref.current.click()
        
    }
  return (
    <div className="Forms">
      <form action="">
        <div>
          <input type="text" placeholder="Productname" className="input" />
        </div>
        <div>
          <select name="" id="" className="input">
            <option value="">Product Category</option>
          </select>
        </div>
        <div>
          <textarea
            type="text"
            placeholder="product Description"
            className="description"
          />
        </div>
        <div className="inputfile">
          <input type="file" className="inputfile1" ref={fileinputref} />
          <img src={Uploadimage} onClick={handleclick} alt="" className='img' />
        </div>
        <button className='btn'>Upload Product</button>
      </form>
    </div>
  );
}

export default Form
