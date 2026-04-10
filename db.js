const config = { 
  locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}` 
};

initSqlJs(config).then(function(SQL){
  const db = new SQL.Database();

  db.run(`CREATE TABLE drugs (id INTEGER PRIMARY KEY, name_en TEXT, name_ar TEXT, category TEXT);`);
  
  const sqlInsert = `INSERT INTO drugs (name_en, name_ar, category) VALUES 
  ('Panadol Advance', 'بنادول أديفانس', 'مسكن ألم'),
  ('Panadol Extra', 'بنادول إكسترا', 'مسكن ألم'),
  ('Adwol', 'أدول', 'مسكن ألم'),
  ('Catafast 50mg', 'كاتافاست 50 مجم', 'مسكن ومضاد للالتهاب'),
  ('Cataflam 50mg', 'كاتافلام 50 مجم', 'مسكن ومضاد للالتهاب'),
  ('Brufen 400mg', 'بروفين 400 مجم', 'مسكن ومضاد للالتهاب'),
  ('Voltaren Emulgel', 'فولتارين إيمولجيل', 'مسكن موضعي'),
  ('Augmentin 1gm', 'أوجمنتين 1 جم', 'مضاد حيوي'),
  ('Curam 1gm', 'كيورام 1 جم', 'مضاد حيوي'),
  ('Zithromax 500mg', 'زيثرومكس 500 مجم', 'مضاد حيوي'),
  ('Flumox 500mg', 'فلوموكس 500 مجم', 'مضاد حيوي'),
  ('Congestal', 'كونجستال', 'برد وإنفلونزا'),
  ('123 Tablets', '123 أقراص', 'برد وإنفلونزا'),
  ('Panadol Cold & Flu', 'بنادول نايت والبرد', 'برد وإنفلونزا'),
  ('Comtrex', 'كومتركس', 'برد وإنفلونزا'),
  ('Antinal', 'أنتينال', 'مطهر معوي'),
  ('Streptoquin', 'ستريبتوكين', 'مطهر معوي'),
  ('Flagyl 500mg', 'فلاجيل 500 مجم', 'مضاد للطفيليات'),
  ('Controloc 40mg', 'كونترولوك 40 مجم', 'حموضة ومعدة'),
  ('Antodine 40mg', 'أنتودين 40 مجم', 'حموضة ومعدة'),
  ('Gaviscon Syrup', 'جافيسكون شراب', 'حموضة وحرقان'),
  ('Maalox Plus', 'مولوكس بلس', 'حموضة'),
  ('Spasmo-Canulase', 'سبازمو كانيولاز', 'تقلصات وانتفاخ'),
  ('Buscopan', 'بوسكوبان', 'تقلصات'),
  ('Visceralgin', 'فيسرالجين', 'تقلصات'),
  ('Motilium', 'موتليوم', 'غثيان'),
  ('Gast-Reg 200mg', 'جاست ريج 200 مجم', 'منظم حركة الأمعاء'),
  ('Ventolin Inhaler', 'فنتولين بخاخ', 'حساسية الصدر'),
  ('Foradil', 'فوراديل', 'موسع شعب هوائية'),
  ('Claritine', 'كلاريتين', 'حساسية'),
  ('Zyrtec', 'زيرتيك', 'حساسية'),
  ('Telfast 180mg', 'تلفاست 180 مجم', 'حساسية'),
  ('Fenistil Gel', 'فينيستيل جيل', 'حساسية جلدية'),
  ('Betaderm Cream', 'بيتاديرم كريم', 'التهابات جلدية'),
  ('Kenacomb Cream', 'كيناكومب كريم', 'مضاد للفطريات والتهاب'),
  ('Daktarin Oral Gel', 'دكتارين جل للفم', 'فطريات الفم'),
  ('Canesten Cream', 'كانستين كريم', 'مضاد للفطريات'),
  ('Bepanthen Ointment', 'بيبانثين مرهم', 'مرطب وملطف'),
  ('Pantogar', 'بانتوجار', 'تساقط الشعر'),
  ('Perfectil', 'بيرفكتيل', 'فيتامينات للشعر'),
  ('Neuroton', 'نيوروتون', 'أعصاب فيتامين ب'),
  ('Vitamin C 1gm', 'فيتامين سي 1 جم', 'مكمل غذائي'),
  ('Centrum', 'سنتروم', 'مالتي فيتامين'),
  ('Feroglobin', 'فيروغلوبين', 'أنيميا وحديد'),
  ('Eltroxin 50mcg', 'إلتروكسين 50 مجم', 'غدة درقية'),
  ('Glucophage 1000mg', 'جلوكوفاج 1000 مجم', 'سكر'),
  ('Amaryl 2mg', 'أماريل 2 مجم', 'سكر'),
  ('Concor 5mg', 'كونكور 5 مجم', 'ضغط وقلب'),
  ('Exforge', 'إكسفورج', 'ضغط'),
  ('Lipitor 20mg', 'ليبيتور 20 مجم', 'كوليسترول'),
  ('Crestor 10mg', 'كريستور 10 مجم', 'كوليسترول'),
  ('Aspirin Protect', 'أسبرين بروتكت', 'سيولة دم'),
  ('Plavix', 'بلافيكس', 'سيولة دم'),
  ('Otrivin Adult', 'أوتريفين للكبار', 'رشح وأنف'),
  ('Iliadin', 'إليادين', 'رشح وأنف'),
  ('Viagra 100mg', 'فياجرا 100 مجم', 'منشط'),
  ('Cialis', 'سياليس', 'منشط'),
  ('Erectalis', 'إريكتاليس', 'منشط'),
  ('Vigorex', 'فيغوركس', 'منشط'),
  ('Durex Play', 'ديوركس بلاي', 'مزلق'),
  ('Baby Drink', 'بيبي درينك', 'أعشاب أطفال'),
  ('Dentinox Drop', 'دنتينوكس نقاط', 'مغص أطفال'),
  ('Bonnisan Syrup', 'بونيسان شراب', 'فاتح شهية أطفال'),
  ('Sansovit', 'سانسوفيت', 'فيتامينات أطفال'),
  ('Osteocare', 'أوستيوكير', 'كالسيوم'),
  ('Calcitone', 'كالسيتون', 'كالسيوم'),
  ('Royal Vit G', 'رويال فيت جي', 'نشاط وطاقة'),
  ('Kerovit', 'كيروفيت', 'نشاط وطاقة'),
  ('Arcalion Forte', 'أركاليون فورت', 'تركيز وذاكرة'),
  ('Limitless Woman', 'ليمتليس للسيدات', 'مكمل غذائي'),
  ('Limitless Man', 'ليمتليس للرجال', 'مكمل غذائي'),
  ('Mega-Diet', 'ميجا دايت', 'تخسيس'),
  ('Chitocal', 'شيتوكال', 'تخسيس'),
  ('Orly', 'أورلي', 'تخسيس'),
  ('L-Carnitine', 'إل كارنيتين', 'حرق دهون'),
  ('Ginseng', 'جنسنج', 'طاقة'),
  ('Omega 3 Plus', 'أوميجا 3 بلس', 'مكمل غذائي'),
  ('Fawar Fruit', 'فوار فروت', 'عسر هضم'),
  ('Rennie', 'ريني', 'حموضة'),
  ('Solpadeine', 'سولبادين', 'مسكن قوي'),
  ('Dolphin 25mg', 'دولفين 25 لبوس', 'خافض حرارة أطفال'),
  ('Paramol Tablets', 'بارامول أقراص', 'خافض حرارة'),
  ('Alphintern', 'ألفينترن', 'مضاد للتورم'),
  ('Ambezim', 'أمبيزيم', 'مضاد للتورم والتهاب'),
  ('Hemoclar', 'هيموكلار', 'كدمات'),
  ('Reparil Gel', 'ريباريل جيل', 'كدمات وتورم'),
  ('Fucidin Cream', 'فوسيدين كريم', 'مضاد حيوي جلدي'),
  ('Fucicort Cream', 'فوسيكورت كريم', 'التهابات جلدية'),
  ('Mebo Ointment', 'ميبو مرهم', 'حروق'),
  ('Betadine Antiseptic', 'بيتادين مطهر', 'جروح'),
  ('Garamycin Drops', 'جارامايسين نقاط', 'عين وأذن'),
  ('Prisoline Drops', 'بريسولين نقاط', 'حساسية العين'),
  ('Tobrex Drops', 'توبريكس نقاط', 'مضاد حيوي عين'),
  ('Hyfresh Drops', 'هاي فريش نقاط', 'جفاف العين'),
  ('Nizoral Shampoo', 'نيزورال شامبو', 'قشرة'),
  ('Vichy Dercos', 'فيشي ديركوس', 'تساقط شعر وقشرة'),
  ('Listerine Mouthwash', 'ليسترين مضمضة', 'العناية بالفم'),
  ('Sensodyne Multi Action', 'سنسوداين', 'أسنان حساسة'),
  ('Elica Cream', 'إليكا كريم', 'حساسية واكزيما'),
  ('Panderm Cream', 'باندرم كريم', 'التهابات جلدية'),
  ('Dermovate Cream', 'ديرموفيت كريم', 'صدفية والتهابات');`;
  
  db.run(sqlInsert);

  const allCards = document.querySelectorAll('.card'); 

  allCards.forEach(card => {
    card.onclick = () => {
      const searchContainer = document.createElement('div');
      searchContainer.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #0f172a; z-index: 1000; padding: 20px; box-sizing: border-box;
      `;

      searchContainer.innerHTML = `
        <button id="close-search" style="background:#ef4444; color:white; border:none; padding:8px 15px; border-radius:8px; margin-bottom:15px; cursor:pointer; font-weight:bold;">إغلاق ×</button>
        <input type="text" id="db-search" placeholder="ابحث عن اسم الدواء هنا..." 
               style="width: 100%; padding: 15px; border-radius: 12px; border: 2px solid #10b981; background: #1e293b; color: white; font-size: 16px; outline:none;">
        <div id="results-list" style="margin-top: 20px; color: white; overflow-y: auto; max-height: 80vh;"></div>
      `;

      document.body.appendChild(searchContainer);

      const inp = document.getElementById('db-search');
      const resList = document.getElementById('results-list');
      const closeBtn = document.getElementById('close-search');

      closeBtn.onclick = () => searchContainer.remove();

      inp.oninput = () => {
        resList.innerHTML = ''; 
        if (inp.value.length > 0) {
          const query = `SELECT * FROM drugs WHERE name_en LIKE '%${inp.value}%' OR name_ar LIKE '%${inp.value}%'`;
          const result = db.exec(query);

          if (result.length > 0) {
            result[0].values.forEach(row => {
              const item = document.createElement('div');
              item.style = "padding: 15px; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; background: #1e293b; margin-bottom: 5px; border-radius: 8px;";
item.innerHTML = `
    <div style="display:flex; flex-direction:column;" class='div'>
        <span style="font-weight:bold; color:#f1f5f9;">${row[1]}</span>
        <button onclick="window.sendOrder(event, '${row[2]}')" class='btn-order' style="margin-top:5px;">Order Now</button>
        <span style="color: #10b981; font-size: 14px;">${row[2]}</span>
    </div>
    <span style="font-size:12px; color:#94a3b8; background:#0f172a; padding:4px 8px; border-radius:5px;">${row[3]}</span>
`;

              resList.appendChild(item);
            });
          }
        }
      };
      
      inp.focus(); 
    };
  });

}).catch(err => console.error(err));
