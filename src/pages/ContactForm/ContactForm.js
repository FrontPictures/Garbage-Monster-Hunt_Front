import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';

const ContactForm = ({ history }) => {
    const { register, handleSubmit, errors } = useForm();
    const [userActive, setUserActive] = useState(false);
    let timer;

    const onSubmit = (data) => {
        // POST http request
        console.log('data: ', data);
        axios.post('/end-point', data).then((response) => {
           console.log('response: ', response);
        }).catch((error) => {
            console.log('error: ', error);
        });
    };
    useEffect(() => {
        timer = setTimeout(() => {
            if (!userActive) history.push('/');
        }, 30000);
        return () => clearTimeout(timer);
    }, [userActive]);

    const handleChange = (e) => {
       if (e.target.value) setUserActive(true);
       else {
            timer = setTimeout(() => {
                history.push('/');
            }, 30000);
       }
    };

    return (
      <>
        <Zoom right>
          <span onClick={handleSubmit(onSubmit)} className="btn-start">START GAME</span>
        </Zoom>
        <div className="center">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Zoom top cascade>
              <div>
                <div className="input-container">
                  <label htmlFor="name">
                    <p className="input-label">Name</p>
                    <input
                      id="name"
                      onChange={handleChange}
                      autoFocus
                      className="input"
                      autoComplete="off"
                      type="text"
                      name="name"
                      ref={register({ required: true, minLength: 2 })}
                    />
                  </label>
                  {errors.name?.type === 'required' && <p className="error">This field is required</p>}
                  {errors.name?.type === 'minLength' && <p className="error">This field is less 2 symbols</p>}
                </div>
                <div className="input-container">
                  <label htmlFor="phone">
                    <p className="input-label">Phone</p>
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
