import { Check, Star, Bot, Crown, Rocket, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
const PricingSection = () => {
  const plans = [{
    name: "Máquina de Vendas",
    icon: Target,
    description: "Gestão do processo completo: captação de leads, automação de atendimento, nutrição e fechamento de vendas.",
    features: ["Diagnóstico estratégico do funil", "Gestão de CRM e conversão", "Copy e criativos", "Relatórios semanais"]
  }, {
    name: "Smart Brand",
    icon: Star,
    description: "Branding, tráfego pago, otimização para conversão e automações integradas no posicionamento digital.",
    features: ["Landing page e site institucional", "Anúncios em Google, Meta e YouTube", "Automação de comunicação", "Gestão de redes sociais"]
  }, {
    name: "Agente Qualificador de Leads",
    icon: Bot,
    description: "Agente digital integrado automatizando triagem e qualificação de leads com direcionamento eficiente.",
    features: ["Atendimento imediato 24/7", "Cadastro automático de leads", "Integração WhatsApp e Meta", "Relatórios de performance"]
  }];
  return;
};
export default PricingSection;