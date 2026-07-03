'use client';

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Placeholder — integrate with a form service later
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[200px] border border-gunmetal-blue/30">
        <p className="text-[36px] font-[400] text-bone-white leading-[1.17] tracking-[-0.01px]">
          Message sent &mdash; thank you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.01em]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="bg-transparent border border-graphite/50 text-bone-white text-[17px] font-[400] px-4 py-3 outline-none focus:border-gunmetal-blue transition-colors"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.01em]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-transparent border border-graphite/50 text-bone-white text-[17px] font-[400] px-4 py-3 outline-none focus:border-gunmetal-blue transition-colors"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.01em]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="bg-transparent border border-graphite/50 text-bone-white text-[17px] font-[400] px-4 py-3 outline-none focus:border-gunmetal-blue transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="self-start text-[14px] font-[400] tracking-[0.01em] text-bone-white px-[15px] py-[9px] border border-bone-white uppercase bg-transparent hover:border-gunmetal-blue hover:text-gunmetal-blue transition-colors cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
