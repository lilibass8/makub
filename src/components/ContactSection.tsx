import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "اتصل بنا",
            value: "+966 50 123 4567",
            subValue: "+966 55 987 6543",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            action: "tel:+966501234567"
        },
        {
            icon: MessageCircle,
            title: "واتساب",
            value: "+966 50 123 4567",
            subValue: "متاح 24/7",
            color: "text-emerald-500",
            bgColor: "bg-emerald-500/10",
            action: "https://wa.me/966501234567"
        },
        {
            icon: Mail,
            title: "البريد الإلكتروني",
            value: "info@beautyboutique.sa",
            subValue: "للاستفسارات العامة",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            action: "mailto:info@beautyboutique.sa"
        },
        {
            icon: Instagram,
            title: "إنستغرام",
            value: "@beautyboutique",
            subValue: "تابعنا لآخر الأخبار",
            color: "text-pink-500",
            bgColor: "bg-pink-500/10",
            action: "https://instagram.com/beautyboutique"
        },
        {
            icon: MapPin,
            title: "الموقع",
            value: "الرياض، المملكة العربية السعودية",
            subValue: "حي الملقا، شارع الأمير سلطان",
            color: "text-red-500",
            bgColor: "bg-red-500/10",
            action: "https://maps.google.com"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                        <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                        تواصل معنا
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        نحن هنا للإجابة على استفساراتك ومساعدتك
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactInfo.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <Card
                                key={index}
                                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                                onClick={() => {
                                    if (contact.action.startsWith('http') || contact.action.startsWith('tel:') || contact.action.startsWith('mailto:')) {
                                        window.open(contact.action, '_blank');
                                    }
                                }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        {/* Icon */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 ${contact.bgColor} rounded-full group-hover:scale-110 transition-transform`}>
                                            <Icon className={`h-8 w-8 ${contact.color}`} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-bold text-lg">{contact.title}</h3>

                                        {/* Main Value */}
                                        <p className={`font-medium ${contact.color} text-lg`}>
                                            {contact.value}
                                        </p>

                                        {/* Sub Value */}
                                        <p className="text-sm text-muted-foreground">
                                            {contact.subValue}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 space-y-6">
                    <Card className="max-w-2xl mx-auto border-2 shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4">
                                ساعات العمل
                            </h3>
                            <div className="space-y-2 text-lg">
                                <p className="flex justify-between items-center max-w-md mx-auto">
                                    <span className="text-muted-foreground">السبت - الخميس:</span>
                                    <span className="font-bold text-primary">9:00 ص - 10:00 م</span>
                                </p>
                                <p className="flex justify-between items-center max-w-md mx-auto">
                                    <span className="text-muted-foreground">الجمعة:</span>
                                    <span className="font-bold text-primary">2:00 م - 10:00 م</span>
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button
                            variant="hero"
                            size="lg"
                            className="group min-w-[200px]"
                            onClick={() => window.open('https://wa.me/966501234567', '_blank')}
                        >
                            <MessageCircle className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            تواصل عبر واتساب
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="min-w-[200px]"
                            onClick={() => window.open('tel:+966501234567', '_blank')}
                        >
                            <Phone className="ml-2 h-5 w-5" />
                            اتصل الآن
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
