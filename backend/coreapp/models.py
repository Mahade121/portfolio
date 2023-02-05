from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Stories(models.Model):
    description_part1 = models.TextField()
    description_part2 = models.TextField()
    image = models.ImageField(upload_to='Stories')

    class Meta:
        verbose_name_plural = 'Stories'

    def __str__(self):
        return 'Stories'

class Note(models.Model):
    title  = models.CharField(max_length=200)
    tech_name1  = models.CharField(max_length=50)
    tech_name2  = models.CharField(max_length=50)
    tech_name3  = models.CharField(max_length=50)
    description = RichTextUploadingField()
    image       = models.ImageField(upload_to='Note')

