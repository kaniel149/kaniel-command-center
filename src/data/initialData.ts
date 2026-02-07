import type { Video, Task, Idea } from '../types';

// Bump this version whenever initialData changes to force browser refresh
export const DATA_VERSION = 4;

export const initialVideos: Video[] = [
  {
    id: 'v001',
    number: 1,
    title: 'AI First Intro',
    titleHe: 'הקדמה - AI First',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel ראשון! הזדמנות ליצור רושם ראשוני. אותנטי, אנרגטי, ישיר.',
    filmingGuide: `סוג: Reel 30-45 שניות
מיקום: בבית, פינת צילום (מול חלון, רקע נקי)
ציוד: אייפון על חצובה + מיקרופון לבליר

הגדרות אייפון:
1. 1080p / 30fps / 9:16 (vertical)
2. נעילת AE-AF: לחץ ארוך על הפנים
3. מצב טיסה!
4. כיבוי כל התראות

מבנה הסרטון:
1. [0-3s] HOOK - פתיחה חזקה, ישר לעניין
2. [3-20s] הצג את עצמך + מה AI עושה לך
3. [20-35s] "אם אני יכול - גם אתה"
4. [35-40s] CTA: "תעקוב ותראה איך"

טיפ: תסתכל ישר לעדשה, לא למסך. חיוך קל. כתפיים אחורה.
טיפ: אנרגיה +15%! המצלמה מכבה אישיות.
⚠️ צלם 2-3 takes. אל תשאף לשלמות.
⏱️ 10-15 דקות הקלטה ← 35 שניות תוצאה`,
    scripts: {
      he: `אני לא מתכנת. אני בן אדם שבנה עסק סולארי ל-10 מליון שקל.

איבדתי את אחי ב-7 באוקטובר. עברתי 400 יום מילואים.

היום? אני חי בקו פנגאן, תאילנד, עם אשתי ושלושת הילדים שלי. וסוכני AI מנהלים לי את החיים.

כל בוקר אני מקבל פודקאסט חדשות מותאם אישית. תוכנית אימון. רשימת קניות. ומשימות לעסק.

בלי שנגעתי בכלום. אוטומטי.

אם אני יכול - גם אתה יכול.

תעקוב - ותראה בדיוק איך.`,
      en: `I'm not a programmer. I built a solar company to 10 million shekels in revenue.

I lost my brother on October 7th. I served 400 days in the reserves.

Today? I live in Koh Phangan, Thailand, with my wife and three kids. And AI agents run my life.

Every morning I get a personalized news podcast. A workout plan. A grocery list. And my top business tasks.

Without touching anything. Automatic.

If I can do it - so can you.

Follow me - and I'll show you exactly how.`,
      es: `No soy programador. Construí una empresa solar que facturó 10 millones de shekels.

Perdí a mi hermano el 7 de octubre. Serví 400 días en las reservas.

¿Hoy? Vivo en Koh Phangan, Tailandia, con mi esposa y tres hijos. Y agentes de IA manejan mi vida.

Cada mañana recibo un podcast de noticias personalizado. Plan de entrenamiento. Lista de compras. Y mis tareas de negocio.

Sin tocar nada. Automático.

Si yo puedo, tú también puedes.

Sígueme - y te muestro exactamente cómo.`,
    },
  },
  {
    id: 'v002',
    number: 2,
    title: 'Morning Routine',
    titleHe: 'שגרת בוקר עם AI',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'B-Roll montage עם voiceover. מראה יום אמיתי.',
    filmingGuide: `סוג: Reel 45-60 שניות, B-Roll + Voiceover
מיקום: כמה לוקיישנים בבית + בחוץ

שוטים שצריך לצלם (5-10 שניות כל אחד):
1. ☕ הכנת קפה (close-up ידיים + כוס)
2. 💻 פתיחת לפטופ, מסך Claude נראה
3. 📱 הודעת בוקר טוב מClaude (close-up מסך)
4. 🏋️ יציאה לאימון / אימון קצר
5. 🍳 ארוחת בוקר עם ילדים
6. 💼 ישיבה לעבודה, הכל מסודר על המסך

⚠️ צלם כל שוט 2-3 פעמים!
⚠️ צלם VERTICAL (9:16)!

הקלטת Voiceover (בנפרד):
- שב בחדר שקט עם מיקרופון
- דבר בטון רגוע, בוקרי
- הקלט עם Voice Memos באייפון

עריכה:
- שים B-Roll לפי סדר הvoiceover
- הוסף captions בעברית
- מוזיקה שקטה ברקע (lo-fi / chill)

⏱️ צילום: 30 דקות | עריכה: 45 דקות`,
    scripts: {
      he: `כל בוקר AI מכין לי פודקאסט חדשות, תפריט אוכל, ותוכנית אימון. בלי שנגעתי בכלום.

זה נראה ככה:

שש בבוקר. קפה. פותח את הלפטופ. Claude כבר מוכן. סיכום חדשות. מזג אוויר. שלוש משימות דחופות.

שבע. הולך לאימון. התוכנית כבר מוכנה. סטים, חזרות, זמני מנוחה - הכל.

שמונה. ארוחת בוקר עם הילדים. תפריט שClaude הכין - מבוסס על מה שיש במקרר.

תשע. נכנס לעבוד. כל המשימות מסודרות. מיילים מנוסחים. יום מתוכנן.

כל הבוקר הזה? שעה וחצי. אפס מאמץ.

זה חיים עם AI.`,
      en: `Every morning, AI prepares my news podcast, meal plan, and workout. Without me touching anything.

Here's what it looks like:

6 AM. Coffee. Open the laptop. Claude is ready. News summary. Weather. Three urgent tasks.

7 AM. Off to train. The plan is ready. Sets, reps, rest times - everything.

8 AM. Breakfast with the kids. A menu Claude prepared - based on what's in the fridge.

9 AM. Sit down to work. All tasks organized. Emails drafted. Day planned.

This entire morning? An hour and a half. Zero effort.

This is life with AI.`,
      es: `Cada mañana, la IA me prepara un podcast de noticias, plan de comidas y entrenamiento. Sin tocar nada.

Así se ve:

6 AM. Café. Abro la laptop. Claude está listo. Resumen de noticias. Clima. Tres tareas urgentes.

7 AM. A entrenar. El plan está listo. Series, repeticiones, descansos - todo.

8 AM. Desayuno con los niños. Un menú que Claude preparó - basado en lo que hay en la nevera.

9 AM. Me siento a trabajar. Todas las tareas organizadas. Emails redactados. Día planificado.

¿Toda esta mañana? Una hora y media. Cero esfuerzo.

Esto es vida con IA.`,
    },
  },
  {
    id: 'v003',
    number: 3,
    title: 'Island English',
    titleHe: 'חיים באי - אנגלית',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'סרטון באנגלית לקהל בינלאומי. B-Roll יפה של קו פנגאן.',
    filmingGuide: `סוג: Reel 30-45 שניות באנגלית, B-Roll + Voiceover
מיקום: לוקיישנים מרהיבים בקו פנגאן!

שוטים לצלם:
1. 🌅 זריחה/שקיעה על הים
2. 🌴 דקלים, ג'ונגל, שבילים
3. 🏖️ חוף - ילדים משחקים / אתה הולך
4. 💻 עבודה מהלפטופ עם נוף
5. 👨‍👩‍👧‍👦 רגע משפחתי (אם מתאים)
6. 🥊 אימון מוי תאי
7. 🛵 נסיעה באופנוע (GoPro/מחזיק טלפון)

⚠️ צלם ב-Golden Hour! (6-7 בוקר או 17-18 אחה"צ)
⚠️ כל שוט 5-10 שניות, VERTICAL

Voiceover:
- הקלט באנגלית, טון רגוע ונעים
- אל תנסה להישמע "אמריקאי" - המבטא שלך הוא חלק מהאותנטיות

⏱️ צילום: 1-2 שעות (טיול עם אייפון) | עריכה: 30 דקות`,
    scripts: {
      he: `העברתי את המשפחה שלי לאי בתאילנד. ובניתי את החיים מחדש עם סוכני AI.

אנשים שואלים: "איך? אתה מתכנת?"

לא. בניתי עסק סולארי. שירתתי ביחידה מיוחדת. עברתי מה שעברתי.

ויום אחד החלטתי: אני בוחר מחדש.

קו פנגאן. משפחה. אימונים. עבודה חכמה.

וAI? הוא מה שמאפשר את הכל.`,
      en: `I moved my family to a Thai island. And rebuilt my life with AI agents.

People ask: "How? Are you a programmer?"

No. I built a solar company. I served in a special unit. I've been through things.

And one day I decided: I'm choosing again.

Koh Phangan. Family. Training. Smart work.

And AI? That's what makes it all possible.

Follow for the journey.`,
      es: `Mudé a mi familia a una isla tailandesa. Y reconstruí mi vida con agentes de IA.

La gente pregunta: "¿Cómo? ¿Eres programador?"

No. Construí una empresa solar. Serví en una unidad especial. He pasado por cosas.

Y un día decidí: elijo de nuevo.

Koh Phangan. Familia. Entrenamiento. Trabajo inteligente.

¿Y la IA? Es lo que hace todo posible.

Sígueme en el viaje.`,
    },
  },
  {
    id: 'v004',
    number: 4,
    title: 'Muay Thai',
    titleHe: 'מוי תאי ואופטימיזציה',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'סרטון כושר + AI. מראה את הקשר בין אופטימיזציה גופנית לאופטימיזציה עסקית.',
    filmingGuide: `סוג: Reel 30-45 שניות, מיקס Talking Head + B-Roll אימון
מיקום: חדר כושר / זירת מוי תאי / בבית

שוטים לצלם:
1. 🥊 Bag work - מכות על שק (wide shot + close-up)
2. 🥊 Sparring (אם יש פרטנר) - 10 שניות
3. 🤸 Stretching / warm-up
4. 💪 Close-up כפפות, תחבושות, זיעה
5. 📱 Claude עם תוכנית אימון על המסך (screen recording 5s)
6. 🧑 Talking Head: פתיחה + סיום (בפינת צילום)

מבנה:
- [0-3s] Hook: "אני מאמן מוי תאי בתאילנד..."
- [3-15s] B-Roll אימון
- [15-25s] "...והAI שלי בנה לי את תוכנית האימון"
- [25-35s] הראה מסך Claude + סיום

⚠️ אם מצלם באולם - ביקוש אישור מבעל האולם!
⏱️ צילום: 20 דקות | עריכה: 30 דקות`,
    scripts: {
      he: `אני מאמן מוי תאי בתאילנד. והAI שלי בנה לי את תוכנית האימון.

לא מאמן אנושי. לא אפליקציה. Claude.

נתתי לו: גובה, משקל, מטרות, ציוד זמין, כמה ימים בשבוע.

מה קיבלתי? תוכנית אימון מלאה. סטים. חזרות. זמני מנוחה. תפריט תזונה ליום.

וכל שבוע הוא מעדכן לפי ההתקדמות שלי.

אופטימיזציה של גוף = אופטימיזציה של חיים.

אם אתה רוצה לראות איך - לינק בביו.`,
      en: `I train Muay Thai in Thailand. And my AI built my training plan.

Not a human trainer. Not an app. Claude.

I gave it: height, weight, goals, available equipment, days per week.

What I got? A complete training plan. Sets. Reps. Rest times. Daily meal plan.

And every week it updates based on my progress.

Optimizing your body = optimizing your life.

Want to see how? Link in bio.`,
      es: `Entreno Muay Thai en Tailandia. Y mi IA construyó mi plan de entrenamiento.

No un entrenador humano. No una app. Claude.

Le di: altura, peso, objetivos, equipo disponible, días por semana.

¿Qué recibí? Un plan de entrenamiento completo. Series. Repeticiones. Descansos. Plan de comidas.

Y cada semana se actualiza según mi progreso.

Optimizar tu cuerpo = optimizar tu vida.

¿Quieres ver cómo? Link en bio.`,
    },
  },
  {
    id: 'v005',
    number: 5,
    title: 'My AI Agents',
    titleHe: 'הסוכנים שלי',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'סרטון showcase - מראה את כל 5 הסוכנים בפעולה.',
    filmingGuide: `סוג: Reel 45-60 שניות, Talking Head + Screen Recording
מיקום: פינת צילום (talking head) + מסך (screen capture)

מה לצלם:
1. 🧑 Talking Head פתיחה (5s) - "5 AI agents run my life"
2. 🖥️ Screen Recording מהיר של כל סוכן (5s כל אחד):
   - סוכן חדשות: הראה פודקאסט שנוצר
   - סוכן כושר: הראה תוכנית אימון
   - סוכן עסקי: הראה מייל שנכתב ב-10 שניות
   - סוכן תוכן: הראה רעיונות + תסריטים
   - סוכן ניטור: הראה dashboard
3. 🧑 Talking Head סיום (5s) - CTA

הגדרות Screen Recording:
- הגדל פונט ל-125%
- Dark Mode
- סגור כל טאב מיותר
- הזז עכבר לאט!

⏱️ צילום: 30 דקות (5 דקות talking head + 25 דקות screen) | עריכה: 45 דקות`,
    scripts: {
      he: ``,
      en: `5 AI agents run my life. Here's what each one does.

Number 1: News agent. Every morning, a personalized podcast. Headlines, weather, what matters to me.

Number 2: Fitness agent. Workout plan, meal plan, updated weekly based on my progress.

Number 3: Business agent. Writes emails, organizes tasks, prepares proposals. In 10 seconds.

Number 4: Content agent. Ideas, scripts, captions, hashtags. Everything I need to post.

Number 5: Monitoring agent. Tracks my solar business. Alerts me if something's off.

5 agents. Zero employees. Full control.

Want to build your first one? Link in bio.`,
      es: `5 agentes de IA manejan mi vida. Esto es lo que hace cada uno.

Número 1: Agente de noticias. Cada mañana, un podcast personalizado.

Número 2: Agente de fitness. Plan de entrenamiento y comidas, actualizado semanalmente.

Número 3: Agente de negocios. Escribe emails, organiza tareas, prepara propuestas. En 10 segundos.

Número 4: Agente de contenido. Ideas, guiones, subtítulos, hashtags. Todo lo que necesito.

Número 5: Agente de monitoreo. Rastrea mi negocio solar. Me alerta si algo falla.

5 agentes. Cero empleados. Control total.

¿Quieres construir el primero? Link en bio.`,
    },
  },
  {
    id: 'v006',
    number: 6,
    title: 'הסוכנים בשבילי',
    titleHe: 'הסוכנים בשבילי',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'גרסה עברית של v005. אותו format, שפה אחרת.',
    filmingGuide: `סוג: Reel 45-60 שניות בעברית, Talking Head + Screen Recording
מיקום: אותו setup כמו v005!

⚠️ צלם את זה מיד אחרי v005 - אותו setup, רק שפה אחרת!

מבנה זהה ל-v005:
1. Talking Head פתיחה
2. Screen Recording של 5 סוכנים (אותם שוטים!)
3. Talking Head סיום + CTA

טיפ: תשתמש באותם screen recordings של v005. רק החלף את ה-Talking Head + voiceover לעברית.

⏱️ 10 דקות נוספות (רק talking head + voiceover)`,
    scripts: {
      he: `5 סוכני AI מנהלים לי את החיים. הנה מה שכל אחד עושה.

סוכן 1: חדשות. כל בוקר, פודקאסט מותאם אישית. כותרות, מזג אוויר, מה שחשוב לי.

סוכן 2: כושר. תוכנית אימון, תפריט תזונה, מתעדכן כל שבוע לפי ההתקדמות שלי.

סוכן 3: עסקי. כותב מיילים, מסדר משימות, מכין הצעות מחיר. ב-10 שניות.

סוכן 4: תוכן. רעיונות, תסריטים, כיתובים, האשטגים. כל מה שצריך כדי לפרסם.

סוכן 5: ניטור. עוקב אחרי העסק הסולארי שלי. מתריע אם משהו לא בסדר.

5 סוכנים. אפס עובדים. שליטה מלאה.

רוצה לבנות את הראשון? לינק בביו.`,
      en: `5 AI agents run my life. Here's what each one does.

Agent 1: News. Every morning, a personalized podcast.
Agent 2: Fitness. Workout + meal plan, updated weekly.
Agent 3: Business. Emails, tasks, proposals. In 10 seconds.
Agent 4: Content. Ideas, scripts, captions, hashtags.
Agent 5: Monitoring. Tracks my solar business.

5 agents. Zero employees. Full control.

Want to build your first one? Link in bio.`,
      es: `5 agentes de IA manejan mi vida. Esto hace cada uno.

Agente 1: Noticias. Podcast personalizado cada mañana.
Agente 2: Fitness. Entrenamiento + comidas, actualizado semanalmente.
Agente 3: Negocios. Emails, tareas, propuestas. En 10 segundos.
Agente 4: Contenido. Ideas, guiones, subtítulos, hashtags.
Agente 5: Monitoreo. Rastrea mi negocio solar.

5 agentes. Cero empleados. Control total.

¿Quieres construir el primero? Link en bio.`,
    },
  },
  {
    id: 'v007',
    number: 7,
    title: 'Being Present',
    titleHe: 'להיות נוכח',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'הסרטון הכי אישי. B-Roll בלבד + voiceover רגוע. ללא מצלמה ישירה.',
    filmingGuide: `סוג: Reel 30-45 שניות, B-Roll בלבד + Voiceover
מיקום: קו פנגאן - הלוקיישנים הכי יפים

⚠️ זה הסרטון הכי אישי ורגיש. קח זמן, אל תמהר.

שוטים לצלם (איטיים, cinematici):
1. 🌊 גלים שוברים על החוף (15 שניות)
2. 🌅 שקיעה מעל הים
3. 🌴 ג'ונגל - אור חודר בין העלים
4. 👨‍👧‍👦 ילדים משחקים (מרחוק, אינטימי)
5. 🧘 אתה יושב/מביט לים (מהגב, silhouette)
6. 👫 הליכה עם יעל (מרחוק)

הגדרות:
- Slow motion אם אפשר (iPhone: Slo-Mo 120fps)
- Golden hour בלבד!
- Horizontal movements (pan) - לא תזוזות חדות

Voiceover:
- שב לבד בחדר שקט
- דבר לאט, רגוע, אישי
- כאילו אתה מספר לחבר הכי טוב שלך
- בסדר לעצור, לנשום, להמשיך

⏱️ צילום: 1-2 שעות (טיול golden hour) | הקלטת voiceover: 10 דקות`,
    scripts: {
      he: `איבדתי את אחי ב-7 באוקטובר.

אבידן. האח הכי קרוב אליי בעולם. הוא היה בנובה. הוא שלח לנו "אוהב אתכם" - אחד אחד. דיברנו שעתיים. ואז הקו נותק.

אחרי שלושה ימים גילינו.

אחרי זה? 400 יום מילואים. מלחמה בלבנון. רחוק מיעל ומהילדים.

וכשחזרתי, שאלתי את עצמי: מה אני רוצה?

לא מה אני חייב. מה אני רוצה.

בחרתי מחדש. קו פנגאן. משפחה. קצב אחר.

עכשיו? אני כאן. נוכח. עם הילדים, עם יעל, עם עצמי.

וזה שווה הכל.`,
      en: `I lost my brother on October 7th.

Avidan. The closest person to me in the world. He was at Nova. He sent us "I love you" - one by one. We talked for two hours. Then the line went dead.

Three days later, we found out.

After that? 400 days of reserve duty. War in Lebanon. Far from my wife and kids.

And when I came back, I asked myself: what do I want?

Not what I have to do. What I want.

I chose again. Koh Phangan. Family. A different pace.

Now? I'm here. Present. With my kids, with my wife, with myself.

And it's worth everything.`,
      es: `Perdí a mi hermano el 7 de octubre.

Avidan. La persona más cercana a mí en el mundo. Estaba en Nova. Nos envió "los amo" - uno por uno. Hablamos dos horas. Y la línea se cortó.

Tres días después, supimos.

¿Después? 400 días de servicio de reserva. Guerra en Líbano. Lejos de mi esposa e hijos.

Y cuando volví, me pregunté: ¿qué quiero?

No qué tengo que hacer. Qué quiero.

Elegí de nuevo. Koh Phangan. Familia. Otro ritmo.

¿Ahora? Estoy aquí. Presente. Con mis hijos, con mi esposa, conmigo mismo.

Y vale todo.`,
    },
  },
];

