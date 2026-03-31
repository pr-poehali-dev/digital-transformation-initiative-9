import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Обновлённый движок Source 2",
    description: "CS2 построен на движке Source 2 — улучшенная физика, освещение и графика на качественно новом уровне.",
    icon: "brain",
    badge: "Графика",
  },
  {
    title: "Субтикерная регистрация",
    description: "Система регистрации выстрелов работает точнее, чем когда-либо — каждый пиксель попадания учитывается честно.",
    icon: "lock",
    badge: "Точность",
  },
  {
    title: "Динамический дым",
    description: "Дымовые гранаты теперь реагируют на выстрелы и взрывы — новая тактическая глубина для профессионалов.",
    icon: "globe",
    badge: "Тактика",
  },
  {
    title: "Обновлённые карты",
    description: "Классические карты переработаны с нуля: Dust2, Mirage, Inferno и другие выглядят лучше, чем когда-либо.",
    icon: "zap",
    badge: "Карты",
  },
  {
    title: "Рейтинговая система CS Rating",
    description: "Новая прозрачная рейтинговая система: видишь свой рейтинг, прогресс и точное число очков после каждого матча.",
    icon: "link",
    badge: "Рейтинг",
  },
  {
    title: "Скины и мастерская",
    description: "Тысячи скинов на оружие, перчатки и агенты. Торгуй, коллекционируй и показывай свой стиль на сервере.",
    icon: "target",
    badge: "Скины",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что нового в CS2</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Valve переосмыслила легендарный шутер — вот всё, что делает CS2 лучшей версией игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}