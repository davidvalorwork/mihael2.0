import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const OrderForm = () => {
  const [state, handleSubmit] = useForm("xyzkjkkw");
  if (state.succeeded) {
    return <p>Thanks for your order!</p>;
  }

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
          <input type="text" id="lastname" name="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          <ValidationError prefix="Lastname" field="lastname" errors={state.errors} />
        </div>
        <div className="col-span-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@example.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="col-span-2">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <input type="text" id="address" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123 Main St" required />
          <ValidationError prefix="Address" field="address" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
          <input type="text" id="state" name="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CA" required />
          <ValidationError prefix="State" field="state" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
          <input type="text" id="city" name="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Los Angeles" required />
          <ValidationError prefix="City" field="city" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
          <input 
            type="text" 
            id="zip" 
            name="zip" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="90001" 
            required 
            pattern="\d{5}" 
            title="Please enter a valid 5-digit zip code"
            minLength="5"
            maxLength="5"
          />
          <ValidationError prefix="Zip" field="zip" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="(123) 456-7890" 
            required 
            title="Please enter a valid phone number in the format (123) 456-7890"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className="col-span-2">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe the service you need:</label>
          <textarea id="description" name="description" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required></textarea>
          <ValidationError prefix="Description" field="description" errors={state.errors} />
        </div>
        <button 
          type="submit" 
          className="btn btn-custom btn-lg page-scroll col-span-2" 
          style={{ background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 10%)" }}
        >
          Submit
        </button>
        </div>
        
      </form>
    </div>
  );
};
