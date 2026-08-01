---
title: "Laravel Multi-Tenant SaaS Mimarisi: Ne Zaman Doğru Seçim?"
description: "Laravel multi-tenant SaaS mimarisi ne zaman gereklidir, ne zaman erken optimizasyon olur? İzolasyon modelleri ve karar kriterleriyle rehber."
date: 2026-08-01T12:00:00+03:00
language: tr
category: "Laravel & SaaS"
readingTime: "10 dk okuma"
keywords:
  - "laravel multi-tenant saas mimarisi"
  - "laravel çok kiracılı mimari"
  - "tenant izolasyonu laravel"
  - "saas mimarisi ne zaman gerekli"
draft: false
faq:
  - q: "Multi-tenant mimari her SaaS projesi için gerekli midir?"
    a: "Hayır. Küçük ölçekli veya doğrulama aşamasındaki bir SaaS MVP'de basit bir tenant_id ile ayrım genelde yeterlidir. Daha ileri multi-tenant mimari, ölçek, regülasyon veya kurumsal müşteri talebi gibi somut bir ihtiyaç ortaya çıktığında anlamlı hale gelir."
  - q: "Laravel'de multi-tenancy nasıl uygulanır?"
    a: "En basit yöntem, tabloya tenant_id sütunu ekleyip Eloquent global scope ile sorguları filtrelemektir. Daha güçlü izolasyon gerektiğinde stancl/tenancy gibi paketler şema veya veritabanı bazlı ayrım sağlar."
  - q: "Paylaşılan veritabanı mı, ayrı veritabanı mı daha güvenlidir?"
    a: "Ayrı veritabanı daha güçlü izolasyon sunar ancak operasyonel karmaşıklığı ve maliyeti artırır. Bu nedenle gerçek bir izolasyon gereksinimi varsa tercih edilmelidir."
  - q: "Multi-tenant mimariye ne zaman geçiş yapmalıyım?"
    a: "Kurumsal müşteriler fiziksel veri izolasyonu talep ettiğinde, düzenlemeler ek güvence gerektirdiğinde veya tek veritabanı performans sınırına yaklaştığında geçiş değerlendirilmelidir."
  - q: "sryya.dev SaaS projelerinde mimariyi nasıl belirliyor?"
    a: "sryya.dev mimariyi projenin gerçek ölçek ve regülasyon ihtiyacına göre belirler; erken karmaşıklık yerine büyüme sinyalleri netleştikçe kademeli bir geçiş planı kurar."
---

Bir SaaS kurucusu genelde teknik planlamanın en başında şu soruyu sorar: “Multi-tenant mimari kurmalı mıyım?” Bu soru haklı bir endişeden doğar, ama çoğu zaman MVP aşamasında gereğinden erken sorulur. **Laravel multi-tenant SaaS mimarisi**, gerçek bir ihtiyaç ortaya çıktığında güçlü bir çözümdür; ancak henüz doğrulanmamış bir ürüne baştan bu karmaşıklığı eklemek, geliştirme hızını gereksiz yere yavaşlatır.

## Multi-Tenant Mimari Nedir, Her SaaS'a Gerekli mi?

Multi-tenancy (çok kiracılı mimari), tek bir uygulama örneğinin birden fazla müşteriye (tenant) hizmet vermesini, her tenant'ın verisini diğerlerinden izole ederek yapmasını ifade eder. Bir diyetisyen randevu platformunda her klinik kendi danışan listesini görür; bir e-ticaret altyapısında her mağaza kendi siparişlerini görür — ama hepsi aynı kod tabanı üzerinde çalışır.

Bu tanım kulağa her SaaS'ın ihtiyacı gibi gelse de, pratikte durum daha nüanslıdır. Küçük ölçekli bir MVP'de, kullanıcıları basitçe bir `tenant_id` veya `team_id` sütunuyla ayırmak çoğu zaman yeterlidir. “Multi-tenant mimari” terimi genelde daha ileri düzey izolasyon (ayrı şema veya ayrı veritabanı) için kullanılır ve bu seviye her projede gerekli değildir.

## Üç İzolasyon Modeli

Laravel tabanlı bir SaaS'ta tenant izolasyonu üç ana modelden birine göre kurulur:

