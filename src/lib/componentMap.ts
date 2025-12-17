import { defineAsyncComponent } from 'vue';

export const componentMap: Record<string, { id: string; label: string; component: any }[]> = {
    'auth': [
        { id: 'simple-login', label: 'Simple Login', component: defineAsyncComponent(() => import('@/components/Auth/SimpleLogin.vue')) },
        { id: 'split-screen-login', label: 'Split Screen', component: defineAsyncComponent(() => import('@/components/Auth/SplitScreenLogin.vue')) },
        { id: 'two-factor', label: 'Two Factor', component: defineAsyncComponent(() => import('@/components/Auth/TwoFactor.vue')) },
    ],
    'pages': [
        // Landing Pages
        { id: 'landing-page', label: 'Landing Page (SaaS)', component: defineAsyncComponent(() => import('@/components/Pages/LandingPage.vue')) },
        { id: 'hr-landing-page', label: 'HR Landing Page', component: defineAsyncComponent(() => import('@/components/Pages/HRLandingPage.vue')) },
        { id: 'agency-landing', label: 'Agency Landing', component: defineAsyncComponent(() => import('@/components/Pages/AgencyLanding.vue')) },
        { id: 'mobile-app-landing', label: 'Mobile App Landing', component: defineAsyncComponent(() => import('@/components/Pages/MobileAppLanding.vue')) },
        { id: 'photography-landing', label: 'Photography Landing', component: defineAsyncComponent(() => import('@/components/Pages/PhotographyLanding.vue')) },

        // About Us
        { id: 'about-us', label: 'About Us (Original)', component: defineAsyncComponent(() => import('@/components/Pages/AboutUs.vue')) },
        { id: 'about-simple', label: 'About Simple', component: defineAsyncComponent(() => import('@/components/Pages/AboutSimple.vue')) },
        { id: 'about-split', label: 'About Split', component: defineAsyncComponent(() => import('@/components/Pages/AboutSplit.vue')) },
        { id: 'about-grid', label: 'About Team Grid', component: defineAsyncComponent(() => import('@/components/Pages/AboutGrid.vue')) },
        { id: 'about-dark', label: 'About Dark', component: defineAsyncComponent(() => import('@/components/Pages/AboutDark.vue')) },

        // Coming Soon
        { id: 'coming-soon', label: 'Coming Soon (Original)', component: defineAsyncComponent(() => import('@/components/Pages/ComingSoon.vue')) },
        { id: 'coming-soon-simple', label: 'Coming Soon Simple', component: defineAsyncComponent(() => import('@/components/Pages/ComingSoonSimple.vue')) },
        { id: 'coming-soon-split', label: 'Coming Soon Split', component: defineAsyncComponent(() => import('@/components/Pages/ComingSoonSplit.vue')) },
        { id: 'coming-soon-newsletter', label: 'Coming Soon Newsletter', component: defineAsyncComponent(() => import('@/components/Pages/ComingSoonNewsletter.vue')) },
        { id: 'coming-soon-video', label: 'Coming Soon Video', component: defineAsyncComponent(() => import('@/components/Pages/ComingSoonVideo.vue')) },

        // Error Pages
        { id: 'not-found', label: '404 (Original)', component: defineAsyncComponent(() => import('@/components/Pages/NotFoundPage.vue')) },
        { id: 'not-found-simple', label: '404 Simple', component: defineAsyncComponent(() => import('@/components/Pages/NotFoundSimple.vue')) },
        { id: 'not-found-split', label: '404 Split', component: defineAsyncComponent(() => import('@/components/Pages/NotFoundSplit.vue')) },
        { id: 'not-found-background', label: '404 Background', component: defineAsyncComponent(() => import('@/components/Pages/NotFoundBackground.vue')) },
        { id: 'not-found-dark', label: '404 Dark', component: defineAsyncComponent(() => import('@/components/Pages/NotFoundDark.vue')) },

        // Others
        { id: 'lead-details', label: 'Lead Details', component: defineAsyncComponent(() => import('@/components/Pages/LeadDetails.vue')) },
    ],
    'dashboards': [
        { id: 'sidebar-layout', label: 'Sidebar Layout', component: defineAsyncComponent(() => import('@/components/Dashboards/SidebarLayout.vue')) },
        { id: 'stacked-layout', label: 'Stacked Layout', component: defineAsyncComponent(() => import('@/components/Dashboards/StackedLayout.vue')) },
    ]
};
