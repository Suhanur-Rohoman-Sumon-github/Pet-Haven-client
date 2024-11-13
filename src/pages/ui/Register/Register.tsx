import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const imgbbApiKey = '08dea360d9faac6a8de4cf6f88727008'; // Replace with your actual ImgBB API key

  const uploadImageToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    setIsUploading(true);
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      setImageUrl(data.data.url); // Save the returned URL
      setIsUploading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };

  const onSubmit = (data: FieldValues) => {
    const formData = { ...data, image: imageUrl };
    console.log(formData);
    // Submit form data with image URL
  };
  return (
    <Container>
      <div className="my-12 lg:flex justify-between gap-10 ">
        <div className="lg:w-1/2">
          <img
            className="w-full h-full"
            src="https://cdni.iconscout.com/illustration/premium/thumb/successful-payment-illustration-download-in-svg-png-gif-file-formats--transaction-online-3d-character-with-different-scene-pack-people-illustrations-1815075.png?f=webp"
            alt=""
          />
        </div>
        <div className="flex justify-center lg:w-2/5 mx-auto items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md w-full"
          >
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Pet Haven Registration
            </h2>

            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
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

            {/* Image Upload Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="image">
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('image', { required: 'Image is required' })}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  e.target.files && uploadImageToImgBB(e.target.files[0])
                }
              />
              {isUploading && (
                <p className="text-blue-500 text-sm mt-1">Uploading image...</p>
              )}
              {imageUrl && (
                <p className="text-green-500 text-sm mt-1">
                  Image uploaded successfully!
                </p>
              )}
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message as string}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="address">
                Address
              </label>
              <input
                disabled={isUploading}
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('address', { required: 'Address is required' })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message as string}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                disabled={isUploading}
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register('phone', { required: 'Phone number is required' })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary rounded-full text-white py-3 mt-4 hover:bg-primary-dark transition duration-200"
              disabled={isUploading}
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
