import React from 'react';
import { BookOpenCheck, Rocket, Clock, DollarSign, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpenCheck className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">eBookPro</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          O Gerador de eBooks Mais Completo do Brasil
          <span className="block text-blue-600 mt-2">
            Escrita Humanizada, Pronto para Escalar!
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Diga adeus ao tempo perdido criando eBooks. Com nosso gerador, você só precisa de uma ideia ou até mesmo apenas o título, e nós fazemos o resto para você!
        </p>
        <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition transform hover:scale-105">
          Gerar meu eBook agora!
        </button>
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="h-8 w-8 text-blue-600" />}
              title="Escrita Humanizada"
              description="Conteúdo natural e envolvente, impossível distinguir de um texto escrito por humanos."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="Rapidez Incomparável"
              description="De ideia a eBook pronto em questão de minutos, não de dias ou semanas."
            />
            <FeatureCard
              icon={<DollarSign className="h-8 w-8 text-blue-600" />}
              title="Preço Imbatível"
              description="Apenas R$ 39,90 por eBook gerado. Sem custos ocultos ou mensalidades."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Preço Que Cabe No Seu Bolso</h2>
          <div className="bg-white rounded-2xl shadow-xl max-w-md mx-auto p-8">
            <div className="text-5xl font-bold text-blue-600 mb-4">
              R$ 39,90
              <span className="text-lg text-gray-500 block">por eBook</span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center">
                <Star className="h-5 w-5 text-blue-600 mr-2" />
                Escrita humanizada
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-blue-600 mr-2" />
                Entrega instantânea
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-blue-600 mr-2" />
                Formato pronto para venda
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
              Comece a escalar seu negócio hoje mesmo!
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Dizem Nossos Clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Por Que Escolher Nosso Gerador?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Nosso gerador de eBooks revoluciona a forma como você cria conteúdo digital. 
            Economize dezenas de horas de trabalho, mantenha a qualidade profissional e 
            escale seu negócio com facilidade. Ideal para empreendedores, criadores de 
            conteúdo e profissionais que valorizam seu tempo.
          </p>
          <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition">
            Sem complicações, apenas resultados. Comece agora!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpenCheck className="h-6 w-6" />
            <span className="text-xl font-bold">eBookPro</span>
          </div>
          <p className="text-gray-400">
            © 2024 eBookPro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
      <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, content }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="ml-4">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

const testimonials = [
  {
    name: "Maria S.",
    role: "Empreendedora",
    content: "Criei meu eBook em minutos e lancei no mesmo dia. Esse gerador é revolucionário!"
  },
  {
    name: "João M.",
    role: "Especialista em Marketing Digital",
    content: "Nunca vi algo tão fácil de usar. Meu negócio cresceu muito mais rápido graças a isso!"
  },
  {
    name: "Ana L.",
    role: "Criadora de Conteúdo",
    content: "Por apenas R$ 39,90 por livro, consigo criar eBooks de qualidade profissional e economizar muitas horas."
  },
  {
    name: "Carlos P.",
    role: "Vendedor Online",
    content: "Passei de ter dificuldades para criar um eBook a tê-lo pronto em pouquíssimo tempo. Recomendo demais!"
  }
];

export default App;