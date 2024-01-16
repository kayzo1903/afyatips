import React from "react";
import ContactsForm from "../components/ContactsForm";

const Contactpage = () => {
  return (
    <main className="w-full">
      <section className="max-w-screen-lg mx-auto min-h-screen px-4">
        <div className="max-w-md mx-auto prose mt-8 space-y-4">
          <h3 className="prose-2xl font-bold">Get in Touch</h3>
          <p className="text-sm text-gray-600 capitalize">
            its free to talk and discuss with out <br /> team in any health
            related issues
          </p>
          <div className="w-16 h-[5px] bg-skin"></div>
          <ContactsForm />
        </div>
      </section>
    </main>
  );
};

export default Contactpage;