1. **Paylaşılan tablo, tenant_id sütunu:** Tüm tenant'lar aynı tabloları ve aynı veritabanını paylaşır; her satır bir `tenant_id` ile işaretlenir. Uygulama katmanında her sorgu bu sütuna göre filtrelenir.
2. **Paylaşılan veritabanı, ayrı şema:** Her tenant, aynı veritabanı sunucusu içinde kendi şemasına sahip olur. Bu model özellikle PostgreSQL'de yaygındır. Tablolar fiziksel olarak ayrılır ama altyapı tek sunucuda kalır.
3. **Ayrı veritabanı:** Her tenant tamamen kendi veritabanı örneğine sahip olur. Bu, en güçlü izolasyonu sağlar ama en yüksek operasyonel yükü de beraberinde getirir.

Bu üç model arasındaki fark, güvenlik ile karmaşıklık arasındaki dengeye dayanır. Paylaşılan tablo modeli hızlı geliştirme ve düşük maliyet sunar, ancak izolasyonu uygulama koduna bırakır: bir sorguda `tenant_id` filtresi unutulursa veri sızıntısı riski doğar. Ayrı veritabanı modeli bu riski veritabanı seviyesinde azaltır, fakat her tenant için ayrı migration, yedekleme ve izleme süreci gerektirir.

Bir Laravel multi-tenant SaaS mimarisi kurarken bu modelleri projenin yaşam evresine göre değerlendirmek gerekir. MVP aşamasındaki bir ürün için paylaşılan tablo modeli genelde en az sürtünmeyi yaratır: yeni tenant eklemek bir kayıt oluşturmak kadar basittir, migration'lar tek veritabanı üzerinde yürütülür ve ekip tek şema üzerinde çalışır. Ürün büyüdükçe izolasyon gereksinimleri netleşirse sistemi şema veya veritabanı bazlı modele taşıyacak sağlam bir temel bırakmak, geçişi daha az riskli hale getirir.

## Laravel'de Multi-Tenancy Nasıl Uygulanır?

Paylaşılan tablo modelinde en yaygın yaklaşım, Eloquent'in **global scope** özelliğini kullanmaktır. Bir model için tanımlanan global scope, o modele yapılan her sorguya otomatik olarak `tenant_id` filtresi ekler; geliştiricinin her sorguda bunu elle yazmasına gerek kalmaz. Bu yaklaşım kod tekrarını azaltırken izolasyon kuralının unutulma riskini de düşürür.

Daha güçlü izolasyon gerektiğinde Laravel ekosisteminde `stancl/tenancy` gibi paketler devreye girer. Bu paketler tenant bazlı veritabanı veya şema yönetimini, migration otomasyonunu ve tenant bağlamının uygulama genelinde tutarlı şekilde taşınmasını hazır olarak sunar. Sıfırdan izolasyon katmanı yazmak yerine olgun bir paket kullanmak, geliştirme süresini ve hata riskini azaltabilir.

Hangi yöntemin seçileceği projenin ihtiyacına bağlıdır: basit bir SaaS MVP için global scope ve `tenant_id` genellikle yeterlidir; kurumsal düzeyde izolasyon garantisi gereken projelerdeyse hazır bir multi-tenancy çözümünü erken planlamak, ileride yapılacak zorlu bir geçişi önleyebilir.

## Ne Zaman Gerçekten Multi-Tenant Mimariye Geçmelisiniz?

Aşağıdaki sinyallerden biri veya birkaçı ortaya çıktığında daha güçlü bir izolasyon modeline geçmeyi değerlendirmek gerekir:

- **Kurumsal müşteri talebi:** Büyük bir müşteri, sözleşme şartı olarak verisinin fiziksel olarak ayrı tutulmasını isteyebilir.
- **Regülasyon gereksinimi:** Sağlık verisi gibi özel nitelikli kişisel veri işleyen bir SaaS'ta güvenlik yükümlülükleri daha güçlü izolasyon gerektirebilir.
- **Performans sınırı:** Tenant sayısı ve veri hacmi arttıkça tek veritabanında sorgu performansı belirgin şekilde düşerse şema veya veritabanı bazlı ayrım gündeme gelir.
- **Tenant bazlı özelleştirme:** Her tenant için farklı yedekleme, bakım penceresi veya sürüm yönetimi gerekiyorsa paylaşılan model bu esnekliği zorlaştırır.

Bu sinyaller somut ve ölçülebilir olmalıdır. “İleride büyük müşteriler gelebilir” gibi varsayımsal bir beklenti, mimariyi baştan karmaşıklaştırmak için tek başına yeterli değildir. Birden fazla sinyal aynı anda ve somut biçimde ortaya çıktığında geçiş kararı çok daha net hale gelir.

## Ne Zaman Basit Kalmalısınız?

