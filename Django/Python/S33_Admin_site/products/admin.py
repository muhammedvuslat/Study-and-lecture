from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin): #! Product model ile ilgili costumize yapacaksak classa onun ismini veririz ve admin.ModelAdmin'i çağırırız
    
    list_display = ("name", "create_date", "is_in_stock", "update_date") #! Product modelinin hangi fieldslarının(sütun olarak) görüneceğini bildirdiğimz alan !!list_display değişkeni kullanıldığında models.py daki def __str__ metodunu sadece admin panelde olmak üzerine ezecektir.!!
    list_editable = ("is_in_stock",) #! Bu değişken, admin panelinde veritabanı modellerinin listelenmesi sırasında listeleme sayfasındaki alanların düzenlenmesini sağlar.Bu değişken ile, kullanıcının her satır için ayrı ayrı açmasına gerek kalmadan, direk olarak düzenleme yapması sağlanabilir, ek olarak fields ın edit edilebilmesi için displayde ekli yani görüntülenebiliyor olması gerekli   ("name" bu alan da kullanmak için default olarak gelen detay linkini "name" üzerinden alıp başka bir fieds a bildirmemiz gerekli)
    # list_display_links = ("create_date", ) #! Bu değişken, admin panelinde veritabanı modellerinin listelenmesi sırasında hangi alanların "detaylı görünüm" sayfasına yönlendireceğini belirler
    list_filter = ("is_in_stock", "create_date") #! Bu değişken, admin panelinde veritabanı modellerinin listeleme sayfasında filtreleme yapmasını sağlar (sağ tarafta filtreleme alanını gçrebilirsiniz)
    ordering = ("name",) #! Default olarak hangi fields ile sıralanacağını belirler
    search_fields = ("name",) #! Bu değişken, admin panelinde veritabanı modellerinin arama yapmasını sağlar. Örneğin, search_fields = ('name', 'description') gibi bir tanımda, name ve description alanlarına göre arama yapılabilir. Bu arama alanı admin panelinin üst tarafında görünür ve kullanıcılar belirli bir kaydın name ve description alanlarına göre arayabilir. Bu değişken birden fazla alan için kullanılabilir.
    prepopulated_fields = {'slug' : ('name',)}#! Bu değişken, admin panelinde veritabanı modelleri için formların otomatik olarak doldurulmasını sağlar. Örneğin, prepopulated_fields = {'slug': ('name',)} gibi bir tanımda, name alanının değerini kullanarak otomatik olarak slug alanını doldurur(url sonuna eklenir). Bu özellik genellikle SEO amaçlı kullanılır ve kullanıcının manuel olarak girmesi gereken alanların otomatik olarak doldurulmasını sağlar.!(Otomatik model oluşturmalarında yani toplu data girişlerinde değil sadece admin panelde ekleme yapıldığında gerçekleşir)!
    list_per_page = 25 #! pagination ayarlamsı yapılabilinir
    date_hierarchy = "update_date" #! üst alanda tarih sıralamsı gerçekleştirecek
    # fields = (('name', 'slug'), 'description', "is_in_stock") #!her bir ürün detayına girildiğinde karşımıza çıkan ekran için görünümünü ayarlamamızı sağlayacaktır fieldset kullandığımız zaman bunu kullanamayız 
    fieldsets = ( #! Bu değişken, admin panelinde veritabanı modelleri için formların nasıl düzenlenmesini istediğimizi belirler
        (None, { #! Bölüm başlıklarını yazıldığı alan none yazıldığında başlıksız olarak göreceğiz
            "fields": ( #! hangi alanları gösterileceği
                ('name', 'slug'), "is_in_stock" #!
            ),
            # 'classes': ('wide', 'extrapretty'), #! bu alanda da ne şekilde karşımıza çıkacağını belirliyoruz {collapse (Açılır kapanır)} yada {wide(direkt açık)} iki şekilde seçenek sunar
            'description' : "You can use this field for the name" 

        }),
        ('Optionals Settings', { #! Bölüm başlıklarını yazıldığı alan 
            "classes" : ("collapse", ),
            "fields" : ("description",),
            'description' : "You can use this section for optionals settings" #! ilgili alana açıklama eklemek istersek.
        })
    )

    actions = ("is_in_stock", ) #! Bu değişken, admin panelinde veritabanı modelleri için özel işlemler yapmasını sağlar. Örneğin, kullanıcıların birden fazla kaydı seçerek arka planda işlem yapmasını sağlar. Örneğin, kullanıcılar seçilen kayıtları silmek için bir işlem yapabilir. Ayrıca, kullanıcılar tarafından oluşturulan özel işlemlerde kullanılabilir. Bu işlemler, modeladmin sınıfının içinde tanımlanır ve admin panelinde görünür.

    def is_in_stock(self, request, queryset): #! Panelde seçtiğimz ürünle querySet olarak gelecek
        count = queryset.update(is_in_stock=True) #! Seçilen querysetlerin is_in_stockları True olarak update edilecek ve bu ürün stokta var olarak güncellenmiş olacak
        self.message_user(request, f"{count} çeşit ürün stoğa eklendi") #! işlem sonrasında gösterilecek mesaj
        
    is_in_stock.short_description = 'İşaretlenen ürünleri stoğa ekle' #! Bu alanda işlem ismini belirtiyoruz







admin.site.register(Product , ProductAdmin) #! Oluşturduğumuz clası bu alana ekliyoruz
admin.site.site_title = "Admin Title!" #! Sekme başlığı
admin.site.site_header = "Admin Portal" #! Sayfa  başlığı sol üst
admin.site.index_title = "Welcome Admin Portal" #! admin girişindeki karşılama yazısı 