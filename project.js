
(function(){
  const PAGE = location.pathname.split("/").pop() || "projects.html";

  const COMMON = {
    tr:{
      back_projects:"Tüm Projeler", back_portfolio:"Portfolyoya Dön",
      github:"GitHub", live:"Canlı Demo", portfolio:"Portfolyoya Dön",
      status_label:"Durum", role_label:"Rol", year_label:"Yıl",
      tech_title:"Teknolojiler", quick_title:"Hızlı Geçiş",
      all_projects:"Tüm projeler", contact:"İletişim",
      view_project:"Projeyi İncele", featured:"Öne Çıkan",
      archive_kicker:"Proje Arşivi", archive_title:"Tüm Projeler",
      archive_desc:"Ana sayfada en çok öne çıkarmak istediğim iki proje var. Burada ise zaman içinde yaptığım diğer çalışmaları da bir arada görebilirsin.",
      llm_title:"LLMBastion", llm_desc:"LLM uygulamalarına güvenlik katmanı eklemek için geliştirdiğim proje. Prompt injection denemelerini ve hassas veri sızıntılarını kontrol ediyor.",
      esp_title:"ESP32 Akıllı Sensör Ağı", esp_desc:"ESP32 ile sensör verisi okuma, işleme ve ağ üzerinden aktarma üzerine çalıştığım gömülü sistem projesi.",
      smart_title:"Smart-Seat AI", smart_desc:"Kütüphanedeki masa doluluk durumunu görüntü işleme ile takip etmeyi amaçlayan ekip projesi.",
      kelimelik_title:"Kelimelik", kelimelik_desc:"Günlük ve klasik modları bulunan Türkçe kelime tahmin oyunu.",
      mobius_title:"Möbius Şeridi Satranç", mobius_desc:"Satranç tahtasını Möbius şeridi üzerinde nasıl çalıştırabiliriz fikrinden çıkan deneysel bir prototip.",
      todo_title:"ToDo Java Project", todo_desc:"Nesne Yönelimli Programlama dersi için ekipçe geliştirdiğimiz Java ve Spring Boot tabanlı uygulama."
    },
    en:{
      back_projects:"All Projects", back_portfolio:"Back to Portfolio",
      github:"GitHub", live:"Live Demo", portfolio:"Back to Portfolio",
      status_label:"Status", role_label:"Role", year_label:"Year",
      tech_title:"Technologies", quick_title:"Quick Links",
      all_projects:"All projects", contact:"Contact",
      view_project:"View Project", featured:"Featured",
      archive_kicker:"Project Archive", archive_title:"All Projects",
      archive_desc:"I keep the two projects I care about most on the homepage. This page collects the other things I have built, tested or used to learn something new.",
      llm_title:"LLMBastion", llm_desc:"An LLM security gateway for prompt-injection detection, sensitive-output protection, audit and telemetry.",
      esp_title:"ESP32 Smart Sensor Network", esp_desc:"An edge-device project focused on embedded systems, sensor processing and network communication.",
      smart_title:"Smart-Seat AI", smart_desc:"A team project that classifies library desk occupancy using computer vision.",
      kelimelik_title:"Kelimelik", kelimelik_desc:"A Turkish word-guessing game with daily and classic modes.",
      mobius_title:"Möbius Strip Chess", mobius_desc:"A visualization prototype exploring chess logic on a single-surface topology.",
      todo_title:"ToDo Java Project", todo_desc:"A Spring Boot task and notes app developed as part of an OOP course."
    }
  };

  const PAGES = {
    "llm-bastion.html":{
      tr:{
        category:"Yapay Zekâ Güvenliği",title:"LLMBastion",
        intro:"LLM kullanan uygulamalar için geliştirdiğim bir güvenlik katmanı. Prompt injection denemelerini kontrol ediyor, modelden dönen hassas verileri filtreliyor ve isteklerle ilgili güvenlik kayıtları tutuyor.",
        status:"Aktif geliştirme",role:"Geliştirici",year:"2026",
        sections:[
          ["Ne yapıyor?",`<p>LLM kullanan uygulama ile model sağlayıcısı arasına giriyor. Kullanıcıdan gelen istek önce RuleGuard ve SemanticGuard v2 ile kontrol ediliyor. İstek güvenliyse modele gidiyor; modelden dönen cevap da kullanıcıya ulaşmadan önce DataGuard v2 tarafından taranıyor.</p><div class="visual"><i class="fa-solid fa-shield-virus"></i></div>`],
          ["Nasıl çalışıyor?",`<ul><li><strong>RuleGuard:</strong> açık jailbreak ve talimat geçersiz kılma denemelerini kurallarla kontrol ediyor.</li><li><strong>SemanticGuard v2:</strong> metnin prompt injection olma ihtimalini TF-IDF + Logistic Regression ile hesaplıyor.</li><li><strong>RiskEngine:</strong> bu sonuçlara göre isteği geçiriyor veya engelliyor.</li><li><strong>DataGuard v2:</strong> model cevabındaki desteklenen hassas verileri kullanıcıya dönmeden önce maskeliyor.</li></ul>`],
          ["Test sonuçları ve altyapı",`<p>SemanticGuard v2'yi 1.200 satırlık dengeli sentetik veri setiyle test ettim. Held-out testte Precision 0.935, Recall 0.956 ve F1 0.945 çıktı. Bunlar proje içindeki test sonuçları; gerçek kullanımda aynı sonucu garanti etmiyor.</p><p>Projede rate limit, audit kayıtları, dashboard, PostgreSQL/Redis, Docker Compose ve GitHub Actions test akışı da bulunuyor.</p>`],
          ["Bu projede neye uğraştım?",`<p>Benim için önemli olan sadece isteği engellemek değildi. Neden engellendiğini görebilmek, yanlış pozitifleri takip etmek ve gereksiz yere ham kullanıcı verisi saklamadan kayıt tutmak istedim. O yüzden audit ve ölçüm tarafına da özellikle uğraştım.</p>`]
        ]
      },
      en:{
        category:"AI Security",title:"LLMBastion",
        intro:"A security layer I am building for LLM applications. It checks prompt-injection attempts, scans model output for sensitive data and keeps useful security records.",
        status:"Active development",role:"Developer",year:"2026",
        sections:[
          ["What it solves",`<p>LLMBastion sits between an LLM-powered application and the model provider as a security layer. Requests are inspected by RuleGuard and SemanticGuard v2 before reaching the provider; allowed model responses are scanned by DataGuard v2 before being returned to the user.</p><div class="visual"><i class="fa-solid fa-shield-virus"></i></div>`],
          ["Security pipeline",`<ul><li><strong>RuleGuard:</strong> catches explicit instruction overrides, jailbreaks, system-prompt extraction and security-bypass attempts with deterministic rules.</li><li><strong>SemanticGuard v2:</strong> estimates multilingual prompt-injection probability using TF-IDF + Logistic Regression.</li><li><strong>RiskEngine:</strong> makes block/allow decisions using tested thresholds.</li><li><strong>DataGuard v2:</strong> redacts supported sensitive formats such as emails, Turkish phone numbers, JWTs, private-key blocks, validated IBANs and Luhn-valid card numbers.</li></ul>`],
          ["Evaluation and architecture",`<p>SemanticGuard v2 was evaluated on a balanced 1,200-row synthetic dataset with a group-aware split. On the held-out set it reached Precision 0.935, Recall 0.956 and F1 0.945. These are controlled project evaluation results, not a production guarantee.</p><p>The gateway also includes rate limiting, provider abstraction, audit/telemetry, a dashboard, PostgreSQL/Redis-backed Docker Compose infrastructure and a GitHub Actions test pipeline.</p>`],
          ["My focus",`<p>Rather than building only an LLM API wrapper, I focused on making security decisions observable, measuring the false-positive/false-negative tradeoff, and producing audit data without unnecessarily persisting raw prompts or model responses.</p>`]
        ]
      }
    },
    "esp32.html":{
      tr:{category:"Gömülü Sistemler",title:"ESP32 Akıllı Sensör Ağı",intro:"ESP32-WROOM-32U ile sensör verisi okuyup işleyen ve ağ üzerinden aktarabilen bir sistem geliştirmeye çalışıyorum. Bu proje benim için donanım ve ağ tarafını birlikte öğrenme alanı.",status:"Geliştirme aşamasında",role:"Geliştirici",year:"2026",
        sections:[
          ["Projenin amacı",`<p>Bir sensörden aldığım veriyi ESP32 üzerinde işleyip ağ üzerinden başka bir sisteme düzgün şekilde aktarabilmek istiyorum. Bunu yaparken sadece kod tarafına değil; bağlantı kalitesi, anten, güç ve haberleşme tarafına da bakıyorum.</p><div class="visual"><i class="fa-solid fa-tower-broadcast"></i></div>`],
          ["Kullandığım yapı",`<ul><li><strong>ESP32-WROOM-32U:</strong> Wi‑Fi/Bluetooth desteği ve harici anten bağlantısı için kullandığım ana kart.</li><li><strong>Harici anten:</strong> sinyal tarafını daha rahat deneyebilmek için u.FL bağlantısını kullanıyorum.</li><li><strong>Sensör tarafı:</strong> analog/dijital veriyi okuyup gerekli işlemleri yaptıktan sonra ağ üzerinden gönderiyorum.</li></ul>`],
          ["Bu projeden ne öğreniyorum?",`<p>Asıl hedefim donanım ve yazılımın birbirini nasıl etkilediğini daha iyi anlamak. Sensör, anten, bağlantı protokolü ve yazılım tarafındaki küçük bir kararın sistemin tamamını nasıl değiştirdiğini uygulayarak görmek istiyorum.</p>`]
        ]},
      en:{category:"Embedded Systems",title:"ESP32 Smart Sensor Network",intro:"An embedded-systems project built around ESP32-WROOM-32U and external antenna support, focused on reading, processing and transmitting sensor data to a central system over a network.",status:"In development",role:"Developer",year:"2026",
        sections:[
          ["Project goal",`<p>The goal is to build a robust edge-device architecture that can reliably read and process physical-world data, then transmit it into a digital system over a network. The work considers not only software, but also electronic limits, signal quality and communication layers.</p><div class="visual"><i class="fa-solid fa-tower-broadcast"></i></div>`],
          ["Hardware approach",`<ul><li><strong>ESP32-WROOM-32U:</strong> the main microcontroller, suitable for Wi-Fi/Bluetooth and external antenna use.</li><li><strong>External antenna:</strong> a more flexible RF setup through u.FL for environments where a PCB antenna may be insufficient.</li><li><strong>Sensor layer:</strong> reading, filtering and pre-processing analog/digital data before transmission.</li></ul>`],
          ["Learning goal",`<p>To better understand the boundary between hardware and software and see how power, signal, protocol and data-processing decisions affect one another in a networked device.</p>`]
        ]}
    },
    "kelimelik.html":{
      tr:{category:"Web / Oyun",title:"Kelimelik",intro:"Türkçe bir kelime tahmin oyunu yapmak istediğim için geliştirdiğim web projesi. Günlük ve klasik modları, ipucu, istatistik ve mobil uyumlu arayüzü var.",status:"Yayında",role:"Geliştirici",year:"2026",
        sections:[
          ["Neler var?",`<ul><li>Günlük 5 harfli bulmaca ve 4/5/6 harfli klasik modlar.</li><li>Oyun başına kontrollü ipucu sistemi.</li><li>İstatistik, paylaşım, renk körü modu ve mobil arayüz.</li><li>Tarayıcı tarafında çalışan hafif yapı.</li></ul><div class="visual"><i class="fa-solid fa-keyboard"></i></div>`],
          ["Neden yaptım?",`<p>Bu projeyi özellikle kullanmak istediğim bir kelime oyunu ortaya çıkarmak için yaptım. Teknik olarak ana projelerimden biri saymıyorum ama çalışan bir ürünü baştan sona toparlama, mobil arayüz ve kullanıcı akışı açısından bana iyi bir deneyim oldu.</p>`]
        ]},
      en:{category:"Web / Game",title:"Kelimelik",intro:"A browser-based Turkish word game where players try to discover a hidden word within a limited number of guesses. It includes daily and classic modes, hints, statistics and a mobile-friendly interface.",status:"Live",role:"Developer",year:"2026",
        sections:[
          ["What it includes",`<ul><li>A daily five-letter puzzle and unlimited 4/5/6-letter classic modes.</li><li>A controlled hint system available once per game.</li><li>Statistics, sharing, color-blind mode and mobile UI.</li><li>A lightweight browser-side implementation.</li></ul><div class="visual"><i class="fa-solid fa-keyboard"></i></div>`],
          ["How I position this project",`<p>Kelimelik is a side project I built to turn a product idea into a working web experience quickly. It is not one of the two technical projects highlighted on the homepage, but it remains in the archive for its productization, responsive UI and user-flow work.</p>`]
        ]}
    },
    "mobius-chess.html":{
      tr:{category:"Deneysel Proje",title:"Möbius Şeridi Satranç",intro:"Möbius şeridini satranç tahtasına uygularsak nasıl görünür ve nasıl oynanır diye merak ederek başladığım deneysel proje.",status:"Prototip",role:"Geliştirici",year:"2026",
        sections:[
          ["Fikir",`<p>Temel fikir, satranç tahtasının karşı kenarlarını normal şekilde değil Möbius yüzeyi gibi bağlamak. Burada en çok uğraştıran konu, taş hareketlerini bozmadan oyuncunun tahtada nerede olduğunu anlayabilmesini sağlamak.</p><div class="visual"><i class="fa-solid fa-infinity"></i></div>`],
          ["Odak noktaları",`<ul><li>Möbius yüzeyinin anlaşılabilir görselleştirilmesi.</li><li>Standart satranç hareketlerinin yüzey geçişleriyle eşlenmesi.</li><li>Mobil ve masaüstünde kontrol edilebilir kamera/tahta deneyimi.</li></ul>`]
        ]},
      en:{category:"Experimental Project",title:"Möbius Strip Chess",intro:"An experimental game interface and visualization project that moves the idea of standard chess onto a single-surface Möbius topology.",status:"Prototype",role:"Developer",year:"2026",
        sections:[
          ["Idea",`<p>The project aims to make a chess variant visual and playable where board edges connect through a Möbius surface rather than a conventional plane. The hardest part is keeping piece movement topologically consistent without making players lose their sense of direction.</p><div class="visual"><i class="fa-solid fa-infinity"></i></div>`],
          ["Focus areas",`<ul><li>Making the Möbius surface understandable visually.</li><li>Mapping standard chess movement across surface transitions.</li><li>Keeping camera and board controls usable on both desktop and mobile.</li></ul>`]
        ]}
    },
    "smart-seat.html":{
      tr:{category:"Yapay Zekâ & Görüntü İşleme",title:"Smart-Seat AI",intro:"Kütüphanedeki masaların boş mu, dolu mu yoksa sadece eşya bırakılmış mı olduğunu görüntü işleme ile anlamaya çalıştığımız ekip projesi.",status:"Tamamlandı",role:"AI & Görüntü İşleme",year:"2025",
        sections:[
          ["Problem",`<p>Kütüphanede boş masa bulmak için kat kat dolaşmak gerekiyor. Bir de masada kimse olmadığı halde sadece eşya bırakıldığı için dolu görünen yerler var. Biz de kamera görüntüsünden masanın durumunu otomatik anlamayı denedik.</p><div class="visual"><i class="fa-solid fa-camera"></i></div>`],
          ["Benim rolüm",`<p><strong>Yapay Zekâ ve Görüntü İşleme Geliştiricisi:</strong> YOLOv8 ve OpenCV entegrasyonu, insan/nesne ayrımı ve güven eşiği ayarları üzerinde çalıştım.</p>`],
          ["Teknik taraf",`<p>Görüntü tarafında YOLOv8 ve OpenCV kullandık. Masa durumlarını SQLite üzerinde tuttuk; yönetim arayüzü de C#/.NET ile geliştirildi.</p>`]
        ]},
      en:{category:"AI & Computer Vision",title:"Smart-Seat AI",intro:"A team project aimed at classifying library desks as empty, occupied or reserved by belongings using computer vision.",status:"Completed",role:"AI & Computer Vision",year:"2025",
        sections:[
          ["Problem",`<p>Students waste time walking through floors to find an empty desk, while desks occupied only by belongings reduce usable capacity. The system aims to classify desk status in real time from camera footage.</p><div class="visual"><i class="fa-solid fa-camera"></i></div>`],
          ["My role",`<p><strong>AI & Computer Vision Developer:</strong> I worked on YOLOv8 and OpenCV integration, person/object separation and confidence-threshold tuning.</p>`],
          ["Technical structure",`<p>Image analysis is handled with YOLOv8 and OpenCV, desk-state management with SQLite, and the management interface with C#/.NET.</p>`]
        ]}
    },
    "todo-project.html":{
      tr:{category:"Java / Web",title:"ToDo Java Project",intro:"Nesne Yönelimli Programlama dersi için ekipçe geliştirdiğimiz Java projesi. Görev, not ve sohbet özelliklerini tek uygulamada topladık.",status:"Tamamlandı",role:"Ekip Üyesi",year:"2024",
        sections:[
          ["Temel özellikler",`<ul><li>Kayıt, giriş ve profil yönetimi.</li><li>Görev ve not oluşturma/düzenleme/silme.</li><li>Bireysel ve grup sohbetleri.</li><li>Spring Security, BCrypt, form doğrulama ve temel XSS/CSRF korumaları.</li></ul><div class="visual"><i class="fa-solid fa-list-check"></i></div>`],
          ["Proje hakkında",`<p>Bu, üniversitedeki daha erken dönem projelerimden biri. Ekip çalışması, Java/Spring Boot ve temel web güvenliği tarafında ilk ciddi denemelerimizden olduğu için arşivde tutuyorum.</p>`]
        ]},
      en:{category:"Java / Web",title:"ToDo Java Project",intro:"A Java and Spring Boot class project combining task, note and chat features in a single web application.",status:"Completed",role:"Team Member",year:"2024",
        sections:[
          ["Core features",`<ul><li>Registration, login and profile management.</li><li>Create, edit and delete tasks and notes.</li><li>Individual and group chat.</li><li>Spring Security, BCrypt, form validation and basic XSS/CSRF protections.</li></ul><div class="visual"><i class="fa-solid fa-list-check"></i></div>`],
          ["Context",`<p>An early team project developed for an Object-Oriented Programming course. I keep it in the portfolio to show part of my earlier learning process.</p>`]
        ]}
    }
  };

  let currentLang=localStorage.getItem("projectLang")||localStorage.getItem("lang")||"tr";
  const langBtn=document.getElementById("projectLangToggle");

  function setButtonLabel(a,label){
    if(!a) return;
    const icon=a.querySelector("i");
    a.childNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)n.remove()});
    let span=a.querySelector("[data-btn-label]");
    if(!span){span=document.createElement("span");span.dataset.btnLabel="";a.insertBefore(span,icon||null)}
    span.textContent=label;
  }

  function applyLang(lang){
    currentLang=lang;
    localStorage.setItem("projectLang",lang);
    document.documentElement.lang=lang;
    if(langBtn) langBtn.textContent=lang==="tr"?"TR":"EN";

    const common=COMMON[lang];
    document.querySelectorAll("[data-pi18n]").forEach(el=>{
      const k=el.dataset.pi18n;
      const page=PAGES[PAGE]?.[lang];
      const val=(page&&page[k]!==undefined)?page[k]:common[k];
      if(val!==undefined) el.textContent=val;
    });

    document.querySelectorAll("[data-btn-i18n]").forEach(a=>{
      setButtonLabel(a,common[a.dataset.btnI18n]);
    });
    document.querySelectorAll("[data-pi18n-link]").forEach(a=>{
      const k=a.dataset.pi18nLink;
      const icon=a.querySelector("i");
      a.childNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)n.remove()});
      let span=a.querySelector("[data-link-label]");
      if(!span){span=document.createElement("span");span.dataset.linkLabel="";a.insertBefore(span,icon||null)}
      span.textContent=common[k];
    });

    const pdata=PAGES[PAGE]?.[lang];
    if(pdata){
      document.title=pdata.title+" — Bilgehan Akbaş";
      document.querySelectorAll("[data-section-index]").forEach(panel=>{
        const idx=Number(panel.dataset.sectionIndex);
        const sec=pdata.sections[idx];
        if(!sec) return;
        const h=panel.querySelector("h2");
        if(h) h.textContent=sec[0];
        // preserve h2, replace remaining panel content
        [...panel.children].forEach(ch=>{if(ch!==h)ch.remove()});
        const holder=document.createElement("div");
        holder.innerHTML=sec[1];
        [...holder.childNodes].forEach(n=>panel.appendChild(n));
      });
    }
  }

  langBtn?.addEventListener("click",()=>applyLang(currentLang==="tr"?"en":"tr"));

  const saved=localStorage.getItem("theme");
  if(saved==="dark"||(!saved&&matchMedia("(prefers-color-scheme: dark)").matches)){
    document.body.classList.add("dark");
  }
  const btn=document.getElementById("themeToggle");
  function syncTheme(){
    if(!btn) return;
    btn.innerHTML=document.body.classList.contains("dark")?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
  }
  syncTheme();
  btn?.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");
    syncTheme();
  });

  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

  document.querySelectorAll(".buttons .btn,.side-link,.back,.icon-btn,.archive-actions .btn").forEach(el=>{
    el.addEventListener("pointerdown",()=>el.classList.add("pressed"));
    ["pointerup","pointercancel","pointerleave"].forEach(ev=>el.addEventListener(ev,()=>el.classList.remove("pressed")));
  });

  applyLang(currentLang);
})();
