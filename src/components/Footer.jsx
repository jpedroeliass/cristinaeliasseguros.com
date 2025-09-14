import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img 
              src="https://i.imgur.com/HvuS7MA.png" 
              alt="Cristina Elias Corretora de Seguros" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Desde 2003, protegendo o que mais importa para você. Tradição, confiança e excelência em seguros.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/CristinaEliasSeguros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/cristinaelias_seguros/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Seguros */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Seguros</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/auto" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro Auto
                </Link>
              </li>
              <li>
                <Link 
                  to="/residencial" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro Residencial
                </Link>
              </li>
              <li>
                <Link 
                  to="/vida" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro de Vida
                </Link>
              </li>
              <li>
                <Link 
                  to="/empresarial" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro Empresarial
                </Link>
              </li>
              <li>
                <Link 
                  to="/condominio" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro Condomínio
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos Porto */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Contrate Online</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/porto-equipamentos" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Equipamentos Portáteis
                </Link>
              </li>
              <li>
                <Link 
                  to="/porto-celular" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro Celular
                </Link>
              </li>
              <li>
                <Link 
                  to="/porto-viagem" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro Viagem
                </Link>
              </li>
              <li>
                <Link 
                  to="/porto-vida" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Seguro de Vida Online
                </Link>
              </li>
              <li>
                <Link 
                  to="/porto-cartao" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Cartão de Crédito
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+551332212001" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    (13) 3221-2001
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="break-words"> {/* <-- CORREÇÃO APLICADA AQUI */}
                  <a 
                    href="mailto:cristina@cristinaeliasseguros.com.br" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    cristina@cristinaeliasseguros.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 text-sm">
                    R. Pedro II, 85 - Conjunto 81 - Centro<br />
                    Santos - SP, 11010-080
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Cristina Elias Corretora de Seguros. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link 
                to="/sobre" 
                className="hover:text-white transition-colors duration-200"
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="hover:text-white transition-colors duration-200"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer