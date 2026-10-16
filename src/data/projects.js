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
    }
]