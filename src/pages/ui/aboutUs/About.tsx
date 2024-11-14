import AboutBanner from '../../../components/about/AboutBanner';
import Container from '../../../components/Container/Container';
import { Button } from '../../../components/ui/button';

const About = () => {
  return (
    <Container>
      <AboutBanner />

      <div className="font-sans text-gray-900">
        {/* Introduction Section */}

        {/* Our Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to offer premium pet supplies, expert care, and
              community support to ensure that every pet leads a happy, healthy
              life.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800">
                  Pet Care
                </h4>
                <p className="text-gray-600">
                  We offer expert advice and premium products for your pet’s
                  health and happiness.
                </p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
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

        {/* Our Team Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Meet Our Team
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our team is passionate about pets and dedicated to providing the
              best service to you and your furry friends. Here's a glimpse of
              the amazing people behind Pet Haven.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <img
                  src="team-member1.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">
                  John Doe
                </h4>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <img
                  src="team-member2.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">
                  Jane Smith
                </h4>
                <p className="text-gray-600">Veterinarian</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <img
                  src="team-member3.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">
                  Emma Brown
                </h4>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Pet Haven?
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              There are many pet stores out there, but here’s why Pet Haven is
              the best choice for your pets:
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start justify-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h4l5 13h2l5-13h4M6 4h12l-1 3H7l-1-3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Quality Products
                  </h4>
                  <p className="text-gray-600">
                    We stock only the highest-quality pet foods, toys, and
                    accessories to ensure your pets receive the best.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2 2m-2-2V8m-4 4l2-2m0 0l2 2m-2-2V8"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Experienced Team
                  </h4>
                  <p className="text-gray-600">
                    Our team consists of pet care professionals and
                    veterinarians who are passionate about your pet’s wellbeing.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12l5 5L20 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Customer Satisfaction
                  </h4>
                  <p className="text-gray-600">
                    Our priority is to ensure your satisfaction with excellent
                    customer service and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              What Our Clients Say
            </h3>
            <div className="mt-8 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-600 italic">
                  "Pet Haven provided my dog with the best care and nutrition. I
                  highly recommend them!"
                </p>
                <p className="mt-4 font-semibold text-gray-800">John D.</p>
                <p className="text-gray-600">Pet Owner</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-600 italic">
                  "Great selection of toys and accessories. My cat loves their
                  products!"
                </p>
                <p className="mt-4 font-semibold text-gray-800">Sarah W.</p>
                <p className="text-gray-600">Pet Owner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Feel free to reach out to us for any queries, feedback, or
              suggestions. We’re here to help!
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default About;
