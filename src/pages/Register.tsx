import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, User, Mail, Phone, Lock, MapPin, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [accountType, setAccountType] = useState<string>("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        location: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !accountType) {
            toast({
                title: "خطأ",
                description: "يرجى ملء جميع الحقول المطلوبة",
                variant: "destructive",
            });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast({
                title: "خطأ",
                description: "كلمات المرور غير متطابقة",
                variant: "destructive",
            });
            return;
        }

        // Phone validation for Oman
        const phoneRegex = /^(\+968|968)?[79]\d{7}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            toast({
                title: "تنبيه",
                description: "يرجى إدخال رقم هاتف عماني صحيح (يبدأ بـ 7 أو 9 ويتكون من 8 أرقام)",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "تم إنشاء الحساب بنجاح! 🎉",
            description: "مرحباً بك في بوتيك الجمال",
        });

        navigate("/login");
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen flex flex-col bg-muted/30">
            <Header />

            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <Card className="w-full max-w-lg shadow-elegant border-2">
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            انضم إلينا
                        </CardTitle>
                        <CardDescription className="text-base">
                            أنشئ حسابك الجديد وابدأ رحلتك معنا
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Account Type */}
                            <div className="space-y-2">
                                <Label>نوع الحساب</Label>
                                <div className="grid grid-cols-3 gap-4">
                                    <div
                                        className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all hover:border-primary ${accountType === 'client' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                                        onClick={() => setAccountType('client')}
                                    >
                                        <User className="mx-auto h-6 w-6 mb-2 text-primary" />
                                        <span className="text-sm font-medium">عميل</span>
                                    </div>
                                    <div
                                        className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all hover:border-primary ${accountType === 'artist' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                                        onClick={() => setAccountType('artist')}
                                    >
                                        <CheckCircle2 className="mx-auto h-6 w-6 mb-2 text-primary" />
                                        <span className="text-sm font-medium">ميكب آرتست</span>
                                    </div>
                                    <div
                                        className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all hover:border-primary ${accountType === 'owner' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                                        onClick={() => setAccountType('owner')}
                                    >
                                        <Building2 className="mx-auto h-6 w-6 mb-2 text-primary" />
                                        <span className="text-sm font-medium">مالك مساحة</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">الاسم الكامل</Label>
                                    <div className="relative">
                                        <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="fullName"
                                            className="pr-10"
                                            placeholder="الاسم الكامل"
                                            value={formData.fullName}
                                            onChange={(e) => handleChange("fullName", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">البريد الإلكتروني</Label>
                                    <div className="relative">
                                        <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            className="pr-10"
                                            placeholder="example@domain.com"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">رقم الهاتف</Label>
                                    <div className="relative">
                                        <Phone className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="phone"
                                            type="tel"
                                            className="pr-10 text-left"
                                            placeholder="+968 90000000"
                                            dir="ltr"
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location">المنطقة</Label>
                                    <div className="relative">
                                        <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                                        <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
                                            <SelectTrigger className="pr-10">
                                                <SelectValue placeholder="اختر المنطقة" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="muscat">مسقط</SelectItem>
                                                <SelectItem value="salalah">صلالة</SelectItem>
                                                <SelectItem value="sohar">صحار</SelectItem>
                                                <SelectItem value="nizwa">نزوى</SelectItem>
                                                <SelectItem value="sur">صور</SelectItem>
                                                <SelectItem value="buraimi">البريمي</SelectItem>
                                                <SelectItem value="ibra">إبراء</SelectItem>
                                                <SelectItem value="rustaq">الرستاق</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="password">كلمة المرور</Label>
                                        <div className="relative">
                                            <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type="password"
                                                className="pr-10"
                                                value={formData.password}
                                                onChange={(e) => handleChange("password", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                                        <div className="relative">
                                            <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="confirmPassword"
                                                type="password"
                                                className="pr-10"
                                                value={formData.confirmPassword}
                                                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button type="submit" variant="hero" className="w-full text-lg">
                                إنشاء حساب
                            </Button>

                            <div className="text-center text-sm text-muted-foreground">
                                لديك حساب بالفعل؟{" "}
                                <Link to="/login" className="text-primary hover:underline font-semibold">
                                    تسجيل الدخول
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default Register;
