from django.contrib import admin
from .models import Product, Review , Category
from django.utils import timezone
from django.utils.safestring import mark_safe #! image işlemleri için html kodu gönderildiğinde dışarıdan değil güvenli olarak developer tarafından gönderildğini belirtmek için 
#Todo List-Filter-Dropdown(Field bazlı)
from django_admin_listfilter_dropdown.filters import RelatedDropdownFilter, DropdownFilter
#Todo Admin-Date_Rang_filter(Tarih bazlı)
from rangefilter.filters import DateRangeFilter, DateTimeRangeFilter
#Todo İmport-Export Packages
from import_export.admin import ImportExportModelAdmin
from products.resources import ReviewResource

class ReviewInline(admin.TabularInline): #! Reviewlar içerisinde productların göründüğü gibi productlar içerisinde de reviewların görünmesini sağlamak için ek olarak aynı işlevi gören fakat görüneme sahip olan StackedInline da TabularInline yerine kullanılabilinir 
    model = Review #! Model seçimi Review modelim için
    extra = 1 #! product altına ekleyebiliceğim yorum için 1 adet boş extra alan için
    classes = ('collapse',) #! açık kapalı 
    # min_num = 3
    # max_num = 20
class ProductAdmin(admin.ModelAdmin): #! Product model ile ilgili costumize yapacaksak classa onun ismini veririz ve admin.ModelAdmin'i çağırırız
    
    list_display = ("name", "create_date", "is_in_stock", "update_date", "added_days_ago","how_many_reviews","bring_img_to_list" ) #! Product modelinin hangi fieldslarının(sütun olarak) görüneceğini bildirdiğimz alan !!list_display değişkeni kullanıldığında models.py daki def __str__ metodunu sadece admin panelde olmak üzerine ezecektir.!! added_days_ago sonradan kendimiz oluşturduğumuz bir metod olup aşağıda detayları mevcuttur, how_many_reviews mdoels de oluşturduğumuz bir metoddur bu alanda çağırabiliriz
    list_editable = ("is_in_stock",) #! Bu değişken, admin panelinde veritabanı modellerinin listelenmesi sırasında listeleme sayfasındaki alanların düzenlenmesini sağlar.Bu değişken ile, kullanıcının her satır için ayrı ayrı açmasına gerek kalmadan, direk olarak düzenleme yapması sağlanabilir, ek olarak fields ın edit edilebilmesi için displayde ekli yani görüntülenebiliyor olması gerekli   ("name" bu alan da kullanmak için default olarak gelen detay linkini "name" üzerinden alıp başka bir fieds a bildirmemiz gerekli)
    # list_display_links = ("create_date", ) #! Bu değişken, admin panelinde veritabanı modellerinin listelenmesi sırasında hangi alanların "detaylı görünüm" sayfasına yönlendireceğini belirler
    # list_filter = ("is_in_stock", "create_date") #! Bu değişken, admin panelinde veritabanı modellerinin listeleme sayfasında filtreleme yapmasını sağlar (sağ tarafta filtreleme alanını gçrebilirsiniz)

    list_filter = ("is_in_stock", ("create_date", DateTimeRangeFilter)) #? Bu değişken ThirdParty packages olup create_date'in field seçimi DateTimeField olduğundan dolayı DateTimeRangeFilter seçilmiştir

    ordering = ("name",) #! Default olarak hangi fields ile sıralanacağını belirler
    search_fields = ("name",) #! Bu değişken, admin panelinde veritabanı modellerinin arama yapmasını sağlar. Örneğin, search_fields = ('name', 'description') gibi bir tanımda, name ve description alanlarına göre arama yapılabilir. Bu arama alanı admin panelinin üst tarafında görünür ve kullanıcılar belirli bir kaydın name ve description alanlarına göre arayabilir. Bu değişken birden fazla alan için kullanılabilir.
    prepopulated_fields = {'slug' : ('name',)}#! Bu değişken, admin panelinde veritabanı modelleri için formların otomatik olarak doldurulmasını sağlar. Örneğin, prepopulated_fields = {'slug': ('name',)} gibi bir tanımda, name alanının değerini kullanarak otomatik olarak slug alanını doldurur(url sonuna eklenir). Bu özellik genellikle SEO amaçlı kullanılır ve kullanıcının manuel olarak girmesi gereken alanların otomatik olarak doldurulmasını sağlar.!(Otomatik model oluşturmalarında yani toplu data girişlerinde değil sadece admin panelde ekleme yapıldığında gerçekleşir)!
    list_per_page = 25 #! pagination ayarlamsı yapılabilinir
    date_hierarchy = "update_date" #! üst alanda tarih sıralamsı gerçekleştirecek
    # fields = (('name', 'slug'), 'description', "is_in_stock") #!her bir ürün detayına girildiğinde karşımıza çıkan ekran için görünümünü ayarlamamızı sağlayacaktır fieldset kullandığımız zaman bunu kullanamayız 
    inlines = (ReviewInline,) #!  ana model nesnesi ile ilişkili olan model nesnelerinin aynı sayfada düzenlenmesine veya görüntülenmesine izin verir. Bu, başka bir sayfaya gitmek yerine ana model nesnesi ile ilişkili nesneleri aynı sayfada düzenleyebilmenizi sağlar. Bu özellik genellikle foreign key veya one-to-many ilişkisi olan modeller için kullanılır. Örneğin bir Product modeli ile ilişkili olan bir Review modeli için Product modelini düzenlerken, aynı sayfada Review modellerini de düzenleyebilirsiniz veya görüntüleyebilirsiniz.
    readonly_fields = ("bring_image",)

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
            "fields" : ("description", "categories"), #! category tablosu oluşturulduktan sonra Product tablosuna many to many bağlantılı olarak categories eklendi ve admin panelde görüntülenmesi için bu alana yazıldı tarayıcıdan kontrol et
            'description' : "You can use this section for optionals settings" #! ilgili alana açıklama eklemek istersek.
        }),
        ('İmage Settings', { #! Bölüm başlıklarını yazıldığı alan 
            "classes" : ("collapse", ),
            "fields" : ("product_img", "bring_image",), #! category tablosu oluşturulduktan sonra Product tablosuna many to many bağlantılı olarak categories eklendi ve admin panelde görüntülenmesi için bu alana yazıldı tarayıcıdan kontrol et
            'description' : "You can use this section for image settings" #! ilgili alana açıklama eklemek istersek.
        })
    )
    filter_horizontal = ("categories", ) #!Bu filtre, bir sütunun içinde arama yapmak için kullanılır ve kullanıcılar, aradıkları verileri hızlı bir şekilde bulmak için bu filtreyi kullanabilirler.
    # filter_vertical = ("categories", )   #! Bu filtre, bir sütunun altında arama yapmak için kullanılır ve kullanıcılar, aradıkları verileri hızlı bir şekilde bulmak için bu filtreyi kullanabilirler.


    actions = ("is_in_stock", ) #! Bu değişken, admin panelinde veritabanı modelleri için özel işlemler yapmasını sağlar. Örneğin, kullanıcıların birden fazla kaydı seçerek arka planda işlem yapmasını sağlar. Örneğin, kullanıcılar seçilen kayıtları silmek için bir işlem yapabilir. Ayrıca, kullanıcılar tarafından oluşturulan özel işlemlerde kullanılabilir. Bu işlemler, modeladmin sınıfının içinde tanımlanır ve admin panelinde görünür.

    def is_in_stock(self, request, queryset): #! Panelde seçtiğimz ürünle querySet olarak gelecek
        # print(queryset) #! Terminal çıktısı panelde seç ve dene
        #?<QuerySet [<Product: Aaron Davenport>, <Product: Alex Hill>]>
        count = queryset.update(is_in_stock=True) #! Seçilen querysetlerin is_in_stockları True olarak update edilecek ve bu ürün stokta var olarak güncellenmiş olacak
        self.message_user(request, f"{count} çeşit ürün stoğa eklendi") #! işlem sonrasında gösterilecek mesaj
        
    is_in_stock.short_description = 'İşaretlenen ürünleri stoğa ekle' #! Bu alanda işlem ismini belirtiyoruz

    def added_days_ago(self, product): #! Bu şekilde panelde kendi metodlarımızı oluşturup algoritmalar kurabiliriz product argüman olarak düşün ve değişebileceğini bil
        fark = timezone.now() - product.create_date
        return fark.days #! Bu metodu models.py da oluşturabiliriz 

    def bring_image(self, obj): #! İmange işlemleri için admin panelde gösterilmesi adına html kodu
        if obj.product_img:
            return mark_safe(f"<img src={obj.product_img.url} width=400 height=400></img>")
        return mark_safe(f"<h3>{obj.name} has not image </h3>")
    
    def bring_img_to_list(self, obj): #! imagelarımı liste içerisinde gösterebilmek için gerekli metodu bu metodu list_display içerisinde çağırıyoruz.
        if obj.product_img:
            return mark_safe(f"<img src={obj.product_img.url} width=50 height=50></img>")
        return mark_safe("******")
        #! html kodları i.erisinde minimalize etmek için boyutlandırmasını yapıyoruz
    bring_img_to_list.short_description = "product image" #! Listelenme ekranında resimlerin olduğu sütunun bağlığını Değiştirmek için

    

    

