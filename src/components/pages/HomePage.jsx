import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Users, 
  Award, 
  Sparkles, 
  Car, 
  Home, 
  Heart, 
  Briefcase, 
  Building, 
  MoreHorizontal,
  ArrowRight,
  Quote,
  Star,
  Plane
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const HomePage = () => {
  const whyChooseUsItems = [
    { 
      icon: Award, 
      title: "+20 Anos de Mercado", 
      description: "Tradição e expertise na proteção do seu patrimônio." 
    },
    { 
      icon: Users, 
      title: "Atendimento Humano", 
      description: "Fale com corretores experientes, prontos para ajudar." 
    },
    { 
      icon: Sparkles, 
      title: "Soluções Sob Medida", 
      description: "Encontramos o seguro ideal para sua necessidade e orçamento." 
    },
    { 
      icon: Shield, 
      title: "As Melhores Seguradoras", 
      description: "Parceria com as maiores e mais confiáveis empresas do país." 
    }
  ]

  const services = [
    { icon: Car, title: 'Seguro Auto', path: '/auto', color: 'bg-blue-500' },
    { icon: Home, title: 'Seguro Residencial', path: '/residencial', color: 'bg-green-500' },
    { icon: Heart, title: 'Seguro de Vida', path: '/vida', color: 'bg-red-500', image: '/seguro-vida-familia-nova.jpg' },
    { icon: Briefcase, title: 'Seguro Empresarial', path: '/empresarial', color: 'bg-purple-500' },
    { icon: Building, title: 'Seguro Condomínio', path: '/condominio', color: 'bg-orange-500' },
    { icon: MoreHorizontal, title: 'Outras Modalidades', path: '/contato', color: 'bg-gray-500' }
  ]

  const portoProducts = [
    { 
      title: "Equipamentos Portáteis", 
      description: "Proteja seu notebook, câmera, smartwatch e mais.", 
      path: '/porto-equipamentos',
      icon: "💻"
    },
    { 
      title: "Seguro Celular", 
      description: "Proteção contra roubo, furto, quebra e mais.", 
      path: '/porto-celular',
      icon: "📱"
    },
    { 
      title: "Seguro Viagem", 
      description: "Eleito o melhor do Brasil! Assistência completa para emergências e bagagem.", 
      path: '/porto-viagem',
      icon: "✈️"
    },
    { 
      title: "Seguro de Vida Online", 
      description: "Proteja quem você ama de forma rápida e sem burocracia.", 
      path: '/porto-vida',
      icon: "❤️"
    },
    { 
      title: "Cartão Porto Seguro", 
      description: "Aproveite descontos, pontos e benefícios exclusivos.", 
      path: '/porto-cartao',
      icon: "💳"
    }
  ]

  const testimonials = [
    { 
      name: "Andrea Solano", 
      text: "Excelente atendimento! Sempre pronto pra resolver qualquer dúvida, ou problema, nesse sábado onde tive uma urgência fui super bem atendida! Super recomendo!",
      rating: 5
    },
    { 
      name: "Walter S. Gomes", 
      text: "Ótimo atendimento justamente quando mais precisamos no sinistro do veículo e na aquisição do novo com muita rapidez, eficiência e melhor custo benefício. Excelente!",
      rating: 5
    },
    { 
      name: "Renata Caprete", 
      text: "Profissionais altamente qualificados, atendimento imediato, resolução dos problemas da melhor forma. Recomendo de olhos fechados!",
      rating: 5
    }
  ]

  const insurers = [
    'https://i.imgur.com/mPGhpVM.png', // Allianz
    'https://cdn.worldvectorlogo.com/logos/azul-seguros.svg',
    'https://logodownload.org/wp-content/uploads/2018/10/bradesco-seguros-logo-1-1.png',
    'https://i.imgur.com/pmDBRbT.png', // HDI
    'https://i.imgur.com/dzFlINc.png', // Porto
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mapfre_logo.svg/2560px-Mapfre_logo.svg.png',
    'https://www.sompo.com.br/documents/10156/33130/logo-sompo-seguros.png/0f46c6f5-e55f-4d64-9694-8147d346b0d1?t=1506450616000',
    'https://logodownload.org/wp-content/uploads/2022/06/suhai-seguradora-logo.png',
    'https://logodownload.org/wp-content/uploads/2017/10/sulamerica-logo-1.png',
    'https://i.imgur.com/kDUuWS4.png', // Tokio Marine
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zurich_Insurance_Group_logo.svg/1280px-Zurich_Insurance_Group_logo.svg.png'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="bg-background">
      {/* Banner promocional */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-center text-center space-y-3 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-3">
              <Plane className="w-8 h-8 text-yellow-400" />
              <h3 className="font-bold text-lg">Temos um cupom imperdível para seu seguro viagem!</h3>
            </div>
            <Button asChild variant="secondary" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              <Link to="/porto-viagem">
                Clique Aqui
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 hero-gradient opacity-90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
            alt="Família protegida" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              O seu futuro e o da sua família estão{' '}
              <span className="text-accent">realmente protegidos?</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
              Nós transformamos incerteza em tranquilidade. Durma descansado sabendo que o que mais importa está seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/contato">
                  Fale com um Corretor
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/90 text-primary border-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold">
                <Link to="/sobre">
                  Conheça Nossa História
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Por que escolher */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUsItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-6 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nossos Seguros */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              A proteção ideal para cada momento da sua vida
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Seja qual for a sua necessidade, temos a solução certa para garantir a sua paz de espírito.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                {/* FIX: relative para o Link absoluto cobrir todo o card */}
                <Card className="card-hover group cursor-pointer h-full relative">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                      Saber Mais 
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                  <Link to={service.path} className="absolute inset-0" aria-label={`Ir para ${service.title}`} />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Confiança que se vê no dia a dia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A tranquilidade dos nossos clientes é o nosso melhor cartão de visita.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{testimonial.name}</p>
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Produtos Porto */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <img 
              src="https://i.imgur.com/dzFlINc.png" 
              alt="Logo Porto Seguro" 
              className="h-16 mx-auto mb-6 brightness-0 invert" 
            />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Contrate Online em Minutos
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Para quem busca agilidade: soluções da Porto Seguro que você contrata de forma 100% digital, com a nossa assessoria.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {portoProducts.map((product) => (
              <motion.div key={product.title} variants={itemVariants}>
                {/* FIX: relative para o Link absoluto cobrir todo o card */}
                <Card className="bg-white/95 text-gray-800 hover:bg-white transition-all duration-300 group cursor-pointer h-full shadow-lg relative">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Saber Mais 
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                  <Link to={product.path} className="absolute inset-0" aria-label={`Ir para ${product.title}`} />
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
                  className="max-w-full max-h-full object-contain" 
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para encontrar a sua tranquilidade?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              A nossa equipe de corretores está pronta para oferecer uma consultoria gratuita e sem compromisso.
            </p>
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link to="/contato">
                Fale com um Corretor
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
