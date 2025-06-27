import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FolderOpen, Calendar, BookOpen, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-blue-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Acento Global</h1>
                <p className="text-xs text-blue-600">Red Profesional</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="hidden sm:flex bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Globe className="w-3 h-3 mr-1" />
                287 miembros activos
              </Badge>
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90">
                  Acceder
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Plataforma Social</span><br />
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">y de Colaboración</span><br />
              <span className="text-blue-900">Acento Global</span>
            </h1>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Plataforma privada para la colaboración profesional, el intercambio de ideas 
              y el desarrollo de proyectos entre miembros de la red Acento Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90">
                  Explorar la Plataforma
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Conocer más sobre la red
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Todo lo que necesitas para
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> conectar y colaborar</span>
            </h2>
            <p className="text-blue-700 text-lg max-w-2xl mx-auto">
              Una plataforma integral diseñada para facilitar la colaboración y el crecimiento profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift bg-white border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Directorio de Miembros</CardTitle>
                <CardDescription className="text-blue-700">
                  Descubre y conecta con profesionales de toda la diáspora argentina.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• Perfiles detallados con especialidades</li>
                  <li>• Filtros por ubicación y sector</li>
                  <li>• Sistema de mensajería integrado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-blue-900">Gestión de Proyectos</CardTitle>
                <CardDescription className="text-blue-700">
                  Crea, colabora y da seguimiento a proyectos alineados con los pilares de la red.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• Seguimiento por etapas</li>
                  <li>• Colaboración en tiempo real</li>
                  <li>• Tablero visual de proyectos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Agenda de Eventos</CardTitle>
                <CardDescription className="text-blue-700">
                  Organiza y participa en eventos, webinars y encuentros de networking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• Eventos virtuales y presenciales</li>
                  <li>• Confirmación de asistencia</li>
                  <li>• Integración con calendar</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-blue-900">Biblioteca de Contenidos</CardTitle>
                <CardDescription className="text-blue-700">
                  Accede a recursos, grabaciones y documentos compartidos por la comunidad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• Grabaciones de eventos</li>
                  <li>• Documentos colaborativos</li>
                  <li>• Recursos de aprendizaje</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Comunicación</CardTitle>
                <CardDescription className="text-blue-700">
                  Mantente conectado con mensajería interna y notificaciones inteligentes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• Mensajería privada</li>
                  <li>• Notificaciones por email</li>
                  <li>• Grupos de discusión</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-blue-900">Zona Pública</CardTitle>
                <CardDescription className="text-blue-700">
                  Espacio visible para stakeholders externos y potenciales colaboradores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• Proyectos destacados</li>
                  <li>• Eventos abiertos</li>
                  <li>• Información de contacto</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              La red en números
            </h2>
            <p className="text-blue-700 text-lg">
              Impacto y crecimiento de la comunidad Acento Global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2 text-blue-900">287</div>
              <p className="text-blue-700">Miembros Activos</p>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2 text-orange-700">24</div>
              <p className="text-orange-600">Proyectos en Curso</p>
            </div>
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2 text-blue-900">15</div>
              <p className="text-blue-700">Países Representados</p>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2 text-orange-700">156</div>
              <p className="text-orange-600">Eventos Organizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              ¿Listo para formar parte de
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> la red?</span>
            </h2>
            <p className="text-blue-700 text-lg mb-8">
              Únete a la comunidad de profesionales argentinos más grande del mundo 
              y comienza a crear conexiones que transformarán tu carrera.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90">
                Acceder a la Plataforma
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AG</span>
              </div>
              <div>
                <p className="font-semibold text-blue-900">Acento Global</p>
                <p className="text-xs text-blue-600">Red Profesional</p>
              </div>
            </div>
            
            <p className="text-sm text-blue-600">
              © 2024 Acento Global. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
