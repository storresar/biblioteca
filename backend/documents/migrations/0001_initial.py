# Generated by Django 3.2.2 on 2021-11-24 23:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0003_author_author_request'),
    ]

    operations = [
        migrations.CreateModel(
            name='document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(max_length=60)),
                ('publication_date', models.DateField()),
                ('state', models.CharField(max_length=50)),
                ('email_contact', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=50)),
                ('physical_stock', models.IntegerField()),
                ('virtual_stock', models.IntegerField()),
                ('id_author', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='users.author')),
            ],
        ),
        migrations.CreateModel(
            name='type_document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_doc', models.TextField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='scientific_article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ssn', models.CharField(max_length=50)),
                ('id_doc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='documents.document')),
            ],
        ),
        migrations.CreateModel(
            name='lectures',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isbn', models.CharField(max_length=50)),
                ('congress_name', models.CharField(max_length=50)),
                ('id_doc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='documents.document')),
            ],
        ),
        migrations.AddField(
            model_name='document',
            name='id_type_doc',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='documents.type_document'),
        ),
        migrations.CreateModel(
            name='book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isbn', models.CharField(max_length=50)),
                ('total_pages', models.IntegerField()),
                ('id_doc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='documents.document')),
            ],
        ),
    ]
