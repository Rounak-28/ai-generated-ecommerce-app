import React from 'react';

const Cart = () => (
  <div className="px-4 py-12 bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          Cart
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Your shopping cart
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Review the items in your cart and update quantities as needed. When you're ready to checkout, click the
          button below.
        </p>
      </div>

      <div className="mt-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12">
                      <img
                        className="w-full h-full rounded-lg"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
)

export default Cart