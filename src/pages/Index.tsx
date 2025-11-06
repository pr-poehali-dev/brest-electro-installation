import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Zap",
      title: "Электромонтаж под ключ",
      description: "Полный комплекс электромонтажных работ в новостройках: от проектирования до сдачи объекта"
    },
    {
      icon: "Cable",
      title: "Прокладка кабелей",
      description: "Профессиональная прокладка силовых и слаботочных кабелей с соблюдением всех норм и стандартов"
    },
    {
      icon: "Lightbulb",
      title: "Установка освещения",
      description: "Монтаж всех типов осветительных приборов, люстр, светодиодных лент и систем управления освещением"
    },
    {
      icon: "ShieldCheck",
      title: "Электрощиты и автоматика",
      description: "Сборка и монтаж распределительных щитов, установка УЗО, автоматических выключателей и реле"
    },
    {
      icon: "Plug",
      title: "Розетки и выключатели",
      description: "Установка розеток, выключателей, диммеров и других электроустановочных изделий любой сложности"
    },
    {
      icon: "Wifi",
      title: "Слаботочные системы",
      description: "Монтаж интернет-сетей, домофонов, видеонаблюдения, пожарной сигнализации и систем умный дом"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">ЭлектроМонтаж</span>
          </div>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +375 29 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Профессиональный электромонтаж в новостройках Бреста
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Качественно, быстро, с гарантией. Работаем по всей Брестской области
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      </section>

      <section className="py-16 md:py-24" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выполняем весь спектр электромонтажных работ в новостройках под ключ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Опыт более 10 лет</h3>
                    <p className="text-muted-foreground">Успешно реализовали более 500 объектов в Бресте и области</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Квалифицированные специалисты</h3>
                    <p className="text-muted-foreground">Все мастера имеют допуски и регулярно повышают квалификацию</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="FileCheck" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Официальный договор и гарантия на все виды работ до 3 лет</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Получите бесплатную консультацию</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="+375 (__) ___-__-__" 
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Опишите ваш объект" 
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={28} />
                <span className="text-xl font-bold">ЭлектроМонтаж</span>
              </div>
              <p className="text-white/70">
                Профессиональные электромонтажные работы в новостройках Бреста
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+375 29 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@electro-brest.by</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Брест, ул. Советская, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Режим работы</h4>
              <div className="space-y-2 text-white/70">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб-Вс: 9:00 - 18:00</p>
                <p className="text-primary font-semibold mt-4">Выезд на объект — бесплатно!</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            © 2024 ЭлектроМонтаж. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
