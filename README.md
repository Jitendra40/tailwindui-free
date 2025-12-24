# Free Open Source Tailwind CSS v4 Components

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue.js-3.x-green.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8.svg)

A collection of free, open-source UI components built with **Vue 3** and **Tailwind CSS v4**. Free Tailwind CSS v4 components for your next project, designed to enhance your web development with the latest features and styles 🚀.

**Live Demo:** [https://tailui.in/](https://tailui.in/)

## 🚀 Features

- **Tailwind CSS v4**: Built using the latest features of the new engine.
- **Vue 3 Composition API**: Modern, reactive components using `<script setup>`.
- **Fully Responsive**: All components are optimized for mobile, tablet, and desktop.
- **Dark Mode Ready**: (In progress) Designed with dark mode in mind.
- **No Dependencies**: Just pure Vue and Tailwind (and a router).
- **Copy & Paste**: Designed to be easily copied into your own codebase.

## 🛠️ Tech Stack

- [Vue.js 3](https://vuejs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [PrismJS](https://prismjs.com/) (for syntax highlighting in previews)

## 📦 Installation

This is a component library documentation site. To run it locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jitendra40/tailwindui-free.git
    cd tailwindui-free
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🤝 Contributing

We welcome contributions! This project is open source and community-driven. Whether you want to add new components, fix bugs, or improve documentation, your help is appreciated.

### How to Contribute

1.  **Fork** the repository.
2.  **Clone** your fork locally.
3.  **Create a new branch** for your feature or fix (`git checkout -b feature/amazing-new-component`).
4.  **Add your component**:
    *   **1. Create the Component:**
        Create your new Vue component in `src/components/MyCategory/MyComponent.vue`.
        ```vue
        <template>
          <div class="p-6 bg-white rounded-xl shadow-sm ring-1 ring-gray-900/5">
            <h2 class="text-lg font-semibold text-gray-900">New Component</h2>
          </div>
        </template>
        ```

    *   **2. Create the Preview Page:**
        Create `src/pages/MyCategory.vue` to showcase your component.
        ```vue
        <script setup lang="ts">
        import MyComponent from '@/components/MyCategory/MyComponent.vue'
        </script>
        <template>
           <MyComponent />
        </template>
        ```

    *   **3. Register the Route:**
        Add the route in `src/router/index.ts`.
        ```ts
        const MyCategory = () => import('@/pages/MyCategory.vue')
        // ... inside routes array:
        { path: '/my-category', component: MyCategory, meta: { layout: 'Default' } },
        ```

    *   **4. Update Sidebar Navigation:**
        Add your new page to `src/lib/navigation.ts` so it appears in the sidebar.
        ```ts
        { 
          name: 'My Category', 
          href: '/my-category', 
          icon: YourIcon, 
          color: 'text-indigo-500', 
          bg: 'bg-indigo-50' 
        },
        ```
5.  **Commit** your changes (`git commit -m 'Add Amazing New Component'`).
6.  **Push** to your branch (`git push origin feature/amazing-new-component`).
7.  **Open a Pull Request**.

### Component Guidelines

- Use semantic HTML.
- Ensure the component is responsive.
- Do not use external CSS if possible; rely on Tailwind utilities.
- Keep the design "premium" and consistent with the existing aesthetic.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

