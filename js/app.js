let allBreeds = [];

const DOG_BREEDS = [
      {
        id: 'dog_golden',
        petType: 'dog',
        name: 'Golden Retriever',
        origin: 'Birleşik Krallık',
        temperament: 'Zeki, Dost Canlısı, Güvenilir, Sadık, Oyuncu',
        description: 'Nazik doğası ve aileye düşkünlüğü ile bilinen dünyanın en popüler ve eğitilebilir aile köpeklerinden biridir.',
        lifeSpan: '10 - 12 yıl',
        childFriendly: 5,
        energyLevel: 4,
        intelligence: 5,
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'dog_kangal',
        petType: 'dog',
        name: 'Kangal Çoban Köpeği',
        origin: 'Türkiye (Sivas)',
        temperament: 'Cesur, Koruyucu, Sakin, Sadık, Güçlü',
        description: 'Anadolu’nun asil çoban köpeğidir. Sürüleri ve ailesini korumadaki olağanüstü cesareti ve dengeli mizacıyla dünya çapında tanınır.',
        lifeSpan: '12 - 15 yıl',
        childFriendly: 4,
        energyLevel: 4,
        intelligence: 5,
        image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'dog_germanshepherd',
        petType: 'dog',
        name: 'Alman Çoban Köpeği (German Shepherd)',
        origin: 'Almanya',
        temperament: 'Son Derece Zeki, İtaatkar, Koruyucu, Çalışkan',
        description: 'Arama-kurtarma, polis ve koruma görevlerinde dünya lideri olan üstün zekalı ve kararlı bir ırktır.',
        lifeSpan: '9 - 13 yıl',
        childFriendly: 4,
        energyLevel: 5,
        intelligence: 5,
        image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'dog_husky',
        petType: 'dog',
        name: 'Sibirya Kurdu (Siberian Husky)',
        origin: 'Rusya (Sibirya)',
        temperament: 'Enerjik, Oyuncu, Bağımsız, Sosyal, Konuşkan',
        description: 'Buz mavisi gözleri ve kızak çekme dayanıklılığı ile bilinen, yüksek enerjili ve dost canlısı bir kuzey köpeğidir.',
        lifeSpan: '12 - 14 yıl',
        childFriendly: 5,
        energyLevel: 5,
        intelligence: 4,
        image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'dog_poodle',
        petType: 'dog',
        name: 'Kaniş (Poodle)',
        origin: 'Fransa / Almanya',
        temperament: 'Dahi Seviyesinde Zeki, Aktif, Eğitilebilir, Hipoalerjenik',
        description: 'Tüy dökmeyen kıvırcık kürkü ve dünyanın en zeki ikinci köpek ırkı olmasıyla apartman ve aile yaşamına son derece uygundur.',
        lifeSpan: '12 - 15 yıl',
        childFriendly: 5,
        energyLevel: 4,
        intelligence: 5,
        image: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'dog_corgi',
        petType: 'dog',
        name: 'Pembroke Welsh Corgi',
        origin: 'Birleşik Krallık (Galler)',
        temperament: 'Neşeli, Zeki, Uyanık, Oyuncu, Sevecen',
        description: 'Kısa bacakları, tilki benzeri yüzü ve İngiliz Kraliyet ailesinin gözdesi olmasıyla ünlü neşeli bir çoban köpeğidir.',
        lifeSpan: '12 - 15 yıl',
        childFriendly: 5,
        energyLevel: 4,
        intelligence: 4,
        image: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=400&auto=format&fit=crop&q=80'
      }
    ];

