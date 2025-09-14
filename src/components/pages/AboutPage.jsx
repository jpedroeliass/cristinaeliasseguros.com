import InsurersStrip from "@/components/InsurersStrip"
import { motion } from 'framer-motion'
import { Heart, Handshake, Trophy, Users, Award, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import familyHappyImg from '../../assets/family-happy.jpg'

const AboutPage = () => {
  const values = [
    { 
      icon: Heart, 
      title: "Cliente em Primeiro Lugar", 
      description: "A sua tranquilidade é a nossa prioridade. Oferecemos um atendimento dedicado e humano.",
      color: "bg-red-500"
    },
    { 
      icon: Handshake, 
      title: "Confiança e Transparência", 
      description: "Construímos relações sólidas baseadas na ética e na clareza em cada etapa.",
      color: "bg-blue-500"
    },
    { 
      icon: Trophy, 
      title: "Excelência e Tradição", 
      description: "Mais de 20 anos de experiência para oferecer sempre as melhores soluções em seguros.",
      color: "bg-yellow-500"
    }
  ]

  const stats = [
    { number: "20+", label: "Anos de Mercado", icon: Award },
    { number: "5000+", label: "Clientes Atendidos", icon: Users },
    { number: "15+", label: "Seguradoras Parceiras", icon: Handshake },
    { number: "98%", label: "Satisfação dos Clientes", icon: Target }
  ]

  const timeline = [
    {
      year: "2003",
      title: "Fundação",
      description: "Início das atividades com foco no atendimento personalizado e consultivo."
    },
    {
      year: "2008",
      title: "Expansão",
      description: "Ampliação da carteira de seguradoras parceiras e diversificação dos produtos."
    },
    {
      year: "2015",
      title: "Modernização",
      description: "Implementação de tecnologias digitais para melhor atendimento aos clientes."
    },
    {
      year: "2020",
      title: "Transformação Digital",
      description: "Adaptação completa ao atendimento digital mantendo o toque humano."
    },
    {
      year: "2025",
      title: "Inovação Contínua",
      description: "Sempre evoluindo para oferecer as melhores soluções em seguros."
    }
  ]

  const insurers = [
    'https://i.imgur.com/mPGhpVM.png', // Allianz
    'https://cdn.worldvectorlogo.com/logos/azul-seguros.svg',
    'https://logodownload.org/wp-content/uploads/2018/10/bradesco-seguros-logo-1-1.png',
    'https://i.imgur.com/pmDBRbT.png', // HDI
    'https://i.imgur.com/vfiSzTt.png', // Porto
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
              Mais que uma corretora,{' '}
              <span className="text-accent">uma parceira de vida</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Conheça a nossa história, construída sobre confiança e dedicação ao longo de mais de duas décadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={familyHappyImg}
                alt="Família protegida" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Nossa Trajetória
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundada em 2003, a nossa corretora nasceu de um sonho: oferecer segurança e tranquilidade 
                para famílias e empresas de forma personalizada e humana. O que começou como uma pequena 
                operação, hoje é uma referência no mercado, mas sem nunca perder a essência do atendimento 
                próximo e consultivo.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos que cada cliente é único. Por isso, dedicamo-nos a entender as suas necessidades 
                para entregar não apenas uma apólice, mas a certeza de que o seu futuro e o seu patrimônio 
                estão em boas mãos. Essa é a nossa missão e o que nos move há mais de duas décadas.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-accent pl-6 italic text-gray-700">
                  "Nosso compromisso vai além de vender seguros. Construímos relacionamentos duradouros 
                  baseados na confiança e na excelência do atendimento."
                </blockquote>
                <cite className="block mt-2 text-sm text-gray-500">— Cristina Elias, Fundadora</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
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
              Números que Falam por Si
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Mais de duas décadas construindo confiança e protegendo o que mais importa.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary p-4 rounded-full group-hover:bg-accent transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valores */}
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
              Os Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Princípios que guiam cada decisão e cada relacionamento que construímos.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="card-hover h-full">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`${value.color} p-6 rounded-full`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
              Nossa Jornada
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Marcos importantes que definiram nossa trajetória de crescimento e evolução.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
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
                  className="max-w-full max-h-full object-contain" 
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
