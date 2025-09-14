import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(13) 3221-2001",
      link: "tel:+551332212001",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "cristina@cristinaeliasseguros.com.br",
      link: "mailto:cristina@cristinaeliasseguros.com.br",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Pedro II, 85 - Conjunto 81 - Centro, Santos - SP, 11010-080",
      link: "https://maps.google.com/?q=R.+Pedro+II,+85+-+Centro,+Santos+-+SP",
      color: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 09:00 - 18:00",
      link: null,
      color: "bg-purple-500"
    }
  ]

  const whatsappNumber = "5513997168191"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre seguros."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
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
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Estamos aqui para{' '}
              <span className="text-accent">ajudar</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Entre em contato, tire as suas dúvidas ou peça uma cotação. A nossa equipe está à sua disposição.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} variants={itemVariants}>
                <Card className="card-hover h-full">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`${info.color} p-4 rounded-full`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        // CORREÇÃO: Adicionada a classe "break-all" aqui
                        className="text-gray-600 hover:text-primary transition-colors duration-200 leading-relaxed break-all"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Seção principal de contato */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Informações detalhadas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                  Fale Diretamente Conosco
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Escolha a forma mais conveniente para você entrar em contato. Estamos prontos para 
                  oferecer a melhor consultoria em seguros, de forma gratuita e sem compromisso.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Atendimento por Telefone</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Ligue para nós e fale diretamente com nossos corretores especializados.
                    </p>
                    <a 
                      href="tel:+551332212001" 
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      (13) 3221-2001
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Converse conosco pelo WhatsApp para um atendimento rápido e prático.
                    </p>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-primary hover:text-accent transition-colors font-medium"
                    >
                      Iniciar conversa
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Envie sua dúvida por email e responderemos o mais breve possível.
                    </p>
                    <a 
                      href="mailto:cristina@cristinaeliasseguros.com.br" 
                      className="text-primary hover:text-accent transition-colors font-medium break-all"
                    >
                      cristina@cristinaeliasseguros.com.br
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ações rápidas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Atendimento Imediato
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clique em uma das opções abaixo para falar conosco agora mesmo.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 text-lg"
                      size="lg"
                    >
                      <MessageCircle className="w-6 h-6 mr-3" />
                      Conversar no WhatsApp
                    </Button>

                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-4 text-lg"
                      size="lg"
                    >
                      <a href="mailto:cristina@cristinaeliasseguros.com.br">
                        <Send className="w-6 h-6 mr-3" />
                        Enviar um Email
                      </a>
                    </Button>

                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold py-4 text-lg"
                      size="lg"
                    >
                      <a href="tel:+551332212001">
                        <Phone className="w-6 h-6 mr-3" />
                        Ligar Agora
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 p-4 bg-white rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">💡 Dica</h4>
                    <p className="text-sm text-gray-600">
                      Para uma cotação mais rápida, tenha em mãos as informações básicas do que deseja segurar 
                      (modelo do carro, valor do imóvel, etc.).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa e localização */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Estamos localizados no centro de Santos, com fácil acesso e estacionamento próximo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.8984!2d-46.3356!3d-23.9395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a7!2sR.+Pedro+II,+85+-+Centro,+Santos+-+SP,+11010-080!5e0!3m2!1spt!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Cristina Elias Seguros"
              ></iframe>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Endereço Completo</h3>
                  <p className="text-gray-600 leading-relaxed">
                    R. Pedro II, 85 -  81<br />
                    Centro, Santos - SP<br />
                    CEP: 11010-080
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Como Chegar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Localizado no centro histórico de Santos, com diversas opções 
                    de transporte público. Estacionamento disponível nas proximidades.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage