# Generated by Django 4.1.7 on 2023-03-15 12:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Movie', '0003_dialogues_movie_name_alter_dialogues_cast'),
    ]

    operations = [
        migrations.AddField(
            model_name='cast',
            name='Movie_name',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Movie.movie'),
        ),
        migrations.AlterField(
            model_name='cast',
            name='character',
            field=models.CharField(max_length=100, null=True),
        ),
    ]