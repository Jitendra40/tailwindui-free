<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

const htmlBlock = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HR Software Landing Page</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-white text-gray-900 antialiased">

    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center gap-2">
                    <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span class="font-bold text-xl tracking-tight text-gray-900">HR Connect</span>
                </div>
                <div class="hidden md:flex items-center gap-8">
                    <a href="#features" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Features</a>
                    <a href="#how-it-works" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">How it Works</a>
                    <a href="#pricing" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Pricing</a>
                    <a href="#" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Login</a>
                    <a href="#" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition">
                        Start Free Trial
                    </a>
                </div>
                <div class="md:hidden flex items-center">
                    <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-20 pb-32 overflow-hidden lg:pt-32 lg:pb-40">
        <div class="bg-indigo-50 absolute top-0 right-0 -z-10 w-[60%] h-full rounded-bl-[100px] opacity-60 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div class="max-w-2xl">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                        Smarter HR. <br>
                        <span class="text-indigo-600">Happier Teams.</span> <br>
                        Faster Growth.
                    </h1>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        An all-in-one HR management platform to hire, manage, and empower your workforce — from onboarding to payroll.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                            Start Free Trial
                        </a>
                        <a href="#" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                            Book a Demo
                        </a>
                    </div>
                    <div class="mt-10 flex items-center gap-4 text-sm text-gray-500">
                        <div class="flex -space-x-2">
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt=""/>
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt=""/>
                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64" alt=""/>
                        </div>
                        <p>Trusted by 10,000+ HR professionals</p>
                    </div>
                </div>
                <div class="relative lg:ml-auto">
                    <div class="relative rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 transform rotate-2 hover:rotate-0 transition duration-500">
                         <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="HR Dashboard" class="rounded-xl w-full h-auto object-cover">
                    </div>
                    <!-- Floating Badge -->
                    <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce hidden sm:flex">
                        <div class="bg-green-100 p-2 rounded-full">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 uppercase font-semibold">Payroll Status</p>
                            <p class="font-bold text-gray-900">Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trusted By -->
    <section class="py-12 bg-white border-y border-gray-100">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">Trusted by HR teams, startups, and enterprises</p>
            <div class="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                 <!-- Tuple -->
                 <div class="h-8 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-full w-auto">
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#4F46E5">Tuple</text>
                    </svg>
                 </div>
                 <!-- Mirage -->
                 <div class="h-8 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-full w-auto">
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#4F46E5">Mirage</text>
                    </svg>
                 </div>
                 <!-- StaticKit -->
                 <div class="h-8 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-full w-auto">
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#4F46E5">StaticKit</text>
                    </svg>
                 </div>
                 <!-- Transistor -->
                 <div class="h-8 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-full w-auto">
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#4F46E5">Transistor</text>
                    </svg>
                 </div>
                 <!-- Workcation -->
                 <div class="h-8 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48" fill="none" class="h-full w-auto">
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#4F46E5">Workcation</text>
                    </svg>
                 </div>
            </div>
        </div>
    </section>

    <!-- The Challenge -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Managing people shouldn’t be complicated</h2>
                <p class="text-lg text-gray-600">Traditional HR systems slow your business down with manual paperwork and disconnected tools.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">Manual Paperwork</h3>
                    <p class="text-sm text-gray-500">Endless forms and filing cabinets that kill productivity.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">Disconnected Tools</h3>
                    <p class="text-sm text-gray-500">Recruitment, payroll, and core HR living in different silos.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">Poor Engagement</h3>
                    <p class="text-sm text-gray-500">Employees feel disconnected without a central hub.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2">Compliance Risks</h3>
                    <p class="text-sm text-gray-500">Falling behind on local labor laws and policy updates.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- The Solution / Features -->
    <section id="features" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-indigo-600 font-semibold tracking-wide uppercase text-sm">The Solution</span>
                <h2 class="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">One HR Platform. Complete Workforce Control.</h2>
                <p class="mt-4 text-xl text-gray-500">Our HR software brings hiring, employee management, attendance, payroll, and performance into a single, easy-to-use dashboard.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Employee Management</h3>
                    <p class="text-gray-600">Centralized employee profiles, documents, and role management in one secure vault.</p>
                </div>
                <!-- Feature 2 -->
                <div class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                     <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Attendance & Leave</h3>
                    <p class="text-gray-600">Automate attendance tracking, complex shifts, holiday calendars, and leave approvals.</p>
                </div>
                <!-- Feature 3 -->
                <div class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                    <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Payroll & Compliance</h3>
                    <p class="text-gray-600">Accurate payroll processing with built-in tax calculations and local compliance support.</p>
                </div>
                <!-- Feature 4 -->
                <div class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                     <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Recruitment</h3>
                    <p class="text-gray-600">Post jobs, track candidates through pipelines, and onboard new hires smoothly.</p>
                </div>
                <!-- Feature 5 -->
                <div class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                     <div class="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Performance Management</h3>
                    <p class="text-gray-600">Set goals, run 360° reviews, and track employee details and career growth.</p>
                </div>
                 <!-- Feature 6 -->
                 <div class="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                    <div class="w-12 h-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Secure Access</h3>
                    <p class="text-gray-600">Enterprise-grade security with role-based permissions (Admin, Manager, Employee).</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Step -->
    <section id="how-it-works" class="py-24 bg-indigo-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                 <h2 class="text-3xl sm:text-4xl font-bold">How It Works</h2>
                 <p class="mt-4 text-indigo-200 text-lg">Get started in three simple steps.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-12 text-center">
                <div class="relative">
                    <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-indigo-500/50">1</div>
                    <h3 class="text-xl font-bold mb-3">Set Up Organization</h3>
                    <p class="text-indigo-200 leading-relaxed">Add your teams, define roles, and configure leave policies in minutes using our wizard.</p>
                </div>
                 <div class="relative">
                    <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-indigo-500/50">2</div>
                    <h3 class="text-xl font-bold mb-3">Invite Employees</h3>
                    <p class="text-indigo-200 leading-relaxed">Bulk invite employees via email. They get instant access to their self-service dashboard.</p>
                </div>
                 <div class="relative">
                    <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-indigo-500/50">3</div>
                    <h3 class="text-xl font-bold mb-3">Automate & Scale</h3>
                    <p class="text-indigo-200 leading-relaxed">Let the software handle attendance and payroll while you focus on growing your business.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Who Is It For -->
    <section class="py-24 bg-gray-50 text-center">
        <div class="max-w-5xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-gray-900 mb-12">Who Is This For?</h2>
            <div class="flex flex-wrap justify-center gap-4">
                <span class="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    HR Teams
                </span>
                <span class="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Startups & SMEs
                </span>
                <span class="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Enterprises
                </span>
                <span class="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                     <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Remote & Hybrid Teams
                </span>
                 <span class="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 flex items-center gap-2">
                     <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Agencies & IT Companies
                </span>
            </div>
            
            <div class="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="text-left">
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Why Choose Our Software?</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center gap-2">✅ No complex setup required</li>
                        <li class="flex items-center gap-2">✅ Clean & intuitive interface</li>
                        <li class="flex items-center gap-2">✅ Scalable for growing teams</li>
                    </ul>
                </div>
                <div class="h-16 w-px bg-gray-200 hidden md:block"></div>
                 <div class="text-left">
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center gap-2">✅ Local compliance-ready</li>
                        <li class="flex items-center gap-2">✅ Dedicated customer support</li>
                        <li class="flex items-center gap-2">✅ Secure & reliable</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">Loved by HR Managers</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Testimonial 1 -->
                <div class="bg-gray-50 p-8 rounded-2xl relative">
                    <svg class="absolute top-6 left-6 w-10 h-10 text-indigo-200 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 14.832 14.3398 16.3242 13.0625L10.375 5H15.0156L22.9844 14.7656L22.9844 21H14.017ZM5.00781 21L5.00781 18C5.00781 16.0547 5.82031 14.3398 7.3125 13.0625L1.36328 5H6.00781L14.0078 14.7656L14.0078 21H5.00781Z"></path></svg>
                    <p class="text-gray-700 italic relative z-10 pt-8 mb-6">"This HR system saved us hours every week. Payroll and attendance are now effortless. I can verify everything in minutes."</p>
                    <div class="flex items-center gap-4">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="User">
                        <div>
                            <p class="font-bold text-gray-900">Sarah Johnson</p>
                            <p class="text-sm text-gray-500">HR Manager, TechFlow</p>
                        </div>
                    </div>
                </div>
                 <!-- Testimonial 2 -->
                 <div class="bg-gray-50 p-8 rounded-2xl relative">
                    <svg class="absolute top-6 left-6 w-10 h-10 text-indigo-200 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 14.832 14.3398 16.3242 13.0625L10.375 5H15.0156L22.9844 14.7656L22.9844 21H14.017ZM5.00781 21L5.00781 18C5.00781 16.0547 5.82031 14.3398 7.3125 13.0625L1.36328 5H6.00781L14.0078 14.7656L14.0078 21H5.00781Z"></path></svg>
                    <p class="text-gray-700 italic relative z-10 pt-8 mb-6">"Clean UI, fast onboarding, and great support. Perfect for our growing team. The automated recruitment pipeline is a game changer."</p>
                    <div class="flex items-center gap-4">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="User">
                        <div>
                            <p class="font-bold text-gray-900">David Chen</p>
                            <p class="text-sm text-gray-500">Founder & CEO, StartScale</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-24 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="text-center mb-16">
                 <h2 class="text-3xl font-bold">Simple, Transparent Pricing</h2>
                 <p class="mt-4 text-gray-400">Choose the plan that fits your team.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <!-- Starter -->
                <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex flex-col hover:border-indigo-500 transition">
                    <h3 class="text-xl font-bold mb-2">Starter</h3>
                    <div class="text-4xl font-bold mb-6">Free</div>
                    <p class="text-gray-400 mb-8 border-b border-gray-700 pb-6">For small teams just getting started.</p>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Employee records</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Basic attendance</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Email support</li>
                    </ul>
                    <a href="#" class="block text-center py-3 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 font-semibold transition">Get Started</a>
                </div>
                 <!-- Pro -->
                <div class="bg-indigo-600 rounded-2xl p-8 border border-indigo-500 flex flex-col transform md:-translate-y-4 shadow-2xl relative">
                    <div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                    <h3 class="text-xl font-bold mb-2">Pro</h3>
                    <div class="text-4xl font-bold mb-6">₹1,499 <span class="text-lg font-normal text-indigo-200">/mo</span></div>
                    <p class="text-indigo-200 mb-8 border-b border-indigo-500 pb-6">For growing teams needing full control.</p>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Payroll & compliance</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Leave management</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Performance reviews</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Priority support</li>
                    </ul>
                    <a href="#" class="block text-center py-3 px-6 rounded-lg bg-white text-indigo-600 hover:bg-gray-100 font-bold transition shadow-lg">Start Free Trial</a>
                </div>
                 <!-- Enterprise -->
                <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex flex-col hover:border-indigo-500 transition">
                    <h3 class="text-xl font-bold mb-2">Enterprise</h3>
                    <div class="text-4xl font-bold mb-6">Custom</div>
                    <p class="text-gray-400 mb-8 border-b border-gray-700 pb-6">For large organizations.</p>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Advanced security</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Custom workflows</li>
                        <li class="flex items-center gap-2"><svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Dedicated account manager</li>
                    </ul>
                    <a href="#" class="block text-center py-3 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 font-semibold transition">Contact Sales</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div class="space-y-4">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="font-bold text-lg mb-2">Is this suitable for small teams?</h3>
                    <p class="text-gray-600">Yes, it’s designed for teams of all sizes. Our Starter plan is perfect for small businesses just getting organized.</p>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="font-bold text-lg mb-2">Can we manage remote employees?</h3>
                    <p class="text-gray-600">Absolutely. Remote and hybrid teams are fully supported with digital onboarding, remote attendance, and cloud access.</p>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="font-bold text-lg mb-2">Is employee data secure?</h3>
                    <p class="text-gray-600">Yes, we use enterprise-grade security and encryption to ensure your sensitive HR data is always protected.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 text-center">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Build a Better Workplace Today</h2>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Simplify HR operations and empower your people with the best tools in the industry.</p>
             <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-xl shadow-indigo-200">
                    Start Free Trial
                </a>
                <a href="#" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    Request a Demo
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                 <div class="flex items-center gap-2">
                     <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span class="font-bold text-lg text-gray-900">HR Connect</span>
                </div>
                <div class="text-sm text-gray-500">
                     © 2025 HR Connect. All rights reserved.
                </div>
                 <div class="flex gap-6">
                    <a href="#" class="text-sm text-gray-500 hover:text-indigo-600 transition">Privacy Policy</a>
                    <a href="#" class="text-sm text-gray-500 hover:text-indigo-600 transition">Terms</a>
                    <a href="#" class="text-sm text-gray-500 hover:text-indigo-600 transition">Careers</a>
                    <a href="#" class="text-sm text-gray-500 hover:text-indigo-600 transition">Contact</a>
                </div>
            </div>
        </div>
    </footer>

</body>
</html>
`

const props = defineProps<{ isFullScreen?: boolean }>()
</script>

<template>
  <PreviewWrapper
    title="HR Landing Page"
    description="A modern, high-converting landing page for an HR SaaS."
    :html-block="htmlBlock"
    default-viewport="full"
    :fullScreen="isFullScreen"
  >
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
    <div class="w-full h-full min-h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white">
        <!-- Preview Placeholder -->
        <div class="flex items-center justify-center h-full text-gray-400 bg-gray-50">
            <span class="text-sm">Preview only available in Full View</span>
        </div>
    </div>
  </PreviewWrapper>
</template>
