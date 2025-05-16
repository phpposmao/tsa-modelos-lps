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
    <div className={glancyr.className + " " + "flex flex-col min-h-screen bg-gradient-to-br from-[#120807] to-[#1e0e0a] text-white"}>
      <header className="border-b border-[#2a1915]">
        <div className="max-w-[1180px] mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/image/logo-tsa-branco.png" alt="TSA Logo" width={120} height={40} className="mr-2" />
          </Link>
          <nav>
            <ul className="flex space-x-6">
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
        <div className="max-w-[1180px] mx-auto py-16 text-center">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-semibold mb-4 text-[#F34A03]">Sites de Alta Conversão</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Transforme sua presença online com landing pages e sites de alta conversão
            </p>
            <Link
              href="/#modelos"
              className="inline-flex items-center bg-[#F34A03] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e64a19] transition-colors"
            >
              Ver Pacotes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
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
            <p className="text-gray-300 max-w-2xl mx-auto">
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
                  className="group relative overflow-hidden rounded-xl border border-[#2a1915] p-2 hover:border-[#ff5722] block bg-[#1a0d0a]"
                >
                  <div className={modelo.imsrc}>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-regular">{modelo.name}</h3>
                    <p className="text-sm text-gray-400">{modelo.desc}</p>
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
            <p className="text-gray-300 max-w-2xl mx-auto">
              Soluções completas para empresas que buscam uma presença online profissional e impactante
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 md:grid-cols-2">
            {/* Site Institucional 1 */}
            <motion.div variants={item}>
              <div className="group relative overflow-hidden rounded-xl border border-[#2a1915] p-2 hover:border-[#F34A03] block bg-[#1a0d0a]">
                <div className="flex h-[250px] items-center justify-center rounded-md bg-[#241310] p-4">
                  <span className="text-2xl font-medium text-[#F34A03]">Empresarial Pro</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Empresarial Pro</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Site institucional completo para empresas de médio e grande porte, com design profissional e
                    recursos avançados.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-[#241310] text-xs px-3 py-1 rounded-full text-gray-300">Até 10 páginas</span>
                    <span className="bg-[#241310] text-xs px-3 py-1 rounded-full text-gray-300">Blog integrado</span>
                    <span className="bg-[#241310] text-xs px-3 py-1 rounded-full text-gray-300">
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
              <div className="group relative overflow-hidden rounded-xl border border-[#2a1915] p-2 hover:border-[#F34A03] block bg-[#1a0d0a]">
                <div className="flex h-[250px] items-center justify-center rounded-md bg-[#241310] p-4">
                  <span className="text-2xl font-medium text-[#F34A03]">E-commerce Plus</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">E-commerce Plus</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Solução completa de e-commerce com catálogo de produtos, carrinho de compras e gateway de pagamento
                    integrado.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-[#241310] text-xs px-3 py-1 rounded-full text-gray-300">
                      Catálogo ilimitado
                    </span>
                    <span className="bg-[#241310] text-xs px-3 py-1 rounded-full text-gray-300">Pagamentos online</span>
                    <span className="bg-[#241310] text-xs px-3 py-1 rounded-full text-gray-300">Gestão de estoque</span>
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
        <div id="pacotes" className="max-w-[1180px] mx-auto py-16 grid gap-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-medium mb-4 text-[#F34A03]">Nossos Pacotes</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Escolha o pacote que melhor atende às necessidades do seu negócio
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 md:grid-cols-3">
            {/* Pacote 1 - Landing Pages */}
            <motion.div
              variants={item}
              className="rounded-xl border border-[#2a1915] overflow-hidden bg-[#1a0d0a] flex flex-col"
            >
              <div className="p-6 bg-[#241310] text-center">
                <h3 className="text-xl font-bold mb-2">Landing Pages</h3>
                <p className="text-sm text-gray-400 mb-4">Modelo personalizado</p>
                <div className="text-3xl font-bold text-[#F34A03]">R$ 1.499</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Otimização para SEO</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Formulário de contato</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em 7 dias</span>
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

            {/* Pacote 2 - Sites Institucionais */}
            <motion.div
              variants={item}
              className="rounded-xl border border-[#F34A03] overflow-hidden bg-[#1a0d0a] flex flex-col relative"
            >
              <div className="absolute top-0 right-0 bg-[#F34A03] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 bg-[#241310] text-center">
                <h3 className="text-xl font-bold mb-2">Sites Institucionais</h3>
                <p className="text-sm text-gray-400 mb-4">Modelo padronizado</p>
                <div className="text-3xl font-bold text-[#F34A03]">R$ 2.999</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 5 páginas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Otimização para SEO</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blog integrado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entrega em 15 dias</span>
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

            {/* Pacote 3 - Sites Personalizados */}
            <motion.div
              variants={item}
              className="rounded-xl border border-[#2a1915] overflow-hidden bg-[#1a0d0a] flex flex-col"
            >
              <div className="p-6 bg-[#241310] text-center">
                <h3 className="text-xl font-bold mb-2">Sites Personalizados</h3>
                <p className="text-sm text-gray-400 mb-4">Solução completa</p>
                <div className="text-3xl font-bold text-[#F34A03]">Sob consulta</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design exclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Páginas ilimitadas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Funcionalidades avançadas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integrações personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#F34A03] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
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
            className="rounded-xl bg-[#1a0d0a] border border-[#2a1915] p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-medium mb-4 text-[#F34A03]">Entre em contato</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Preencha o formulário abaixo e entraremos em contato para discutir seu projeto
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#F34A03] mb-2">Nome Completo*</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-[#241310] border border-[#2a1915] focus:border-[#F34A03] outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F34A03] mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-[#241310] border border-[#2a1915] focus:border-[#F34A03] outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F34A03] mb-2">Telefone*</label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-lg bg-[#241310] border border-[#2a1915] focus:border-[#F34A03] outline-none"
                />
              </div>
              <div>
                <label className="block text-[#F34A03] mb-2">Pacote de interesse</label>
                <select className="w-full p-3 rounded-lg bg-[#241310] border border-[#2a1915] focus:border-[#F34A03] outline-none">
                  <option value="">Selecione uma opção</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="site-institucional">Site Institucional</option>
                  <option value="site-personalizado">Site Personalizado</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[#F34A03] mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg bg-[#241310] border border-[#2a1915] focus:border-[#F34A03] outline-none"
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

      <footer className="border-t border-[#2a1915]">
        <div className="max-w-[1180px] mx-auto py-6 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/image/logo-tsa-branco.png" alt="TSA Logo" width={120} height={40} className="mr-2" />
            </Link>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TSA Business Hub. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
