# Generated by Django 3.2 on 2023-02-10 04:28

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('coreapp', '0006_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='DreamCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Dream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', ckeditor_uploader.fields.RichTextUploadingField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='coreapp.dreamcategory')),
            ],
        ),
    ]
