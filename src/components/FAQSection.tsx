
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Trabalho só com imóveis prontos. Isso serve pra mim?",
      answer: "Sim! A estratégia é adaptada para imóveis novos, usados, na planta ou de temporada."
    },
    {
      question: "Já tenho Instagram, mas não vendo. O que tá errado?",
      answer: "Possivelmente falta estrutura: copy, CTA, tráfego ou funil. A gente resolve isso com método."
    },
    {
      question: "Não tenho CRM nem equipe. Preciso?",
      answer: "Não. A VGV te ajuda a começar do zero, mesmo sem estrutura anterior."
    },
    {
      question: "Isso serve pra mim se sou corretor iniciante?",
      answer: "Sim. Principalmente se você quer evitar os erros de quem já está há anos patinando."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            FAQ – <span className="bg-gradient-royal bg-clip-text text-transparent">Perguntas Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-royal-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-royal-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
