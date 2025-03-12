
import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Utensils, 
  HelpCircle, 
  MessageSquare,
  LogIn,
  ChevronUp
} from "lucide-react";

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const BottomDrawer = () => {
  const navigate = useNavigate();

  const navigationItems: NavigationItem[] = [
    { name: "Check Disease", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Contact Doctors", path: "/doctors", icon: <Users className="w-5 h-5" /> },
    { name: "Diet Plan", path: "/diet-plan", icon: <Utensils className="w-5 h-5" /> },
    { name: "Help Center", path: "/help-center", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Feedback", path: "/feedback", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Login", path: "/login", icon: <LogIn className="w-5 h-5" /> }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="rounded-full bg-health-600 hover:bg-health-700 w-12 h-12 flex items-center justify-center shadow-lg">
            <ChevronUp className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-white rounded-t-3xl px-4 pb-8 pt-6 shadow-2xl">
          <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-gray-300" />
          <h3 className="text-xl font-semibold text-center mb-6 text-health-800">Navigate</h3>
          <div className="grid grid-cols-3 gap-4">
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 border-health-200 hover:bg-health-50 hover:border-health-400 transition-all"
                onClick={() => handleNavigation(item.path)}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-100 mb-2">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700">{item.name}</span>
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BottomDrawer;
