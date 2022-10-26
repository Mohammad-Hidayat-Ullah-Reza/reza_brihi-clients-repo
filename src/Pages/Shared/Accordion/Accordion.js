import React from "react";

const Accordion = ({ faq }) => {
  return (
    <div className="collapse collapse-plus">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium border-b-2 border-dotted h-fit">
        {faq.question}
      </div>
      <div className="collapse-content">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
