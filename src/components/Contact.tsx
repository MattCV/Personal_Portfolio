'use client';

import { FormEvent, useState } from 'react';

const contactReasons = [
  'Oportunidad laboral',
  'Proyecto freelance',
  'Colaboración',
  'Otra duda',
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
      setError('El formulario de contacto aún no está configurado. Inténtalo de nuevo más tarde.');
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
          subject: `Nuevo mensaje de contacto: ${reason}`,
        }),
      });

      if (!response.ok) {
        setError('No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.');
        return;
      }

      setForm(initialForm);
      setReason(contactReasons[0]);
      setIsSent(true);
    } catch {
      setError('No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.');
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
          ¿Tienes una duda, una propuesta o quieres trabajar conmigo? Déjame un mensaje y te
          responderé en un plazo de 24 a 48 horas.
        </p>

        <div className="rounded-2xl border border-white/10 bg-[#08090b]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
          <form className="space-y-7" onSubmit={handleSubmit}>
            <fieldset>
              <legend className={labelClassName}>Motivo</legend>
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
                Nombre
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  name="name"
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder="Tu nombre"
                  required
                  value={form.name}
                />
              </label>

              <label className={labelClassName}>
                Correo
                <input
                  autoComplete="email"
                  className={fieldClassName}
                  name="email"
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  placeholder="tu@correo.com"
                  required
                  type="email"
                  value={form.email}
                />
              </label>
            </div>

            <label className={`block ${labelClassName}`}>
              Asunto
              <input
                aria-readonly="true"
                className={`${fieldClassName} cursor-not-allowed text-gray-400`}
                readOnly
                value={`Nuevo mensaje de contacto: ${reason}`}
              />
            </label>

            <div>
              <label className={labelClassName} htmlFor="contact-message">
                Mensaje
              </label>
              <textarea
                className={`${fieldClassName} min-h-36 resize-y`}
                id="contact-message"
                maxLength={500}
                name="message"
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value.slice(0, 500) })
                }
                placeholder="Cuéntame en qué puedo ayudarte..."
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
                ¡Correo enviado correctamente! 🚀 Gracias por ponerte en contacto. He recibido tu
                mensaje y te responderé en un plazo de 24 a 48 horas.
              </p>
            )}

            <button
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#6875e8] to-[#818cf8] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(104,117,232,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(104,117,232,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5adff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b] disabled:cursor-wait disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </span>
              {!isSubmitting && (
                <span aria-hidden="true" className="relative transition-transform group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
