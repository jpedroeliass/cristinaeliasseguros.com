import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const segurosItems = [
    { path: '/auto', label: 'Seguro Auto' },
    { path: '/residencial', label: 'Seguro Residencial' },
    { path: '/vida', label: 'Seguro de Vida' },
    { path: '/empresarial', label: 'Seguro Empresarial' },
    { path: '/condominio', label: 'Seguro Condomínio' }
  ]

  const portoItems = [
    { path: '/porto-equipamentos', label: 'Equipamentos Portáteis' },
    { path: '/porto-celular', label: 'Seguro Celular' },
    { path: '/porto-viagem', label: 'Seguro Viagem' },
    { path: '/porto-vida', label: 'Seguro de Vida Online' },
    { path: '/porto-cartao', label: 'Cartão de Crédito' }
  ]

  const Dropdown = ({ title, items, isActive, onToggle }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top bar Desktop */}
      <div className="hidden lg:block bg-primary text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              {/* Telefone fixo com ícone de telefone */}
              <a href="tel:+551332212001" className="flex items-center space-x-2 hover:opacity-90">
                <Phone className="w-4 h-4" />
                <span>(13) 3221-2001</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5513997168191"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:opacity-90"
              >
                <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-4 h-4" />
                <span>(13) 99716-8191</span>
              </a>

              {/* E-mails */}
              <a href="mailto:cristina@cristinaeliasseguros.com.br" className="flex items-center space-x-2 hover:opacity-90">
                <Mail className="w-4 h-4" />
                <span>cristina@cristinaeliasseguros.com.br</span>
              </a>
              <a href="mailto:lelio@cristinaeliasseguros.com.br" className="flex items-center space-x-2 hover:opacity-90">
                <Mail className="w-4 h-4" />
                <span>lelio@cristinaeliasseguros.com.br</span>
              </a>
            </div>

            <div className="text-xs">Mais de 20 anos protegendo o que mais importa para você</div>
          </div>
        </div>
      </div>

      {/* Top bar Mobile (novo) */}
      <div className="lg:hidden bg-primary text-white">
        <div className="container-custom py-2">
          <div className="flex items-center text-xs overflow-x-auto no-scrollbar gap-4">
            <a href="tel:+551332212001" className="flex items-center gap-1 shrink-0">
              <Phone className="w-4 h-4" />
              <span>(13) 3221-2001</span>
            </a>
            <span className="opacity-50">•</span>
            <a href="https://wa.me/5513997168191" target="_blank" rel="noreferrer" className="flex items-center gap-1 shrink-0">
              <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-4 h-4" />
              <span>(13) 99716-8191</span>
            </a>
            <span className="opacity-50">•</span>
            <a href="mailto:lelio@cristinaeliasseguros.com.br" className="flex items-center gap-1 shrink-0">
              <Mail className="w-4 h-4" />
              <span>lelio@cristinaeliasseguros.com.br</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://i.imgur.com/HvuS7MA.png"
              alt="Cristina Elias Corretora de Seguros"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              Início
            </Link>

            <Dropdown
              title="Nossos Seguros"
              items={segurosItems}
              isActive={activeDropdown === 'seguros'}
              onToggle={() => setActiveDropdown(activeDropdown === 'seguros' ? null : 'seguros')}
            />

            <Dropdown
              title="Contrate Online"
              items={portoItems}
              isActive={activeDropdown === 'porto'}
              onToggle={() => setActiveDropdown(activeDropdown === 'porto' ? null : 'porto')}
            />

            <Link to="/sobre" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              Sobre Nós
            </Link>

            <Button asChild className="btn-primary">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200"
            >
              {/* Contatos no mobile dentro do menu (redundância útil) */}
              <div className="flex flex-col gap-2 text-sm mb-4">
                <a href="tel:+551332212001" className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>(13) 3221-2001</span>
                </a>
                <a href="https://wa.me/5513997168191" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700">
                  <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-4 h-4" />
                  <span>(13) 99716-8191</span>
                </a>
                <a href="mailto:cristina@cristinaeliasseguros.com.br" className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span>cristina@cristinaeliasseguros.com.br</span>
                </a>
                <a href="mailto:lelio@cristinaeliasseguros.com.br" className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span>lelio@cristinaeliasseguros.com.br</span>
                </a>
              </div>

              <div className="pt-2 space-y-4">
                <Link to="/" className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Início
                </Link>

                <div className="space-y-2">
                  <div className="font-medium text-gray-900 py-2">Nossos Seguros</div>
                  {segurosItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-gray-900 py-2">Contrate Online</div>
                  {portoItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link to="/sobre" className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Sobre Nós
                </Link>

                <Button asChild className="btn-primary w-full mt-4">
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
