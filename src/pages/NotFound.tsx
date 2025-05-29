
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/c859d5ce-4333-49b5-b45b-2aad0f0c728a.png" 
            alt="VGV SCALE" 
            className="h-20 w-auto mx-auto mb-4"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Página não encontrada</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
