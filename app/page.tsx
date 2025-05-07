"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

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
    <div className="flex flex-col min-h-screen dark:bg-gray-950 dark:text-white">
      <header className="border-b dark:border-gray-800">
        <div className="max-w-[1180px] mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Modelos de Landing Pages</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 px-4 sm:px-6">
        <div className="max-w-[1180px] mx-auto py-12 grid gap-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Escolha um modelo para visualizar</h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Cinco landing pages diferentes com layouts modernos, elementos interativos e design responsivo, otimizadas
              para conversão.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { name: "Corporativo Premium", path: "/modelo-1", desc: "Design elegante e profissional para empresas." },
              { name: "Criativo", path: "/modelo-2", desc: "Visual arrojado para agências e estúdios criativos." },
              { name: "Produto", path: "/modelo-3", desc: "Focado em apresentação e vendas de produtos." },
              { name: "Serviços", path: "/modelo-4", desc: "Destaque para ofertas de serviços técnicos." },
              { name: "Evento", path: "/modelo-5", desc: "Perfeito para promover eventos e conferências." },
            ].map((modelo) => (
              <motion.div key={modelo.path} variants={item}>
                <Link
                  href={modelo.path}
                  className="group relative overflow-hidden rounded-lg border dark:border-gray-800 p-2 hover:border-primary dark:hover:border-primary block"
                >
                  <div className="flex h-[200px] items-center justify-center rounded-md bg-muted dark:bg-gray-800 p-4">
                    <span className="text-2xl font-bold">{modelo.name}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{modelo.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{modelo.desc}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground">
                      Visualizar
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <footer className="border-t dark:border-gray-800">
        <div className="max-w-[1180px] mx-auto py-4 text-center text-sm text-muted-foreground dark:text-gray-400 px-4 sm:px-6">
          &copy; {new Date().getFullYear()} Modelos de Landing Pages
        </div>
      </footer>
    </div>
  )
}
