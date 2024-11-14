import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { FaLocationPin } from 'react-icons/fa6';

import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <Container>
      <div className="w-full mb-[100px] mx-auto p-6 space-y-8">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold ">Contact Us</h1>

        <div className="lg:flex justify-between gap-8">
          {/* Contact Form */}
          <form className="space-y-4 lg:w-2/3  rounded-lg">
            <div>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className=" py-6"
              />
            </div>

            <div>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="mt-1 py-6"
              />
            </div>

            <div>
              <Input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                required
                className="mt-1 py-6"
              />
            </div>

            <div>
              <Textarea
                id="message"
                rows={9}
                placeholder="Your Message"
                required
                className="mt-1"
              />
            </div>

            <div className="text-end w-full flex justify-end">
              {' '}
              <button type="submit" className="button-primary">
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div>
            <div className="space-y-4 p-5 border ">
              <h2 className="text-xl font-semibold p-5 bg-slate-100 text-center">
                Template Trip Pvt. Ltd.
              </h2>
              <div className="flex items-center gap-5">
                <FaLocationPin className="text-3xl text-gray-300" />
                <p>
                  {' '}
                  <span className="font-medium">Address:</span> <br />{' '}
                  <span className="text-gray-500">
                    4030, Central Bazzar, opp. Varachha Police Station, Surat
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-5">
                <FaPhone className="text-3xl text-gray-300" />
                <p>
                  {' '}
                  <span className="font-medium">Fax:</span> <br />{' '}
                  <span className="text-gray-500">01403406419</span>
                </p>
              </div>
              <div className="flex items-center gap-5">
                <IoMdMail className="text-3xl text-gray-300" />
                <p>
                  {' '}
                  <span className="font-medium">Mail:</span> <br />{' '}
                  <a
                    href="mailto:islammdfoisal54@gmail.com"
                    className="text-gray-500"
                  >
                    islammdfoisal54@gmail.com
                  </a>
                </p>
              </div>

              {/* Follow Us Section */}
            </div>
            <div className="mt-5 bg-slate-100 p-5">
              <p className="font-medium">Follow Us:</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
