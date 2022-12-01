import React from 'react';

const Products = () => (
  <div className="px-4 py-12 bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          Products
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Our latest collections
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Shop our latest collections of clothing, shoes, and accessories for men and women.
        </p>
      </div>

      <div className="mt-10 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm leading-5 font-medium text-indigo-600">
                Clothing
              </p>
              <a href="#" className="block mt-1 text-lg leading-7 font-semibold text-gray-900">
                Men's t-shirts
              </a>
              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan
                libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-indigo-600">
                  Learn more
                </a>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
)

export default Products
