# Generated by Django 4.1.5 on 2023-01-27 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_product_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_img',
            field=models.ImageField(blank=True, default='defaults/default_image.png', null=True, upload_to='product/'),
        ),
    ]