Erken aşamadaki SaaS projelerinde en büyük risklerden biri, henüz var olmayan bir ölçek sorunu için baştan karmaşık mimari kurmaktır. Ayrı veritabanı modeliyle başlamak; migration'ları senkronize etmeyi, her tenant için bağlantı yönetmeyi ve test sürecini genişletmeyi gerektirir. Bu yük, ürün-pazar uyumunu henüz doğrulamamış bir MVP'de geliştirme hızını doğrudan düşürür.

Paylaşılan tablo modeli doğru uygulandığında — global scope, tutarlı yetkilendirme kontrolleri ve düzenli kod incelemesiyle — birçok MVP için yeterli bir temel sunar. Kritik nokta, tenant çözümleme mantığını baştan sistem genelinde tutarlı kurmaktır. Böylece ileride izolasyon modeli değiştirilse bile uygulamanın geri kalanı büyük ölçüde aynı kalabilir.

## sryya.dev Yaklaşımı: Doğru Zamanda Doğru Mimari

sryya.dev, SaaS projelerinde mimari kararını projenin gerçek ihtiyacına göre şekillendirir. [Bagla.app](/projects/bagla-app/) gibi Laravel ve Filament üzerine kurulu bir SaaS ürününde tenant ayrımı ürünün gerçek büyüklüğüne ve regülasyon gereksinimlerine uygun seviyede tutulur; henüz gerekmeyen karmaşıklık baştan eklenmez.

Bu yaklaşımın temelinde şu prensip yer alır: mimari kararı varsayımsal bir gelecek senaryosuna göre değil, ürünün bugünkü ve yakın gelecekteki somut ihtiyaçlarına göre verilir. Ölçek veya regülasyon sinyalleri netleştiğinde geçiş planı hazırlanır; fakat geçiş gerçek ihtiyaç ortaya çıkmadan yapılmaz.

## Sonuç

Laravel multi-tenant SaaS mimarisi, doğru zamanda kurulduğunda güçlü izolasyon ve ölçeklenebilirlik sağlar. Ancak her SaaS projesinin baştan bu karmaşıklığa ihtiyacı yoktur. Paylaşılan tablo ve global scope ile başlamak çoğu MVP için yeterli bir temel oluşturur; kurumsal müşteri talebi, regülasyon gereksinimi veya somut performans sınırları ortaya çıktığında şema ya da veritabanı bazlı izolasyona geçmek anlamlı hale gelir. Doğru mimari kararı varsayımdan değil, somut ihtiyaçtan doğar.

SaaS projenizin mimarisini doğru zamanlamayla, gerçek ihtiyaca göre kurmak isterseniz [sryya.dev ile projenizi konuşabilirsiniz](https://sryya.dev/#contact).

## Sıkça Sorulan Sorular

### Multi-tenant mimari her SaaS projesi için gerekli midir?

Hayır. Küçük ölçekli veya doğrulama aşamasındaki bir SaaS MVP'de basit bir `tenant_id` ile ayrım genellikle yeterlidir. Daha ileri multi-tenant mimari, ölçek, regülasyon veya kurumsal müşteri talebi gibi somut bir ihtiyaç ortaya çıktığında anlamlı hale gelir.

### Laravel'de multi-tenancy nasıl uygulanır?

En basit yöntem tabloya bir `tenant_id` sütunu ekleyip Eloquent global scope ile sorguları filtrelemektir. Daha güçlü izolasyon gerektiğinde `stancl/tenancy` gibi paketler şema veya veritabanı bazlı ayrım sağlar.

### Paylaşılan veritabanı mı, ayrı veritabanı mı daha güvenlidir?

Ayrı veritabanı, veri sızıntısı riskini veritabanı seviyesinde sınırladığı için daha güçlü izolasyon sunar. Ancak operasyonel karmaşıklığı ve maliyeti artırır; yalnızca gerçek bir izolasyon gereksinimi varsa tercih edilmelidir.

### Multi-tenant mimariye ne zaman geçiş yapmalıyım?

Kurumsal müşteriler fiziksel veri izolasyonu talep ettiğinde, düzenlemeler ek güvence gerektirdiğinde veya tek veritabanı performans sınırına yaklaştığında geçiş değerlendirilmelidir.

### sryya.dev SaaS projelerinde mimariyi nasıl belirliyor?

sryya.dev mimariyi projenin gerçek ölçek ve regülasyon ihtiyacına göre belirler; erken karmaşıklık eklemek yerine büyüme sinyalleri netleştikçe kademeli bir geçiş planı kurar.
