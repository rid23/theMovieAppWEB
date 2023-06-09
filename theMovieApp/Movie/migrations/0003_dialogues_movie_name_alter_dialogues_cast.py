# Generated by Django 4.1.7 on 2023-03-15 12:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Movie', '0002_remove_cast_charcter_remove_cast_movie_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='dialogues',
            name='movie_name',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='movie_dialogue', to='Movie.movie'),
        ),
        migrations.AlterField(
            model_name='dialogues',
            name='cast',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cast_dialogue', to='Movie.cast'),
        ),
    ]
