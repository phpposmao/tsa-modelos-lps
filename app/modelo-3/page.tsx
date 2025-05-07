"use client"

import { Check, Heart, Package, ShoppingCart, Star, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Modelo3() {
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
            <Package className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">EcoProduct</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-emerald-600">
              Início
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-600">
              Produtos
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-600">
              Sobre
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-600">
              Avaliações
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-600">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="rounded-full p-2 hover:bg-slate-100">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favoritos</span>
            </button>
            <button className="rounded-full p-2 hover:bg-slate-100 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrinho</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                3
              </span>
            </button>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
            >
              Comprar Agora
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-emerald-50 dark:bg-gray-900">
          <div className="max-w-[1180px] mx-auto grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div
                variants={item}
                className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700"
              >
                <span>Produto Sustentável</span>
              </motion.div>
              <motion.h1 variants={item} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                O melhor produto eco-friendly do mercado
              </motion.h1>
              <motion.p variants={item} className="text-xl text-muted-foreground">
                Feito com materiais 100% sustentáveis, nosso produto é a escolha perfeita para quem se preocupa com o
                meio ambiente.
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
                >
                  Comprar Agora
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Saiba Mais
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className="relative">
              <div className="absolute -inset-1 rounded-xl bg-emerald-200/50 blur-xl"></div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/image/modelo-3/eco-friend-product-hero.jpg"
                  alt="Produto eco-friendly"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                <span>Por que escolher nosso produto</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Benefícios do Nosso Produto
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descubra por que nosso produto é a escolha ideal para você e para o planeta.
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
                  icon: <Check className="h-10 w-10 text-emerald-600" />,
                  title: "100% Sustentável",
                  description: "Feito com materiais recicláveis e biodegradáveis, reduzindo o impacto ambiental.",
                },
                {
                  icon: <Heart className="h-10 w-10 text-emerald-600" />,
                  title: "Saudável",
                  description: "Livre de produtos químicos nocivos, seguro para você e sua família.",
                },
                {
                  icon: <Truck className="h-10 w-10 text-emerald-600" />,
                  title: "Entrega Rápida",
                  description: "Entregamos em todo o país com rapidez e segurança.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex flex-col items-center text-center p-6 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm"
                >
                  <div className="mb-4 rounded-full bg-emerald-100 p-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-20 bg-slate-50 dark:bg-gray-950">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                <span>Nossos Produtos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conheça Nossa Linha</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Produtos de alta qualidade, sustentáveis e com design moderno.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "EcoProduct Basic",
                  price: "R$ 99,90",
                  image: "/image/modelo-3/eco-friend-product.jpg",
                  rating: 4.5,
                },
                {
                  name: "EcoProduct Premium",
                  price: "R$ 149,90",
                  image: "/image/modelo-3/eco-friend-product.jpg",
                  rating: 5,
                },
                {
                  name: "EcoProduct Family",
                  price: "R$ 199,90",
                  image: "/image/modelo-3/eco-friend-product.jpg",
                  rating: 4.8,
                },
                {
                  name: "EcoProduct Pro",
                  price: "R$ 249,90",
                  image: "/image/modelo-3/eco-friend-product.jpg",
                  rating: 4.9,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 p-6"
                >
                  <div className="mb-4 aspect-square overflow-hidden rounded-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < product.rating
                                  ? "fill-yellow-400/50 text-yellow-400"
                                  : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-bold">{product.price}</span>
                      <button className="rounded-full p-2 text-emerald-600 hover:bg-emerald-50">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Adicionar ao carrinho</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
              >
                Ver Todos os Produtos
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                <span>Avaliações</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                O que nossos clientes dizem
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Veja as experiências de quem já utiliza nossos produtos e como eles transformaram suas vidas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Maria Silva",
                  location: "São Paulo, SP",
                  testimonial:
                    "Estou impressionada com a qualidade do produto. Além de ser sustentável, é muito eficiente e durável. Recomendo a todos!",
                  rating: 5,
                },
                {
                  name: "João Oliveira",
                  location: "Rio de Janeiro, RJ",
                  testimonial:
                    "Comprei para toda a família e todos adoraram. O melhor investimento que fiz este ano. Produto de excelente qualidade.",
                  rating: 4.5,
                },
                {
                  name: "Ana Santos",
                  location: "Belo Horizonte, MG",
                  testimonial:
                    "Além de ajudar o meio ambiente, o produto é muito bonito e funcional. Já indiquei para vários amigos.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-6 bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(testimonial.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : i < testimonial.rating
                              ? "fill-yellow-400/50 text-yellow-400"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="max-w-[1180px] mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para fazer a diferença?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Junte-se a milhares de clientes satisfeitos e faça parte da revolução sustentável.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-emerald-600 shadow transition-colors hover:bg-white/90"
              >
                Comprar Agora
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20">
          <div className="max-w-[1180px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                <span>Contato</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Estamos à disposição para tirar suas dúvidas e ouvir suas sugestões.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border p-6 bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sua mensagem"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Informações de Contato</h3>
                  <p className="text-muted-foreground">
                    Entre em contato conosco através dos canais abaixo ou preencha o formulário.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@ecoproduct.com.br</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 3456-7890</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-muted-foreground">Rua Verde, 123 - Jardim Ecológico</p>
                  <p className="text-muted-foreground">São Paulo, SP - CEP 01234-567</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4154061949934!2d-46.63366508502153!3d-23.588189984669196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc6cb3250bb%3A0x7c5d7ea59e52f41c!2sParque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1651234567890!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da loja"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-[1180px] mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">EcoProduct</span>
              </div>
              <p className="text-slate-300 mb-4">
                Produtos sustentáveis para um futuro melhor. Cuidando do planeta e da sua saúde.
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
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    EcoProduct Basic
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    EcoProduct Premium
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    EcoProduct Family
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    EcoProduct Pro
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-slate-300 mb-4">Inscreva-se para receber novidades, promoções e dicas sustentáveis.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-[1180px] mx-auto py-4 text-center text-slate-300">
            &copy; {new Date().getFullYear()} EcoProduct. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
