import {
    Type,
    Shield,
    ChevronRight,
    MousePointer2,
    CheckSquare,
    List,
    SeparatorHorizontal,
    Menu,
    Box,
    UploadCloud,
    Filter,
    Image,
    MoreHorizontal,
    ArrowLeftRight,
    CreditCard,
    BarChart3,
    ListOrdered,
    ToggleLeft,
    Layout,
    Megaphone,
    Newspaper,
    Bell,
    FormInput,
    Indent,
    HelpCircle,
    LayoutTemplate,
    PanelBottom,
    PanelTop,
    MonitorPlay,
    Mail,
    Star,
    Table2,
    Users,
    Lock,
    Settings,
    AppWindow,
} from 'lucide-vue-next'

export const navigationData = [
    {
        title: "Forms",
        items: [
            { name: 'Buttons', href: '/buttons', icon: MousePointer2, color: 'text-sky-500', bg: 'bg-sky-50' },
            { name: 'Checkboxes', href: '/checkboxes', icon: CheckSquare, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { name: 'Inputs', href: '/inputs', icon: FormInput, color: 'text-orange-600', bg: 'bg-orange-50' },
            { name: 'Textareas', href: '/textareas', icon: Type, color: 'text-stone-500', bg: 'bg-stone-50' },
            { name: 'Selects', href: '/selects', icon: CheckSquare, color: 'text-indigo-400', bg: 'bg-indigo-50' },
            { name: 'Radio Groups', href: '/radio-groups', icon: ListOrdered, color: 'text-pink-600', bg: 'bg-pink-50' },
            { name: 'Toggles', href: '/toggles', icon: ToggleLeft, color: 'text-green-600', bg: 'bg-green-50' },
            { name: 'File Uploaders', href: '/file-uploaders', icon: UploadCloud, color: 'text-blue-600', bg: 'bg-blue-50' },
            { name: 'Range Input', href: '/range-input', icon: ToggleLeft, color: 'text-pink-600', bg: 'bg-pink-50' },
        ]
    },
    {
        title: "Navigation",
        items: [
            { name: 'Breadcrumbs', href: '/breadcrumbs', icon: ChevronRight, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { name: 'Pagination', href: '/pagination', icon: ArrowLeftRight, color: 'text-green-500', bg: 'bg-green-50' },
            { name: 'Steps', href: '/steps', icon: ListOrdered, color: 'text-teal-600', bg: 'bg-teal-50' },
            { name: 'Skip Link', href: '/skip-link', icon: ArrowLeftRight, color: 'text-purple-500', bg: 'bg-purple-50' },
            { name: 'Menus', href: '/menus', icon: MoreHorizontal, color: 'text-blue-400', bg: 'bg-blue-50' },
            { name: 'Dropdowns', href: '/dropdowns', icon: Menu, color: 'text-violet-500', bg: 'bg-violet-50' },
        ]
    },
    {
        title: "Data Display",
        items: [
            { name: 'Badges', href: '/badges', icon: Shield, color: 'text-purple-500', bg: 'bg-purple-50' },
            { name: 'Cards', href: '/cards', icon: Layout, color: 'text-gray-500', bg: 'bg-gray-50' },
            { name: 'Tables', href: '/tables', icon: Table2, color: 'text-gray-600', bg: 'bg-gray-100' },
            { name: 'Filters', href: '/filters', icon: Filter, color: 'text-rose-500', bg: 'bg-rose-50' },
            { name: 'Stats', href: '/stats', icon: BarChart3, color: 'text-violet-600', bg: 'bg-violet-50' },
            { name: 'Detail Lists', href: '/detail-lists', icon: Indent, color: 'text-cyan-500', bg: 'bg-cyan-50' },
            { name: 'Media', href: '/media', icon: Image, color: 'text-amber-500', bg: 'bg-amber-50' },
            { name: 'Detail Lists', href: '/detail-lists', icon: Indent, color: 'text-cyan-500', bg: 'bg-cyan-50' },
            { name: 'Accordion', href: '/accordion', icon: List, color: 'text-blue-500', bg: 'bg-blue-50' },
            { name: 'Dividers', href: '/dividers', icon: SeparatorHorizontal, color: 'text-slate-500', bg: 'bg-slate-50' },
            { name: 'Progress Bars', href: '/progress-bars', icon: BarChart3, color: 'text-cyan-600', bg: 'bg-cyan-50' },
            { name: 'Empty States', href: '/empty-states', icon: Box, color: 'text-zinc-500', bg: 'bg-zinc-50' },
            { name: 'Modals', href: '/modals', icon: PanelTop, color: 'text-rose-500', bg: 'bg-rose-50' },
        ]
    },
    {
        title: "Application UI",
        items: [
            { name: 'Authentication', href: '/auth', icon: Lock, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { name: 'Dashboards', href: '/dashboards', icon: AppWindow, color: 'text-blue-600', bg: 'bg-blue-50' },
            { name: 'Settings', href: '/settings', icon: Settings, color: 'text-slate-600', bg: 'bg-slate-50' },
        ]
    },
    {
        title: "Marketing",
        items: [
            { name: 'Announcements', href: '/announcements', icon: Megaphone, color: 'text-orange-500', bg: 'bg-orange-50' },
            { name: 'Blog Sections', href: '/blog-sections', icon: Newspaper, color: 'text-pink-500', bg: 'bg-pink-50' },
            { name: 'Pricing', href: '/pricing', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { name: 'Contact Sections', href: '/contact-sections', icon: Mail, color: 'text-teal-500', bg: 'bg-teal-50' },
            { name: 'CTAs', href: '/ctas', icon: Bell, color: 'text-yellow-500', bg: 'bg-yellow-50' },
            { name: 'Team Sections', href: '/team-sections', icon: Users, color: 'text-blue-700', bg: 'bg-blue-50' },
            { name: 'Reviews', href: '/reviews', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-50' },
            { name: 'Newsletter', href: '/newsletter', icon: Mail, color: 'text-green-500', bg: 'bg-green-50' },
            { name: 'FAQs', href: '/faqs', icon: HelpCircle, color: 'text-lime-500', bg: 'bg-lime-50' },
            { name: 'Logo Clouds', href: '/logo-clouds', icon: UploadCloud, color: 'text-gray-400', bg: 'bg-gray-50' },
            { name: 'Hero Sections', href: '/hero-sections', icon: MonitorPlay, color: 'text-purple-600', bg: 'bg-purple-50' },
            { name: 'Feature Sections', href: '/feature-sections', icon: LayoutTemplate, color: 'text-fuchsia-500', bg: 'bg-fuchsia-50' },
            { name: 'Headers', href: '/headers', icon: PanelTop, color: 'text-sky-600', bg: 'bg-sky-50' },
            { name: 'Footers', href: '/footers', icon: PanelBottom, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ]
    },
    {
        title: "Ecommerce",
        items: [
            { name: 'Product Cards', href: '/product-cards', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { name: 'Shopping Carts', href: '/shopping-carts', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { name: 'Product Overviews', href: '/product-overviews', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50' },
            { name: 'Category Previews', href: '/category-previews', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        ]
    }
]
