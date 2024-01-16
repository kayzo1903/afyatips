import React from "react";

const Contactpage = () => {
  return (
    <main className="w-full">
      <section className="max-w-screen-lg mx-auto min-h-screen px-4">
        <div className="max-w-md mx-auto mt-8 space-y-4">
          <h6 className="text-2xl font-bold">Get in Touch</h6>
          <p className="text-sm text-gray-600">
            its free to talk and discuss with out <br /> team in any health related
            issues
          </p>
          <div className="w-16 h-[5px] bg-skin"></div>
          <form className="flex flex-col space-y-6">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email address"
              className="outline-none bg-main border-gray-500 border-[1px] rounded-sm text-gray-500 py-2 px-2"
            />
            <textarea
              name="userMessage"
              id="UserMessage"
              cols="30"
              rows="10"
              placeholder="whats can we help with"
              className="outline-none border-gray-500 border-[1px] rounded-sm text-gray-500 py-2 px-2"
            ></textarea>
            <button className="py-2 rounded-md w-full text-center text-white bg-skin hover:shadow-lg transition-all duration-500">
              send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contactpage;
