import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center flex-col my-9 py-6">
      <h2 className="text-4xl font-extrabold my-4">Have any queries?</h2>
      <div className="flex justify-center w-[80%] p-2 m-2">
        <p className="text-xl text-gray-400 font-medium text-center">
          Got questions or need assistance? Our dedicated support team is here
          to help you 24/7. Feel free to reach out to us. Your inquiries are
          important to us, and we're always ready to provide expert guidance for
          a seamless crypto experience.
        </p>
      </div>
      <Link href={"/support"}>
        <button className="bg-white text-black text-md p-2 rounded-md font-medium">
          Contact Us
        </button>
      </Link>
    </section>
  );
};

export default Contact;
