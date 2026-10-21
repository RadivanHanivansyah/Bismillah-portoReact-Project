import html from "../assets/HTML5.svg";
import css from "../assets/CSS3.svg";
import tailwind from "../assets/Tailwind CSS.svg";
import javascript from "../assets/JavaScript.svg";
import reactJS from "../assets/React.svg";
import api from "../assets/rest-api-icon.svg"
import zustand from "../assets/zustand-original.svg"

const data = [
    {
        id: Math.floor( Date.now() + Math.random() * 10 ),
        title: "Movie App",
        description: "Aplikasi web untuk menampilkan dan mengelola data film dengan antarmuka interaktif. Proyek ini berfokus pada penggunaan React, pengelolaan state, dan integrasi API.",
        about: "Movie App adalah aplikasi web berbasis React yang dirancang untuk menampilkan dan mengelola data film dalam antarmuka yang interaktif. Proyek ini dikembangkan untuk mempraktikkan pengembangan aplikasi frontend menggunakan komponen React, pengelolaan state, dan integrasi API.",
        goal: [
            "Menerapkan konsep React dalam membangun aplikasi berbasis komponen",
            "Memahami pengambilan dan pengolahan data film dari API",
            "Melatih pengelolaan state dan interaksi pengguna",
            "Membangun antarmuka yang responsif dan mudah digunakan"
        ],
        technology: [
            {
                icon: reactJS,
                nameTechnology: "React Js"
            },
            {
                icon: tailwind,
                nameTechnology: "Tailwind Css"
            },
            {
                icon: javascript,
                nameTechnology: "JavaScript"
            },
            {
                icon: api,
                nameTechnology: "TMDB API"
            },
            {
                icon: zustand,
                nameTechnology: "Zustand"
            }
        ],
        features: [
            "Menampilkan daftar film beserta informasi film tersebut",
            "Menyimpan, dan mengelola data di dalam State Management",
            "Mengelola data film melalui operasi tambah, edit, dan hapus (CRUD)",
            "Menyajikan antarmuka dengan komponen yang dapat digunakan kembali",
            "Menampilkan informasi film dalam format card"
        ],
        challenge: [
            "Mengelola data di dalam State Management agar bisa digunakan di dalam component React Js",
            "Integrasi api, dan mengelola api di dalam dalam component React Js",
            "Membuat Fungsi CRUD untuk memanipulasi data api",
            "Membuat tampilan yang responsif"
        ],
        demo: "https://movie-app-react-version.vercel.app/",
        github: "https://github.com/RadivanHanivansyah/Movie-App-React-Version"
    },
    {
        id: Math.floor( Date.now() + Math.random() * 10 ),
        title: "Pokemon Api React",
        description: "Aplikasi web untuk menampilkan data-data pokemon dengan integrasi & mengelola api pokemon ke dalam aplikasi",
        about: "Pokemon Api React adalah aplikasi web menggunakan React yang dibuat untuk menampilkan data api pokemon ke dalam tampilan website. Proyek ini bertujuan menampilkan page website yang dibuat dengan component-component pada React js, mengelola data dengan state, serta mengintegrasikan dan mengelola api dengan menggunakan axios",
        goal: [
            "Membangun tampilan page website yang dipecah menjadi bagian kecil dengan component React Js",
            "Memahami Inetgrasi dan mengelola data pokemon dari API, serta menampilkannya pada page website",
            "Melatih pengelolaan data menggunakan state antar component seperti menerapkan 'lifiting state up'",
            "Membangun antarmuka yang responsif dan mudah digunakan"
        ],
        technology: [
            {
                icon: reactJS,
                nameTechnology: "React Js"
            },
            {
                icon: tailwind,
                nameTechnology: "Tailwind Css"
            },
            {
                icon: javascript,
                nameTechnology: "JavaScript"
            },
            {
                icon: api,
                nameTechnology: "Poke Api"
            }
        ],
        features: [
            "Menampilkan nama-nama pokemon serta menampilkan data pokemon yang diklik user",
            "Mengimplementasi fitur search guna mencari nama pokemon yang diketik oleh user",
            "Menampilkan website yang dibangun dengan component-component React Js",
            "Menampilkan detail pokemon dalam bentuk card",
            "Tampilan website yang responsif"
        ],
        challenge: [
            "Membuat tampilan yang responsif",
            "Mengelola state yang sama antar component",
            "Integrasi api, dan mengelola api di dalam dalam component React Js",
            "Membuat Fungsi Search, dan menampilkan detail pokemon yang diklik user"
        ],
        demo: "https://pokemon-api-application.vercel.app/",
        github: "https://github.com/RadivanHanivansyah/Pokemon-Api-React"
    },
    {
        id: Math.floor( Date.now() + Math.random() * 10 ),
        title: "Simple Todo List",
        description: "Aplikasi web sederhana untuk mencatat, mengelola, dan menyelesaikan daftar tugas menggunakan JavaScript.",
        about: "Simple Todo List adalah aplikasi web yang dibuat menggunakan HTML, CSS, dan JavaScript untuk membantu pengguna mengelola daftar tugas sehari-hari. Proyek ini bertujuan untuk memahami manipulasi DOM, pengelolaan data tugas",
        goal: [
            "Membangun aplikasi todo list sederhana menggunakan HTML, CSS, dan JavaScript",
            "Memahami manipulasi DOM untuk menambahkan dan mengubah elemen HTML secara dinamis",
            "Melatih penggunaan event handling untuk menangani interaksi pengguna",
            "Membangun antarmuka yang sederhana dan mudah digunakan"
        ],
        technology: [
            {
                icon: html,
                nameTechnology: "HTML5"
            },
            {
                icon: css,
                nameTechnology: "CSS3"
            },
            {
                icon: javascript,
                nameTechnology: "JavaScript"
            }
        ],
        features: [
            "Menambahkan tugas baru ke dalam daftar todo",
            "Mengelola daftar tugas melalui interaksi pengguna",
            "Menerapkan manipulasi DOM menggunakan JavaScript",
            "Menangani event untuk menjalankan fungsi aplikasi",
            "Menampilkan antarmuka aplikasi todo list yang sederhana"
        ],
        challenge: [
            "Memahami manipulasi DOM untuk memperbarui tampilan secara dinamis",
            "Mengelola data tugas berdasarkan interaksi pengguna",
            "Menerapkan event handling pada elemen-elemen website",
            "Menyusun struktur HTML dan CSS agar aplikasi mudah digunakan"
        ],
        demo: "https://radivanhanivansyah.github.io/to-do-list-javascript-basic/",
        github: "https://github.com/RadivanHanivansyah/to-do-list-javascript-basic"
    },
    {
        id: Math.floor( Date.now() + Math.random() * 10 ),
        title: "Website Anime Slider",
        description: "Website bertema anime dengan tampilan slider interaktif untuk menampilkan gambar dan informasi anime dalam antarmuka yang menarik.",
        about: "Website Anime Slider adalah proyek website yang berfokus pada pembuatan tampilan visual bertema anime dengan fitur slider. Proyek ini dibuat untuk melatih kemampuan membangun antarmuka website menggunakan HTML, CSS, dan JavaScript, termasuk mengatur layout, menampilkan konten visual, serta menerapkan interaksi slider untuk meningkatkan pengalaman pengguna.",
        goal: [
            "Membangun website bertema anime dengan tampilan visual yang menarik",
            "Memahami penggunaan HTML dan CSS untuk menyusun layout serta menata elemen website",
            "Menerapkan JavaScript untuk membuat interaksi slider pada halaman website",
            "Melatih kemampuan membuat antarmuka yang interaktif dan mudah digunakan"
        ],
        technology: [
            {
                icon: html,
                nameTechnology: "HTML5"
            },
            {
                icon: css,
                nameTechnology: "CSS3"
            },
            {
                icon: javascript,
                nameTechnology: "JavaScript"
            }
        ],
        features: [
            "Menampilkan konten visual bertema anime",
            "Menerapkan slider untuk menampilkan konten secara bergantian",
            "Menggunakan JavaScript untuk mengatur interaksi slider",
            "Menyusun tampilan website dengan desain visual yang menarik"
        ],
        challenge: [
            "Membuat tampilan slider yang interaktif menggunakan JavaScript",
            "Mengatur layout dan penempatan elemen visual agar terlihat menarik",
            "Mengelola interaksi pengguna pada slider",
            "Menyesuaikan desain website agar konten dapat ditampilkan dengan baik"
        ],
        demo: "https://radivanhanivansyah.github.io/website-anime-slider/",
        github: "https://github.com/RadivanHanivansyah/website-anime-slider"
    }
]