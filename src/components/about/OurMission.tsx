import Container from '../Container/Container';

const OurMission = () => {
  return (
    <Container>
      {/* Our Mission Section */}
      <section className=" bg-white">
        <div className=" mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 lg:w-1/2 mx-auto text-lg text-gray-600">
            Our mission is to offer premium pet supplies, expert care, and
            community support to ensure that every pet leads a happy, healthy
            life.
          </p>
          <div className="mt-8 lg:flex justify-center space-x-6">
            <div className="border p-12 rounded-md">
              <h4 className="text-xl font-semibold text-gray-800">Pet Care</h4>
              <p className="text-gray-600">
                We offer expert advice and premium products for your pet’s
                health and happiness.
              </p>
            </div>
            <div className="p-12 border rounded-md">
              <h4 className="text-xl font-semibold text-gray-800">
                Community Support
              </h4>
              <p className="text-gray-600">
                We believe in fostering a pet-loving community to share
                experiences and advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurMission;
