// app/contact/page.js
export default function Contact() {
  return (
    // Section principale : structure en deux colonnes pour intro et formulaire
    <section className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,340px)]">
      {/* Bloc d'introduction pour contextualiser les échanges */}
      <div className="card-surface space-y-5 px-8 py-12 sm:px-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Restons en contact
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact</h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Discutons de votre prochain projet ou de vos besoins produits. Je réponds rapidement — laissez-moi vos informations ci-dessous.
        </p>
        {/* Cartes synthétiques pour mettre en avant les engagements clés */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 text-center">Disponibilité</p>
            <p className="mt-2 text-sm font-semibold text-slate-900 text-center">Projets freelance</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 text-center">Délai</p>
            <p className="mt-2 text-sm font-semibold text-slate-900 text-center">Réponse sous 48h</p>
          </div>
        </div>
      </div>

      {/* Formulaire de contact relié à Formspree */}
      <form
        action="https://formspree.io/f/yourFormId"
        method="POST"
        className="card-surface relative flex flex-col gap-6 overflow-hidden px-6 py-9 sm:px-10"
      >
        {/* Décorations floues pour un effet lumineux sans interactivité */}
        <div className="pointer-events-none absolute -top-16 right-6 h-32 w-32 rounded-full bg-sky-100/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-12 left-8 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />

        {/* Champ texte : nom */}
        <label className="space-y-2 text-sm font-semibold text-slate-800">
          Nom
          <input
            name="name"
            placeholder="Votre nom"
            className="w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-offset-2 focus:ring-offset-white"
            required
          />
        </label>
        {/* Champ texte : email avec validation native */}
        <label className="space-y-2 text-sm font-semibold text-slate-800">
          Email
          <input
            name="email"
            type="email"
            placeholder="vous@example.com"
            className="w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-offset-2 focus:ring-offset-white"
            required
          />
        </label>
        {/* Champ textarea : description du projet */}
        <label className="space-y-2 text-sm font-semibold text-slate-800">
          Message
          <textarea
            name="message"
            placeholder="Présentez votre projet"
            rows="6"
            className="h-36 resize-none rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-offset-2 focus:ring-offset-white"
            required
          />
        </label>
        {/* Bouton soumis à un gradient pour attirer le regard */}
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-sky-500 via-sky-600 to-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:from-sky-600 hover:via-sky-700 hover:to-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
          Envoyer
        </button>
        <p className="text-xs text-slate-500">
          Ou envoie un email à <a href="mailto:toi@example.com" className="font-semibold text-sky-600">toi@example.com</a>
        </p>
      </form>
    </section>
  );
}
