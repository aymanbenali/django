# Generated by Django 2.0.4 on 2018-10-11 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='category',
            field=models.CharField(choices=[('Manager', 'Manager'), ('Mechanic', 'Mechanic'), ('Electrical', 'Electrical'), ('S.M.L', 'S.M.L')], default='S.M.L', max_length=2),
        ),
    ]
