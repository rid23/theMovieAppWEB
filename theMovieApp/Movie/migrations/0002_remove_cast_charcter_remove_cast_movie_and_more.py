# Generated by Django 4.1.7 on 2023-03-15 12:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Movie', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cast',
            name='charcter',
        ),
        migrations.RemoveField(
            model_name='cast',
            name='movie',
        ),
        migrations.AddField(
            model_name='cast',
            name='character',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Movie.movie'),
        ),
        migrations.AddField(
            model_name='movie',
            name='cast_name',
            field=models.ManyToManyField(through='Movie.MovieAndCast', to='Movie.cast'),
        ),
        migrations.AlterField(
            model_name='dialogues',
            name='cast',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dialogue', to='Movie.cast'),
        ),
    ]
