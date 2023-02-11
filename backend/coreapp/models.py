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
    tech_name1  = models.CharField(max_length=50,blank=True, null=True)
    tech_name2  = models.CharField(max_length=50,blank=True, null=True)
    tech_name3  = models.CharField(max_length=50,blank=True, null=True)
    description = RichTextUploadingField()
    image       = models.ImageField(upload_to='Note')


    def __str__(self):
        return self.title

class Blog(models.Model):
    title  = models.CharField(max_length=200)
    tech_name1  = models.CharField(max_length=50,blank=True, null=True)
    tech_name2  = models.CharField(max_length=50,blank=True, null=True)
    tech_name3  = models.CharField(max_length=50,blank=True, null=True)
    date = models.DateField(auto_now=False, auto_now_add=False)
    description = RichTextUploadingField()
    image       = models.ImageField(upload_to='Blog')

    def __str__(self):
        return self.title 


class News(models.Model):
    title  = models.CharField(max_length=200)
    date = models.DateField(auto_now=False, auto_now_add=False)
    description = RichTextUploadingField()
    image       = models.ImageField(upload_to='News')

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name + ' ' + self.phone

class DreamCategory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Dream(models.Model):
    category  = models.ForeignKey(DreamCategory, on_delete=models.CASCADE)
    title  = models.CharField(max_length=200)
    description = RichTextUploadingField()

    def __str__(self):
        return self.title


class Course(models.Model):
    title = models.CharField(max_length = 200)
    image = models.ImageField(upload_to='CourseImage')
    course_detail_link = models.URLField(unique=True,blank=True,null=True)
    total_class = models.CharField(max_length = 200,blank=True,null=True)
    duration = models.CharField(max_length = 200,blank=True,null=True)

    def __str__(self):
        return self.title


class Education(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextUploadingField()

    def __str__(self):
        return self.title

class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextUploadingField()

    def __str__(self):
        return self.title

class TermsOfService(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextUploadingField()

    def __str__(self):
        return self.title
