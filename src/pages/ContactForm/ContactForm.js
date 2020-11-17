import React from 'react';
import { useForm } from 'react-hook-form';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const handleOnStart = () => {

    };

    const onSubmit = (data) => {
        // POST http request
        console.log('data: ', data);
        axios.post('/end-point', data).then((response) => {
           console.log('response: ', response);
        }).catch((error) => {
            console.log('error: ', error);
        });
    };
    console.log(errors);
    return (
      <>
        <Zoom right>
          <span className="btn-start" onClick={handleOnStart}>START GAME</span>
        </Zoom>
        <div className="center">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Zoom top cascade>
              <div>
                <div className="input-container">
                  <label htmlFor="name">
                    <p className="input-lable">Name</p>
                    <input id="name" autoFocus className="input" autoComplete="off" type="text" name="name" ref={register({ required: true, minLength: 2 })} />
                  </label>
                  {errors.name?.type === 'required' && <p className="error">This field is required</p>}
                  {errors.name?.type === 'minLength' && <p className="error">This field is less 2 symbols</p>}
                </div>
                <div className="input-container">
                  <label htmlFor="phone" className="input-lable">
                    <p className="input-lable">Phone</p>
                    <input id="phone" className="input" autoComplete="off" type="text" name="phone" ref={register({ required: true, minLength: 2 })} />
                  </label>
                  {errors.phone?.type === 'required' && <p className="error">This field is required</p>}
                  {errors.phone?.type === 'minLength' && <p className="error">This field is less 2 symbols</p>}
                  <button style={{ display: 'none' }} type="submit">Submit</button>
                </div>
              </div>
            </Zoom>
          </form>
        </div>
      </>
    );
};
export default ContactForm;
