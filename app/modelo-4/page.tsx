// @ts-nocheck

"use client"

import {
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Cog,
  Compass,
  Cpu,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Shield,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Modelo4() {
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

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <header className="border-b dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-950 z-10">
        <div className="max-w-[1180px] mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">TechServices</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
              Início
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
              Serviços
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
              Sobre
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contato"
              className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600"
            >
              Agendar Serviço
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-gray-900">
          <div className="max-w-[1180px] mx-auto grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div
                variants={item}
                className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700"
              >
                <span>Serviços Profissionais</span>
              </motion.div>
              <motion.h1 variants={item} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Soluções técnicas para todos os seus problemas
              </motion.h1>
              <motion.p variants={item} className="text-xl text-muted-foreground">
                Oferecemos serviços técnicos de alta qualidade para residências e empresas, com profissionais
                qualificados.
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#servicos"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600"
                >
                  Nossos Serviços
                </Link>
                <Link
                  href="#contato"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Agendar Visita
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className="relative">
              <div className="absolute -inset-1 rounded-xl bg-orange-200/50 blur-xl"></div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/image/modelo-4/tech-service-hero.jpg"
                  alt="Serviços técnicos"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                <span>O que oferecemos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Soluções completas para atender às suas necessidades técnicas.
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
                  icon: <Cpu className="h-10 w-10 text-orange-500" />,
                  title: "Manutenção de Computadores",
                  description: "Reparos, upgrades e otimização de desempenho para seu computador ou notebook.",
                },
                {
                  icon: <Cog className="h-10 w-10 text-orange-500" />,
                  title: "Instalação de Redes",
                  description: "Configuração e instalação de redes domésticas e empresariais com segurança.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-orange-500" />,
                  title: "Segurança Digital",
                  description: "Proteção contra vírus, malware e configuração de backups automáticos.",
                },
                {
                  icon: <Compass className="h-10 w-10 text-orange-500" />,
                  title: "Consultoria em TI",
                  description: "Orientação profissional para escolha e implementação de soluções tecnológicas.",
                },
                {
                  icon: <Headphones className="h-10 w-10 text-orange-500" />,
                  title: "Suporte Remoto",
                  description: "Assistência técnica à distância para resolver problemas com rapidez.",
                },
                {
                  icon: <Wrench className="h-10 w-10 text-orange-500" />,
                  title: "Manutenção Preventiva",
                  description: "Serviços regulares para evitar problemas e prolongar a vida útil dos equipamentos.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-6 shadow-sm hover:border-orange-500 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-orange-500">
                    <span>Saiba mais</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-50 dark:bg-gray-950">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                <span>Processo</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Como Funcionam Nossos Serviços
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Um processo simples e eficiente para resolver seus problemas técnicos.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  icon: <Phone className="h-10 w-10 text-orange-500" />,
                  title: "Contato",
                  description: "Entre em contato conosco por telefone, email ou formulário no site.",
                  number: "01",
                },
                {
                  icon: <Calendar className="h-10 w-10 text-orange-500" />,
                  title: "Agendamento",
                  description: "Agendamos uma visita técnica no horário mais conveniente para você.",
                  number: "02",
                },
                {
                  icon: <Wrench className="h-10 w-10 text-orange-500" />,
                  title: "Diagnóstico",
                  description: "Nossos técnicos identificam o problema e apresentam a melhor solução.",
                  number: "03",
                },
                {
                  icon: <Check className="h-10 w-10 text-orange-500" />,
                  title: "Solução",
                  description: "Executamos o serviço com qualidade e garantia de satisfação.",
                  number: "04",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-6 shadow-sm h-full">
                    <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {step.number}
                    </div>
                    <div className="space-y-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                <span>Diferenciais</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Por Que Escolher a TechServices
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conheça os motivos que nos tornam a melhor escolha para seus serviços técnicos.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/image/modelo-4/tech-service.jpg" alt="Equipe técnica" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                {[
                  {
                    title: "Profissionais Qualificados",
                    description: "Nossa equipe é formada por técnicos certificados e com ampla experiência.",
                  },
                  {
                    title: "Atendimento Rápido",
                    description: "Respondemos às solicitações em até 24 horas, com agendamento flexível.",
                  },
                  {
                    title: "Garantia de Serviço",
                    description: "Oferecemos garantia em todos os serviços realizados.",
                  },
                  {
                    title: "Preços Justos",
                    description: "Transparência total nos orçamentos, sem surpresas ou taxas ocultas.",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={item} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/50">
                      <Check className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-muted-foreground dark:text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-50 dark:bg-gray-950">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                <span>Depoimentos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                O que nossos clientes dizem
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A satisfação dos nossos clientes é o nosso maior orgulho.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Roberto Almeida",
                  company: "Empresa de Contabilidade",
                  testimonial:
                    "Excelente serviço! Resolveram o problema da nossa rede em poucas horas, muito profissionais.",
                },
                {
                  name: "Carla Mendes",
                  company: "Residencial",
                  testimonial:
                    "Meu computador estava muito lento e eles fizeram uma limpeza completa. Agora está como novo!",
                },
                {
                  name: "Marcos Oliveira",
                  company: "Escritório de Advocacia",
                  testimonial:
                    "Contratamos o serviço de consultoria em TI e foi um ótimo investimento. Recomendo a todos.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-6 shadow-sm"
                >
                  <div className="mb-4">
                    <svg className="h-6 w-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="mb-4 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                <span>Preços</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Planos de Serviço</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Escolha o plano que melhor atende às suas necessidades.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Básico",
                  price: "R$ 99,90",
                  description: "Ideal para necessidades pontuais",
                  features: [
                    "Atendimento em até 48h",
                    "Diagnóstico completo",
                    "Suporte por email",
                    "Garantia de 30 dias",
                    "Manutenção preventiva",
                    "Consultoria em TI",
                  ],
                  highlighted: false,
                },
                {
                  name: "Profissional",
                  price: "R$ 199,90",
                  description: "Perfeito para pequenas empresas",
                  features: [
                    "Atendimento em até 24h",
                    "Diagnóstico completo",
                    "Suporte por email e telefone",
                    "Garantia de 60 dias",
                    "Manutenção preventiva",
                    "Consultoria em TI",
                  ],
                  highlighted: true,
                },
                {
                  name: "Empresarial",
                  price: "R$ 399,90",
                  description: "Solução completa para empresas",
                  features: [
                    "Atendimento prioritário",
                    "Diagnóstico completo",
                    "Suporte 24/7",
                    "Garantia de 90 dias",
                    "Manutenção preventiva mensal",
                    "Consultoria em TI",
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl border ${
                    plan.highlighted ? "border-orange-500 shadow-lg" : "border-border dark:border-gray-800 shadow-sm"
                  } bg-white dark:bg-gray-900 p-6 relative`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                      Mais Popular
                    </div>
                  )}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground"> /mês</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-orange-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`inline-flex h-10 w-full items-center justify-center rounded-md ${
                        plan.highlighted
                          ? "bg-orange-500 text-white hover:bg-orange-600"
                          : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                      } px-4 py-2 text-sm font-medium shadow transition-colors`}
                    >
                      Escolher Plano
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-slate-50 dark:bg-gray-950">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                <span>Contato</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Estamos prontos para atender às suas necessidades técnicas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Telefone</h3>
                    <p className="text-muted-foreground">(11) 5678-9012</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-muted-foreground">contato@techservices.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Endereço</h3>
                    <p className="text-muted-foreground">Av. Tecnologia, 500 - São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Serviço Desejado
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="computadores">Manutenção de Computadores</option>
                      <option value="redes">Instalação de Redes</option>
                      <option value="seguranca">Segurança Digital</option>
                      <option value="consultoria">Consultoria em TI</option>
                      <option value="suporte">Suporte Remoto</option>
                      <option value="preventiva">Manutenção Preventiva</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva sua necessidade"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8853357225397!2d-46.65268388502284!3d-23.533930984700954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5843deb99025%3A0x3c7b5a348c2b25a6!2sAv.%20Paulista%2C%202000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1651234567890!5m2!1spt-BR!2sbr"
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
      <footer className="bg-slate-900 text-white">
        <div className="max-w-[1180px] mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold">TechServices</span>
              </div>
              <p className="text-slate-300 mb-4">
                Soluções técnicas profissionais para residências e empresas. Qualidade e confiança em cada serviço.
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
                  <Link href="#" className="text-slate-300 hover:text-white">
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
                    Manutenção de Computadores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Instalação de Redes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Segurança Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Consultoria em TI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span className="text-slate-300">(11) 5678-9012</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-400" />
                  <span className="text-slate-300">contato@techservices.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <span className="text-slate-300">Av. Tecnologia, 500 - São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-[1180px] mx-auto py-4 text-center text-slate-300">
            &copy; {new Date().getFullYear()} TechServices. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
