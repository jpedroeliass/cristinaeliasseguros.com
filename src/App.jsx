import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import InsurancePage from './components/pages/InsurancePage'
import PortoProductPage from './components/pages/PortoProductPage'

import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

// Dados das páginas de seguro
const insurancePages = {
  auto: {
    title: "Seguro de Veículos para Todos os Perfis",
    description: "Proteção completa com agilidade no atendimento e as melhores coberturas do mercado.",
    heroImage: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1725&auto=format&fit=crop",
    iframeSrc: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SeguroAutomovel?e=Mmr58tSJrUfNUDC%2FrMoGLpc4mqQgGX8ywsks1xo4hJY%3D",
    coverages: [
      { icon: "Shield", title: "Colisão, Incêndio, Roubo e Furto", description: "Cobertura completa para os principais imprevistos que podem acontecer com o seu veículo." },
      { icon: "Users", title: "Danos a Terceiros", description: "Proteção contra danos materiais e corporais causados a outras pessoas em caso de acidente." },
      { icon: "Wrench", title: "Assistência 24 Horas", description: "Serviços de guincho, chaveiro, troca de pneu e socorro mecânico a qualquer hora do dia." },
      { icon: "Car", title: "Carro Reserva", description: "Tenha um carro à sua disposição enquanto o seu está no conserto após um sinistro." },
      { icon: "Eye", title: "Cobertura de Vidros", description: "Reparo ou troca de para-brisa, vidros laterais e traseiro de forma rápida e simples." },
      { icon: "Heart", title: "Acidentes Pessoais de Passageiros", description: "Indenização para os passageiros do veículo em caso de invalidez ou morte." }
    ],
    benefits: [
      "Protege o seu investimento contra perdas financeiras.",
      "Garante a sua mobilidade com carro reserva e assistência.",
      "Viaje com a certeza de que terá suporte em todo o país.",
      "Cobre despesas inesperadas com consertos e indenizações."
    ],
    faqs: [
      { question: "O que é a franquia do seguro auto?", answer: "A franquia é a sua participação financeira em caso de um sinistro com danos parciais ao veículo. Se o custo do reparo for maior que o valor da franquia, a seguradora cobre a diferença. Para roubo, furto ou perda total, não há pagamento de franquia." },
      { question: "Posso transferir meu bônus para outra seguradora?", answer: "Sim! A classe de bônus é um direito seu e pode ser transferida para outra seguradora na renovação, garantindo descontos progressivos a cada ano sem sinistro." },
      { question: "Meu seguro cobre desastres naturais como enchentes?", answer: "Sim, a cobertura básica (compreensiva) do seguro auto geralmente inclui proteção contra enchentes, alagamentos, queda de árvores e granizo. É importante confirmar esta cobertura na sua apólice." }
    ]
  },
  residencial: {
    title: "Proteção Completa para o seu Lar",
    description: "Garanta a segurança do seu patrimônio e a tranquilidade da sua família com um seguro flexível.",
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
    iframeSrc: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SeguroResidencial?e=Mmr58tSJrUfNUDC%2FrMoGLpc4mqQgGX8ywsks1xo4hJY%3D",
    coverages: [
      { icon: "Home", title: "Incêndio, Raio e Explosão", description: "Cobertura essencial que protege a estrutura do seu imóvel e seus bens." },
      { icon: "Shield", title: "Roubo e Furto de Bens", description: "Indenização para os bens levados da sua residência, com ou sem arrombamento." },
      { icon: "Zap", title: "Danos Elétricos", description: "Proteção para eletrodomésticos e eletrônicos danificados por curto-circuito ou variações de energia." },
      { icon: "Wrench", title: "Assistência 24 Horas", description: "Serviços emergenciais como chaveiro, eletricista, encanador e muito mais." },
      { icon: "Users", title: "Responsabilidade Civil Familiar", description: "Cobre danos involuntários causados por você, seus filhos ou pets a terceiros." },
      { icon: "Square", title: "Quebra de Vidros", description: "Garante a substituição de vidros, espelhos e tampos de mesa quebrados." }
    ],
    benefits: [
      "Protege seu maior patrimônio por um custo muito baixo.",
      "Oferece tranquilidade contra imprevistos que podem custar caro.",
      "Assistência para resolver problemas do dia a dia rapidamente.",
      "Flexibilidade para escolher apenas as coberturas que você precisa."
    ],
    faqs: [
      { question: "O seguro residencial é caro?", answer: "Não. O seguro residencial é surpreendentemente acessível, custando, em média, menos de 1% do valor de reconstrução do imóvel por ano. É um investimento baixo para uma grande proteção." },
      { question: "Preciso ser o proprietário para contratar?", answer: "Não. Tanto proprietários quanto inquilinos podem contratar o seguro residencial. Inquilinos podem proteger os seus bens e contratar coberturas como a de pagamento de aluguel." },
      { question: "Como funciona a assistência 24 horas?", answer: "Em caso de uma emergência coberta, como um cano estourado ou um problema elétrico, basta acionar a seguradora para que um profissional qualificado seja enviado à sua casa para realizar o reparo." }
    ]
  },
  vida: {
    title: "Garanta o Futuro de Quem Você Ama",
    description: "Um ato de amor e planejamento, garantindo a segurança financeira da sua família.",
    heroImage: "https://images.unsplash.com/photo-1579203411213-898c1d350357?q=80&w=2070&auto=format&fit=crop",
    iframeSrc: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SeguroVida?e=Mmr58tSJrUfNUDC%2FrMoGLpc4mqQgGX8ywsks1xo4hJY%3D",
    coverages: [
      { icon: "Heart", title: "Morte Natural ou Acidental", description: "Garante o pagamento de uma indenização aos seus beneficiários." },
      { icon: "Shield", title: "Invalidez por Acidente", description: "Receba uma indenização em vida caso um acidente cause invalidez permanente." },
      { icon: "Activity", title: "Diagnóstico de Doenças Graves", description: "Um adiantamento do capital para auxiliar no tratamento de doenças como câncer e AVC." },
      { icon: "Briefcase", title: "Incapacidade Temporária", description: "Receba uma renda diária caso precise se afastar do trabalho por doença ou acidente." },
      { icon: "Plus", title: "Assistência Funeral", description: "Ampara a sua família com todos os trâmites e custos do serviço funeral." },
      { icon: "Users", title: "Extensão para Cônjuge e Filhos", description: "Proteção e tranquilidade para toda a sua família na mesma apólice." }
    ],
    benefits: [
      "Garante a estabilidade financeira da sua família na sua ausência.",
      "Oferece amparo financeiro para você em vida em caso de imprevistos graves.",
      "Auxilia no planejamento sucessório e na proteção do patrimônio.",
      "Pode ser usado para cobrir despesas com educação, dívidas ou inventário."
    ],
    faqs: [
      { question: "Quem pode ser meu beneficiário?", answer: "Você pode escolher qualquer pessoa como seu beneficiário, não precisando ser um parente. É possível também alterar os beneficiários a qualquer momento." },
      { question: "Seguro de vida é apenas para quem tem filhos?", answer: "Não. O seguro de vida é para qualquer pessoa que queira proteger financeiramente quem ama (pais, irmãos, cônjuge) ou garantir que suas dívidas não se tornem um fardo para a família. Além disso, as coberturas em vida, como para doenças graves, são um amparo para o próprio segurado." },
      { question: "Qual o melhor momento para contratar?", answer: "O melhor momento é agora. Quanto mais jovem e saudável você for, mais acessível será o valor do seguro. Contratar cedo garante a sua proteção e a de quem você ama por um custo menor." }
    ]
  },
  empresarial: {
    title: "A Segurança que seu Negócio Precisa",
    description: "Proteja o patrimônio da sua empresa e garanta a continuidade das operações contra riscos.",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    iframeSrc: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SeguroEmpresarial?e=Mmr58tSJrUfNUDC%2FrMoGLpc4mqQgGX8ywsks1xo4hJY%3D",
    coverages: [
      { icon: "Building", title: "Incêndio e Riscos Diversos", description: "Proteção contra incêndio, explosão, raio, vendaval e outros riscos." },
      { icon: "Shield", title: "Roubo e Furto", description: "Cobertura para bens e equipamentos da empresa contra roubo e furto." },
      { icon: "Zap", title: "Equipamentos Eletrônicos", description: "Proteção específica para computadores, servidores e equipamentos eletrônicos." },
      { icon: "Users", title: "Responsabilidade Civil", description: "Cobre danos causados a terceiros durante as atividades da empresa." },
      { icon: "Clock", title: "Perda de Faturamento", description: "Indenização pela redução do faturamento após um sinistro coberto." },
      { icon: "Truck", title: "Equipamentos em Trânsito", description: "Proteção para equipamentos e mercadorias durante o transporte." }
    ],
    benefits: [
      "Protege o patrimônio da empresa contra diversos riscos.",
      "Garante a continuidade dos negócios após sinistros.",
      "Oferece tranquilidade para focar no crescimento da empresa.",
      "Coberturas flexíveis adaptadas ao seu ramo de atividade."
    ],
    faqs: [
      { question: "Qual o valor mínimo para contratar?", answer: "Não há valor mínimo estabelecido. O seguro empresarial pode ser contratado por empresas de qualquer porte, desde microempresas até grandes corporações." },
      { question: "Cobre equipamentos de terceiros?", answer: "Sim, é possível incluir equipamentos de terceiros que estejam sob a responsabilidade da sua empresa, como equipamentos alugados ou em comodato." },
      { question: "Como funciona a cobertura de perda de faturamento?", answer: "Esta cobertura indeniza a redução do faturamento da empresa durante o período de paralisação das atividades causado por um sinistro coberto pela apólice." }
    ]
  },
  condominio: {
    title: "Proteção Integral para seu Condomínio",
    description: "Uma solução completa para a segurança das áreas comuns e a tranquilidade de todos.",
    heroImage: "/seguro-condominio.webp",
    iframeSrc: "https://villa.segfy.com/Publico/Segurados/Orcamentos/SeguroCondominio?e=Mmr58tSJrUfNUDC%2FrMoGLpc4mqQgGX8ywsks1xo4hJY%3D",
    coverages: [
      { icon: "Building", title: "Incêndio e Riscos Diversos", description: "Proteção para a estrutura do condomínio contra incêndio, explosão e outros riscos." },
      { icon: "Shield", title: "Roubo de Bens Comuns", description: "Cobertura para equipamentos e bens das áreas comuns do condomínio." },
      { icon: "Zap", title: "Equipamentos Eletrônicos", description: "Proteção para elevadores, portões automáticos, interfones e outros equipamentos." },
      { icon: "Users", title: "Responsabilidade Civil", description: "Cobre danos causados a terceiros nas dependências do condomínio." },
      { icon: "Droplets", title: "Vazamentos", description: "Cobertura para danos causados por vazamentos em tubulações das áreas comuns." },
      { icon: "Eye", title: "Quebra de Vidros", description: "Proteção para vidros das áreas comuns, fachadas e esquadrias." }
    ],
    benefits: [
      "Protege o patrimônio comum de todos os condôminos.",
      "Reduz os custos de manutenção e reparos emergenciais.",
      "Oferece tranquilidade para síndicos e administradores.",
      "Coberturas específicas para as necessidades condominiais."
    ],
    faqs: [
      { question: "Quem pode contratar o seguro?", answer: "O seguro condomínio deve ser contratado pelo síndico ou administradora, em nome do condomínio, após aprovação em assembleia." },
      { question: "Cobre danos em unidades privativas?", answer: "Não. O seguro condomínio cobre apenas as áreas comuns. Para unidades privativas, cada proprietário deve contratar seu seguro residencial individual." },
      { question: "Como funciona em caso de sinistro?", answer: "Em caso de sinistro, o síndico ou administradora deve comunicar imediatamente à seguradora, que enviará um perito para avaliar os danos e definir a indenização." }
    ]
  }
}

