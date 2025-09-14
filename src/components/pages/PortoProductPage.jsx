import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Laptop, 
  Shield, 
  AlertTriangle, 
  UserX, 
  Smartphone, 
  Droplets, 
  Plane, 
  Heart, 
  Briefcase, 
  CreditCard, 
  Car, 
  Star,
  ExternalLink,
  Trophy,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const iconMap = {
  Laptop,
  Shield,
  AlertTriangle,
  UserX,
  Smartphone,
  Droplets,
  Plane,
  Heart,
  Briefcase,
  CreditCard,
  Car,
  Star
}

const PortoProductPage = ({ 
  title, 
  description, 
  heroImage, 
  affiliateLink, 
  features, 
  showPromo = false 
}) => {
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
      {/* Banner promocional para seguro viagem */}
      {showPromo && (
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container-custom py-4">
            <div className="flex flex-col md:flex-row items-center justify-center text-center space-y-3 md:space-y-0">
              <div className="flex items-center space-x-3">
                <Trophy className="w-10 h-10 text-yellow-400" />
                <div className="text-left md:text-center">
                  <h3 className="font-bold text-lg">O melhor seguro viagem pelo 5º ano!</h3>
                  <p className="text-sm text-gray-200">Até 45% OFF*. Use o cupom:</p>
                </div>
              </div>
              <div className="md:ml-6 flex flex-col items-center">
                <span className="bg-yellow-400 text-blue-900 font-bold text-xl tracking-wider px-4 py-2 rounded-md border-2 border-yellow-300">
                  FERIAS40
                </span>
                <span className="text-xs text-yellow-200 mt-1">*40% OFF + 5% com Cartão Porto Bank</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 z-10"></div>
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
            <img 
              src="https://i.imgur.com/dzFlINc.png" 
              alt="Logo Porto Seguro" 
              className="h-16 mx-auto mb-6 brightness-0 invert" 
            />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
              {description}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold px-8 py-4 text-lg"
            >
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 mr-3" />
                Contratar Online Agora
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Principais Vantagens */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Principais Vantagens
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Veja como este seguro pode facilitar e proteger o seu dia a dia.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Shield
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="card-hover h-full">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center items-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
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
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Processo simples e 100% digital para sua comodidade.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Acesse o Link",
                description: "Clique no botão para acessar o site oficial da Porto Seguro."
              },
              {
                step: "2",
                title: "Preencha os Dados",
                description: "Informe suas informações básicas de forma rápida e segura."
              },
              {
                step: "3",
                title: "Escolha seu Plano",
                description: "Selecione a cobertura que melhor atende suas necessidades."
              },
              {
                step: "4",
                title: "Contrate Online",
                description: "Finalize sua contratação e receba sua apólice por email."
              }
            ].map((step, index) => (
              <motion.div key={step.step} variants={itemVariants}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Por que Porto Seguro */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Por que Porto Seguro?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              A maior seguradora do Brasil, com tradição e confiabilidade.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Trophy,
                title: "Líder de Mercado",
                description: "A maior seguradora do Brasil há mais de 70 anos."
              },
              {
                icon: Shield,
                title: "Confiabilidade",
                description: "Milhões de clientes confiam na Porto Seguro."
              },
              {
                icon: Star,
                title: "Qualidade",
                description: "Produtos e serviços reconhecidos pela excelência."
              },
              {
                icon: Heart,
                title: "Atendimento",
                description: "Suporte 24h para quando você mais precisar."
              }
            ].map((item, index) => (
              <motion.div key={item.title} variants={itemVariants}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 p-4 rounded-full">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logos das Seguradoras */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-8">
              Trabalhamos com as seguradoras líderes de mercado
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {[
              'https://i.imgur.com/mPGhpVM.png', // Allianz
              'https://cdn.worldvectorlogo.com/logos/azul-seguros.svg',
              'https://logodownload.org/wp-content/uploads/2018/10/bradesco-seguros-logo-1-1.png',
              'https://i.imgur.com/pmDBRbT.png', // HDI
              'https://i.imgur.com/dzFlINc.png', // Porto
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mapfre_logo.svg/2560px-Mapfre_logo.svg.png',
              'https://logodownload.org/wp-content/uploads/2022/06/suhai-seguradora-logo.png',
              'https://logodownload.org/wp-content/uploads/2017/10/sulamerica-logo-1.png',
              'https://i.imgur.com/kDUuWS4.png', // Tokio Marine
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zurich_Insurance_Group_logo.svg/1280px-Zurich_Insurance_Group_logo.svg.png'
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center items-center"
              >
                <img 
                  src={logo} 
                  alt={`Seguradora ${index + 1}`}
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Pronto para se proteger?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contrate agora mesmo de forma 100% digital e tenha a tranquilidade que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold px-8 py-4 text-lg"
              >
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-6 h-6 mr-3" />
                  Contratar Agora
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="text-primary border-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg"
              >
                <Link to="/contato">
                  Falar com Corretor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>
                * Condições e valores sujeitos à análise da Porto Seguro. 
                Cristina Elias Corretora de Seguros atua como intermediária autorizada.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PortoProductPage

