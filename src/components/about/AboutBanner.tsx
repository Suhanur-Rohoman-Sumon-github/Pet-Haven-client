const AboutBanner = () => {
  return (
    <div
      className="mb-[100px] h-[500px] mt-10  bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/banner-large-group-dogs-together-row-orange-background_191971-28737.jpg")',
      }}
    >
      <div className="w-full flex justify-center items-center  h-full  text-center bg-opacity-50 bg-black p-6 rounded-lg">
        <div className="lg:w-1/2 mx-auto">
          <h2 className="text-3xl font-semibold text-white">
            Welcome to Pet Haven
          </h2>
          <p className="mt-4 text-lg text-white">
            At Pet Haven, we are dedicated to providing the best care, products,
            and services for your beloved pets. Whether you are looking for
            top-quality pet food, toys, or expert advice, we have everything you
            need to keep your pets happy and healthy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
