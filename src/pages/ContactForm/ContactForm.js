import React from 'react';
import { useForm } from 'react-hook-form';
import Zoom from 'react-reveal/Zoom';

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Zoom top cascade>
          <div>
            <input className="input" autoComplete="off" type="text" name="name" ref={register({ required: true, minLength: 2 })} />
            {errors.name?.type === 'required' && <p className="error">This field is required</p>}
            {errors.name?.type === 'minLength' && <p className="error">This field is less 2 symbols</p>}
            <input className="input" autoComplete="off" type="text" name="phone" ref={register({ required: true, minLength: 2 })} />
            {errors.phone?.type === 'required' && <p className="error">This field is required</p>}
            {errors.phone?.type === 'minLength' && <p className="error">This field is less 2 symbols</p>}
            <button style={{ display: 'none' }} type="submit">Submit</button>
          </div>
        </Zoom>
      </form>
    );
};
export default ContactForm;
