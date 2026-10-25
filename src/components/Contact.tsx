'use client';

import { FormEvent, useState } from 'react';

const contactReasons = [
  'Job opportunity',
  'Freelance project',
  'Collaboration',
  'Other inquiry',
];

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [reason, setReason] = useState(contactReasons[0]);
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSent(false);

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!formId) {
      setError('The contact form is not configured yet. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          reason,
          subject: `Portfolio Contact: ${reason}`,
        }),
      });

      if (!response.ok) {
        setError('Your message could not be sent. Please try again in a few minutes.');
        return;
      }

      setForm(initialForm);
      setReason(contactReasons[0]);
      setIsSent(true);
    } catch {
      setError('Your message could not be sent. Check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClassName =
    'mt-2 w-full rounded-xl border border-white/10 bg-[#090a0d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#818cf8] focus:ring-2 focus:ring-[#818cf8]/20';
  const labelClassName = 'text-xs font-medium uppercase tracking-[0.18em] text-gray-400';

  return (
    <section id="contact" className="px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 border-l-4 border-[#818cf8] pl-4 text-2xl font-bold sm:text-3xl">
          Contact
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mb-10 sm:text-base">
          Have a question, a proposal, or want to work together? Send me a message and I&apos;ll get
          back to you within 24 to 48 hours.
        </p>

        <div className="rounded-2xl border border-white/10 bg-[#08090b]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
          <form className="space-y-7" onSubmit={handleSubmit}>
            <fieldset>
              <legend className={labelClassName}>Reason</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {contactReasons.map((option) => {
                  const isSelected = reason === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setReason(option)}
                      className={`rounded-full border px-4 py-2 text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818cf8] ${
                        isSelected
                          ? 'border-[#818cf8] bg-[#818cf8]/10 text-white shadow-[0_0_20px_rgba(129,140,248,0.12)]'
                          : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClassName}>
                Name
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  name="name"
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder="Your name"
                  required
                  value={form.name}
                />
              </label>

              <label className={labelClassName}>
                Email
                <input
                  autoComplete="email"
                  className={fieldClassName}
                  name="email"
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={form.email}
                />
              </label>
            </div>

            <label className={`block ${labelClassName}`}>
              Subject
              <input
                aria-readonly="true"
                className={`${fieldClassName} cursor-not-allowed text-gray-400`}
                readOnly
                value={`Portfolio Contact: ${reason}`}
              />
            </label>

            <div>
              <label className={labelClassName} htmlFor="contact-message">
                Message
              </label>
              <textarea
                className={`${fieldClassName} min-h-36 resize-y`}
                id="contact-message"
                maxLength={500}
                name="message"
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value.slice(0, 500) })
                }
                placeholder="Tell me how I can help..."
                required
                value={form.message}
              />
              <p aria-live="polite" className="mt-2 text-right font-mono text-xs text-gray-500">
                {form.message.length}/500
              </p>
            </div>

            {error && (
              <p className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-200" role="alert">
                {error}
              </p>
            )}

            {isSent && (
              <p
                className="rounded-xl border border-[#818cf8]/25 bg-[#818cf8]/10 px-4 py-4 text-sm leading-relaxed text-indigo-100"
                role="status"
              >
                Message sent successfully! 🚀 Thanks for reaching out. I&apos;ve received your
                message and will get back to you within 24 to 48 hours.
              </p>
            )}

            <button
              className="flex min-h-10 w-full max-w-[180px] items-center justify-center rounded-full border border-[#818cf8] bg-[#818cf8]/10 px-5 py-2 text-xs font-medium text-indigo-100 transition-colors duration-200 hover:bg-[#818cf8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5adff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b] disabled:cursor-wait disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
