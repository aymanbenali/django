# Generated by Django 2.0.4 on 2018-10-11 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner', models.CharField(max_length=100)),
                ('comment', models.CharField(max_length=100)),
                ('thumb', models.ImageField(blank=True, default='default.png', upload_to='')),
            ],
        ),
    ]