class ReviewAdmin(ImportExportModelAdmin):
    list_display = ('__str__', 'created_date', 'is_released')
    list_per_page = 50
    raw_id_fields = ('product',) #! Bu özellik, yönetici ekleme/değiştirme görünümlerinde ham ID arabirimi olarak görüntülenmesi gereken alanların bir listesidir. Ham ID arabirimi, yönetici arayüzünde veritabanındaki bir kaydın ID'sini gösteren basit bir metin kutusudur. Bu özellik, veritabanındaki kayıtlar arasında hızlı bir şekilde gezinebilmenizi ve kayıtları seçebilmenizi sağlar. Bu özellik yönetici arayüzünde bir alanın foreign key alanı olarak işaretlenmesi durumunda kullanılabilir.Yorum detayı için tıkladığımızda sayfa üzerinde bulunan ürün ismi ve id sinin bulunduğu alan 
    list_filter = ( #! List filter drop down paketi sağ tarafta filtereleme ekranı verecektir
        ('product', RelatedDropdownFilter), #! Field'lar bazında filtreleme seçilir doğru seçim resmi dokümanı kontrol et
        ('is_released', DropdownFilter),        
    )
    resource_class = ReviewResource


    




#? Product model için register işlemler
admin.site.register(Product , ProductAdmin) #! Oluşturduğumuz clası bu alana ekliyoruz
admin.site.site_title = "Admin Title!" #! Sekme başlığı
admin.site.site_header = "Admin Portal" #! Sayfa  başlığı sol üst
admin.site.index_title = "Welcome Admin Portal" #! admin girişindeki karşılama yazısı 
#? Review model için register işlemler
admin.site.register(Review, ReviewAdmin)
admin.site.register(Category)
