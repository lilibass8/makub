import { Sparkles, Heart, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                        <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                        من نحن
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        منصتك المثالية لعالم الجمال والإبداع
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    <Card className="border-2 shadow-2xl backdrop-blur-sm bg-card/95 overflow-hidden">
                        <CardContent className="p-8 md:p-12">
                            <div className="space-y-8">
                                {/* Introduction */}
                                <div className="text-center space-y-4">
                                    <p className="text-lg md:text-xl leading-relaxed text-foreground">
                                        <span className="font-bold text-primary">بوتيك الجمال</span> هي منصة رائدة تجمع بين أفضل
                                        <span className="font-semibold"> ميكب آرتست</span> المحترفين وأصحاب المواهب الإبداعية في عالم التجميل.
                                        نؤمن بأن الجمال فن، ونسعى لتوفير تجربة استثنائية لكل عميل.
                                    </p>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        نقدم لك مساحات عمل مجهزة بأحدث التقنيات، بيئة احترافية ملهمة،
                                        وفرصة للتواصل مع نخبة من الخبراء في مجال التجميل.
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid md:grid-cols-3 gap-6 pt-8">
                                    {/* Feature 1 */}
                                    <div className="text-center space-y-3 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                                            <Heart className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-lg">احترافية عالية</h3>
                                        <p className="text-sm text-muted-foreground">
                                            نختار أفضل الخبراء لضمان جودة الخدمة
                                        </p>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="text-center space-y-3 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                                            <Star className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-lg">مساحات مميزة</h3>
                                        <p className="text-sm text-muted-foreground">
                                            استوديوهات مجهزة بأحدث المعدات
                                        </p>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="text-center space-y-3 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                                            <Users className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-lg">مجتمع إبداعي</h3>
                                        <p className="text-sm text-muted-foreground">
                                            تواصل مع محترفين وشارك خبراتك
                                        </p>
                                    </div>
                                </div>

                                {/* Mission Statement */}
                                <div className="text-center pt-8 border-t border-border">
                                    <p className="text-lg font-medium text-primary">
                                        رسالتنا: إطلاق العنان للإبداع وتمكين المواهب في عالم الجمال
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
