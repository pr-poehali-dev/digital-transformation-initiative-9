import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "CS2 бесплатная игра?",
      answer:
        "Да, Counter-Strike 2 полностью бесплатна для скачивания и игры в Steam. Базовый аккаунт даёт доступ ко всем режимам игры без каких-либо обязательных платежей.",
    },
    {
      question: "Что такое CS Rating и как он работает?",
      answer:
        "CS Rating — новая рейтинговая система в CS2. После каждого матча ваш рейтинг меняется в зависимости от результата, личной статистики и силы соперников. Рейтинг отображается как число — чем выше, тем лучше.",
    },
    {
      question: "Чем CS2 отличается от CS:GO?",
      answer:
        "CS2 построен на движке Source 2 — это даёт улучшенную графику, динамический дым, субтикерную регистрацию выстрелов и более точную физику. Игра полностью заменила CS:GO в Steam.",
    },
    {
      question: "Что такое динамический дым?",
      answer:
        "В CS2 дымовые гранаты стали объёмными — дым реагирует на выстрелы, взрывы и даже световые эффекты. Это открывает новые тактические возможности: можно прострелить дым или разогнать его гранатой.",
    },
    {
      question: "Как работает торговля скинами?",
      answer:
        "Скины добываются через дроп после матчей или в кейсах. Их можно купить, продать или обменять на торговой площадке Steam. Скины не влияют на игровой процесс — только внешний вид.",
    },
    {
      question: "Какие системные требования у CS2?",
      answer:
        "Минимальные требования: Windows 10, процессор Intel Core i5, 8 ГБ ОЗУ, видеокарта с 2 ГБ VRAM (GTX 970+). CS2 оптимизирована хорошо — работает даже на средних системах.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что ты хотел узнать о Counter-Strike 2 — собрали самые популярные вопросы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}