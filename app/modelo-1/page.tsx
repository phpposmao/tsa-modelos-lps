"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Check,
  ChevronRight,
  Clock,
  BarChart3,
  Globe2,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Counter } from "@/components/counter"
import { Carousel } from "@/components/carousel"

export default function Modelo1() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Carousel items
  const carouselItems = [
    {
      image: "/image/aumento-marketing.jpg",
      title: "Aumento de 75% no ROI para Empresa ABC",
      description: "Implementamos uma estratégia personalizada que revolucionou os resultados.",
    },
    {
      image: "/image/crescimento-leads.jpg",
      title: "Crescimento de 200% em leads qualificados",
      description: "Nossa abordagem impulsionou o pipeline de vendas de forma exponencial.",
    },
    {
      image: "/image/transformacao-digital.jpg",
      title: "Transformação digital completa em 90 dias",
      description: "Ajudamos a modernizar toda a infraestrutura tecnológica e processos.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <header className="border-b dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-950 z-10 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80">
        <div className="max-w-[1180px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            <span className="text-xl font-bold">StrategyPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400">
              Serviços
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contato"
              className="inline-flex h-10 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600"
            >
              Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-violet-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            >
              <motion.div variants={item} className="space-y-6">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm w-fit shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600 dark:bg-violet-400"></span>
                  </span>
                  <span className="text-violet-800 dark:text-violet-200 font-medium">Transformando Negócios</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-tight">
                  Estratégias Inteligentes para
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
                    Resultados Extraordinários
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground dark:text-gray-300">
                  Impulsione seu negócio com soluções estratégicas que aumentam o ROI e maximizam o potencial da sua
                  empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contato"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 dark:shadow-violet-700/20"
                  >
                    AGENDE UMA CONSULTORIA GRÁTIS <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#servicos"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-white dark:bg-gray-800 dark:border-gray-700 px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    NOSSOS SERVIÇOS
                  </Link>
                </div>

                <div className="pt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((img) => (
                      <div
                        key={img}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                      >
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${img}`}
                          alt="Cliente"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">
                    Mais de <span className="text-violet-600 dark:text-violet-400 font-bold">2,500+</span> empresas
                    confiam em nós
                  </div>
                </div>
              </motion.div>
              <motion.div variants={item} className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 opacity-30 blur-xl rounded-2xl dark:opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/image/case-de-sucesso-mkt.jpg?height=600&width=800"
                    alt="Estratégia empresarial"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="bg-white/95 dark:bg-gray-900/95 p-4 rounded-lg backdrop-blur-sm inline-block">
                      <p className="text-sm font-medium">Caso de Sucesso</p>
                      <h3 className="text-lg font-bold">Aumento de ROI em 150%</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-900 border-y dark:border-gray-800">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: 150, label: "Projetos Concluídos", suffix: "+" },
                { value: 98, label: "Taxa de Satisfação", suffix: "%" },
                { value: 12, label: "Anos de Experiência", suffix: "+" },
                { value: 50, label: "Especialistas", suffix: "+" },
              ].map((stat, index) => (
                <motion.div key={index} variants={item} className="flex flex-col items-center text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center bg-violet-100 dark:bg-violet-900/30 rounded-full px-3 py-1 text-sm text-violet-700 dark:text-violet-300 font-medium">
                <span>Nossos Serviços Premium</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Soluções Completas para o Seu Negócio
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Estratégias personalizadas para impulsionar seu crescimento e maximizar resultados.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
                  title: "Consultoria Estratégica",
                  description:
                    "Análise e planejamento para o crescimento sustentável do seu negócio, com foco em resultados mensuráveis.",
                  highlight: "MAIS POPULAR",
                },
                {
                  icon: <Globe2 className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
                  title: "Estratégia Digital",
                  description:
                    "Transformação digital completa para sua empresa se destacar no mundo online e conquistar novos mercados.",
                },
                {
                  icon: <Users className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
                  title: "Gestão de Equipes",
                  description:
                    "Desenvolvimento de lideranças e equipes de alto desempenho alinhadas com os objetivos da sua empresa.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
                  title: "Marketing Estratégico",
                  description:
                    "Estratégias de marketing eficientes para aumentar o reconhecimento da sua marca e gerar mais leads.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
                  title: "Gestão de Riscos",
                  description:
                    "Identificação e mitigação de riscos empresariais para proteger seu negócio e garantir continuidade operacional.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
                  title: "Otimização de Processos",
                  description:
                    "Revisão e melhoria de processos para aumentar a eficiência operacional e reduzir custos desnecessários.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`group relative overflow-hidden rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all ${
                    service.highlight ? "ring-2 ring-violet-600 dark:ring-violet-400" : ""
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-bold px-3 py-1">
                      {service.highlight}
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/50">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground dark:text-gray-400">{service.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#contato"
                      className="inline-flex items-center text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      <span>SOLICITAR AGORA</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-12">
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 dark:shadow-violet-700/20"
              >
                AGENDE UMA CONSULTORIA PERSONALIZADA <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="sobre" className="py-20 bg-slate-50 dark:bg-gray-900 border-y dark:border-gray-800">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center bg-violet-100 dark:bg-violet-900/30 rounded-full px-3 py-1 text-sm text-violet-700 dark:text-violet-300 font-medium">
                <span>Histórias de Sucesso</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Resultados Que Falam Por Si
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Veja como nossas estratégias transformaram negócios e geraram crescimento exponencial.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Carousel items={carouselItems} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-8 md:grid-cols-3 mt-12"
            >
              {[
                {
                  metric: "389%",
                  label: "Aumento médio de ROI",
                  description: "para clientes do setor financeiro",
                },
                {
                  metric: "2.7x",
                  label: "Crescimento em vendas",
                  description: "para clientes de e-commerce",
                },
                {
                  metric: "45%",
                  label: "Redução de custos operacionais",
                  description: "para empresas industriais",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center"
                >
                  <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">{stat.metric}</div>
                  <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center bg-violet-100 dark:bg-violet-900/30 rounded-full px-3 py-1 text-sm text-violet-700 dark:text-violet-300 font-medium">
                <span>Depoimentos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                O que nossos clientes dizem
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Feedback real de empresas que transformamos com nossas estratégias inovadoras.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-8 md:grid-cols-3"
            >
              {[
                {
                  name: "Carlos Silva",
                  position: "CEO, Tech Solutions",
                  company: "Tech Solutions",
                  image: "/placeholder.svg?height=100&width=100&text=CS",
                  testimonial:
                    "A consultoria estratégica da StrategyPro transformou completamente nossa operação. O ROI aumentou 150% em apenas 6 meses, superando todas as expectativas.",
                  rating: 5,
                },
                {
                  name: "Ana Oliveira",
                  position: "Diretora de Marketing",
                  company: "Global Marketing",
                  image: "/placeholder.svg?height=100&width=100&text=AO",
                  testimonial:
                    "Resultados impressionantes! Nossa estratégia digital triplicou o número de leads qualificados e aumentou a taxa de conversão em 75%. Investimento que valeu cada centavo.",
                  rating: 5,
                },
                {
                  name: "Roberto Santos",
                  position: "CFO",
                  company: "Construções Ltda",
                  image: "/placeholder.svg?height=100&width=100&text=RS",
                  testimonial:
                    "A otimização de processos implementada reduziu nossos custos operacionais em 40% e aumentou a produtividade da equipe. Impacto direto no nosso lucro anual.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="rounded-xl border dark:border-gray-800 p-6 shadow-md bg-white dark:bg-gray-900"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-lg italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-8">
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 dark:shadow-violet-700/20"
              >
                TORNE-SE NOSSO PRÓXIMO CASO DE SUCESSO <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 border-y dark:border-gray-800">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center bg-violet-100 dark:bg-violet-900/30 rounded-full px-3 py-1 text-sm text-violet-700 dark:text-violet-300 font-medium">
                <span>Nossa Metodologia</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Processo Estratégico Comprovado
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Nossa abordagem sistemática garante resultados consistentes e mensuráveis para o seu negócio.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-8 md:grid-cols-4"
            >
              {[
                {
                  number: "01",
                  title: "Diagnóstico",
                  description: "Análise completa da sua empresa, identificando pontos fortes, fracos e oportunidades.",
                  icon: <BarChart3 className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                },
                {
                  number: "02",
                  title: "Estratégia",
                  description: "Desenvolvimento de um plano estratégico personalizado com metas claras e mensuráveis.",
                  icon: <Globe2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                },
                {
                  number: "03",
                  title: "Implementação",
                  description: "Execução assistida do plano estratégico com acompanhamento constante da equipe.",
                  icon: <Zap className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                },
                {
                  number: "04",
                  title: "Resultados",
                  description:
                    "Análise de resultados, otimização contínua e escalabilidade das soluções implementadas.",
                  icon: <Check className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                },
              ].map((step, index) => (
                <motion.div key={index} variants={item} className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md h-full relative z-9">
                    <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 dark:bg-violet-700 text-xs font-bold text-white">
                      {step.number}
                    </div>
                    <div className="space-y-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/50">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground dark:text-gray-400">{step.description}</p>
                    </div>  
                  </div>
                  {index < 3 && (
                    <div className="absolute top-1/2 -right-4 hidden md:block w-8 h-0.5 bg-violet-200 dark:bg-gray-700 z-0"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-8">
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 dark:shadow-violet-700/20"
              >
                INICIE SEU PROCESSO AGORA <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-violet-600 dark:bg-violet-800 text-white py-16">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">Pronto para transformar seu negócio?</h2>
                <p className="text-white/80 max-w-xl">
                  Agende uma consultoria estratégica gratuita e descubra como podemos impulsionar seus resultados.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="#contato"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-white text-violet-600 px-8 py-4 text-base font-medium shadow-lg shadow-violet-700/20 transition-transform hover:scale-105"
                >
                  QUERO UMA CONSULTORIA GRÁTIS <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center bg-violet-100 dark:bg-violet-900/30 rounded-full px-3 py-1 text-sm text-violet-700 dark:text-violet-300 font-medium">
                <span>Fale Conosco</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforme Sua Empresa Hoje
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Preencha o formulário abaixo para agendar sua consultoria estratégica gratuita.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid gap-8 md:grid-cols-2"
            >
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                    <Phone className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Telefone</h3>
                    <p className="text-muted-foreground dark:text-gray-400">(11) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                    <Mail className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-muted-foreground dark:text-gray-400">contato@strategypro.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                    <MapPin className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Endereço</h3>
                    <p className="text-muted-foreground dark:text-gray-400">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-violet-50 dark:bg-gray-800 rounded-xl border border-violet-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2">Por que agir agora?</h3>
                  <ul className="space-y-3">
                    {[
                      "Consultoria estratégica inicial GRATUITA",
                      "Plano personalizado em até 48 horas",
                      "Garantia de resultados ou devolvemos seu investimento",
                      "Equipe de especialistas dedicada ao seu projeto",
                      "Acesso a ferramentas e metodologias exclusivas",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-md">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome*
                      </label>
                      <input
                        id="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email*
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu email profissional"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Empresa*
                      </label>
                      <input
                        id="company"
                        required
                        className="flex h-10 w-full rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone*
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="flex h-10 w-full rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Qual serviço você tem interesse?*
                    </label>
                    <select
                      id="service"
                      required
                      className="flex h-10 w-full rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecione um serviço
                      </option>
                      <option value="consultoria">Consultoria Estratégica</option>
                      <option value="digital">Estratégia Digital</option>
                      <option value="equipes">Gestão de Equipes</option>
                      <option value="marketing">Marketing Estratégico</option>
                      <option value="riscos">Gestão de Riscos</option>
                      <option value="processos">Otimização de Processos</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input dark:border-gray-700 bg-background dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva brevemente seu desafio ou objetivo"
                    />
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground dark:text-gray-400">
                      Concordo em receber comunicações da StrategyPro e declaro que li e aceito a política de
                      privacidade.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600 dark:shadow-violet-700/20"
                  >
                    SOLICITAR CONSULTORIA GRATUITA <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333757!2d-46.65390548502211!3d-23.564611184682613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1651234567890!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da empresa"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white">
        <div className="max-w-[1180px] mx-auto py-12 px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-violet-400" />
                <span className="text-xl font-bold">StrategyPro</span>
              </div>
              <p className="text-slate-300 mb-4">
                Estratégias inteligentes para resultados extraordinários. Transformando negócios e impulsionando
                crescimento.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-slate-300 hover:text-white">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-slate-300 hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-slate-300 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Consultoria Estratégica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Estratégia Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Gestão de Equipes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Marketing Estratégico
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-violet-400" />
                  <span className="text-slate-300">(11) 1234-5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-violet-400" />
                  <span className="text-slate-300">contato@strategypro.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-violet-400" />
                  <span className="text-slate-300">Av. Paulista, 1000 - São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-[1180px] mx-auto py-4 text-center text-slate-300 px-4 sm:px-6">
            &copy; {new Date().getFullYear()} StrategyPro. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
