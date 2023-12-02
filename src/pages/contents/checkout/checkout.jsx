import React from 'react';

const ShippingSection = () => {
  return (
    <div className="card bg-gray-200">
      <div className="card-header bg-white" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-link checkout-header text-black" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            SHIPPING
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down mb-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion" style={{}}>
        <div className="card-body border-b">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="receiver" className="text-sm font-medium text-gray-700">
                Receiver Name
              </label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md bg-white text-black" id="receiver" name="receiver" required />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="streetAddress" className="text-sm font-medium text-gray-700">
                Address
              </label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md bg-white text-black" id="streetAddress" name="streetAddress" required />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <label htmlFor="city" className="text-sm font-medium text-gray-700">
                City
              </label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md bg-white text-black" id="city" name="city" required />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <label htmlFor="country" className="text-sm font-medium text-gray-700">
                Country
              </label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md bg-white text-black" id="country" name="country" required />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <label htmlFor="zipCode" className="text-sm font-medium text-gray-700">
                Zipcode
              </label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md bg-white text-black" id="zipCode" name="zipCode" required />
            </div>
          </div>
          <div className="mt-2 text-right">
            <a data-toggle="collapse" data-parent="#accordion" className="btn btn-primary rounded-pill collapsed" href="#collapseThree" aria-expanded="false">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
