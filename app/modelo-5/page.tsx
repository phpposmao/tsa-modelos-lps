// @ts-nocheck

"use client"

import { Calendar, ChevronRight, Clock, MapPin, Mic, Ticket, Users, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Countdown } from "@/components/countdown"

export default function Modelo5() {
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

  // Data do evento para o countdown
  const eventDate = new Date("2025-06-15T09:00:00")

  return (
    <div className="flex flex-col min-h-screen bg-black text-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-white/10 dark:border-gray-800 sticky top-0 bg-black/80 dark:bg-gray-950/80 backdrop-blur-md z-10">
        <div className="max-w-[1180px] mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">TechConf 2025</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-white/70 hover:text-white">
              Início
            </Link>
            <Link href="#programacao" className="text-sm font-medium text-white/70 hover:text-white">
              Programação
            </Link>
            <Link href="#ingressos" className="text-sm font-medium text-white/70 hover:text-white">
              Ingressos 
            </Link>
            <Link href="#contato" className="text-sm font-medium text-white/70 hover:text-white">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#ingressos"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-sm font-medium text-white shadow transition-transform hover:scale-105"
            >
              Comprar Ingressos
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black dark:from-purple-900/10 dark:to-gray-950 z-0"></div>
          <div className="max-w-[1180px] mx-auto relative z-9 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div
                variants={item}
                className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md"
              >
                <Calendar className="mr-1 h-3.5 w-3.5 text-purple-500" />
                <span>15-17 de Junho, 2025</span>
              </motion.div>
              <motion.h1
                variants={item}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500"
              >
                O maior evento de tecnologia do Brasil
              </motion.h1>
              <motion.p variants={item} className="text-xl text-white/70">
                Três dias de palestras, workshops e networking com os maiores especialistas em tecnologia do mundo.
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#ingressos"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow transition-transform hover:scale-105"
                >
                  Comprar Ingressos
                </Link>
                <Link
                  href="#programacao"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  Ver Programação
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 blur-2xl"></div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/20 bg-black">
                <Image src="/image/modelo-5/tech-conf.jpg" alt="TechConf 2025" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Countdown */}
        <section className="py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-[1180px] mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Countdown targetDate={eventDate} />
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span>Sobre o Evento</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">TechConf 2025</h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                O maior evento de tecnologia do Brasil, reunindo especialistas, empresas e entusiastas.
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
                  icon: <Mic className="h-8 w-8 text-white" />,
                  title: "Palestras Inspiradoras",
                  description: "Mais de 50 palestras com os maiores especialistas em tecnologia do mundo.",
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Networking",
                  description: "Oportunidades de networking com profissionais e empresas de tecnologia.",
                },
                {
                  icon: <Calendar className="h-8 w-8 text-white" />,
                  title: "Workshops",
                  description: "Workshops práticos para aprimorar suas habilidades técnicas.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border border-white/10 dark:border-gray-800 bg-white/5 dark:bg-gray-900/5 p-6 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-gray-800/10 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-purple-400">
                    <span>Saiba mais</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Speakers */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span>Palestrantes</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Conheça Nossos Palestrantes
              </h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Especialistas renomados compartilharão conhecimentos e experiências.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border border-white/10 dark:border-gray-800 bg-white/5 dark:bg-gray-900/5 p-6 backdrop-blur-sm"
                >
                  <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-32 h-32">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=Palestrante ${item}`}
                      alt={`Palestrante ${item}`}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Palestrante {item}</h3>
                    <p className="text-white/70">CEO, Empresa Tech</p>
                    <p className="mt-2 text-sm text-white/50">
                      Especialista em Inteligência Artificial e Machine Learning com mais de 15 anos de experiência.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Ver Todos os Palestrantes
              </Link>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="programacao" className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span>Programação</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Agenda do Evento</h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Confira a programação completa dos três dias de evento.
              </p>
            </motion.div>
            <div className="space-y-8">
              {[
                { day: "Dia 1", date: "15 de Junho, 2025" },
                { day: "Dia 2", date: "16 de Junho, 2025" },
                { day: "Dia 3", date: "17 de Junho, 2025" },
              ].map((day, dayIndex) => (
                <div key={dayIndex} className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    {day.day} - {day.date}
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        time: "09:00 - 10:00",
                        title: "Abertura",
                        speaker: "CEO TechConf",
                        room: "Auditório Principal",
                      },
                      { time: "10:30 - 11:30", title: "O Futuro da IA", speaker: "Palestrante 1", room: "Sala A" },
                      {
                        time: "13:00 - 14:00",
                        title: "Workshop: Machine Learning",
                        speaker: "Palestrante 2",
                        room: "Sala B",
                      },
                      {
                        time: "15:00 - 16:00",
                        title: "Blockchain e Criptomoedas",
                        speaker: "Palestrante 3",
                        room: "Sala C",
                      },
                      {
                        time: "17:00 - 18:00",
                        title: "Painel: Tendências em Tech",
                        speaker: "Diversos",
                        room: "Auditório Principal",
                      },
                    ].map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl border border-white/10 dark:border-gray-800 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-purple-500" />
                          <span>{session.time}</span>
                        </div>
                        <div className="md:col-span-2">
                          <h4 className="font-bold">{session.title}</h4>
                          <p className="text-white/70">{session.speaker}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-purple-500" />
                          <span>{session.room}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Baixar Programação Completa
              </Link>
            </div>
          </div>
        </section>

        {/* Tickets */}
        <section id="ingressos" className="py-20 bg-gradient-to-b from-purple-950/30 to-black">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span>Ingressos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Garanta Sua Participação</h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Escolha o ingresso que melhor se adapta às suas necessidades.
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
                  name: "Básico",
                  price: "R$ 299",
                  description: "Acesso a todas as palestras",
                  features: [
                    "Acesso a todas as palestras",
                    "Acesso a todos os workshops",
                    "Material digital do evento",
                    "Certificado de participação",
                    "Almoço e coffee break inclusos",
                    "Área VIP com networking exclusivo",
                    "Jantar com palestrantes",
                  ],
                  highlighted: false,
                },
                {
                  name: "Premium",
                  price: "R$ 599",
                  description: "Experiência completa do evento",
                  features: [
                    "Acesso a todas as palestras",
                    "Acesso a todos os workshops",
                    "Material digital do evento",
                    "Certificado de participação",
                    "Almoço e coffee break inclusos",
                    "Área VIP com networking exclusivo",
                    "Jantar com palestrantes",
                  ],
                  highlighted: true,
                },
                {
                  name: "VIP",
                  price: "R$ 999",
                  description: "Experiência exclusiva",
                  features: [
                    "Acesso a todas as palestras",
                    "Acesso a todos os workshops",
                    "Material digital do evento",
                    "Certificado de participação",
                    "Almoço e coffee break inclusos",
                    "Área VIP com networking exclusivo",
                    "Jantar com palestrantes",
                  ],
                  highlighted: false,
                },
              ].map((ticket, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`rounded-xl border ${
                    ticket.highlighted
                      ? "border-purple-500 shadow-lg shadow-purple-500/20"
                      : "border-white/10 dark:border-gray-800"
                  } bg-white/5 dark:bg-gray-900/5 p-6 backdrop-blur-sm relative`}
                >
                  {ticket.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                      Mais Popular
                    </div>
                  )}
                  <div className="flex flex-col justify-between space-y-4">
                    <h3 className="text-xl font-bold">{ticket.name}</h3>
                    <div>
                      <span className="text-3xl font-bold">{ticket.price}</span>
                    </div>
                    <p className="text-white/70">{ticket.description}</p>
                    <ul className="flex flex-col space-y-2">
                      {ticket.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Ticket className="h-4 w-4 text-purple-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`inline-flex h-10 w-full items-center justify-center rounded-full ${
                        ticket.highlighted
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                          : "border border-white/20 bg-white/5 hover:bg-white/10"
                      } px-4 py-2 text-sm font-medium shadow transition-colors`}
                    >
                      Comprar Agora
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Venue */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span>Local</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Local do Evento</h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                O TechConf 2025 será realizado em um dos melhores centros de convenções de São Paulo.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Centro de Convenções TechSpace</h3>
                  <p className="text-white/70">
                    Um espaço moderno e amplo, projetado para proporcionar a melhor experiência para eventos de
                    tecnologia.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-purple-500" />
                  <span>Av. Tecnologia, 1000 - São Paulo, SP</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold">Como Chegar</h4>
                  <p className="text-white/70">
                    <strong>De Metrô:</strong> Estação Tecnologia (Linha Roxa), saída B.
                  </p>
                  <p className="text-white/70">
                    <strong>De Carro:</strong> Estacionamento disponível no local (R$ 50/dia).
                  </p>
                  <p className="text-white/70">
                    <strong>De Ônibus:</strong> Linhas 123, 456 e 789 param em frente ao local.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold">Hospedagem</h4>
                  <p className="text-white/70">
                    Temos parceria com hotéis próximos ao local do evento. Use o código TECHCONF25 para obter 15% de
                    desconto.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/image/modelo-5/tech-conf.jpg"
                  alt="Mapa do Local"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-b from-purple-950/30 to-black">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span>Contato</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Estamos à disposição para tirar suas dúvidas sobre o evento.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 dark:border-gray-800 bg-white/5 dark:bg-gray-900/5 p-6 backdrop-blur-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sua mensagem"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow transition-transform hover:scale-105"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Informações de Contato</h3>
                  <p className="text-white/70">
                    Entre em contato conosco através dos canais abaixo ou preencha o formulário.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white/70">contato@techconf2025.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telefone</h4>
                      <p className="text-white/70">(11) 9876-5432</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Endereço</h4>
                      <p className="text-white/70">Av. Tecnologia, 1000 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold mb-2">Siga-nos</h3>
                  <div className="flex gap-4">
                    {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                      <Link
                        key={social}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-[1180px] mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mic className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">TechConf 2025</span>
              </div>
              <p className="text-white/70 mb-4">
                O maior evento de tecnologia do Brasil, reunindo especialistas, empresas e entusiastas para três dias de
                conhecimento e networking.
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
                  <Link href="#" className="text-white/70 hover:text-white">
                    Palestrantes
                  </Link>
                </li>
                <li>
                  <Link href="#programacao" className="text-white/70 hover:text-white">
                    Programação
                  </Link>
                </li>
                <li>
                  <Link href="#ingressos" className="text-white/70 hover:text-white">
                    Ingressos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Informações</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Sobre o Evento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Local
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Patrocinadores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-white/70 mb-4">Inscreva-se para receber novidades sobre o evento.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow transition-transform hover:scale-105"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-[1180px] mx-auto py-4 text-center text-white/70">
            &copy; {new Date().getFullYear()} TechConf 2025. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
