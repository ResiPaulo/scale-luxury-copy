
const SuccessCases = () => {
  return (
    <section id="cases" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          <span className="bg-gradient-royal bg-clip-text text-transparent">Cases de Sucesso</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Veja feedbacks e histórias reais de quem já acelerou resultados com estratégias VGV Scale.
        </p>
        {/* Placeholder para carrossel de vídeos */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-[180px] border-2 border-gray-200 rounded-xl bg-white p-8">
          <div className="w-40 h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-semibold text-lg">
            Vídeo 1
          </div>
          <div className="w-40 h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-semibold text-lg">
            Vídeo 2
          </div>
          <div className="w-40 h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-semibold text-lg">
            Vídeo 3
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6">Em breve: vídeos reais enviados por clientes.</p>
      </div>
    </section>
  );
};

export default SuccessCases;
