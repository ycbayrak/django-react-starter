from django.shortcuts import render
from django.views import View


class HomeView(View):
    title = "Home View"
    component = "home"

    def get(self, request):
        props = {
            'name': 'Joseph'
        }
        print(request.GET)
        return render(request, 'index.html', {
            'title': self.title,
            'component': self.component,
            'props': props
        })


class AboutView(View):
    title = "About View",
    component = "about"

    def get(self, request):
        props = {
            'name': 'Joseph'
        }
        print(request.GET)
        return render(request, 'index.html', {
            'title': self.title,
            'component': self.component,
            'props': props
        })
