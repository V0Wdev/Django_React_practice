# Generated by Django 4.0.5 on 2022-07-29 23:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_user_article_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='user_id',
            new_name='user',
        ),
    ]
