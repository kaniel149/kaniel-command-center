import type { Video, Task, Idea } from '../types';

// Bump this version whenever initialData changes to force browser refresh
export const DATA_VERSION = 2;

export const initialVideos: Video[] = [
  {
    id: 'v001',
    number: 1,
    title: 'AI First Intro',
    titleHe: 'הקדמה - AI First',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 15-60s. Hook: "אני לא מתכנת. אני בן אדם שבנה עסק, ועכשיו סוכני AI מנהלים לי את החיים." הראה חיים באי + Claude על המסך. CTA: "תעקוב ותראה איך"',
  },
  {
    id: 'v002',
    number: 2,
    title: 'Morning Routine',
    titleHe: 'שגרת בוקר עם AI',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 30-60s. צלם: קפה בבוקר → פתיחת לפטופ → Claude מכין סיכום → אימון. Hook: "כל בוקר AI מכין לי פודקאסט חדשות + תפריט אוכל + תוכנית אימון. בלי שנגעתי בכלום."',
  },
  {
    id: 'v003',
    number: 3,
    title: 'Island English',
    titleHe: 'חיים באי - אנגלית',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 30-45s באנגלית. צלם: חוף, שקיעה, משפחה, עבודה מהלפטופ. Hook: "I moved my family to a Thai island and rebuilt my life with AI agents." CTA: Follow for the journey.',
  },
  {
    id: 'v004',
    number: 4,
    title: 'Muay Thai',
    titleHe: 'מוי תאי ואופטימיזציה',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 30-45s. צלם: אימון מוי תאי (sparring/bag work/stretching). Hook: "אני מאמן מוי תאי בתאילנד, והAI שלי בנה לי את תוכנית האימון." הראה Claude עם תוכנית אימון.',
  },
  {
    id: 'v005',
    number: 5,
    title: 'My AI Agents',
    titleHe: 'הסוכנים שלי',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 45-60s. צלם: Talking Head + Screen Recording מהיר. הראה 5 סוכנים שעובדים: חדשות, כושר, ניהול עסק, תוכן, ניטור. Hook: "5 AI agents run my life. Here\'s what each one does."',
  },
  {
    id: 'v006',
    number: 6,
    title: 'הסוכנים בשבילי',
    titleHe: 'הסוכנים בשבילי',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 45-60s בעברית. גרסה עברית של v005. Talking Head + מסך. Hook: "5 סוכני AI מנהלים לי את החיים. הנה מה שכל אחד עושה." CTA: "רוצה גם? לינק בביו."',
  },
  {
    id: 'v007',
    number: 7,
    title: 'Being Present',
    titleHe: 'להיות נוכח',
    stages: { script: true, film: false, edit: false, publish: false },
    notes: 'Reel 30-45s. B-Roll: ים, ג׳ונגל, משפחה, שקיעה + voiceover. Hook: "איבדתי את אחי ב-7 באוקטובר. אחרי 400 יום מילואים, בחרתי מחדש." טון אישי, רגוע, אותנטי.',
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
