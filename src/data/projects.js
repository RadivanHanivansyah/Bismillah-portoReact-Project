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
                nameTechonology: "React Js"
            },
            {
                icon: tailwind,
                nameTechonology: "Tailwind Css"
            },
            {
                icon: javascript,
                nameTechonology: "JavaScript"
            },
            {
                icon: api,
                nameTechonology: "TMDB API"
            },
            {
                icon: zustand,
                nameTechonology: "Zustand"
            }
        ],
        features: [
            "Menampilkan daftar film beserta informasi film tersebut",
            "Menyimpan, dan mengelola data di dalam State Management",
            "Mengelola data film melalui operasi tambah, edit, dan hapus (CRUD)",
            "Menyajikan antarmuka dengan komponen yang dapat digunakan kembali",
            "Menampilkan informasi film dalam format kartu"
        ],
        challenge: [
            "Mengelola data di dalam State Management agar bisa digunakan di dalam component React Js",
            "Integrasi api, dan mengelola api di dalam dalam component React Js",
            "Membuat Fungsi CRUD untuk memanipulasi data api",
            "Membuat tampilan yang responsif"
        ],
        demo: "https://movie-app-react-version.vercel.app/"
    }
]