
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-800">
      <header className="bg-green-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Serviços Florestais</h1>
        <p className="text-sm">Cuidando da natureza com responsabilidade</p>
      </header>

      <section className="p-6 grid gap-6 md:grid-cols-3">
        <Card className="bg-white shadow-md">
          <Image 
            src="/images/formigas.jpg" 
            alt="Combate a Formigas" 
            width={400} 
            height={250} 
            className="w-full h-auto object-cover rounded-t-xl"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Combate a Formigas</h2>
            <p className="mb-4">Soluções eficazes e ecológicas para o controle de formigas em áreas florestais.</p>
            <Button variant="default">Saiba Mais</Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <Image 
            src="/images/reflorestamento.jpg" 
            alt="Reflorestamento" 
            width={400} 
            height={250} 
            className="w-full h-auto object-cover rounded-t-xl"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Reflorestamento</h2>
            <p className="mb-4">Planejamento e execução de projetos de reflorestamento sustentável.</p>
            <Button variant="default">Saiba Mais</Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <Image 
            src="/images/desbastamento.jpg" 
            alt="Desbastamento" 
            width={400} 
            height={250} 
            className="w-full h-auto object-cover rounded-t-xl"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Desbastamento</h2>
            <p className="mb-4">Controle e manejo de vegetação para melhorar a saúde da floresta.</p>
            <Button variant="default">Saiba Mais</Button>
          </CardContent>
        </Card>
      </section>

      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <form className="grid gap-4 max-w-xl">
          <Input type="text" placeholder="Seu nome" required />
          <Input type="email" placeholder="Seu e-mail" required />
          <Textarea placeholder="Mensagem" required />
          <Button type="submit">Enviar Mensagem</Button>
        </form>
        <div className="mt-6">
          <p className="mb-2">Ou entre em contato pelo WhatsApp:</p>
          <a 
            href="https://wa.me/5599999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-700 underline"
          >
            Clique aqui para falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-green-800 text-white p-6 text-center">
        <p>&copy; 2025 Serviços Florestais. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
