import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "5513997168191"
  const message = "Olá! Gostaria de saber mais sobre seguros."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setIsOpen(false)
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-lg shadow-xl p-4 max-w-xs border border-gray-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Cristina Elias</h4>
                  <p className="text-xs text-gray-500">Corretora de Seguros</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Olá! 👋 Como posso ajudar você hoje? Estou aqui para esclarecer suas dúvidas sobre seguros.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              type="button"
            >
              Iniciar Conversa
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={togglePopup}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 relative"
        type="button"
        aria-label="Abrir chat do WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" />
        )}
        
        {/* Pulse animation */}
        {!isOpen && (
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        )}
      </button>
    </div>
  )
}

export default FloatingWhatsApp

