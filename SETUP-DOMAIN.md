# ruangbimbing.my.id — situs pendukung produksi

Sumber halaman disalin dari repository milik pengguna
`r4hm4tD3ddy/sistem-asistensi-gis-diagnostic`, commit `d80ee58`.
Repository terpisah ini menyiapkan hostname baru tanpa mengubah canonical
GitHub Pages atau JavaScript login yang sedang dipakai produksi.

| Path | Isi |
|---|---|
| `/` dan `/aplikasi/` | Informasi aplikasi dan tautan portal Apps Script produksi |
| `/privasi/` | Penggunaan data, penyimpanan dan pencabutan koneksi |
| `/ketentuan/` | Ketentuan penggunaan |
| `/login/` | Salinan login GIS; script identik sumber, belum dialihkan dari aplikasi |

Nama aplikasi tetap Sistem Pembimbingan Tugas Akhir. Domain tidak otomatis
mengubah nama/brand aplikasi, database, Client ID atau callback Drive.

## Domain dan DNS

Pengguna mengonfirmasi domain ruangbimbing.my.id dengan DNS Cloudflare.
Screenshot Search Console menunjukkan kepemilikan berhasil diverifikasi lewat
penyedia domain. TXT Google terdeteksi pada DNS publik2 November2026; jangan
menghapus record ownership tersebut.

Source situs berisi CNAME ruangbimbing.my.id, `.nojekyll`, HTML serta CSS statis.
GitHub Pages dikonfigurasi dari branch main/root. CNAME dalam source ini relevan
untuk branch publishing, berbeda dari situs login lama yang menggunakan workflow.
Pengikatan hostname harus dikonfirmasi di Pages sebelum pengguna mengarahkan DNS.

Record web yang disiapkan, belum dianggap terpasang hanya dari dokumen ini:

| Type | Name | Content | Proxy | TTL |
|---|---|---|---|---|
| A | @ | 185.199.108.153 | DNS only | Auto |
| A | @ | 185.199.109.153 | DNS only | Auto |
| A | @ | 185.199.110.153 | DNS only | Auto |
| A | @ | 185.199.111.153 | DNS only | Auto |
| CNAME | www | r4hm4td3ddy.github.io | DNS only | Auto |

Setelah record terlihat, periksa Pages/DNS/certificate serta HTTP/HTTPS.
Aktifkan enforce HTTPS setelah sertifikat disetujui. Jangan mengalihkan login
aplikasi ke hostname baru sebelum HTTPS dan Google authorized origin siap.

## Batas rilis ini

Homepage root memakai konten `/aplikasi/` dengan penyesuaian tautan relatif.
Halaman privasi/ketentuan/CSS serta isi script login identik sumber.
Tidak memuat token, Secret, database atau form baru pada halaman informasi.
Tidak mengubah Apps Script SERVER296/AUTH297 atau situs login lama.
Pemeriksaan berupa source/tautan dan metadata publikasi, bukan tes/login/OAuth.
Pengaturan origin/login dan Branding Google dilakukan setelah domain/HTTPS siap.
Keberhasilan DNS/sertifikat/publikasi harus dicatat dari hasil aktual, bukan
disimpulkan dari keberadaan file CNAME atau screenshot ownership Google saja.

Source aplikasi serta checkpoint lintas chat:
https://github.com/r4hm4tD3ddy/sistem-asistensi-skripsi

Acuan DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
