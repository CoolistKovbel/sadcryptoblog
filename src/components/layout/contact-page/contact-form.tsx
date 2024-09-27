"use client";

import { ContactEmail } from "../../../lib/action";

const ContactForm = () => {
  
  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await ContactEmail(formData);
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      e.currentTarget.reset();
    }
  };

  return (
    <form className="mb-8" onSubmit={send}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-400 text-sm mb-2 ">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-400 text-sm mb-2">
          Your Message:
        </label>
        <textarea
          id="content"
          name="content"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>

      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
