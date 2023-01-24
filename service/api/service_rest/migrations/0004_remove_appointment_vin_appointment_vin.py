# Generated by Django 4.0.3 on 2023-01-24 05:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_automobilevo_import_href'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='vin',
        ),
        migrations.AddField(
            model_name='appointment',
            name='VIN',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='VIN', to='service_rest.automobilevo'),
        ),
    ]