// Dados dos produtos Porto
const portoProducts = {
  equipamentos: {
    title: "Seguro Equipamentos Portáteis",
    description: "Proteja seus equipamentos de trabalho e lazer contra os mais diversos imprevistos.",
    heroImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
    affiliateLink: "http://www.porto.vc/EQUIPAMENTOSPORTATEIS_SA131J_78737567a9324c579db145ad5e417d59",
    features: [
      { icon: "Laptop", title: "Diversos Equipamentos", description: "Proteção para notebook, tablet, câmeras, smartwatch e outros aparelhos." },
      { icon: "Shield", title: "Roubo e Furto Qualificado", description: "Cobertura contra roubo e furto qualificado para você usar seus aparelhos sem medo." },
      { icon: "AlertTriangle", title: "Danos Acidentais", description: "Garantia contra danos elétricos, quebra acidental e danos por líquidos." }
    ]
  },
  celular: {
    title: "Seguro Celular Porto Seguro",
    description: "Fique sempre conectado. Proteja seu smartphone contra roubo e quebra com uma contratação 100% digital.",
    heroImage: "/seguro-celular-novo.png",
    affiliateLink: "http://www.porto.vc/SEGUROCELULAR_03416J_18b0284f044f4b2594623e740a7eb14f",
    features: [
      { icon: "UserX", title: "Roubo e Furto", description: "Cobertura completa contra roubo e furto qualificado do seu aparelho." },
      { icon: "Smartphone", title: "Quebra Acidental", description: "Garante o reparo ou a troca do seu celular em caso de quebra acidental." },
      { icon: "Droplets", title: "Danos por Líquidos", description: "Proteção contra danos causados por água ou outros líquidos, de forma acidental." }
    ]
  },
  viagem: {
    title: "Seguro Viagem Porto Seguro",
    description: "Sua aventura pelo mundo com a tranquilidade que você merece. Contrate online a assistência completa.",
    heroImage: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
    affiliateLink: "http://www.porto.vc/VIAGEM_03416J_2975c01ca3424fd7b4968f91ed6fb0c5",
    showPromo: true,
    features: [
      { icon: "Plane", title: "Cobertura Mundial", description: "Assistência completa em qualquer lugar do mundo para viagens a lazer, estudo ou negócios." },
      { icon: "Heart", title: "Despesas Médicas", description: "Cobertura para despesas médicas, hospitalares e odontológicas em caso de emergência." },
      { icon: "Briefcase", title: "Bagagem Protegida", description: "Indenização em caso de extravio, roubo ou dano à sua bagagem durante a viagem." }
    ]
  },
  vida: {
    title: "Seguro de Vida Online Porto",
    description: "Proteção para o futuro da sua família, contratado em minutos, de onde estiver.",
    heroImage: "/seguro-vida-familia-nova.jpg",
    affiliateLink: "http://www.porto.vc/SEGURODEVIDAON_03416J_afb321a99db04bd89746343862a20028",
    features: [
      { icon: "Heart", title: "Contratação Simplificada", description: "Responda a poucas perguntas e contrate em minutos, sem burocracia." },
      { icon: "Shield", title: "Proteção Essencial", description: "Cobertura para morte e assistência funeral para garantir a tranquilidade da sua família." },
      { icon: "Laptop", title: "100% Digital", description: "Todo o processo é online, desde a cotação até a emissão da sua apólice." }
    ]
  },
  cartao: {
    title: "Cartão Porto Seguro",
    description: "O cartão que te dá mais. Peça já o seu e aproveite descontos, pontos e benefícios exclusivos.",
    heroImage: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop",
    affiliateLink: "http://www.porto.vc/CARTAODECREDITOPORTOBANK_03416J_e814dd54f6b497b9a7e72f1cd5c88d4",
    features: [
      { icon: "CreditCard", title: "Zero Anuidade*", description: "Use seu cartão e tenha anuidade grátis gastando um valor mínimo por fatura." },
      { icon: "Car", title: "Descontos em Seguros", description: "Ganhe descontos ao contratar ou renovar seu Seguro Auto ou Residencial da Porto." },
      { icon: "Star", title: "Programa de Pontos", description: "Suas compras viram pontos que podem ser trocados por produtos, serviços e milhas aéreas." }
    ]
  }
}

// Componente para animação de página
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Componente principal da aplicação
const AppContent = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />
          <Route path="/sobre" element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } />
          <Route path="/contato" element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } />

          {Object.entries(insurancePages).map(([key, data]) => (
            <Route key={key} path={`/${key}`} element={
              <PageTransition>
                <InsurancePage {...data} />
              </PageTransition>
            } />
          ))}
          {Object.entries(portoProducts).map(([key, data]) => (
            <Route key={key} path={`/porto-${key}`} element={
              <PageTransition>
                <PortoProductPage {...data} />
              </PageTransition>
            } />
          ))}
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

