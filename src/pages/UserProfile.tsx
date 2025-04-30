
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const UserProfile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: ""
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please sign in to access your profile");
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveProfile = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setIsSaving(false);
      setIsEditing(false);
    }, 1000);
  };
  
  if (!user) return null;
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <Tabs defaultValue="profile" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  View and update your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 bg-pharmacy-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {user.name?.charAt(0) || "U"}
                    </div>
                    
                    {!isEditing && (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </Button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={profile.name} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={profile.email} 
                          onChange={handleInputChange} 
                          disabled
                        />
                        <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={profile.phone} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="address">Delivery Address</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          value={profile.address} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      
                      <div className="flex gap-4 mt-6">
                        <Button 
                          onClick={handleSaveProfile} 
                          className="bg-pharmacy-primary hover:bg-pharmacy-dark"
                          disabled={isSaving}
                        >
                          {isSaving ? "Saving..." : "Save Changes"}
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsEditing(false)}
                          disabled={isSaving}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Full Name</div>
                          <div className="font-medium">{profile.name}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-muted-foreground">Email</div>
                          <div className="font-medium">{profile.email}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-muted-foreground">Phone Number</div>
                          <div className="font-medium">{profile.phone || "Not provided"}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-muted-foreground">Delivery Address</div>
                          <div className="font-medium">{profile.address || "Not provided"}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Orders Tab */}
          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>
                  View your past orders and their status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {items.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      You have {items.length} item(s) in your cart.
                    </p>
                    <Button onClick={() => navigate("/cart")}>
                      View Cart
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      You don't have any orders yet.
                    </p>
                    <Button 
                      onClick={() => navigate("/products")}
                      className="bg-pharmacy-primary hover:bg-pharmacy-dark"
                    >
                      Start Shopping
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Security</h3>
                  <Button variant="outline">Change Password</Button>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Notifications</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    Manage your notification preferences.
                  </div>
                  {/* Notification preferences would go here */}
                  <p className="text-sm text-muted-foreground">
                    Notification settings coming soon.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4 text-red-600">Danger Zone</h3>
                  <Button variant="destructive" onClick={logout}>
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default UserProfile;
