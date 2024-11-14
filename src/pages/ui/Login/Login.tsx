import { useEffect, useState } from 'react';
import Container from '../../../components/Container/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../../Redux/features/auth/authApis';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../../Redux/hook/hook';
import { setUser } from '../../../Redux/features/auth/authSlice';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { data: loginRes, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    login(data);
  };
  console.log(loginRes, error);
  useEffect(() => {
    if (loginRes?.success) {
      toast.success(loginRes?.message);
      dispatch(
        setUser({ user: loginRes?.data?.user, token: loginRes?.data?.token })
      );
    }
  }, [loginRes, error, dispatch]);
  return (
    <Container>
      <Link to={'/'}>
        {' '}
        <button className="mt-12 button-primary flex items-center gap-2">
          {' '}
          <FaArrowLeft /> Back to Home
        </button>
      </Link>
      <div className="my-12 flex  flex-col-reverse lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <img
            className="w-full"
            src="https://cdn.dribbble.com/users/6498639/screenshots/17337524/media/2f5c8ea2aa7af3ed9121693ac0b51622.gif"
            alt=""
          />
        </div>
        <div className="flex justify-center w-full lg:w-2/5 mx-auto items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md w-full"
          >
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Pet Haven Login
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your mail"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.email.message as string}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('password', { required: 'Password is required' })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary rounded-full text-white py-3 mt-4 hover:bg-primary-dark transition duration-200"
            >
              Login
            </button>
            <p className="text-center mt-4 text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-primary font-medium hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
