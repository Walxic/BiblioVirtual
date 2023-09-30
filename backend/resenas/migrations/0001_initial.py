# Generated by Django 4.2.5 on 2023-09-30 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Resena',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('autor', models.CharField(max_length=200)),
                ('reseña', models.TextField(blank=True)),
                ('completa', models.BooleanField(default=False)),
            ],
        ),
    ]
