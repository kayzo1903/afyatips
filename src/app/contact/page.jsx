import React from "react";
import ContactsForm from "../components/ContactsForm";

const Contactpage = () => {
  return (
    <main className="w-full dark:bg-gray-950">
      <section className=" max-w-lg mx-auto min-h-screen px-4 space-y-8 pb-8">
        <div className="max-w-md mx-auto prose py-4 space-y-4">
          <h3 className="text-4xl font-bold dark:text-main">Get in Touch</h3>
          <p className="text-sm text-gray-600 capitalize">
            its free to talk and discuss with out <br /> team in any health
            related issues
          </p>
          <div className="w-16 h-[5px] bg-skin"></div>
          <ContactsForm />
        </div>
        <article className=" max-w-md w-full mx-auto">
        <h3 className="text-4xl font-bold dark:text-main">About Us</h3>
          <p className="text-justify text-xl prose py-4">
            Welcome to Afyatips, your go-to destination for a healthier and
            happier life. At Afyatips, we believe in the power of knowledge to
            transform lives. Our health blog is dedicated to providing you with
            insightful tips, expert advice, and reliable information to guide
            you on your wellness journey. Whether you are looking for practical
            fitness routines, delicious and nutritious recipes, or
            evidence-based insights on mental well-being, Afyatips is here for
            you
          </p>
        </article>
      </section>
    </main>
  );
};

export default Contactpage;
