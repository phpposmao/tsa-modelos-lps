"use client"

import Link from "next/link"
import localFont from "next/font/local"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const glancyr = localFont({
  src: [
    {
      path: "../public/fonts/Glancyr-Thin.otf",
      weight: "100",
    },
    {
      path: "../public/fonts/Glancyr-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/Glancyr-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Glancyr-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Glancyr-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Glancyr-Bold.otf",
      weight: "700",
    },
  ]
})

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className={glancyr.className + " " + "flex flex-col min-h-screen bg-white text-white"}>
      <header className="border-b border-neutral-100">
        <div className="max-w-[1180px] mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/image/logo-tsa-preto.png" alt="TSA Logo" width={120} height={40} className="mr-2" />
          </Link>
          <nav>
            <ul className="flex space-x-6 text-black">
              <li>
                <Link href="#modelos" className="hover:text-[#F34A03] transition-colors">
                  Modelos
                </Link>
              </li>
              <li>
                <Link href="/#pacotes" className="hover:text-[#F34A03] transition-colors">
                  Pacotes
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#F34A03] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6">
        {/* Hero Section */}
        <div className="max-w-[1140px] mx-auto mt-10 py-24 rounded-2xl overflow-hidden bg-[url(/image/BANNER-SITE.png)] bg-cover shadow-2xl">
          <div className="max-w-[50%] flex justify-center text-left ">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h1 className="text-5xl font-semibold mb-4 text-[#F34A03]">Seu Site<br/> em até 72 Horas</h1>
              <p className="text-xl text-[#000000] max-w-2xl mx-auto mb-8">
                Transforme sua presença online<br/> com landing pages e sites de alta conversão
              </p>
              <Link
                href="/#pacotes"
                className="inline-flex items-center bg-[#F34A03] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e64a19] transition-colors"
              >
                Ver Pacotes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
            </motion.div>
          </div>
        </div>

        {/* Modelos Section */}
        <div id="modelos" className="max-w-[1180px] mx-auto py-16 grid gap-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-medium mb-4 text-[#F34A03]">Nossos Modelos</h2>
            <p className="text-[#000000] max-w-2xl mx-auto">
              Explore nossos cinco modelos de landing pages com layouts modernos, elementos interativos e design
              responsivo, otimizados para conversão.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { name: "Corporativo Premium", path: "/modelo-1", desc: "Design elegante e profissional para empresas.", imsrc: "flex h-[200px] items-center justify-center rounded-md bg-[url(/modelo1-hero.png)] p-4" },
              { name: "Criativo", path: "/modelo-2", desc: "Visual arrojado para estúdios criativos.", imsrc: "flex h-[200px] items-center justify-center rounded-md bg-[url(/modelo2-hero.png)] p-4" },
              { name: "Produto", path: "/modelo-3", desc: "Focado em apresentação de produtos.", imsrc: "flex h-[200px] items-center justify-center rounded-md bg-[url(/modelo3-hero.png)] p-4" },
              { name: "Serviços", path: "/modelo-4", desc: "Destaque para ofertas de serviços.", imsrc: "flex h-[200px] items-center justify-center rounded-md bg-[url(/modelo4-hero.png)] p-4" },
              { name: "Evento", path: "/modelo-5", desc: "Perfeito para promover eventos.", imsrc: "flex h-[200px] items-center justify-center rounded-md bg-[url(/modelo5-hero.png)] p-4" },
            ].map((modelo) => (
              <motion.div key={modelo.path} variants={item}>
                <Link
                  href={modelo.path}
                  className="group relative overflow-hidden rounded-xl border border-neutral-100 p-2 hover:border-[#ff5722] block bg-neutral-50"
                >
                  <div className={modelo.imsrc}>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#ff5722]">{modelo.name}</h3>
                    <p className="text-sm text-[#000000]">{modelo.desc}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-[#F34A03] px-6 py-2 font-medium text-white flex items-center">
                      Visualizar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sites Institucionais Section */}
        <div className="max-w-[1180px] mx-auto py-16 grid gap-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-medium mb-4 text-[#F34A03]">Sites Institucionais</h2>
            <p className="text-[#000000] max-w-2xl mx-auto">
              Soluções completas para empresas que buscam uma presença online profissional e impactante
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 md:grid-cols-2">
            {/* Site Institucional 1 */}
            <motion.div variants={item}>
              <div className="group relative overflow-hidden rounded-xl border border-neutral-100 p-2 hover:border-[#F34A03] block bg-neutral-50">
                <div className="flex h-[250px] items-center justify-center rounded-md bg-neutral-100 p-4">
                  <span className="text-2xl font-medium text-[#F34A03]">Empresarial Pro</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[#f34a03] font-bold">Empresarial Pro</h3>
                  <p className="text-sm text-[#000000] mt-2">
                    Site institucional completo para empresas de médio e grande porte, com design profissional e
                    recursos avançados.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-gray-700">Até 10 páginas</span>
                    <span className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-gray-700">Blog integrado</span>
                    <span className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-gray-700">
                      Painel administrativo
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-[#F34A03] px-6 py-2 font-medium text-white flex items-center">
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Site Institucional 2 */}
            <motion.div variants={item}>
              <div className="group relative overflow-hidden rounded-xl border border-neutral-100 p-2 hover:border-[#F34A03] block bg-neutral-50">
                <div className="flex h-[250px] items-center justify-center rounded-md bg-neutral-100 p-4">
                  <span className="text-2xl font-medium text-[#F34A03]">E-commerce Plus</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[#f34a03] font-bold">E-commerce Plus</h3>
                  <p className="text-sm text-[#000000] mt-2">
                    Solução completa de e-commerce com catálogo de produtos, carrinho de compras e gateway de pagamento
                    integrado.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-gray-700">
                      Catálogo ilimitado
                    </span>
                    <span className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-gray-700">Pagamentos online</span>
                    <span className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-gray-700">Gestão de estoque</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-[#F34A03] px-6 py-2 font-medium text-white flex items-center">
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pacotes Section */}
        <div id="pacotes" className="mx-auto py-16 grid gap-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-medium mb-4 text-[#F34A03]">Nossos Pacotes</h2>
            <p className="text-[#000000] max-w-2xl mx-auto">
              Escolha o pacote que melhor atende às necessidades do seu negócio
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="show" className="grid text-black gap-4 md:grid-cols-3 lg:grid-cols-5">
            {/* Pacote 1 - Landing Pages Modelo */}
            <motion.div
              variants={item}
              className="rounded-xl border border-neutral-100 overflow-hidden bg-neutral-50 flex flex-col"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Landing Page Modelo</h3>
                <p className="text-sm text-gray-600 mb-4">Modelo adaptável</p>
                <div className="text-2xl font-bold text-[#F34A03]">R$ 1.499</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Domínio e Hospedagem</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design Responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 4 Seções</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Copywriting padronizado com foco em conversão</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>SEO</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suporte</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manutenção rotineira</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 5 contas de e-mail profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em até 72 horas</span>
                  </li>
                </ul>
                <a
                  href="#contato"
                  className="w-full py-3 bg-[#F34A03] text-white rounded-full text-center font-medium hover:bg-[#e64a19] transition-colors"
                >
                  Contratar
                </a>
              </div>
            </motion.div>

            {/* Pacote 2 - Landing Pages Personalizadas */}
            <motion.div
              variants={item}
              className="rounded-xl border border-neutral-100 overflow-hidden bg-neutral-50 flex flex-col"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Landing Page Personalizada</h3>
                <p className="text-sm text-gray-600 mb-4">100% customizável</p>
                <div className="text-2xl font-bold text-[#F34A03]">R$ 1.999</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Domínio e Hospedagem</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design exclusivo e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 10 seções</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Copywriting personalizado focado em conversão</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>SEO Avançado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manutenção rotineira prioritária</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 10 contas de e-mail profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em até 10 dias úteis</span>
                  </li>
                </ul>
                <a
                  href="#contato"
                  className="w-full py-3 bg-[#F34A03] text-white rounded-full text-center font-medium hover:bg-[#e64a19] transition-colors"
                >
                  Contratar
                </a>
              </div>
            </motion.div>

            {/* Pacote 3 - Sites Institucionais Modelo */}
            <motion.div
              variants={item}
              className="rounded-xl border-2 border-[#F34A03] overflow-hidden bg-neutral-50 flex flex-col relative"
            >
              <div className="absolute top-0 right-0 bg-[#F34A03] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                PREFERIDO
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Site Institucional</h3>
                <p className="text-sm text-gray-600 mb-4">Modelo adaptável</p>
                <div className="text-2xl font-bold text-[#F34A03]">R$ 2.999</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Domínio e Hospedagem</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design Responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 6 páginas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blog integrado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Copywriting estratégico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>SEO Avançado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manutenção emergencial</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 10 contas de e-mail profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em até 15 dias úteis</span>
                  </li>
                </ul>
                <a
                  href="#contato"
                  className="w-full py-3 bg-[#F34A03] text-white rounded-full text-center font-medium hover:bg-[#e64a19] transition-colors"
                >
                  Contratar
                </a>
              </div>
            </motion.div>

            {/* Pacote 4 - Sites Institucionais Personalizados */}
            <motion.div
              variants={item}
              className="rounded-xl border border-neutral-100 overflow-hidden bg-neutral-50 flex flex-col"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Site Personalizado</h3>
                <p className="text-sm text-gray-600 mb-4">100% customizável</p>
                <div className="text-2xl font-bold text-[#F34A03]">R$ 3.499</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Domínio e Hospedagem</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design exclusivo e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 10 páginas</span>
                  </li>
                   <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blog integrado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Copywriting personalizado focado em conversão</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>SEO Avançado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manutenção emergencial prioritária</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 10 contas de e-mail profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em até 20 dias úteis</span>
                  </li>
                </ul>
                <a
                  href="#contato"
                  className="w-full py-3 bg-[#F34A03] text-white rounded-full text-center font-medium hover:bg-[#e64a19] transition-colors"
                >
                  Contratar
                </a>
              </div>
            </motion.div>
            
            {/* Pacote 5 - E-Commerce */}
            <motion.div
              variants={item}
              className="rounded-xl border border-neutral-100 overflow-hidden bg-neutral-50 flex flex-col"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">E-Commerce</h3>
                <p className="text-sm text-gray-600 mb-4">Solução completa</p>
                <div className="text-2xl font-bold text-[#F34A03]">Sob consulta</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Domínio e Hospedagem</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design exclusivo e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integração com Nuvemshop</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Copywriting personalizado voltado a vendas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>SEO focado em vendas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manutenção emergencial prioritária</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Orientação para tráfego pago e performance comercial</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em até 40 dias úteis</span>
                  </li>
                </ul>
                <a
                  href="#contato"
                  className="w-full py-3 bg-[#F34A03] text-white rounded-full text-center font-medium hover:bg-[#e64a19] transition-colors"
                >
                  Solicitar orçamento
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div id="contato" className="max-w-[1180px] mx-auto py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl bg-neutral-50 text-[#000000] border border-neutral-100 p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-medium mb-4 text-[#F34A03]">Entre em contato</h2>
              <p className="text-[#000000] max-w-2xl mx-auto">
                Preencha o formulário abaixo e entraremos em contato para discutir seu projeto
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#F34A03] mb-2">Nome Completo*</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-[#F34A03] outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F34A03] mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-[#F34A03] outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F34A03] mb-2">Telefone*</label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-[#F34A03] outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F34A03] mb-2">Pacote de interesse</label>
                <select className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-[#F34A03] outline-none">
                  <option value="">Selecione uma opção</option>
                  <option value="landing-page">Landing Page Modelo</option>
                  <option value="landing-page">Landing Page Personalizada</option>
                  <option value="landing-page">Site Institucional Modelo</option>
                  <option value="site-institucional">Site Personalizado</option>
                  <option value="site-personalizado">E-Commerce</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[#F34A03] mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200focus:border-[#F34A03] outline-none"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                type="submit"
                className="inline-flex items-center bg-[#F34A03] text-white px-6 py-3 rounded-full font-medium hover:bg-[#F34A03] transition-colors"
              >
                Enviar mensagem
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-neutral-100">
        <div className="max-w-[1180px] mx-auto py-6 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/image/logo-tsa-preto.png" alt="TSA Logo" width={120} height={40} className="mr-2" />
            </Link>
            <div className="text-sm text-[#000000]">
              &copy; {new Date().getFullYear()} TSA Business Hub. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
