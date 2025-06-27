import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Users, Calendar, MessageSquare, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Crear Proyecto",
    description: "Inicia un nuevo proyecto colaborativo",
    icon: FolderOpen,
    href: "/proyectos/nuevo",
    color: "bg-blue-500 hover:bg-blue-600"
  },
  {
    title: "Organizar Evento",
    description: "Programa un evento para la comunidad",
    icon: Calendar,
    href: "/eventos/nuevo",
    color: "bg-orange-500 hover:bg-orange-600"
  },
  {
    title: "Conectar",
    description: "Encuentra y contacta miembros",
    icon: Users,
    href: "/directorio",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "Enviar Mensaje",
    description: "Comunícate con otros miembros",
    icon: MessageSquare,
    href: "/mensajes",
    color: "bg-orange-600 hover:bg-orange-700"
  }
];

export function QuickActions() {
  return (
    <Card className="bg-white border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <Plus className="w-5 h-5" />
          Acciones Rápidas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.href}>
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-start gap-2 hover:shadow-md transition-all duration-200 border-blue-200 hover:bg-blue-50"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`p-2 rounded-lg ${action.color} text-white`}>
                    <action.icon className="w-4 h-4" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-blue-900">{action.title}</p>
                    <p className="text-xs text-blue-600">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
