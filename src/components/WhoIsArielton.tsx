import { Instagram } from "lucide-react";
const WhoIsArielton = () => {
  return <section id="arielton" className="bg-white py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        {/* Foto ou avatar (opcional) */}
        {/* <img src="/lovable-uploads/arielton-photo.jpg" alt="Arielton Pires" className="rounded-xl w-40 h-40 object-cover shadow-lg" /> */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">De dentro da imobiliária para mentor de corretores em todo o Brasil</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed max-w-2xl">
            Arielton Pires é fundador da VGV Scale, especialista em estratégias digitais para o setor imobiliário, com <span className="font-semibold text-royal-blue-600">12+ anos de experiência</span> transformando resultados. 
          </p>
          
        </div>
        
      </div>
    </section>;
};
export default WhoIsArielton;