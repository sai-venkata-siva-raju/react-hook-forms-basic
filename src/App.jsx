
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    alert('Registration successful!');
    console.log(data);
    reset(); // Reset form after submission
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit phone number'
                }
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          {/* City Field */}
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              {...register('city', { required: 'City is required' })}
            />
            {errors.city && <p className="error">{errors.city.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
