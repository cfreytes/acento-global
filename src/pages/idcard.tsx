import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, User } from "lucide-react";

interface Member {
  id: string;
  name: string;
  title: string;
  company?: string;
  location: string;
  avatar?: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  interests: string[];
  pillar: string;
}

interface MemberCardProps {
  member: Member;
  onViewProfile: (memberId: string) => void;
  onSendMessage: (memberId: string) => void;
}

const getPillarColor = (pillar: string) => {
  switch (pillar.toLowerCase()) {
    case 'tecnología':
      return 'bg-blue-100 text-blue-800';
    case 'emprendimiento':
      return 'bg-orange-100 text-orange-800';
    case 'ciencia':
      return 'bg-blue-100 text-blue-800';
    case 'cultura':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};

export function MemberCard({ member, onViewProfile, onSendMessage }: MemberCardProps) {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="hover-lift animate-fade-in bg-white border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-700">{initials}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 truncate">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-700">
                  {member.title}
                  {member.company && ` en ${member.company}`}
                </p>
                <p className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                  📍 {member.location}
                </p>
              </div>
              
              <Badge className={getPillarColor(member.pillar)}>
                {member.pillar}
              </Badge>
            </div>
            
            <p className="text-sm text-blue-600 mt-3 line-clamp-2">
              {member.bio}
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-1 mt-3">
              {member.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                  {skill}
                </Badge>
              ))}
              {member.skills.length > 3 && (
                <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                  +{member.skills.length - 3}
                </Badge>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onViewProfile(member.id)}
                className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <User className="w-4 h-4 mr-2" />
                Ver Perfil
              </Button>
              <Button
                size="sm"
                onClick={() => onSendMessage(member.id)}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Mensaje
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
