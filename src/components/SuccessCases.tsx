
const SuccessCases = () => {
  const clients = [
    {
      name: "RESIDERE Construtora e Incorporadora",
      logo: "/lovable-uploads/b9657178-4684-44ad-88b8-cb79b94e94a7.png",
      description: "Construtora e Incorporadora"
    }
    // Espaço para mais 2 clientes
  ];

  return (
    <section id="cases" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          <span className="bg-gradient-royal bg-clip-text text-transparent">Clientes que Confiam na VGV Scale</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Empresas que já transformaram suas estratégias comerciais e aceleram resultados com a VGV Scale.
        </p>
        
        {/* Clientes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{client.name}</h3>
              <p className="text-gray-600 text-sm">{client.description}</p>
            </div>
          ))}
          
          {/* Placeholder para os próximos 2 clientes */}
          {[...Array(2)].map((_, index) => (
            <div key={`placeholder-${index}`} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-dashed border-gray-200">
              <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-100 rounded-lg">
                <span className="text-gray-400 font-semibold">Logo {index + 2}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-400 mb-2">Cliente {index + 2}</h3>
              <p className="text-gray-400 text-sm">Em breve</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Quer fazer parte deste grupo seleto de empresas que já transformaram suas vendas?
          </p>
          <button 
            className="bg-gradient-royal hover:bg-gradient-royal-dark text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/5544991525829?text=Olá! Quero saber como a VGV Scale pode transformar minha empresa também.', '_blank')}
          >
            Quero Transformar Minha Empresa
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
