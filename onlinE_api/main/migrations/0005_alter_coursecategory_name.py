# Generated by Django 4.0 on 2022-02-10 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_coursedetails_thumbnail_coursedetails_used_techs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursecategory',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
