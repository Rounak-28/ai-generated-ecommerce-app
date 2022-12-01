import React from 'react';

const About = () => (
  <div className="px-4 py-12 bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          About us
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Our story
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan
          libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.
        </p>
      </div>

      <div className="mt-10">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div className="px-6 py-10 sm:px-10 bg-white rounded-lg shadow-lg">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Our mission
              </h4>
              <p className="mt-2 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan
                libero quis mi commodo et suscipit enim lacinia.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <div className="px-6 py-10 sm:px-10 bg-white rounded-lg shadow-lg">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Our values
              </h4>
              <p className="mt-2 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan
                libero quis mi commodo et suscipit enim lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
)

export default About
