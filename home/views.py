from django.shortcuts import render
from django.views import View


class HomeView(View):
    title = "Home View"
    component = "home"

    def get(self, request):
        props = {
            'name': 'Joseph'
        }
        return render(request, 'index.html', {
            'title': self.title,
            'component': self.component,
            'props': props
        })
