import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import "./Form.css"

// Define the type for the form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    message?: string; // Optional field
}

const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        try {
            const url = 'https://671a9943acf9aa94f6ab2ea9.mockapi.io/api/v1/enroll/users';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Network response was not ok: ${response.status} - ${errorDetails}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error('Error:', error);
            alert("There was an error submitting the form.");
        }
    };

    return (
      <div className="form-section">
        <div className="form-content">
          <div className="text-container">
            <h1 className="form-heading">ENROLL NOW</h1>
            <p className="form-subheading">Talk About How We Can Help You Reduce Your Energy</p>
            <p className="form-info">Each solar farm has limited spots based on production capacity, and they fill up quickly!</p>
          </div>

          <div className="input-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-group">
                <h4>First Name</h4>
                <input 
                  {...register('firstName', { required: true })}
                  placeholder="First Name"
                  className="form-input"
                />
                {errors.firstName && <span className="form-error">First name is required</span>}
              </div>

              <div className="form-group">
                <h4>Last Name</h4>
                <input 
                  {...register('lastName', { required: true })}
                  placeholder="Last Name"
                  className="form-input"
                />
                {errors.lastName && <span className="form-error">Last name is required</span>}
              </div>

              <div className="form-group">
                <h4>Email</h4>
                <input 
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  placeholder="Email"
                  className="form-input"
                />
                {errors.email && <span className="form-error">Valid email is required</span>}
              </div>

              <div className="form-group">
                <h4>Phone</h4>
                <input 
                  {...register('phoneNumber', { required: true })}
                  placeholder="Phone Number"
                  className="form-input"
                />
                {errors.phoneNumber && <span className="form-error">Phone number is required</span>}
              </div>

              <div className="form-group">
                <h4>Address</h4>
                <input 
                  {...register('address', { required: true })}
                  placeholder="Address"
                  className="form-input"
                />
                {errors.address && <span className="form-error">Address is required</span>}
              </div>

              <div className="form-group">
                <h4>Zip Code</h4>
                <input 
                  {...register('zipCode', { required: true })}
                  placeholder="Zip Code"
                  className="form-input"
                />
                {errors.zipCode && <span className="form-error">Zip code is required</span>}
              </div>

              <div className="form-group full-width">
                <h4 className='message'>Message</h4>
                <textarea 
                  {...register('message')}
                  placeholder="Message"
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="form-button">
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Form;
