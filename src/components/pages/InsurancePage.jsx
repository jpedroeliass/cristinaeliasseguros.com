import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Users, 
  Wrench, 
  Car, 
  Eye, 
  Heart, 
  Home, 
  Zap, 
  Square, 
  Activity, 
  Plus, 
  Briefcase, 
  Building, 
  Clock, 
  Truck,
  Droplets,
  CheckCircle,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const iconMap = {
  Shield,
  Users,
  Wrench,
  Car,
  Eye,
  Heart,
  Home,
  Zap,
  Square,
  Activity,
  Plus,
  Briefcase,
  Building,
  Clock,
  Truck,
  Droplets
}

const insurers = [
  'https://i.imgur.com/mPGhpVM.png', // Allianz
  'https://klauecorretora.com.br/wp-content/uploads/2018/11/somposeguros-1-e1551103238511.png',
  'https://logodownload.org/wp-content/uploads/2018/10/bradesco-seguros-logo-1-1.png',
  'https://i.imgur.com/pmDBRbT.png', // HDI
  'https://i.imgur.com/vfiSzTt.png', // Porto
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mapfre_logo.svg/2560px-Mapfre_logo.svg.png',
  'https://i.imgur.com/7zbp4bX.png', // Sompo corrigido
  'https://logodownload.org/wp-content/uploads/2022/06/suhai-seguradora-logo.png',
  'https://logodownload.org/wp-content/uploads/2017/10/sulamerica-logo-1.png',
  'https://i.imgur.com/kDUuWS4.png', // Tokio Marine
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zurich_Insurance_Group_logo.svg/1280px-Zurich_Insurance_Group_logo.svg.png'
]

const InsurancePage = ({ 
  title, 
  description, 
  heroImage, 
  iframeSrc, 
  coverages = [], 
  benefits = [], 
  faqs = [] 
}) => {
  const [openFaq, setOpenFaq] = useState(null)
  const whatsappNumber = "5513997168191"
  const whatsappMessage = `Olá! Gostaria de saber mais sobre seguros!`

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="bg-background pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-700/70 z-10"></div> 
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulário de Cotação */}
      {iframeSrc && (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl -mt-32 relative z-20 overflow-hidden"
          >
            <div className="p-8 md:p-12 text-center border-b border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Faça sua Cotação Online
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Preencha o formulário abaixo para receber sua proposta personalizada em minutos.
              </p>
            </div>
            
            <div className="h-[80vh]">
              <iframe 
                src={iframeSrc} 
                className="w-full h-full border-0" 
                title="Formulário de Cotação"
              />
            </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* CTA WhatsApp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Prefere falar com um corretor?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Clique abaixo para tirar as suas dúvidas diretamente conosco via WhatsApp.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Conversar no WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Principais Coberturas */}
      {coverages.length > 0 && (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Principais Coberturas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Entenda o que o seu seguro pode oferecer para a sua proteção.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {coverages.map((coverage, index) => {
              const IconComponent = iconMap[coverage.icon] || Shield
              return (
                <motion.div key={coverage.title} variants={itemVariants}>
                  <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{coverage.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{coverage.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
      )}

      {/* Por que Contratar + FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Por que Contratar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Por que Contratar?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Investir num seguro é investir na sua tranquilidade e na segurança do seu patrimônio.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Perguntas Frequentes</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex justify-between items-start text-left text-lg font-semibold text-gray-800 hover:text-primary transition-colors duration-200"
                        >
                          <span className="pr-4">{faq.question}</span>
                          {openFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                          )}
                        </button>
                        {openFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-gray-600 leading-relaxed"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seguradoras */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-gray-500 font-semibold uppercase tracking-wider mb-8">
              Trabalhamos com as seguradoras líderes de mercado
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center"
          >
            {insurers.map((logoUrl, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-center items-center h-16 p-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={logoUrl} 
                  alt={`Logo Seguradora ${index + 1}`} 
                  className={
                    index === 6
                      ? "max-w-[140px] max-h-16 object-contain" // Sompo maior
                      : "max-w-full max-h-full object-contain"
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Pronto para se proteger?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossos especialistas e encontre a proteção ideal para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Falar no WhatsApp
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
              >
                <Link to="/contato">
                  Ver Todas as Formas de Contato
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default InsurancePage