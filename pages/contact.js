import React from 'react';

const Contact = () => (
  <div className="px-4 py-12 bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          Contact us
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Have a question or need help?
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Our customer support team is here to help. Contact us by phone, email, or using the form below.
        </p>
      </div>

      <div className="mt-10">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div className="px-6 py-10 sm:px-10 bg-white rounded-lg shadow-lg">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                By phone
              </h4>
              <p className="mt-2 text-lg leading-7 text-gray-500">
                Call us at <a href="tel:+1-800-555-1234">1-800-555-1234</a> to speak with a customer support
                representative.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <div className="px-6 py-10 sm:px-10 bg-white rounded-lg shadow-lg">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                By email
              </h4>
              <p className="mt-2 text-lg leading-7 text-gray-500">
                Email us at <a href="mailto:support@company.com">support@company.com</a> and we will get back to you
                as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="px-6 py-10 sm:px-10 bg-white rounded-lg shadow-lg">
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            Contact form
          </h4>
          {/* <p className */}
          </div>
          </div>
          </div>
          </div>
)


export default Contact