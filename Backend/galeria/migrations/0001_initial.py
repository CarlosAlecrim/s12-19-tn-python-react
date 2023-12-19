# Generated by Django 4.2.7 on 2023-12-09 21:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('propiedad', '0002_propiedad_capacidad_propiedad_nombre_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Galeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to='imagenes')),
                ('descricion', models.CharField(max_length=255)),
                ('propiedad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='propiedad.propiedad')),
            ],
        ),
    ]