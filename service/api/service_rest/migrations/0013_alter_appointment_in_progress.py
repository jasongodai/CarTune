# Generated by Django 4.0.3 on 2023-01-24 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0012_rename_vin_appointment_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='in_progress',
            field=models.BooleanField(default=True, null=True),
        ),
    ]