import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Соревновательный режим",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Классический 5 на 5. Одна команда атакует, другая защищает. Установи бомбу или обезвреди её —
            победа достаётся тем, кто думает быстрее и стреляет точнее.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              24 раунда на победу — каждый на счету
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Рейтинговые матчи с CS Rating системой
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Premier и стандартный ранговый режим
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Смертельная схватка и Wingman",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Хочешь размяться или сыграть быстро? Deathmatch — идеально для прокачки прицела.
            Wingman — 2 на 2 на компактных картах для стремительных дуэлей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Deathmatch — бесконечные респауны, никаких раундов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Wingman — 2v2 на половинных картах
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Casual — расслабленный режим без рейтинга
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Легендарные карты",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Dust2, Mirage, Inferno, Nuke, Overpass — иконы жанра, переработанные в Source 2.
            Каждая линия, каждый угол знаком миллионам игроков по всему миру.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Dust2 — самая культовая карта в истории шутеров
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Mirage — баланс для тактики и индивидуальной игры
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Inferno и Nuke — карты для настоящих тактиков
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Режимы игры</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            CS2 предлагает несколько режимов для любого стиля игры — от расслабленного
            casual до напряжённых соревновательных матчей на легендарных картах.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}