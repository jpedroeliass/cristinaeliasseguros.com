// src/components/InsurersStrip.jsx
import React from "react"

const LOGOS = [
  { src: "https://i.imgur.com/mPGhpVM.png", name: "Allianz" },
  { src: "https://cdn.worldvectorlogo.com/logos/azul-seguros.svg", name: "Azul Seguros" },
  { src: "https://logodownload.org/wp-content/uploads/2018/10/bradesco-seguros-logo-1-1.png", name: "Bradesco" },
  { src: "https://i.imgur.com/pmDBRbT.png", name: "HDI" },
  { src: "https://i.imgur.com/dzFlINc.png", name: "Porto" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Mapfre_logo.svg", name: "Mapfre" },
  { src: "https://www.sompo.com.br/documents/10156/33130/logo-sompo-seguros.png", name: "Sompo" },
  { src: "https://logodownload.org/wp-content/uploads/2022/06/suhai-seguradora-logo.png", name: "Suhai" },
  { src: "https://logodownload.org/wp-content/uploads/2017/10/sulamerica-logo-1.png", name: "SulAmérica" },
  { src: "https://i.imgur.com/kDUuWS4.png", name: "Tokio Marine" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Zurich_Insurance_Group_logo.svg", name: "Zurich" },
]

function Logo({ src, name }) {
  const [failed, setFailed] = React.useState(false)
  return (
    <div className="flex items-center justify-center h-16 p-2 grayscale hover:grayscale-0 transition-all">
      {!failed ? (
        <img
          src={src}
          alt={`Logo ${name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="max-w-full max-h-full object-contain"
          onError={() => setFailed(true)} // se falhar, mostra fallback
        />
      ) : (
        <span className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 bg-white">
          {name}
        </span>
      )}
    </div>
  )
}

export default function InsurersStrip() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-gray-500 font-semibold uppercase tracking-wider">
            Trabalhamos com as seguradoras líderes de mercado
          </h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
          {LOGOS.map((l) => <Logo key={l.name} {...l} />)}
        </div>
      </div>
    </section>
  )
}