export const initialTasks: Task[] = [
  // ============================================================
  // 🛒 קניות ציוד (לפני הכל)
  // ============================================================
  {
    id: 't020',
    title: '🎤 קניית מיקרופון לבליר',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה לקנות: Boya BY-M1 ($20) או SYNCO G1L ($50) - מיקרופון לבליר שמתחבר לאייפון USB-C.

למה זה הכי חשוב: אנשים סובלים וידאו גרוע אבל בורחים מאודיו גרוע. מיקרופון = ההשקעה #1.

איפה לקנות: Amazon, AliExpress, או חנות אלקטרוניקה מקומית בקו פנגאן.

איך לבדוק: חבר לאייפון → הקלט 10 שניות → השמע → צריך להישמע נקי בלי הד/רעש רקע.`,
  },
  {
    id: 't021',
    title: '📐 קניית חצובה לטלפון',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה לקנות: כל חצובה עם מחזיק טלפון, $15-30. עדיף עם ראש מתכוונן.

מה חשוב:
- גובה עיניים כשאתה יושב (שולחן) = ~60-70 ס"מ
- גובה עיניים כשאתה עומד = ~150 ס"מ
- יציבה - שלא יזוז באמצע הקלטה
- מחזיק טלפון שמתאים לאייפון 16

טיפ: אם אין חצובה זמינה מיד, ערמת ספרים + משהו שמחזיק את הטלפון עובד זמנית.`,
  },

  // ============================================================
  // 🏠 הכנת סביבת צילום
  // ============================================================
  {
    id: 't023',
    title: '🏠 הכנת פינת צילום בבית',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה לעשות:
1. מצא חדר שקט בבית - בלי מאוורר/מזגן רועש, רחוק מהכביש
2. שים כיסא/שולחן מול חלון (אור טבעי על הפנים)
3. רקע: קיר נקי, או מדף ספרים, או צמחים. לא בלגן!
4. שים חצובה עם טלפון בגובה עיניים, 60-90 ס"מ ממך
5. בדוק אור: הפנים צריכים להיות מוארים. אם יש צל - הזז את הכיסא

Setup diagram:
🪟 חלון (אור טבעי מגיע על הפנים)
📱 אייפון על חצובה (60-90 ס"מ ממך)
🧑 אתה (פנים לחלון, גב לקיר/רקע)
🎤 מיקרופון לבליר על החולצה

בדיקה: הקלט 10 שניות. צפה. האור טוב? הרקע נקי? האודיו נקי? אם כן = מוכן.

⚠️ צלם בפנים! קו פנגאן בחוץ = רעש (רוח, חרקים, אופנועים, תרנגולים). בחוץ רק B-Roll.`,
  },

  // ============================================================
  // 💻 הכנת כלים דיגיטליים
  // ============================================================
  {
    id: 't022',
    title: '💻 התקנת כלי הקלטת מסך',
    category: 'technical',
    status: 'todo',
    priority: 'high',
    notes: `מה להתקין (בחר אחד):

אפשרות A - Tella ($9/חודש) [מומלץ!]:
- נכנס ל-tella.tv → הרשם → התקן תוסף Chrome
- למה Tella: auto-zoom על קליקים, face bubble מובנה, עריכה בגזירת קליפים, הסרת "אממ" אוטומטית
- איך: לוחצים Record → בוחרים מסך + מצלמה → מקליטים

אפשרות B - OBS (חינם):
- הורד מ-obsproject.com → התקן
- Settings: 1920x1080, 30fps, mp4 format
- Sources: הוסף "Display Capture" + "Video Capture" (למצלמה קטנה בפינה)

אפשרות C - QuickTime (Mac בלבד, חינם):
- File → New Screen Recording → בחר מיקרופון → Record

בדיקה: הקלט 30 שניות של Claude.ai עם דיבור → צפה → מסך ברור? אודיו שומעים?`,
  },
  {
    id: 't024',
    title: '📝 הכנת נקודות דיבור (bullet points)',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה לעשות:
1. פתח את course/SCRIPT_HEBREW.md
2. לכל שיעור, העתק רק את הנקודות העיקריות (לא את כל הטקסט!)
3. כתוב על דף/כרטיסיות/טלפרומפטר

⚠️ חשוב: לא לקרוא מילה במילה! זה נשמע רובוטי. תעבור על הנקודות ותדבר בטבעיות.

שיעור 1 - bullet points:
• ספר על הפודקאסט הבוקרי שה-AI מכין
• "אני לא מתכנת, בניתי עסק סולארי"
• Claude = עוזר שזמין 24/7, מבין עברית
• בקורס: התקנה → שיחה → בניית עוזר ראשון

שיעור 5 - bullet points:
• "בנית עוזר אחד, זו רק ההתחלה"
• רשימת עוזרים אפשריים (בוקר, כושר, עסקי, משפחה)
• כל עוזר = עוד 30-60 דקות נחסכות ביום
• CTA: "תשתמש בעוזר שבנית מחר בבוקר"
• CTA: "יש בוטקאמפ של 4 שבועות - לינק למטה"

שיעורים 2-4 = אלה הקלטות מסך, אין צורך ב-bullet points, פשוט תעשה את הפעולות על המסך ותסביר מה אתה עושה.`,
  },
  {
    id: 't025',
    title: '🖥️ הכנת Claude demos מוכנים',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה להכין על המחשב לפני הקלטת המסך:

1. חשבון Claude פתוח ב-claude.ai (נקי, בלי שיחות ישנות)
2. הגדל פונט בדפדפן ל-125% (Cmd/Ctrl + כמה פעמים)
3. סגור את כל הטאבים חוץ מ-Claude
4. הסתר את סרגל הסימניות (Cmd+Shift+B)
5. הפעל Dark Mode ב-Claude (Settings → Theme → Dark)

הכן מראש 3 דמואים (תתאמן עליהם!):

Demo 1 (שיעור 2 - Setup):
- הראה כניסה ל-claude.ai → Sign Up → הצ'אט הראשון
- הקלד: "היי, מה שלומך?" → הראה תשובה בעברית
- הראה התקנת Claude Code בטרמינל (צעד אחר צעד)

Demo 2 (שיעור 3 - Prompting):
- דוגמה גרועה: "תכתוב לי מייל" → תשובה כללית
- דוגמה טובה: "אני בעל עסק ייבוא, צריך מייל לספק בסין שמאחר 3 שבועות..." → תשובה מדויקת
- הראה יצירת קובץ CLAUDE.md

Demo 3 (שיעור 4 - Build Assistant):
- הראה בניית עוזר בוקר: הקלד את הפרומפט, הראה תוצאה
- הראה בניית עוזר כושר: הקלד פרטים אישיים, הראה תוכנית
- הראה בניית עוזר עסקי: הקלד פרטי עסק, הראה מייל מקצועי

טיפ: תתאמן על ה-3 דמואים פעם אחת לפני ההקלטה. ככה תדע בדיוק מה להקליד ולא תתקע.`,
  },

  // ============================================================
  // 🎥 הקלטות - Talking Heads (בוקר)
  // ============================================================
  {
    id: 't001',
    title: '🎥 צילום שיעור 1 עברית - Talking Head',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: שיעור 1 "למה אתה צריך עוזר AI" - 4 דקות, פנים למצלמה בלבד.

איפה: פינת הצילום שהכנת (בפנים, מול חלון)
ציוד: אייפון על חצובה + מיקרופון לבליר
הגדרות אייפון: 1080p / 30fps / נעילת AE-AF (לחץ ארוך על הפנים) / מצב טיסה!

מה להגיד (נקודות, לא לקרוא!):
1. "היום בבוקר קמתי, הכנתי קפה, וקיבלתי פודקאסט חדשות מותאם אישית. אוטומטי."
2. "אותו עוזר אמר לי מה האימון, מה לקנות בסופר, ומה המשימות בעסק"
3. "אני לא מתכנת. בניתי עסק סולארי ל-10 מליון שקל. עכשיו חי בקו פנגאן."
4. "Claude = עוזר שמבין עברית, זמין 24/7, לא שוכח, לא מתלונן"
5. "בחצי שעה הקרובה תבנה את העוזר הראשון שלך"

טיפים:
- אנרגיה +15%! המצלמה "מכבה" אישיות, אז תדבר בהתלהבות
- תסתכל על העדשה (לא על המסך!)
- חיוך קל, כתפיים אחורה
- אם נתקעת: עצור, חכה 2 שניות, תתחיל את המשפט מחדש (נחתוך בעריכה)
- 2-3 takes מספיקים. אל תשאף לשלמות.

אורך צפוי: ~15-20 דקות הקלטה ל-4 דקות תוצאה סופית.`,
  },
  {
    id: 't027',
    title: '🎥 צילום שיעור 5 עברית - Talking Head',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: שיעור 5 "מפה לאן" - 3 דקות, פנים למצלמה (+ קצת מסך).

איפה: אותו setup כמו שיעור 1 (אל תזיז כלום!)

מה להגיד:
1. "בנית עוזר אחד. מעולה. אבל זו רק ההתחלה."
2. מנה עוזרים אפשריים: בוקר, כושר, תזונה, מיילים, ניהול, תוכן
3. "כל עוזר = עוד 30-60 דקות חזרה ביום. 3 עוזרים = 2 שעות."
4. הסיפור האישי: "אחרי 400 יום מילואים, אחרי שאיבדתי את אחי, בניתי את זה מחדש"
5. CTA: "תשתמש בעוזר שבנית מחר בבוקר. ויש בוטקאמפ - לינק למטה."

טיפ: זה שיעור הסיום. תהיה אישי, חם, אמיתי. לא "מרצה" אלא "חבר שנפרד".`,
  },
  {
    id: 't002',
    title: '🎥 צילום שיעור 1 English - Talking Head',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: Lesson 1 "Why You Need an AI Assistant" - 4 min, face to camera.

Same setup as Hebrew! Don't move anything.

Key points (don't read, talk naturally):
1. "This morning I woke up, made coffee, and got a personalized news podcast. Automatically."
2. "Same assistant told me my workout, grocery list, and top business tasks"
3. "I'm not a programmer. I built a solar company. Now I live in Koh Phangan, Thailand."
4. "Claude understands context, remembers you, works as a real assistant"
5. "In the next 30 minutes, you'll build your first AI assistant"

Record right after Hebrew while you're still warmed up. Same energy +15%.`,
  },
  {
    id: 't028',
    title: '🎥 צילום שיעור 5 English - Talking Head',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `Lesson 5 "Where to Go from Here" - 3 min, face to camera.

Key points:
1. "You built one assistant. That's just the start."
2. List possible assistants: morning, fitness, meals, emails, management, content
3. "Each assistant = 30-60 min saved per day"
4. Personal story: "After losing my brother on Oct 7, after 400 days of reserve duty..."
5. CTA: "Use your assistant tomorrow morning. Bootcamp link below."`,
  },
  {
    id: 't003',
    title: '🎥 צילום שיעור 1 Español - Talking Head',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `Lección 1 "Por qué necesitas un asistente IA" - 4 min, cara a cámara.

Mismo setup. No muevas nada.

Puntos clave:
1. "Esta mañana me desperté, hice café, y recibí un podcast de noticias personalizado"
2. "El mismo asistente me dijo mi rutina de ejercicio, qué comprar, y mis tareas"
3. "No soy programador. Construí una empresa solar. Ahora vivo en Koh Phangan."
4. "Claude entiende contexto, te recuerda, funciona como asistente real"
5. "En los próximos 30 minutos, construirás tu primer asistente IA"`,
  },
  {
    id: 't029',
    title: '🎥 צילום שיעור 5 Español - Talking Head',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `Lección 5 "¿Hacia dónde?" - 3 min, cara a cámara.

Puntos clave:
1. "Construiste un asistente. Esto es solo el inicio."
2. Lista de asistentes: mañana, fitness, comidas, emails, gestión, contenido
3. "Cada asistente = 30-60 minutos ahorrados por día"
4. Historia personal: "Después de perder a mi hermano, después de 400 días de servicio..."
5. CTA: "Usa tu asistente mañana. Link del bootcamp abajo."`,
  },

  // ============================================================
  // 🖥️ הקלטות מסך (אחה"צ - פעם אחת!)
  // ============================================================
  {
    id: 't004',
    title: '🖥️ הקלטת מסך - שיעור 2 (Setup Claude)',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: שיעור 2 "התקנת Claude" - הקלטת מסך בלבד, 7 דקות. מקליטים פעם אחת - משתמשים ל-3 שפות!

כלי: Tella / OBS / QuickTime
הגדרות: 1920x1080, 30fps. פונט דפדפן 125%. Dark mode. סגור כל טאב חוץ מ-Claude.

מה להקליט צעד אחר צעד:
1. [1 דקה] פתח דפדפן → הקלד claude.ai → הראה Sign Up → כניסה → הצ'אט הראשון
2. [0.5 דקה] הקלד "היי מה שלומך" → הראה שClaude עונה בעברית
3. [0.5 דקה] הזכר שיש Pro ב-$20/חודש אבל חינם מספיק להתחלה
4. [3 דקות] פתח Terminal (Mac: Cmd+Space → Terminal) →
   - הראה npm install -g @anthropic-ai/claude-code → המתן להתקנה
   - הקלד claude → הראה שנפתח → Login
5. [1 דקה] הראה גם PowerShell ל-Windows (או תוסיף טקסט "למשתמשי Windows: nodejs.org")
6. [1 דקה] הראה Claude Code עובד - שאל שאלה פשוטה

⚠️ הערה: אל תדבר! רק הקלט את המסך בשקט. ה-voiceover ייוסף אח"כ בכל שפה בנפרד.

טיפ: הזז עכבר לאט, המתן 2 שניות אחרי כל קליק כדי שהצופה יעקוב.`,
  },
  {
    id: 't030',
    title: '🖥️ הקלטת מסך - שיעור 3 (Prompting)',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: שיעור 3 "איך לדבר עם Claude" - הקלטת מסך, 6 דקות. פעם אחת ל-3 שפות!

מה להקליט:
1. [2 דקות] דוגמה גרועה vs טובה:
   - הקלד: "תכתוב לי מייל" → הראה תשובה כללית
   - הקלד: "אני בעל עסק ייבוא, צריך מייל לספק בסין שמאחר 3 שבועות, טון מקצועי אבל נחרץ" → הראה תשובה מדויקת!
   - עצור 3 שניות ככה שהצופה יראה את ההבדל

2. [1 דקה] הראה את הנוסחה (הקלד אותה בצ'אט חדש):
   "מי אתה + מה אתה צריך + איך אתה רוצה + הקשר נוסף"

3. [1 דקה] דוגמה חיה: FAQ לעסק
   - הקלד את הפרומפט מהתסריט → הראה תוצאה מלאה

4. [2 דקות] יצירת CLAUDE.md:
   - פתח Notepad/Notes → צור קובץ חדש → הקלד את התבנית (מי אני, מה חשוב, מטרות)
   - שמור כ-CLAUDE.md
   - חזור ל-Claude Code → הראה שהוא "מכיר" אותך עכשיו

⚠️ אל תדבר! הקלטת מסך שקטה. Voiceover בנפרד.`,
  },
  {
    id: 't031',
    title: '🖥️ הקלטת מסך - שיעור 4 (Build Assistant)',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: שיעור 4 "בנה את העוזר הראשון" - הקלטת מסך, 10 דקות. פעם אחת ל-3 שפות!

מה להקליט:
1. [3 דקות] עוזר בוקר:
   - פתח Claude Code → הקלד את הפרומפט: "אני רוצה שתהיה העוזר הבוקרי שלי..."
   - הראה תוצאה: סיכום חדשות + מזג אוויר + משימות
   - פתח CLAUDE.md → הוסף את הגדרת שגרת בוקר → שמור

2. [3 דקות] עוזר כושר:
   - פתח שיחה חדשה → הקלד: "אני רוצה שתהיה המאמן שלי..."
   - מלא פרטים: גובה, משקל, מטרה, ציוד
   - הראה תוצאה: תוכנית אימון + תפריט
   - הוסף ל-CLAUDE.md

3. [4 דקות] עוזר עסקי:
   - שיחה חדשה → הקלד: "אני רוצה שתהיה העוזר העסקי שלי..."
   - מלא פרטי עסק
   - הראה: מייל מקצועי שנוצר ב-10 שניות
   - הראה: הצעת מחיר
   - הוסף ל-CLAUDE.md

⚠️ אל תדבר! מסך שקט + voiceover אח"כ.

טיפ: הקלד לאט כדי שהצופה יספיק לקרוא. עצור 2-3 שניות אחרי כל תוצאה.`,
  },

  // ============================================================
  // 🎙️ Voiceovers (ערב או יום 2 בוקר)
  // ============================================================
  {
    id: 't026',
    title: '🎙️ הקלטת Voiceover עברית - שיעורים 2,3,4',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה זה: קריינות בעברית שתוסף מעל הקלטות המסך של שיעורים 2, 3, 4.

איך:
1. שב ליד המחשב עם מיקרופון (אותו לבליר)
2. פתח את הקלטת המסך של שיעור 2 והפעל
3. דבר/הסבר מה קורה על המסך - כאילו אתה יושב ליד חבר
4. הקלט עם Voice Memos / Audacity / כל אפליקציית הקלטה

מה להגיד (שיעור 2):
"אוקיי, התקנה. נכנסים ל-claude.ai... לוחצים Sign Up... מעולה, אתה רואה את הצ'אט. תכתוב היי... עכשיו Claude Code. פותחים Terminal..."

מה להגיד (שיעור 3):
"תראה את ההבדל בין שאלה גרועה לטובה... בדוגמה הראשונה הוא מנחש... בשנייה הוא יודע בדיוק מה צריך... הנה הנוסחה..."

מה להגיד (שיעור 4):
"אוקיי, הגענו לחלק המגניב. אני כותב ל-Claude... תראה מה הוא מחזיר... מדהים נכון? עכשיו בואו נוסיף את זה ל-CLAUDE.md..."

טון: קז'ואל, כמו חבר. לא "מרצה". לא לקרוא מהתסריט מילה במילה!
אורך: ~23 דקות voiceover (7+6+10 דקות)`,
  },
  {
    id: 't032',
    title: '🎙️ הקלטת Voiceover English - Lessons 2,3,4',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `Same screen recordings, but English narration on top.

Watch each screen recording and explain what's happening in English.
Same casual, friendly tone. Like you're sitting next to a friend.

Lesson 2: "Okay, setup. Go to claude.ai... click Sign Up... great, you see the chat..."
Lesson 3: "See the difference between a bad prompt and a good one..."
Lesson 4: "Alright, this is the fun part. I'm typing to Claude..."

Record with lav mic. Total: ~23 min voiceover.`,
  },
  {
    id: 't033',
    title: '🎙️ הקלטת Voiceover Español - Lecciones 2,3,4',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `Mismas grabaciones de pantalla, narración en español.

Mira cada video de pantalla y explica lo que pasa en español.
Tono casual, como si estuvieras con un amigo.

Lección 2: "Bien, instalación. Vamos a claude.ai... click en Sign Up..."
Lección 3: "Mira la diferencia entre un prompt malo y uno bueno..."
Lección 4: "Llegamos a la parte más divertida. Le escribo a Claude..."

Graba con micrófono lavalier. Total: ~23 min narración.`,
  },

  // ============================================================
  // ✂️ עריכה
  // ============================================================
  {
    id: 't034',
    title: '✂️ עריכת Talking Heads עברית (שיעורים 1+5)',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `כלי: Descript ($24/חודש) או CapCut (חינם)

מה לעשות:
1. ייבא את הקלטת שיעור 1 עברית + שיעור 5 עברית
2. Descript: ייצור transcript אוטומטי → מחק "אממ", "אה" (כפתור אחד!)
3. חתוך שקטים ארוכים (יותר מ-2 שניות)
4. חתוך takes גרועים (נתקעת, צחקת, שכחת)
5. הוסף Intro (3 שניות): שם + לוגו (אפשר טקסט פשוט על רקע שחור)
6. הוסף Outro (5 שניות): "שיעור הבא: [שם]" + CTA
7. הוסף כתוביות בעברית (Descript auto-generate)
8. Export: 1080p, mp4

⏱️ זמן צפוי: 45-60 דקות`,
  },
  {
    id: 't035',
    title: '✂️ עריכת Talking Heads English (Lessons 1+5)',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `Same process as Hebrew. Import → auto-transcript → remove fillers → cut silences → add intro/outro → English captions → Export 1080p mp4.

⏱️ Expected: 30-45 min (faster since you know the process now)`,
  },
  {
    id: 't036',
    title: '✂️ עריכת Talking Heads Español (Lecciones 1+5)',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `Mismo proceso. Importar → transcript → eliminar rellenos → cortar silencios → intro/outro → subtítulos en español → Export 1080p mp4.`,
  },
  {
    id: 't037',
    title: '✂️ הרכבת שיעורים 2-4 עברית (מסך + voiceover)',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `מה לעשות:
1. פתח Descript / CapCut
2. ייבא: Screen Recording שיעור 2 + Voiceover עברית שיעור 2
3. סנכרן: שים את ה-voiceover מעל הוידאו (התאם תזמון ידנית)
4. חתוך רגעי שקט/חיכוי ב-screen recording
5. הוסף zoom-in על קליקים חשובים (Tella עושה אוטומטי)
6. הוסף כתוביות בעברית
7. חזור על זה לשיעור 3 ולשיעור 4
8. Export כל 3 כ-mp4

⏱️ זמן צפוי: 1.5-2 שעות (3 שיעורים)`,
  },
  {
    id: 't038',
    title: '✂️ הרכבת שיעורים 2-4 English',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `Same screen recordings + English voiceover layered on top. Sync timing, add English captions, export 3 mp4 files. ⏱️ ~1-1.5 hours`,
  },
  {
    id: 't039',
    title: '✂️ הרכבת שיעורים 2-4 Español',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `Same screen recordings + Spanish voiceover. Sync, Spanish captions, export 3 mp4 files. ⏱️ ~1-1.5 hours`,
  },

  // ============================================================
  // 📤 העלאה והשקה
  // ============================================================
  {
    id: 't019',
    title: '📤 העלאת סרטונים לפלטפורמת הקורס',
    category: 'technical',
    status: 'todo',
    priority: 'high',
    notes: `מה לעשות:
1. פתח את kaniel149.github.io/kaniel-course
2. בקוד: עדכן את video URLs בכל שיעור (src/data/lessons)
3. העלה סרטונים ל-YouTube (unlisted) או Vimeo או hosting אחר
4. שים את הלינקים בקוד
5. בנה ודפלא: npm run build && git push
6. בדוק: נכנס עם קוד KANIEL2026 → צפה בשיעור 1 → ודא שנטען

15 סרטונים סה"כ: 5 שיעורים × 3 שפות`,
  },
  {
    id: 't040',
    title: '📦 הכנת חומרי לימוד PDFs',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `מה ליצור (5 PDFs לכל שפה = 15 קבצים):

שיעור 1: "5 דברים ש-AI יכול לעשות לך היום" - A4 page, 5 bullet points עם דוגמאות
שיעור 2: "מדריך התקנת Claude צעד אחר צעד" - screenshots של כל שלב
שיעור 3: "50 Prompts להתחלה מהירה" - רשימה של 50 פרומפטים מוכנים בעברית
שיעור 4: "תבנית CLAUDE.md לעוזר ראשון" - קובץ טקסט מוכן להעתקה
שיעור 5: "30 ימים עם AI - מה לעשות כל שבוע" - roadmap בפורמט לוח

Claude יכול ליצור את כל אלה! פשוט תגיד לו.`,
  },
  {
    id: 't041',
    title: '🧪 בדיקת חוויית תלמיד end-to-end',
    category: 'technical',
    status: 'todo',
    priority: 'high',
    notes: `מה לבדוק:
1. נכנס ל-kaniel149.github.io/kaniel-course מהטלפון
2. הכנס קוד גישה: KANIEL2026
3. צפה בשיעור 1 → ודא שהוידאו עובד, אודיו נשמע, כתוביות נראות
4. עבור לשיעור 2 → ודא שנפתח (sequential unlock)
5. הורד חומר לימוד → ודא שהPDF נפתח
6. צפה בכל 5 שיעורים → ודא שתעודה מופיעה בסוף
7. בדוק גם מלפטופ
8. בדוק גם באנגלית ובספרדית

אם משהו שבור - תקן לפני ההשקה!`,
  },

  // ============================================================
  // 🚀 השקה ושיווק
  // ============================================================
  {
    id: 't005',
    title: '💳 החלפת לינקים ל-LemonSqueezy',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה לעשות:
1. צור חשבון ב-lemonsqueezy.com
2. צור מוצר: "העוזר הראשון שלך" - 97₪ / $27 / €25
3. צור 3 variants (עברית/English/Español) או מוצר אחד עם 3 שפות
4. העתק checkout URLs
5. פתח landing/src/config/lemonSqueezy.ts → החלף placeholder URLs
6. Build + deploy: npm run build && git push

בדוק: לחץ "קנה עכשיו" בדף הנחיתה → ודא שנפתח checkout אמיתי`,
  },
  {
    id: 't006',
    title: '📧 חיבור טפסים לשירות מיילים',
    category: 'launch',
    status: 'todo',
    priority: 'high',
    notes: `מה לעשות:
1. צור חשבון ב-ConvertKit (חינם עד 1000 subscribers) או Mailchimp
2. צור Signup Form
3. העתק API endpoint / form action
4. עדכן opt-in page בlanding: שטופס באמת שולח לשירות
5. צור tag "lead-magnet" ו-tag לכל שפה
6. בדוק: מלא טופס → ודא שהמייל מגיע ל-email list`,
  },
  {
    id: 't012',
    title: '📸 פרסום פוסט ראשון באינסטגרם',
    category: 'marketing',
    status: 'todo',
    priority: 'high',
    notes: `מה לפרסם: אחד מ-7 הסרטונים שכבר יש להם תסריט (v001-v007)

איך:
1. בחר סרטון (מומלץ: v001 AI First Intro או v006 הסוכנים בשבילי)
2. צלם + ערוך (לפי ההוראות בכרטיס הוידאו)
3. כתוב caption: Hook + 3-5 שורות ערך + CTA + hashtags
4. Hashtags: #AI #עוזרAI #סוכניAI #טכנולוגיה #יזמות #lifestylebusiness
5. העלה דרך אינסטגרם או getLate.dev
6. הוסף לביו: "🤖 בונה חיים עם AI | קו פנגאן 🌴 | לינק למדריך חינם 👇"

⏱️ הזמן הטוב ביותר לפרסם: 9:00-11:00 בוקר או 19:00-21:00 ערב (שעון ישראל)`,
  },
  {
    id: 't013',
    title: '📱 אופטימיזציה של פרופיל אינסטגרם',
    category: 'marketing',
    status: 'todo',
    priority: 'high',
    notes: `מה לשנות בפרופיל:

1. תמונת פרופיל: תמונה שלך עם חיוך, רקע בהיר (לא לוגו!)
2. שם: Kaniel | AI Life 🤖 (או וריאציה)
3. Bio (4 שורות):
   בונה חיים חדשים עם סוכני AI 🤖
   מקו פנגאן, תאילנד 🌴
   עסק + משפחה + תחביבים = הכל
   👇 מדריך חינם: 5 עוזרי AI שכל בעל עסק צריך
4. לינק בביו: kaniel149.github.io/kaniel-landing/#/he/guide
5. Highlights: צור 3-4 highlights (מי אני, AI טיפים, קו פנגאן, הקורס)

⏱️ 15 דקות`,
  },
  {
    id: 't014',
    title: '📅 הכנת לוח תוכן שבוע 1',
    category: 'marketing',
    status: 'todo',
    priority: 'high',
    notes: `מה ליצור:

ראשון: Reel - הקדמה (v001 או v006)
שני: Story - Behind the scenes מההקלטות
שלישי: Reel - שגרת בוקר (v002)
רביעי: Carousel - "5 דברים שAI יכול לעשות לך" (כבר יש ב-content/social/)
חמישי: Reel - מוי תאי (v004)

כל יום: Story אחד לפחות (טיפ, שאלה, או behind the scenes)

זמנים: 09:00 או 20:00 (שעון ישראל)
כלי תזמון: getLate.dev`,
  },

  // ============================================================
  // 📦 משימות משניות
  // ============================================================
  {
    id: 't007',
    title: '📷 צילום תמונות אמיתיות',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `מה לצלם (בקו פנגאן):
1. פורטרט מקצועי: פנים חייכניות, רקע טבעי (חוף/עצים), אור טבעי
2. "עבודה": יושב עם לפטופ, מסך Claude נראה
3. משפחה: עם יעל והילדים (אם מתאים)
4. כושר: אימון מוי תאי
5. האי: חוף, שקיעה, ג'ונגל

איפה להשתמש: Brand Hub, Landing Page, Course Platform, OG images, Instagram profile
פורמט: אייפון, אור טבעי, לפחות 5-10 תמונות טובות`,
  },
  {
    id: 't008',
    title: '🖼️ יצירת OG images',
    category: 'technical',
    status: 'todo',
    priority: 'medium',
    notes: `מה זה: תמונות שמופיעות כשמשתפים לינק בוואטסאפ/טלגרם/טוויטר

מה ליצור (1200x630px):
1. Brand Hub OG: "Kaniel | AI First Life" + תמונה שלך
2. Landing OG: "העוזר הראשון שלך - 97₪" + תמונה
3. Scorecard OG: "כמה מוכן העסק שלך ל-AI?"
4. Course OG: "5 שיעורים. 30 דקות. העוזר הראשון שלך."

כלי: Canva (חינם), או Claude ייצור HTML → screenshot
צבעים: רקע #0A0A0A, טקסט #FFFFFF, accent #0066FF`,
  },
  {
    id: 't009',
    title: '🌐 הגדרת דומיין מותאם',
    category: 'technical',
    status: 'todo',
    priority: 'medium',
    notes: `מה לעשות:
1. קנה דומיין (namecheap/GoDaddy): kaniel.ai או kaniel.co או kanielt.com
2. הגדר CNAME: www → kaniel149.github.io
3. הוסף קובץ CNAME בrepo הראשי עם הדומיין
4. GitHub Settings → Pages → Custom domain → הכנס דומיין
5. המתן 24-48 שעות ל-DNS propagation
6. עדכן כל הלינקים (landing, course, scorecard) לדומיין החדש`,
  },
  {
    id: 't010',
    title: '⏰ הגדרת getLate.dev לתזמון',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `מה לעשות:
1. נכנס ל-getlate.dev/dashboard
2. חבר את חשבון האינסטגרם
3. הגדר timezone: Asia/Bangkok (UTC+7)
4. תזמן את לוח התוכן של שבוע 1
5. בדוק: ודא שפוסט מתוזמן מופיע ב-queue`,
  },
  {
    id: 't015',
    title: '💬 הפעלת WhatsApp drip',
    category: 'marketing',
    status: 'todo',
    priority: 'medium',
    notes: `מה זה: 5 הודעות WhatsApp אוטומטיות למי שנרשם אבל לא קנה

ההודעות כבר כתובות ב-content/social/whatsapp_drip_*.md

מה לעשות:
1. הגדר WhatsApp Business API או bridge
2. צור automation: אחרי opt-in → שלח הודעה כל יום למשך 5 ימים
3. הודעה 5 כוללת קוד הנחה WHATSAPP20`,
  },
  {
    id: 't016',
    title: '📧 הגדרת רצף 5 מיילים',
    category: 'marketing',
    status: 'todo',
    priority: 'medium',
    notes: `מה זה: 5 מיילים אוטומטיים אחרי הורדת המדריך החינמי

המיילים כבר כתובים ב-content/social/email_sequence_*.md

מה לעשות:
1. ב-ConvertKit/Mailchimp: צור automation sequence
2. טריגר: הרשמה לrfrom
3. מייל 1 (מיד): ברוכים הבאים + לינק למדריך
4. מייל 2 (יום 2): טיפ AI ראשון
5. מייל 3 (יום 4): הסיפור שלי
6. מייל 4 (יום 6): Case study
7. מייל 5 (יום 8): הצעה - הקורס ב-97₪`,
  },
  {
    id: 't011',
    title: '🧑‍🤝‍🧑 בטא טסט - 3-5 אנשים',
    category: 'launch',
    status: 'todo',
    priority: 'medium',
    notes: `מה לעשות:
1. בחר 3-5 אנשים (חברים/משפחה) שמתאימים לקהל יעד
2. שלח להם קוד גישה EARLY-BIRD
3. בקש: "תעבור על הקורס ותגיד לי: מה ברור, מה לא ברור, מה חסר, מה מיותר"
4. שלח שאלון קצר אחרי:
   - האם הצלחת להתקין Claude? (כן/לא)
   - האם בנית עוזר? (כן/לא)
   - מה היה הכי שימושי?
   - מה היה מבלבל?
   - האם היית ממליץ לחבר?
5. תקן לפי הפידבק לפני ההשקה הרשמית`,
  },
  {
    id: 't017',
    title: '📌 אסטרטגיית 3 פוסטים מוצמדים',
    category: 'marketing',
    status: 'todo',
    priority: 'medium',
    notes: `מה זה: 3 פוסטים שיהיו מוצמדים בראש הפרופיל (Grid top row)

מה להצמיד:
1. הפוסט הכי טוב שלך (הכי הרבה saves/shares)
2. פוסט "מי אני" - הסיפור שלך (Oct 7 → rebuild → AI life)
3. פוסט עם CTA ללינק בביו (מדריך חינם / קורס)

למה: כשמישהו חדש נכנס לפרופיל, ה-3 הראשונים = הרושם הראשון.
מתי: אחרי שיש לפחות 5-6 פוסטים מפורסמים`,
  },
  {
    id: 't018',
    title: '🔧 עדכון brand hub עם תמונות',
    category: 'technical',
    status: 'todo',
    priority: 'low',
    notes: `מה לעשות:
1. אחרי שצילמת תמונות (t007), בחר 3-5 הטובות
2. הוסף ל-brand-hub/public/images/
3. עדכן קוד: Hero section, About section, Products section
4. Build + deploy

הקובץ: brand-hub/src/sections/HeroSection.tsx (ושאר הsections)`,
  },
];

export const initialIdeas: Idea[] = [
  {
    id: 'i001',
    text: 'איך בניתי סוכן חדשות שמכין לי פודקאסט כל בוקר',
    pillar: 'ai-first',
    createdAt: '2026-02-07T08:00:00.000Z',
  },
  {
    id: 'i002',
    text: 'למה כל מערכת צריכה UX אנושי + UX אג׳נטי',
    pillar: 'ai-first',
    createdAt: '2026-02-07T08:01:00.000Z',
  },
  {
    id: 'i003',
    text: '5 דברים שסוכן AI עושה לי כל יום',
    pillar: 'ai-first',
    createdAt: '2026-02-07T08:02:00.000Z',
  },
  {
    id: 'i004',
    text: 'איך להתחיל עם AI בלי להיות טכני',
    pillar: 'ai-first',
    createdAt: '2026-02-07T08:03:00.000Z',
  },
  {
    id: 'i005',
    text: 'למה אתה תקוע בכיבוי שריפות (ואיך לצאת מזה)',
    pillar: 'systems',
    createdAt: '2026-02-07T08:04:00.000Z',
  },
  {
    id: 'i006',
    text: 'איך למפות את כל העסק שלך בשעה אחת',
    pillar: 'systems',
    createdAt: '2026-02-07T08:05:00.000Z',
  },
  {
    id: 'i007',
    text: 'למה ביטחון חייב לבוא לפני שפע',
    pillar: 'survival-abundance',
    createdAt: '2026-02-07T08:06:00.000Z',
  },
  {
    id: 'i008',
    text: 'שינית מיקום אבל הבאת את אותה מערכת שבורה',
    pillar: 'survival-abundance',
    createdAt: '2026-02-07T08:07:00.000Z',
  },
  {
    id: 'i009',
    text: 'אני רוצה הכל - והיום אפשר לקבל את זה',
    pillar: 'lifestyle',
    createdAt: '2026-02-07T08:08:00.000Z',
  },
  {
    id: 'i010',
    text: 'למה Lifestyle Business זה לא לעבוד פחות',
    pillar: 'lifestyle',
    createdAt: '2026-02-07T08:09:00.000Z',
  },
  {
    id: 'i011',
    text: 'Build in public: behind the scenes של הקלטת הקורס',
    pillar: 'personal',
    createdAt: '2026-02-07T09:00:00.000Z',
  },
  {
    id: 'i012',
    text: 'מה למדתי מ-400 יום מילואים על ניהול מערכות',
    pillar: 'systems',
    createdAt: '2026-02-07T09:01:00.000Z',
  },
];
