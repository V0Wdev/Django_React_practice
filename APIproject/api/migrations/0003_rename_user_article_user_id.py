# Generated by Django 4.0.5 on 2022-07-29 23:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_article_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='user',
            new_name='user_id',
        ),
    ]