const CAT_BREEDS_FALLBACK = [
  { id: 'cat_van', petType: 'cat', name: 'Van Kedisi', origin: 'Türkiye (Van)', temperament: 'Zeki, Enerjik, Su Sever, Bağımsız, Sadık', description: 'İki farklı renkli gözleri ve yüzme sevgisiyle ünlü, Van Gölü yöresine özgü asil ve atletik bir kedi ırkıdır.', lifeSpan: '12 - 17 yıl', childFriendly: 4, energyLevel: 5, intelligence: 5, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80', wikiUrl: 'https://tr.wikipedia.org/wiki/Van_kedisi' },
  { id: 'cat_angora', petType: 'cat', name: 'Ankara Kedisi (Turkish Angora)', origin: 'Türkiye (Ankara)', temperament: 'Zarif, Oyuncu, Sosyal, Zeki', description: 'İpek gibi tüyü ve zekasıyla bilinen, kökeni Ankara\'ya uzanan asil ve zarif bir kedi ırkıdır.', lifeSpan: '12 - 18 yıl', childFriendly: 4, energyLevel: 4, intelligence: 5, image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&auto=format&fit=crop&q=80', wikiUrl: 'https://tr.wikipedia.org/wiki/Ankara_kedisi' },
  { id: 'cat_bsh', petType: 'cat', name: 'British Shorthair', origin: 'Birleşik Krallık', temperament: 'Sakin, Bağımsız, Sevecen, Uysal', description: 'Yuvarlak yüzü, yoğun tüyü ve sakin mizacıyla apartman yaşamına son derece uygun popüler bir ırktır.', lifeSpan: '12 - 17 yıl', childFriendly: 5, energyLevel: 2, intelligence: 4, image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_maine', petType: 'cat', name: 'Maine Coon', origin: 'ABD (Maine)', temperament: 'Nazik Dev, Sosyal, Zeki, Oyuncu', description: 'En büyük ev kedisi ırklarından biri; köpek gibi sadakati ve koca kalbiyle "nazik dev" olarak anılır.', lifeSpan: '10 - 15 yıl', childFriendly: 5, energyLevel: 3, intelligence: 5, image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_persian', petType: 'cat', name: 'Pers (Persian)', origin: 'İran', temperament: 'Sakin, Zarif, Kucağa Düşkün', description: 'Uzun ipeksi tüyü, yassı yüzü ve sessiz asaletiyle dünya üzerindeki en bilinen klasik kedi ırkıdır.', lifeSpan: '12 - 17 yıl', childFriendly: 4, energyLevel: 2, intelligence: 3, image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_ragdoll', petType: 'cat', name: 'Ragdoll', origin: 'ABD (Kaliforniya)', temperament: 'Sakin, Sevecen, Kucağa Düşkün', description: 'Kucağa alınınca adeta bez bebek gibi gevşediği için bu adı alan, çok sakin ve bağlı bir ırktır.', lifeSpan: '12 - 17 yıl', childFriendly: 5, energyLevel: 2, intelligence: 4, image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_scottish', petType: 'cat', name: 'Scottish Fold', origin: 'İskoçya', temperament: 'Sakin, Uysal, Sevecen, Meraklı', description: 'Öne kıvrılan minik kulakları ve baykuş görünümüyle ünlü, sessiz ve çok tatlı mizaçlı bir ırktır.', lifeSpan: '11 - 15 yıl', childFriendly: 5, energyLevel: 3, intelligence: 4, image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_siamese', petType: 'cat', name: 'Siyam (Siamese)', origin: 'Tayland', temperament: 'Konuşkan, Sosyal, Zeki, Bağlı', description: 'Mavi gözleri, koyu maske deseni ve insanla sürekli "konuşan" sesli karakteriyle tanınan eski bir saray ırkıdır.', lifeSpan: '12 - 20 yıl', childFriendly: 4, energyLevel: 4, intelligence: 5, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_bengal', petType: 'cat', name: 'Bengal', origin: 'ABD', temperament: 'Enerjik, Atletik, Meraklı, Cesur', description: 'Vahşi leopard deseni ve aşırı atletizmiyle dikkat çeken, suyla oynamayı seven aktif bir melez ırktır.', lifeSpan: '12 - 16 yıl', childFriendly: 4, energyLevel: 5, intelligence: 5, image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_sphynx', petType: 'cat', name: 'Sphynx', origin: 'Kanada', temperament: 'Sevecen, Enerjik, Sosyal, Şakacı', description: 'Tüysüz görünümü ve köpek gibi sosyal karakteriyle bilinen, sıcaklik seven eğlenceli bir ırktır.', lifeSpan: '9 - 15 yıl', childFriendly: 5, energyLevel: 4, intelligence: 5, image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_norwegian', petType: 'cat', name: 'Norveç Orman Kedisi', origin: 'Norveç', temperament: 'Nazik, Bağımsız, Atletik, Sabırlı', description: 'İskandinav ormanlarından gelen, kalın su itici kürklü, iri yapılı ve doğal bir tırmanıcı olan ırktır.', lifeSpan: '12 - 16 yıl', childFriendly: 5, energyLevel: 3, intelligence: 5, image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&auto=format&fit=crop&q=80', wikiUrl: null },
  { id: 'cat_abyssinian', petType: 'cat', name: 'Habeş (Abyssinian)', origin: 'Etiyopya / Güneydoğu Asya', temperament: 'Aktif, Meraklı, Zeki, Oyuncu', description: 'Tarçın tonlu tüyü ve kadife görünümüyle bilinen, insanı takip eden son derece aktif bir ırktır.', lifeSpan: '12 - 15 yıl', childFriendly: 4, energyLevel: 5, intelligence: 5, image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&auto=format&fit=crop&q=80', wikiUrl: null }
];

        // Standalone: TheCatAPI dene (anahtarsiz calisirsa canli veri), basarisizsa gomulu arsiv
        async function fetchBreedsRemote() {
          let cats = [];
          try {
            const catRes = await fetch('https://api.thecatapi.com/v1/breeds', { signal: AbortSignal.timeout(6000) });
            if (catRes.ok) {
              const catData = await catRes.json();
              if (Array.isArray(catData) && catData.length > 0) {
                cats = catData.map(c => ({
                  id: 'cat_' + c.id,
                  petType: 'cat',
                  name: c.name,
                  origin: c.origin || 'Bilinmiyor',
                  temperament: c.temperament || 'Uysal, sakin',
                  description: c.description || '',
                  lifeSpan: c.life_span ? c.life_span + ' yıl' : '12-15 yıl',
                  childFriendly: c.child_friendly || 3,
                  energyLevel: c.energy_level || 3,
                  intelligence: c.intelligence || 4,
                  image: (c.image && c.image.url) || 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80',
                  wikiUrl: c.wikipedia_url || null
                }));
              }
            }
          } catch(e) {}
          if (cats.length === 0) cats = CAT_BREEDS_FALLBACK;

          const allBreeds = [...cats, ...DOG_BREEDS];
          return { success: true, count: allBreeds.length, breeds: allBreeds };
        }


        async function loadBreeds() {
          try {
            const data = await fetchBreedsRemote();
            if (!data.success) throw new Error(data.error);

            allBreeds = data.breeds || [];
            document.getElementById('pets-loading').classList.add('hidden');
            document.getElementById('pets-grid').classList.remove('hidden');

            filterBreeds();
          } catch(err) {
            document.getElementById('pets-loading').innerHTML = '<span class="text-rose-500 font-medium text-sm">Irklar yüklenemedi: ' + err.message + '</span>';
          }
        }

        function filterBreeds() {
          const q = (document.getElementById('pet-search').value || '').trim().toLowerCase();
          const type = document.getElementById('pet-type-select').value;

          const list = allBreeds.filter(b => {
            const matchType = type === 'all' || b.petType === type;
            const matchQ = !q || b.name.toLowerCase().includes(q) || (b.temperament || '').toLowerCase().includes(q) || (b.origin || '').toLowerCase().includes(q);
            return matchType && matchQ;
          });

          document.getElementById('pet-count-badge').innerText = list.length;
          renderGrid(list);
        }

        function setTemperamentFilter(t) {
          document.getElementById('pet-search').value = t;
          filterBreeds();
        }

        function renderGrid(list) {
          const grid = document.getElementById('pets-grid');
          if (list.length === 0) {
            grid.innerHTML = '<div class="col-span-full py-12 text-center text-mistral-stone font-medium text-sm">Kriterlere uygun evcil dost bulunamadı.</div>';
            return;
          }

          grid.innerHTML = list.map(b => `
            <div onclick="openPetModal('${b.id}')" class="rounded-xl bg-white border border-mistral-hairline hover:border-mistral-orange/40 hover:shadow-md transition duration-200 overflow-hidden flex flex-col justify-between group cursor-pointer">
              <div>
                <div class="relative overflow-hidden aspect-video bg-mistral-cream">
                  <img src="${b.image}" alt="${b.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 backdrop-blur text-mistral-ink border border-mistral-hairline shadow-2xs">
                    ${b.petType === 'cat' ? '🐱 Kedi' : '🐶 Köpek'}
                  </span>
                </div>
                <div class="p-4">
                  <h3 class="text-base font-bold font-editorial text-mistral-ink group-hover:text-mistral-orange transition truncate mb-0.5">
                    ${b.name}
                  </h3>
                  <span class="text-[11px] text-mistral-stone block mb-2">📍 ${b.origin}</span>
                  <p class="text-xs text-mistral-slate line-clamp-2 leading-relaxed">
                    ${b.temperament || b.description || 'Sevimli ve dost canlısı.'}
                  </p>
                </div>
              </div>

              <div class="p-4 pt-0">
                <div class="pt-2 border-t border-mistral-hairline flex items-center justify-between text-[11px] font-semibold text-mistral-orange">
                  <span>Detayları İncele &rarr;</span>
                  <span class="text-mistral-stone font-normal text-[10px]">⏳ ${b.lifeSpan}</span>
                </div>
              </div>
            </div>
          `).join('');
        }

        function openPetModal(id) {
          const b = allBreeds.find(x => x.id === id);
          if (!b) return;

          const mImg = document.getElementById('m-pet-img');
          mImg.onerror = function() { this.src = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80'; };
          mImg.src = b.image;
          document.getElementById('m-pet-type').innerText = b.petType === 'cat' ? '🐱 KEDİ IRKI' : '🐶 KÖPEK IRKI';
          document.getElementById('m-pet-origin').innerText = '📍 ' + b.origin;
          document.getElementById('m-pet-name').innerText = b.name;
          document.getElementById('m-pet-desc').innerText = b.description || b.temperament || 'Özel ırk açıklaması bulunmuyor.';
          document.getElementById('m-pet-life').innerText = b.lifeSpan;
          document.getElementById('m-pet-friendly').innerText = `⭐ ${b.childFriendly}/5`;
          document.getElementById('m-pet-energy').innerText = `⚡ ${b.energyLevel}/5`;

          const tBox = document.getElementById('m-pet-temperament');
          const tags = (b.temperament || '').split(',').map(x => x.trim()).filter(Boolean);
          tBox.innerHTML = tags.map(t => `
            <span class="px-2 py-0.5 rounded-full bg-mistral-cream border border-mistral-beige-deep text-mistral-ink font-medium">${t}</span>
          `).join('');

          document.getElementById('pet-modal').classList.remove('hidden');
        }

        function closePetModal() {
          document.getElementById('pet-modal').classList.add('hidden');
        }

        document.addEventListener('DOMContentLoaded', loadBreeds);
