---
layout: default
title: "Idd Abdulmajid Mustafa | Kilifi South 2027"
---

<div class="flex flex-col md:flex-row items-center gap-8 mb-12 mt-8">
    <div class="md:w-1/2">
        <img src="/assets/images/candidate-hero.jpg" alt="Idd Abdulmajid Mustafa" class="w-full h-auto rounded-2xl shadow-xl border-4 border-secondary">
    </div>
    <div class="md:w-1/2 bg-primary text-white p-10 rounded-3xl border-b-8 border-secondary shadow-xl">
        <h1 class="text-5xl font-black uppercase tracking-tighter mb-4 text-secondary">#Mchakachaka2027</h1>
        <p class="text-2xl opacity-90 font-bold mb-6">Kazi iendelee kwa ajili ya Kilifi South yenye neema.</p>
        <p class="text-lg">Tumejibu mwito wa wananchi kuleta maendeleo ya kweli.</p>
    </div>
</div>

<section class="prose max-w-none mb-16">
    <h2 class="text-4xl font-black text-primary mb-6">Dira Yetu (Our Vision)</h2>
    <p class="text-lg text-gray-700">Tumejibu mwito wa wananchi wa Kilifi South kuleta maendeleo ya kweli kupitia nguzo zetu kuu za:</p>
    <ul class="grid md:grid-cols-3 gap-4 list-none p-0">
        <li class="bg-gray-50 p-4 rounded-xl border-l-4 border-secondary shadow-sm"><strong>🌽 Kilimo:</strong> Kuimarisha ukulima wa kisasa na masoko kwa wakulima wetu.</li>
        <li class="bg-gray-50 p-4 rounded-xl border-l-4 border-secondary shadow-sm"><strong>🏥 Afya:</strong> Vituo vya afya vilivyo na dawa na wahudumu wa kutosha.</li>
        <li class="bg-gray-50 p-4 rounded-xl border-l-4 border-secondary shadow-sm"><strong>🏗️ Miundombinu:</strong> Barabara safi zinazounganisha wadi zetu zote.</li>
    </ul>
</section>

<section class="mt-16 mb-16">
    <h2 class="text-4xl font-black text-primary mb-8 border-b-4 border-secondary inline-block uppercase">Habari na Mikutano</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
        {% for post in site.posts limit:4 %}
        <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div class="p-6">
                <span class="text-sm font-bold text-secondary uppercase">{{ post.date | date: "%b %d, %Y" }}</span>
                <h3 class="text-xl font-bold text-primary mt-2 mb-3">{{ post.title }}</h3>
                <p class="text-gray-600 mb-4">{{ post.content | strip_html | truncatewords: 20 }}</p>
                <a href="{{ post.url | relative_url }}" class="text-primary font-bold hover:underline">Soma Zaidi →</a>
            </div>
        </div>
        {% else %}
        <p class="text-gray-500 italic">Ratiba ya mikutano na taarifa mpya zitakuja hivi punde.</p>
        {% endfor %}
    </div>
</section>

<div class="mt-16 mb-12 text-center p-10 bg-primary rounded-3xl border-b-8 border-secondary shadow-2xl">
    <h2 class="text-3xl font-black text-white mb-4 uppercase">Tayari kuleta mabadiliko?</h2>
    <p class="text-white opacity-90 mb-8 text-lg">Jiunge na maelfu ya wakazi wa Kilifi South katika harakati za #Mchakachaka2027.</p>
    <a href="/volunteer/" class="inline-block bg-secondary text-primary font-black text-xl px-10 py-5 rounded-2xl hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg">
        JITOLEE SASA (VOLUNTEER) →
    </a>
</div>