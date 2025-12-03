import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2, MapPin, Clock, Package } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

const RentSpace = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    packageType: "",
    hours: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone || !formData.email || !formData.packageType || !date || !formData.hours) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "تم إرسال طلب الحجز بنجاح! ✨",
      description: "سنتواصل معك قريباً لتأكيد الحجز",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      packageType: "",
      hours: "",
      notes: "",
    });
    setDate(undefined);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-muted/30 to-background">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c3035?q=80&w=2000')] bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                احجز <span className="text-white/90">مساحتك المثالية</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                ابدأ مشروعك في بيئة احترافية مجهزة بكل ما تحتاجه
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <Card className="shadow-elegant border-2">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-2">نموذج الحجز</CardTitle>
                <CardDescription className="text-base">
                  املأ البيانات التالية وسنتواصل معك لإتمام الحجز
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      البيانات الشخصية
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">الاسم الكامل *</Label>
                        <Input
                          id="fullName"
                          placeholder="أدخل اسمك الكامل"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="مثال: 96812345678+"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      تفاصيل الحجز
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="packageType">نوع الباقة *</Label>
                      <Select value={formData.packageType} onValueChange={(value) => handleChange("packageType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر نوع الباقة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">الباقة الأساسية - 25 ريال عماني/ساعة</SelectItem>
                          <SelectItem value="premium">الباقة المميزة - 40 ريال عماني/ساعة</SelectItem>
                          <SelectItem value="royal">الباقة الملكية - 50 ريال عماني/ساعة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>تاريخ الحجز *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-right font-normal"
                            >
                              <CalendarIcon className="ml-2 h-4 w-4" />
                              {date ? format(date, "PPP", { locale: ar }) : "اختر التاريخ"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              locale={ar}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hours">عدد الساعات *</Label>
                        <Select value={formData.hours} onValueChange={(value) => handleChange("hours", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر عدد الساعات" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">ساعة واحدة</SelectItem>
                            <SelectItem value="2">ساعتان</SelectItem>
                            <SelectItem value="3">3 ساعات</SelectItem>
                            <SelectItem value="4">4 ساعات</SelectItem>
                            <SelectItem value="5">5 ساعات</SelectItem>
                            <SelectItem value="6">6 ساعات</SelectItem>
                            <SelectItem value="8">8 ساعات</SelectItem>
                            <SelectItem value="full-day">يوم كامل</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2 pt-4 border-t">
                    <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                    <Textarea
                      id="notes"
                      placeholder="أخبرنا عن أي متطلبات خاصة..."
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6">
                    <Button type="submit" variant="hero" size="lg" className="flex-1">
                      <CheckCircle2 className="ml-2 h-5 w-5" />
                      إرسال طلب الحجز
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate("/")}
                    >
                      إلغاء
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">مواقع متعددة</h3>
                  <p className="text-sm text-muted-foreground">
                    فروع في جميع أنحاء السلطنة
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">مرونة في التوقيت</h3>
                  <p className="text-sm text-muted-foreground">
                    احجز بالساعة أو اليوم الكامل
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <Package className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">تجهيزات كاملة</h3>
                  <p className="text-sm text-muted-foreground">
                    كل ما تحتاجه لبدء عملك
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RentSpace;
