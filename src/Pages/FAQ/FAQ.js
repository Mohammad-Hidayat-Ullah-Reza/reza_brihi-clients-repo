import React from "react";
import { useLoaderData } from "react-router-dom";
import Accordion from "../Shared/Accordion/Accordion";

const FAQ = () => {
  const faqs = useLoaderData();
  console.log(faqs);
  return (
    <div className="grid grid-cols-2">
      {/* --------img start-------- */}
      <div>
        <img
          src="https://img.freepik.com/free-vector/faq-concept_23-2148160290.jpg?w=740&t=st=1666743228~exp=1666743828~hmac=2f89d21d77d9a8acc83c165cda297f8cc5f323a83131e40e5504ac58f17a5087"
          alt=""
        />
      </div>
      {/* --------img end-------- */}
      <div>
        <h2 className="w-fit text-4xl ml-5 my-3 pb-1 font-bold border-b-4 border-red-600">
          FAQ
        </h2>
        {/* --------accordion start-------- */}
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq}></Accordion>
        ))}

        {/* --------accordion end-------- */}
      </div>
    </div>
  );
};

export default FAQ;
