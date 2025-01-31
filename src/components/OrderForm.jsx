import React from "react";

export const OrderForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order Form</h2>
      <form className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <label className="block">
          Name:
          <input type="text" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          Lastname:
          <input type="text" name="lastname" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block md:col-span-2">
          Email:
          <input type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block md:col-span-2">
          Address:
          <input type="text" name="address" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          State:
          <input type="text" name="state" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          City:
          <input type="text" name="city" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          Zip Code:
          <input type="text" name="zip" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          Phone Number:
          <input type="text" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <button type="submit" className="md:col-span-2 bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
