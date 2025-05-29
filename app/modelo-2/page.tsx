// @ts-nocheck
"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Lightbulb, Mail, MapPin, Palette, Phone, Rocket, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Counter } from "@/components/counter"
import { Carousel } from "@/components/carousel"

export default function Modelo2() {
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
      image: "/image/modelo-2/identidade-visual-startup.jpg?height=600&width=1200&text=Projeto 1",
      title: "Identidade visual para startup de tecnologia",
      description: "Branding completo e materiais de marketing para lançamento.",
    },
    {
      image: "/image/modelo-2/redesign-website.jpg?height=600&width=1200&text=Projeto 2",
      title: "Redesign de website para agência de viagens",
      description: "Aumento de 150% na taxa de conversão após o redesign.",
    },
    {
      image: "/image/modelo-2/product-design-campaign.jpg?height=600&width=1200&text=Projeto 3",
      title: "Campanha digital para lançamento de produto",
      description: "Estratégia multiplataforma que gerou 2 milhões de visualizações.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-white/10 dark:border-gray-800 sticky top-0 bg-black/80 dark:bg-gray-950/80 backdrop-blur-md z-10">
        <div className="max-w-[1180px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold">CreativeStudio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-white/70 hover:text-white">
              Início
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-white/70 hover:text-white">
              Portfólio
            </Link>
            <Link href="#servicos" className="text-sm font-medium text-white/70 hover:text-white">
              Serviços
            </Link>
            <Link href="#contato" className="text-sm font-medium text-white/70 hover:text-white">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contato"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 text-sm font-medium text-white shadow transition-transform hover:scale-105"
            >
              Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black dark:from-purple-900/10 dark:to-gray-950 z-0"></div>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-9">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
            >
              <motion.div variants={item} className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                  <Sparkles className="mr-1 h-3.5 w-3.5 text-pink-500" />
                  <span>Agência Criativa Premiada</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500">
                  Designs que causam impacto e geram resultados
                </h1>
                <p className="text-xl text-white/70">
                  Somos uma agência criativa especializada em transformar ideias em experiências visuais memoráveis que
                  impulsionam seu negócio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contato"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-sm font-medium text-white shadow transition-transform hover:scale-105"
                  >
                    SOLICITAR ORÇAMENTO AGORA <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#portfolio"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
                  >
                    Ver Nossos Projetos
                  </Link>
                </div>
              </motion.div>
              <motion.div variants={item} className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-75 blur-2xl"></div>
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/20 bg-black">
                  <Image
                    src="/image/modelo-2/redesign-website.jpg"
                    alt="Design criativo"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black dark:from-gray-950 to-transparent"></div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-white/10 dark:border-gray-800 bg-black/50 backdrop-blur-md">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: 150, label: "Projetos Entregues", suffix: "+" },
                { value: 57, label: "Clientes Satisfeitos", suffix: "+" },
                { value: 15, label: "Prêmios Conquistados", suffix: "" },
                { value: 8, label: "Anos de Experiência", suffix: "+" },
              ].map((stat, index) => (
                <motion.div key={index} variants={item} className="flex flex-col items-center text-center">
                  <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/70">{stat.label}</p>
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
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <Sparkles className="mr-1 h-3.5 w-3.5 text-pink-500" />
                <span>O que fazemos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Serviços Criativos de Alto Impacto
              </h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Oferecemos soluções criativas completas para transformar sua marca e impulsionar seus resultados de
                negócios.
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
                  icon: <Palette className="h-8 w-8 text-white" />,
                  title: "Design Gráfico",
                  description:
                    "Criamos designs impactantes que comunicam a essência da sua marca e conquistam seu público-alvo.",
                  popular: true,
                },
                {
                  icon: <Rocket className="h-8 w-8 text-white" />,
                  title: "Desenvolvimento Web",
                  description:
                    "Sites e aplicações web modernas, responsivas e otimizadas para converter visitantes em clientes.",
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-white" />,
                  title: "Branding",
                  description:
                    "Construímos identidades visuais memoráveis que destacam sua marca e criam conexão emocional.",
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-white" />,
                  title: "Motion Design",
                  description:
                    "Animações e vídeos que dão vida à sua marca e mensagem, capturando a atenção do público.",
                },
                {
                  icon: <ArrowRight className="h-8 w-8 text-white" />,
                  title: "Marketing Digital",
                  description: "Estratégias digitais completas para aumentar a visibilidade e as vendas da sua marca.",
                },
                {
                  icon: <Rocket className="h-8 w-8 text-white" />,
                  title: "UI/UX Design",
                  description:
                    "Interfaces intuitivas e experiências de usuário que facilitam a jornada de compra e aumentam conversões.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors ${
                    service.popular ? "ring-2 ring-pink-500" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-xs font-bold px-3 py-1">
                      MAIS POPULAR
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#contato"
                      className="inline-flex items-center text-sm font-medium text-pink-500 hover:text-pink-400"
                    >
                      <span>SOLICITAR AGORA</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-8">
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-base font-medium text-white shadow transition-transform hover:scale-105"
              >
                VAMOS CRIAR JUNTOS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="py-20 bg-gradient-to-b from-black to-purple-950/30 dark:from-gray-950 dark:to-purple-950/10"
        >
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <Sparkles className="mr-1 h-3.5 w-3.5 text-pink-500" />
                <span>Nossos Projetos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trabalhos que Transformam Marcas
              </h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Conheça alguns dos nossos projetos de destaque e como ajudamos empresas a alcançarem seus objetivos.
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
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div key={item} variants={item} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/image/modelo-2/project-2.jpg?height=400&width=400&text=Projeto ${item}`}
                      alt={`Projeto ${item}`}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="text-xl font-bold">Projeto {item}</h3>
                    <p className="text-white/70">Design • Branding</p>
                    <Link href="#contato" className="mt-2 inline-flex items-center text-sm font-medium text-pink-500">
                      <span>SOLICITAR PROJETO SIMILAR</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center">
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-base font-medium text-white shadow transition-transform hover:scale-105"
              >
                QUERO UM PROJETO ASSIM <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para destacar sua marca?</h2>
              <p className="mx-auto max-w-[700px] text-white/80 text-lg">
                Transforme sua marca com designs que impressionam e geram resultados reais. Agende uma consulta gratuita
                hoje.
              </p>
              <div className="pt-4">
                <Link
                  href="#contato"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white text-pink-600 px-8 py-4 text-base font-bold shadow-lg shadow-pink-700/20 transition-transform hover:scale-105"
                >
                  SOLICITAR ORÇAMENTO GRÁTIS <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <Sparkles className="mr-1 h-3.5 w-3.5 text-pink-500" />
                <span>Vamos Conversar</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Inicie seu Projeto Agora</h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas.
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Telefone</h3>
                    <p className="text-white/70">(11) 9876-5432</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-white/70">contato@creativestudio.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Endereço</h3>
                    <p className="text-white/70">Rua Augusta, 500 - São Paulo, SP</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Por que escolher a CreativeStudio?</h3>
                  <ul className="space-y-3">
                    {[
                      "Atendimento exclusivo e personalizado",
                      "Equipe premiada internacionalmente",
                      "Mais de 150 projetos de sucesso entregues",
                      "Satisfação garantida ou seu dinheiro de volta",
                      "Prazo de entrega sempre respeitado",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome*
                      </label>
                      <input
                        id="name"
                        required
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Serviço de interesse*
                    </label>
                    <select
                      id="service"
                      required
                      className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecione um serviço
                      </option>
                      <option value="grafico">Design Gráfico</option>
                      <option value="web">Desenvolvimento Web</option>
                      <option value="branding">Branding</option>
                      <option value="motion">Motion Design</option>
                      <option value="marketing">Marketing Digital</option>
                      <option value="ui">UI/UX Design</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Orçamento aproximado*
                    </label>
                    <select
                      id="budget"
                      required
                      className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecione uma faixa de valor
                      </option>
                      <option value="ate5k">Até R$ 5.000</option>
                      <option value="5k-10k">R$ 5.000 a R$ 10.000</option>
                      <option value="10k-20k">R$ 10.000 a R$ 20.000</option>
                      <option value="20k+">Acima de R$ 20.000</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Descreva seu projeto
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Conte-nos sobre seu projeto e objetivos"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-base font-medium text-white shadow transition-transform hover:scale-105"
                  >
                    SOLICITAR ORÇAMENTO GRÁTIS <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3020718085275!2d-46.65499508502225!3d-23.55380268468013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59aa219c331b%3A0x2b6b4e4ba7c9e433!2sR.%20Augusta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1651234567890!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da agência"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black dark:bg-gray-950 border-t border-white/10 dark:border-gray-800">
        <div className="max-w-[1180px] mx-auto py-12 px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">CreativeStudio</span>
              </div>
              <p className="text-white/70 mb-4">
                Transformamos ideias em experiências visuais memoráveis. Somos uma agência criativa apaixonada por
                design e resultados.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-white/70 hover:text-white">
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-white/70 hover:text-white">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-white/70 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Design Gráfico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Motion Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-pink-500" />
                  <span className="text-white/70">(11) 9876-5432</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-pink-500" />
                  <span className="text-white/70">contato@creativestudio.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-pink-500" />
                  <span className="text-white/70">Rua Augusta, 500 - São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 dark:border-gray-800">
          <div className="max-w-[1180px] mx-auto py-4 text-center text-white/70 px-4 sm:px-6">
            &copy; {new Date().getFullYear()} CreativeStudio. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
